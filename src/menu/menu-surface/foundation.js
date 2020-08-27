import { useCallback, useEffect, useState, useRef } from 'preact/hooks'

import {
  useFoundation,
  closest,
  emptyClientRect,
  raf
} from '@pmwcs/base'
import {
  MDCMenuSurfaceFoundation,
  util
} from '@material/menu-surface'

const toUpperSnake = (str = '') => str.replace(/([A-Z])/, '_$1').toUpperCase()

const getAnchorCornerFromProp = (
  anchorCorner
) => MDCMenuSurfaceFoundation.Corner[toUpperSnake(anchorCorner)]

export const useMenuSurfaceFoundation = (
  props
) => {
  const [open, setOpen] = useState(props.open)
  const firstFocusableElementRef = useRef(null)
  const previousFocusRef = useRef(null)
  const anchorElementRef = useRef(null)
  const timerIdRef = useRef(null)

  const { foundation, ...elements } = useFoundation({
    props,
    elements: { rootEl: true },
    api: ({
      foundation,
      rootEl
    }) => {
      return {
        hoistMenuToBody: () => {
          // this is controlled by the renderToPortal prop
        },
        setAnchorCorner: (corner) => foundation.setAnchorCorner(corner),
        setAnchorElement: (element) =>
          (anchorElementRef.current = element),
        setOpen: (open) => setOpen(open),
        getSurfaceElement: () => rootEl.ref
      }
    },
    foundation: ({ rootEl, getProps, emit }) => {
      const handleBodyClick = (evt) => {
        foundation.handleBodyClick(evt)
      }

      const registerBodyClickListener = () => {
        /**
         * Corrects issue on mobile devices that don't support fast click
         * Causing the menu to close as soon as its open
         **/
        setTimeout(() => {
          document.body.addEventListener('click', handleBodyClick)
          document.body.addEventListener('touchstart', handleBodyClick)
        }, 150)
      }
      const deregisterBodyClickListener = () => {
        document.body.removeEventListener('click', handleBodyClick)
        document.body.removeEventListener('touchstart', handleBodyClick)
      }

      const getFocusAdapterMethods = () => {
        return {
          isFocused: () => document.activeElement === rootEl.ref,
          saveFocus: () => {
            previousFocusRef.current = document.activeElement
          },
          restoreFocus: () => {
            if (rootEl.ref && rootEl.ref.contains(document.activeElement)) {
              if (previousFocusRef.current && previousFocusRef.current.focus) {
                previousFocusRef.current.focus()
              }
            }
          },
          isFirstElementFocused: () =>
            !!firstFocusableElementRef.current &&
            firstFocusableElementRef.current === document.activeElement,
          isLastElementFocused: () =>
            !!firstFocusableElementRef.current &&
            firstFocusableElementRef.current === document.activeElement,
          focusFirstElement: () =>
            !!firstFocusableElementRef.current &&
            firstFocusableElementRef.current.focus &&
            firstFocusableElementRef.current.focus(),
          focusLastElement: () =>
            !!firstFocusableElementRef.current &&
            firstFocusableElementRef.current.focus &&
            firstFocusableElementRef.current.focus()
        }
      }

      const { left, right, top, bottom } = rootEl.ref?.style || {}

      const getDimensionAdapterMethods = () => {
        return {
          getInnerDimensions: () => {
            return {
              width: rootEl.ref ? rootEl.ref.offsetWidth : 0,
              height: rootEl.ref ? rootEl.ref.offsetHeight : 0
            }
          },
          getAnchorDimensions: () => {
            return (
              anchorElementRef.current?.getBoundingClientRect() ||
              emptyClientRect
            )
          },
          getWindowDimensions: () => {
            return {
              width: window.innerWidth,
              height: window.innerHeight
            }
          },
          getBodyDimensions: () => {
            return {
              width: document.body.clientWidth,
              height: document.body.clientHeight
            }
          },
          getWindowScroll: () => {
            return { x: window.pageXOffset, y: window.pageYOffset }
          },
          setPosition: (position) => {
            const getPixel = (style = '') => {
              const num = Number(style.replace(/px$/, ''))
              return isNaN(num) ? undefined : num
            }

            const set = (pos, style) => {
              const px = getPixel(style)
              const sum = (pos !== undefined)
                ? pos + (px || 0)
                : (px || null)
              return sum
            }

            rootEl.setStyle(
              'left',
              set(position.left, left)
            )
            rootEl.setStyle(
              'right',
              set(position.right, right)
            )
            rootEl.setStyle(
              'top',
              set(position.top, top)
            )
            rootEl.setStyle(
              'bottom',
              set(position.bottom, bottom)
            )
          },
          setMaxHeight: (height) => {
            rootEl.setStyle('maxHeight', height)
          }
        }
      }

      const f = new MDCMenuSurfaceFoundation({
        addClass: (className) => {
          rootEl.addClass(className)
        },
        removeClass: (className) => {
          rootEl.removeClass(className)
        },
        hasClass: (className) =>
          className === 'mdc-menu-surface' ? true : rootEl.hasClass(className),
        hasAnchor: () => !!anchorElementRef.current,
        notifyClose: () => {
          deregisterBodyClickListener()
          setOpen(false)
        },
        notifyOpen: () => {
          emit('onOpen', {})
          registerBodyClickListener()
        },
        isElementInContainer: (el) =>
          rootEl.ref === el || (!!rootEl.ref && rootEl.ref.contains(el)),
        isRtl: () =>
          !!rootEl.ref &&
          getComputedStyle(rootEl.ref).getPropertyValue('direction') === 'rtl',
        setTransformOrigin: (origin) => {
          rootEl.setStyle(
            `${util.getTransformPropertyName(window)}-origin`,
            origin
          )
        },
        ...getFocusAdapterMethods(),
        ...getDimensionAdapterMethods()
      })

      // Fixes a very annoying issue where the menu isn't stateful
      // this allows us to keep the menu open based on its controlled prop.
      const existingClose = f.close.bind(f)
      const newClose = (skipRestoreFocus = false) => {
        emit('onClose', {})

        timerIdRef.current = window.setTimeout(() => {
          if (!getProps().open) {
            existingClose(skipRestoreFocus)
          }
        })
      }
      f.close = newClose

      // Didn't have another way to hook into the destroy function...
      const existingDestroy = f.destroy.bind(f)
      f.destroy = () => {
        deregisterBodyClickListener()
        existingDestroy()
      }

      return f
    }
  })

  const { rootEl } = elements

  const handleKeydown = useCallback(
    (evt) => {
      props.onKeyDown?.(evt)
      foundation.handleKeydown(evt)
    },
    [props.onKeyDown, foundation]
  )

  rootEl.setProp('onKeyDown', handleKeydown, true)

  // fixed
  useEffect(() => {
    foundation.setFixedPosition(!!props.fixed)
  }, [props.fixed, foundation])

  // on mount
  useEffect(() => {
    const el = rootEl.ref

    if (el) {
      const anchor = closest(
        el,
        `.${MDCMenuSurfaceFoundation.cssClasses.ANCHOR}`
      )
      anchor && (anchorElementRef.current = anchor)
    }
  }, [rootEl.ref])

  // renderToPortal
  useEffect(() => {
    props.renderToPortal
      ? foundation.setIsHoisted(true)
      : foundation.setIsHoisted(false)

    const autoPosition = () => {
      try {
        // silence this, it blows up loudly occasionally
        // @ts-ignore unsafe private variable access
        foundation.autoposition()
      } catch (err) {}
    }

    // wait an extra frame so that the element is actually
    // done being hoisted and painting. Fixes Issue #453
    const handler = props.renderToPortal ? autoPosition : () => {}

    raf(() => {
      foundation.isOpen() && autoPosition()
    })

    // fix positioning on window resize when renderToPortal is true
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [props.renderToPortal, foundation])

  // anchorCorner
  useEffect(() => {
    const anchorCorner =
      props.anchorCorner && getAnchorCornerFromProp(props.anchorCorner)

    if (anchorCorner !== undefined) {
      foundation.setAnchorCorner(anchorCorner)
      // @ts-ignore unsafe private variable reference
      foundation.dimensions = foundation.adapter.getInnerDimensions()
      // @ts-ignore unsafe private variable reference
      foundation.autoposition()
    }
  }, [props.anchorCorner, foundation])

  // open
  useEffect(() => {
    if (open) {
      const focusableElements = rootEl.ref
        ? rootEl.ref.querySelectorAll(
          MDCMenuSurfaceFoundation.strings.FOCUSABLE_ELEMENTS
        )
        : []
      firstFocusableElementRef.current =
        focusableElements.length > 0 ? focusableElements[0] : null
      foundation.open()
    } else if (foundation.isOpen()) {
      foundation.close()
    }
  }, [open, foundation, rootEl.ref])

  useEffect(() => {
    setOpen(!!props.open)
  }, [props.open])

  // cleanup
  useEffect(() => {
    return () => {
      timerIdRef.current && window.clearTimeout(timerIdRef.current)
    }
  }, [])

  return { ...elements }
}
