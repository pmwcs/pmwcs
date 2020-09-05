import { useRef, useEffect, useCallback } from 'preact/hooks'
import {
  MDCModalDrawerFoundation,
  MDCDismissibleDrawerFoundation
} from '@material/drawer'
import {
  useFoundation,
  focusTrapFactory,
  triggerWindowResize
} from '@pmwcs/base'

const useDrawerFoundationFactory = (MDCConstructor) =>
  function useDrawerFoundation (props) {
    const focusTrapRef = useRef()

    const { foundation, ...elements } = useFoundation({
      props,
      elements: {
        rootEl: true,
        scrimEl: true
      },
      foundation: ({ rootEl, emit, getProps }) => {
        let previousFocusEl

        const f = new MDCConstructor({
          addClass: (className) => rootEl.ref?.classList.add(className),
          removeClass: (className) => rootEl.ref?.classList.remove(className),
          hasClass: (className) => rootEl.ref?.classList.contains(className),
          elementHasClass: (element, className) =>
            element.classList.contains(className),
          saveFocus: () => {
            previousFocusEl = document.activeElement
          },
          restoreFocus: () => {
            if (
              rootEl.ref &&
              rootEl.ref.contains(document.activeElement) &&
              previousFocusEl
            ) {
              previousFocusEl.focus()
            }
          },
          focusActiveNavigationItem: () => {
            const activeNavItemEl = rootEl.ref?.querySelector(
              '.mdc-list-item--activated'
            )
            if (activeNavItemEl) {
              activeNavItemEl.focus()
            }
          },
          notifyClose: () => {
            emit('onClose', {}, true /* shouldBubble */);
          },
          notifyOpen: () => {
            emit('onOpen', {}, true /* shouldBubble */)
          },
          trapFocus: () => {
            try {
              focusTrapRef.current?.trapFocus()
            } catch (err) {}
          },
          releaseFocus: () => {
            try {
              focusTrapRef.current?.releaseFocus()
            } catch (err) {}
          }
        })

        // Fixes a very annoying issue where the menu isn't stateful
        // this allows us to keep the menu open based on its controlled prop.
        const existingClose = f.close.bind(f)
        const newClose = () => {
          emit('onClose', {})

          setTimeout(() => {
            if (!getProps().open) {
              existingClose()
            }
          })
        }
        f.close = newClose

        return f
      }
    })

    const { rootEl, scrimEl } = elements

    useEffect(() => {
      if (rootEl.ref) {
        focusTrapRef.current = focusTrapFactory(rootEl.ref)
      }
    }, [rootEl.ref])

    useEffect(() => {
      props.open ? foundation.open() : foundation.close()
    }, [props.open, foundation])

    const handleScrimClick = useCallback(() => {
      foundation.handleScrimClick?.()
    }, [foundation])

    const handleKeyDown = useCallback(
      (evt) => {
        props.onKeyDown?.(evt)
        foundation.handleKeydown(evt)
      },
      [foundation, props.onKeyDown]
    )

    const handleTransitionEnd = useCallback(
      (evt) => {
        props.onTransitionEnd?.(evt)
        foundation.handleTransitionEnd(evt)
        triggerWindowResize()
      },
      [foundation, props.onTransitionEnd]
    )

    rootEl.setProp('onKeyDown', handleKeyDown, true)
    rootEl.setProp('onTransitionEnd', handleTransitionEnd, true)
    scrimEl.setProp('onClick', handleScrimClick, true)

    return { foundation, ...elements }
  }

export const useDismissableDrawerFoundation = useDrawerFoundationFactory(
  MDCDismissibleDrawerFoundation
)

export const useModalDrawerFoundation = useDrawerFoundationFactory(
  MDCModalDrawerFoundation
)
