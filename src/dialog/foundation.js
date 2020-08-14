import { useRef, useEffect, useMemo } from 'preact/hooks'

import { MDCDialogFoundation } from '@material/dialog'
import {
  closest,
  matches,
  useFoundation,
  focusTrapFactory,
  triggerWindowResize
} from '@pmwc/base'

const isScrollable = (el) => {
  return el.scrollHeight > el.offsetHeight
}

const areTopsMisaligned = (els) => {
  const tops = new Set();
  [].forEach.call(els, (el) => tops.add(el.offsetTop))
  return tops.size > 1
}

export const useDialogFoundation = (props) => {
  const focusTrap = useRef()
  const defaultButton = useRef(null)
  const buttons = useRef(null)
  const content = useRef(null)

  const { foundation, ...elements } = useFoundation({
    props,
    elements: {
      rootEl: true
    },
    foundation: ({ rootEl, emit, getProps }) => {
      return new MDCDialogFoundation({
        addClass: (className) => rootEl.addClass(className),
        removeClass: (className) => rootEl.removeClass(className),
        hasClass: (className) => rootEl.hasClass(className),
        addBodyClass: (className) =>
          document.body && document.body.classList.add(className),
        removeBodyClass: (className) =>
          document.body && document.body.classList.remove(className),
        eventTargetMatches: (target, selector) =>
          matches(target, selector),
        trapFocus: () => {
          try {
            // we don't always have an item to focus
            // so we try catch it
            focusTrap.current?.trapFocus()
          } catch (err) {}
        },
        releaseFocus: () => focusTrap.current?.releaseFocus(),
        isContentScrollable: () =>
          !!content.current && isScrollable(content.current),
        areButtonsStacked: () => areTopsMisaligned(buttons.current),
        getActionFromEvent: (evt) => {
          const element = closest(
            evt.target,
            `[${MDCDialogFoundation.strings.ACTION_ATTRIBUTE}]`
          )

          return (
            element?.getAttribute(
              MDCDialogFoundation.strings.ACTION_ATTRIBUTE
            ) || null
          )
        },
        clickDefaultButton: () => {
          defaultButton.current?.click()
        },
        reverseButtons: () => {
          buttons.current?.reverse()

          buttons.current?.forEach(
            (button) =>
              button.parentElement && button.parentElement.appendChild(button)
          )
        },
        notifyOpening: () => emit('onOpen', {}),
        notifyOpened: () => {
          emit('onOpened', {})
          // Fixes an issue with sub components that require
          // Layout for events
          triggerWindowResize()
        },
        notifyClosing: (action) =>
          emit('onClose', action ? { action } : {}),
        notifyClosed: (action) =>
          emit('onClosed', action ? { action } : {}),
        getInitialFocusEl: () =>
          document.querySelector(
            `[${MDCDialogFoundation.strings.INITIAL_FOCUS_ATTRIBUTE}]`
          )
      })
    }
  })

  const { rootEl } = elements

  const handleDocumentKeydown = useMemo(() => {
    const bound = foundation.handleDocumentKeydown.bind(foundation)
    // Wrap the callback in a function that can
    // short circuit the escape key if we are preventing outside dismiss
    return (evt) => {
      if (evt.which === 27 && props.preventOutsideDismiss) return
      return bound(evt)
    }
  }, [foundation, props.preventOutsideDismiss])

  // Set refs on mount
  useEffect(() => {
    // Default button
    defaultButton.current =
      (rootEl.ref &&
        rootEl.ref.querySelector(
          `[${MDCDialogFoundation.strings.BUTTON_DEFAULT_ATTRIBUTE}]`
        )) ||
      null

    // Buttons
    buttons.current =
      rootEl.ref &&
      [].slice.call(
        rootEl.ref.querySelectorAll(MDCDialogFoundation.strings.BUTTON_SELECTOR)
      )

    // Content
    content.current =
      rootEl.ref?.querySelector(MDCDialogFoundation.strings.CONTENT_SELECTOR) ||
      null
  }, [rootEl.ref])

  // Create the focus trap
  useEffect(() => {
    const surface =
      rootEl.ref &&
      rootEl.ref.querySelector(
        MDCDialogFoundation.strings.SURFACE_SELECTOR
      )

    if (surface) {
      focusTrap.current = focusTrapFactory(surface, {
        initialFocusEl: defaultButton.current || undefined
      })
    }
  }, [rootEl.ref])

  // Handle open and close
  useEffect(() => {
    if (props.open) {
      if (!foundation.isOpen()) {
        document.addEventListener('keydown', handleDocumentKeydown)
        foundation.open()
      }
    } else {
      if (foundation.isOpen()) {
        document.removeEventListener('keydown', handleDocumentKeydown)
        foundation.close()
      }
    }
  }, [props.open, foundation, handleDocumentKeydown])

  const handleClick = (evt) => {
    props.onClick?.(evt)
    return foundation.handleClick(evt)
  }

  const handleKeydown = (evt) => {
    props.onKeyDown?.(evt)
    return foundation.handleKeydown(evt)
  }

  rootEl.setProp('onClick', handleClick, true)
  rootEl.setProp('onKeyDown', handleKeydown, true)

  return { foundation, ...elements }
}
