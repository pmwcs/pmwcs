import { useCallback, useRef, useEffect } from 'preact/hooks'

import { useFoundation, emptyClientRect, matches, applyPassive } from '@pmwcs/base'

import { MDCRippleFoundation, util } from '@material/ripple'

export const useRippleFoundation = (props) => {
  const isTouched = useRef(false)

  const { foundation, ...elements } = useFoundation({
    props,
    elements: {
      rootEl: true,
      surfaceEl: true
    },
    foundation: ({ rootEl, surfaceEl, getProps }) => {
      return new MDCRippleFoundation({
        browserSupportsCssVars: () => util.supportsCssVariables(window),
        isUnbounded: () => !!getProps().unbounded,
        isSurfaceActive: () => {
          if (rootEl.ref) {
            return matches(rootEl.ref, ':active')
          }
          return false
        },
        isSurfaceDisabled: () => !!getProps().disabled,
        addClass: (className) => {
          surfaceEl.addClass(className)
        },
        removeClass: (className) => {
          surfaceEl.removeClass(className)
        },
        containsEventTarget: (target) => !!rootEl.ref && rootEl.ref.contains(target),
        registerInteractionHandler: () => {},
        deregisterInteractionHandler: () => {},
        registerDocumentInteractionHandler: (
          evtType,
          handler
        ) =>
          document.documentElement.addEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        deregisterDocumentInteractionHandler: (
          evtType,
          handler
        ) =>
          document.documentElement.removeEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        registerResizeHandler: (
          handler
        ) => window.addEventListener('resize', handler),
        deregisterResizeHandler: (
          handler
        ) => window.removeEventListener('resize', handler),
        updateCssVariable: (varName, value) =>
          surfaceEl.setStyle(varName, value),
        computeBoundingRect: () =>
          rootEl.ref ? rootEl.ref.getBoundingClientRect() : emptyClientRect,
        getWindowPageOffset: () => ({
          x: window.pageXOffset,
          y: window.pageYOffset
        })
      })
    }
  })

  const { rootEl } = elements

  const activateRipple = useCallback(
    (evt) => {
      // https://reactjs.org/docs/events.html#event-pooling
      evt.persist()
      foundation.activate(evt)
    },
    [foundation]
  )

  const deactivateRipple = useCallback(
    (evt) => {
      // https://reactjs.org/docs/events.html#event-pooling
      evt.persist()
      foundation.deactivate()
    },
    [foundation]
  )

  const handleFocus = useCallback(
    (evt) => {
      props.onFocus?.(evt)
      foundation.handleFocus()
    },
    [foundation, props.onFocus]
  )

  const handleBlur = useCallback(
    (evt) => {
      props.onBlur?.(evt)
      foundation.handleBlur()
    },
    [foundation, props.onBlur]
  )

  const handleMouseDown = useCallback(
    (evt) => {
      props.onMouseDown?.(evt)
      if (!isTouched.current) {
        activateRipple(evt)
      }

      isTouched.current = false
    },
    [props.onMouseDown, activateRipple]
  )

  const handleMouseUp = useCallback(
    (evt) => {
      props.onMouseUp?.(evt)
      deactivateRipple(evt)
    },
    [props.onMouseUp, deactivateRipple]
  )

  const handleTouchStart = useCallback(
    (evt) => {
      isTouched.current = true
      props.onTouchStart?.(evt)
      activateRipple(evt)
    },
    [props.onTouchStart, activateRipple]
  )

  const handleTouchEnd = useCallback(
    (evt) => {
      props.onTouchEnd?.(evt)
      deactivateRipple(evt)
    },
    [props.onTouchEnd, deactivateRipple]
  )

  const handleKeyDown = useCallback(
    (evt) => {
      props.onKeyDown?.(evt)
      activateRipple(evt)
    },
    [props.onKeyDown, activateRipple]
  )

  const handleKeyUp = useCallback(
    (evt) => {
      props.onKeyUp?.(evt)
      deactivateRipple(evt)
    },
    [props.onKeyUp, deactivateRipple]
  )

  rootEl.setProp('onFocus', handleFocus, true)
  rootEl.setProp('onBlur', handleBlur, true)
  rootEl.setProp('onMouseDown', handleMouseDown, true)
  rootEl.setProp('onMouseUp', handleMouseUp, true)
  rootEl.setProp('onTouchStart', handleTouchStart, true)
  rootEl.setProp('onTouchEnd', handleTouchEnd, true)
  rootEl.setProp('onKeyDown', handleKeyDown, true)
  rootEl.setProp('onKeyUp', handleKeyUp, true)

  useEffect(() => {
    rootEl.setRef(props.domNode)
  }, [rootEl, props.domNode])

  useEffect(() => {
    foundation.setUnbounded(!!props.unbounded)
  }, [props.unbounded, foundation])

  useEffect(() => {
    props.disabled && foundation.handleBlur()
  }, [props.disabled, foundation])

  return { ...elements }
}
