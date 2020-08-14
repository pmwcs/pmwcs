import { useCallback, useState, useRef, useEffect } from 'preact/hooks'

import { useFoundation, raf } from '@pmwc/base'
import {
  MDCSelectFoundation,
  cssClasses
} from '@material/select'

export const useSelectFoundation = (props) => {
  const [notchWidth, setNotchWidth] = useState()
  const [lineRippleActive, setLineRippleActive] = useState(false)
  const [lineRippleCenter, setLineRippleCenter] = useState(0)
  const [floatLabel, setFloatLabel] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedTextContent, setSelectedTextContent] = useState('')

  const selectedIndex = useRef(-1)

  const floatingLabel = useRef()
  const setFloatingLabel = (api) => {
    floatingLabel.current = api
  }

  const menu = useRef()
  const setMenu = (api) => {
    menu.current = api
  }

  const anchor = useRef(null)
  const setAnchor = (el) => {
    anchor.current = el
  }

  const leadingIcon = useRef()
  const setLeadingIcon = (api) => {
    leadingIcon.current = api
  }

  const nativeControl = useRef()
  const setNativeControl = (el) => {
    nativeControl.current = el
  }

  const silenceChange = useRef(false)

  const { foundation, ...elements } = useFoundation({
    props,
    elements: { rootEl: true, selectedTextEl: true },
    foundation: ({ rootEl, selectedTextEl, getProps, emit }) => {
      const isNative = () => !getProps().enhanced

      const getSelectAdapterMethods = () => {
        const items = () =>
          (isNative()
            ? Array.apply(
              null,
              nativeControl.current?.options
            )
            : menu.current?.items()) || []

        const getValue = (el) => {
          return (
            el.getAttribute('data-value') || el.getAttribute('value') || ''
          )
        }

        return {
          getSelectedMenuItem: () => {
            if (isNative()) {
              return nativeControl.current?.selectedOptions[0] || null
            }

            if (selectedIndex.current === -1) {
              return (
                menu.current
                  ?.getSurfaceElement()
                  ?.querySelector('.mdc-list-item--activated') || null
              )
            } else {
              return items()[selectedIndex.current]
            }
          },
          getMenuItemAttr: (menuItem, attr) => {
            if (attr === 'data-value') {
              return getValue(menuItem)
            }

            return menuItem.getAttribute(attr)
          },
          setSelectedText: (text) => {
            setSelectedTextContent(text)
          },
          isSelectedTextFocused: () =>
            !!(
              selectedTextEl.ref &&
              selectedTextEl.ref === document.activeElement
            ),
          getSelectedTextAttr: (attr) => selectedTextEl.getProp(attr),
          setSelectedTextAttr: (attr, value) => {
            if (attr === 'tabindex') {
              // Fixes bug 595 https://github.com/jamesmfriedman/pmwc/issues/595.
              // Native selects don't need tabIndexes on the root element
              if (isNative()) return
              attr = 'tabIndex'
            }
            selectedTextEl.setProp(attr, value)
          },
          openMenu: () => {
            setMenuOpen(true)
          },
          closeMenu: () => {
            setMenuOpen(false)
          },
          getAnchorElement: () => anchor.current,
          setMenuAnchorElement: (anchorEl) => setAnchor(anchorEl),
          setMenuAnchorCorner: (anchorCorner) =>
            menu.current?.setAnchorCorner(anchorCorner),
          setMenuWrapFocus: (/* wrapFocus */) => {
            // (this.menu_.wrapFocus = wrapFocus)
          },

          setAttributeAtIndex: (...args) =>
            menu.current?.setAttributeForElementIndex(...args),
          removeAttributeAtIndex: (index, attributeName) =>
            menu.current?.items()[index].removeAttribute(attributeName),
          focusMenuItemAtIndex: (...args) =>
            menu.current?.focusItemAtIndex(...args),
          getMenuItemCount: () => {
            return items().length
          },
          getMenuItemValues: () => items().map(getValue) || [],
          getMenuItemTextAtIndex: (index) => {
            return items()[index].textContent
          },

          addClassAtIndex: (...args) =>
            menu.current?.addClassToElementIndex(...args),
          removeClassAtIndex: (...args) =>
            menu.current?.removeClassFromElementAtIndex(...args)
        }
      }

      const getCommonAdapterMethods = () => {
        return {
          addClass: (className) => {
            rootEl.addClass(className)
          },
          removeClass: (className) => {
            rootEl.removeClass(className)
          },
          hasClass: (className) => rootEl.hasClass(className),
          isRtl: () =>
            rootEl.ref &&
            window
              .getComputedStyle(rootEl.ref)
              .getPropertyValue('direction') === 'rtl',
          setRippleCenter: (normalizedX) => {
            setLineRippleCenter(normalizedX)
          },
          activateBottomLine: () => setLineRippleActive(true),
          deactivateBottomLine: () => setLineRippleActive(false),
          notifyChange: (value) => {
            if (!silenceChange.current) {
              emit(
                'onChange',
                {
                  index: selectedIndex.current,
                  value
                },
                true
              )
            }
          }
        }
      }

      const getOutlineAdapterMethods = () => {
        return {
          hasOutline: () => !!getProps().outlined,
          notchOutline: (labelWidth) => {
            setNotchWidth(labelWidth)
          },
          closeOutline: () => {
            setNotchWidth(undefined)
          }
        }
      }

      const getLabelAdapterMethods = () => {
        return {
          hasLabel: () => !!getProps().label,
          floatLabel: (shouldFloat) => {
            setFloatLabel(shouldFloat)
          },
          getLabelWidth: () => {
            return floatingLabel.current?.getWidth() || 0
          }
        }
      }

      const getFoundationMap = () => {
        return {
          leadingIcon:
            (leadingIcon.current && leadingIcon.current.getFoundation()) ||
            undefined
        }
      }

      const f = new MDCSelectFoundation(
        {
          ...getSelectAdapterMethods(),
          ...getCommonAdapterMethods(),
          ...getOutlineAdapterMethods(),
          ...getLabelAdapterMethods()
        },
        getFoundationMap()
      )

      // This foundation requires a bit of monkey patching
      // in order to get placeholders working correctly
      const adapter = f.adapter

      // @ts-ignore private override
      f.updateLabel = () => {
        const doWork = () => {
          const value = f.getValue()

          // This is the line we have to override to work with placeholders
          // we need to consider haveing a placeholder as a valid value
          const optionHasValue = !!getProps().placeholder || value.length > 0

          if (adapter.hasLabel()) {
            f.notchOutline(optionHasValue)

            if (!adapter.hasClass(cssClasses.FOCUSED)) {
              adapter.floatLabel(optionHasValue)
            }
          }
        }

        doWork()
      }

      // This is only set one time in the constructor which
      // is before React even has a chance to render...
      // Make it a dynamic getter
      Object.defineProperty(f, 'menuItemValues_', {
        get: () => {
          return adapter.getMenuItemValues()
        }
      })

      // We have to add some logic after the original init function
      // in order to sync placeholder labels
      // Also... MDC fires change events on init which is the
      // exact opposite of what we want to happen with normal selects
      const init = f.init.bind(f)
      f.init = () => {
        silenceChange.current = true
        init()

        const placeholder = String(getProps().placeholder || '')
        if (!f.getValue() && placeholder) {
          adapter.setSelectedText(placeholder)
        }
        silenceChange.current = false
      }

      return f
    }
  })

  const { selectedTextEl, rootEl } = elements

  const handleFocus = useCallback(
    (evt) => {
      props.onFocus?.(evt)
      foundation.handleFocus()
    },
    [props.onFocus, foundation]
  )

  const handleBlur = useCallback(
    (evt) => {
      props.onBlur?.(evt)
      foundation.handleBlur()
    },
    [props.onBlur, foundation]
  )

  const handleClick = useCallback(
    (evt) => {
      // Fixes an issue where clicking on the select when it
      // is already opens fires events in an incorrect order.
      // We can't use Reacts menuOpen variable because it is
      // ahead of the actual DOM animation...
      // Not ideal, but no other way currently
      if (rootEl.ref?.querySelector('.mdc-menu-surface--open')) {
        return
      }

      const getNormalizedXCoordinate = (evt) => {
        const targetClientRect = evt.target.getBoundingClientRect()
        const xCoordinate = evt.clientX
        return xCoordinate - targetClientRect.left
      }

      const coord = getNormalizedXCoordinate(evt)
      selectedTextEl.ref && selectedTextEl.ref.focus()
      foundation.handleClick(coord)
    },
    [foundation, selectedTextEl.ref, rootEl.ref]
  )

  const handleKeydown = useCallback(
    (evt) => {
      props.onKeyDown?.(evt)
      foundation.handleKeydown(evt)
    },
    [foundation, props.onKeyDown]
  )

  const handleMenuSelected = useCallback(
    (index) => {
      selectedIndex.current = index
      foundation.handleMenuItemAction(index)
    },
    [foundation]
  )

  const handleMenuOpened = useCallback(() => {
    foundation.handleMenuOpened()
  }, [foundation])

  const handleMenuClosed = useCallback(() => {
    setMenuOpen(false)
    foundation.handleMenuClosed()
  }, [foundation])

  // For controlled selects that are enhanced
  // we need to jump through some checks to see if we need to update the
  // value in our foundation
  const foundationValue = foundation.getValue()

  // Use the value OR the default value if there is no index selected
  const value =
    props.value ??
    (selectedIndex.current === -1 ? props.defaultValue : undefined)

  // Use the length of the options as an indication we need to re-render and
  // check if our value is accurate. This is for situations where people populate the select
  // async. We can't rely on object identity since lots of people pass options inline.
  const optionsLength = Array.isArray(props.options)
    ? props.options.length
    : Object.values(props.options || {}).length

  // MDC Select is a bit of a mess here...
  // - We have to set our value
  // - In the event of a controlled value change, we don't want to fire a change event
  // - Jump through stupid hoops to prevent the event from firing
  useEffect(() => {
    silenceChange.current = true

    if (value !== undefined && value !== foundationValue) {
      // @ts-ignore unsafe private variable access
      const index = foundation.menuItemValues_.indexOf(value)
      selectedIndex.current = index
      foundation.setValue(value || '')
    }
    raf(() => {
      silenceChange.current = false
    })
  }, [value, foundationValue, optionsLength, foundation])

  // Disabled
  useEffect(() => {
    foundation.setDisabled(!!props.disabled)
  }, [foundation, props.disabled])

  // Set anchor
  useEffect(() => {
    rootEl.ref && menu.current?.setAnchorElement(rootEl.ref)
  }, [rootEl.ref])

  return {
    notchWidth,
    menuOpen,
    lineRippleActive,
    lineRippleCenter,
    floatLabel,
    selectedIndex: selectedIndex.current,
    selectedTextContent,
    setFloatingLabel,
    setMenu,
    setLeadingIcon,
    setNativeControl,
    handleFocus,
    handleBlur,
    handleClick,
    handleKeydown,
    handleMenuClosed,
    handleMenuOpened,
    handleMenuSelected,
    ...elements
  }
}
