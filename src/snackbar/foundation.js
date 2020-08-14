import { useEffect } from 'preact/hooks'

import { MDCSnackbarFoundation, util } from '@material/snackbar'
import { closest, triggerWindowResize, useFoundation } from '@pmwc/base'

/** Monkey patch the foundation to accept dynamic reasons rather than just "action" */
// @ts-ignore
MDCSnackbarFoundation.prototype.handleActionButtonClick = function (
  evt,
  reason
) {
  this.close(reason)
}

export function useSnackbarFoundation (
  props
) {
  const { foundation, ...elements } = useFoundation({
    props,
    elements: {
      rootEl: true,
      surfaceEl: true,
      labelEl: true
    },
    foundation: ({ rootEl, labelEl, emit }) => {
      return new MDCSnackbarFoundation({
        addClass: (className) => rootEl.addClass(className),
        removeClass: (className) => rootEl.removeClass(className),
        announce: () => labelEl.ref && util.announce(labelEl.ref),
        notifyOpening: () => emit('onOpen', {}),
        notifyOpened: () => {
          triggerWindowResize()
          emit('onOpened', {})
        },
        notifyClosing: (reason) => {
          emit('onClose', reason ? { reason } : {})
        },
        notifyClosed: (reason) =>
          emit('onClosed', reason ? { reason } : {})
      })
    }
  })

  const { rootEl, surfaceEl } = elements

  const handleKeyDown = (evt) => {
    props.onKeyDown && props.onKeyDown(evt)
    foundation.handleKeyDown(evt)
  }

  const handleSurfaceClick = (evt) => {
    if (evt.target instanceof Element) {
      let el = evt.target

      const button = closest(el, '.mdc-button')
      if (button) {
        el = button
      }

      if (
        props.dismissesOnAction &&
        el.classList.contains('mdc-snackbar__action')
      ) {
        foundation.handleActionButtonClick(
          evt,
          // @ts-ignore
          el.dataset.mdcSnackbarAction
        )
      } else if (el.classList.contains('mdc-snackbar__dismiss')) {
        foundation.handleActionIconClick(evt)
      }
    }
  }

  rootEl.setProp('onKeyDown', handleKeyDown, true)
  surfaceEl.setProp('onClick', handleSurfaceClick, true)

  // open
  useEffect(() => {
    props.open ? foundation.open() : foundation.close()
  }, [props.open, foundation])

  // timeout
  useEffect(() => {
    if (props.timeout) {
      if (props.timeout === -1) {
        foundation.setTimeoutMs(props.timeout)
      } else {
        // don't tell me what I can cant set my timeout too...
        // directly patch over using setTimeoutMs
        foundation.autoDismissTimeoutMs_ = props.timeout
      }
    }
  }, [props.timeout, foundation])

  return { foundation, ...elements }
}
