import { useEffect, useCallback } from 'preact/hooks'

import { useToggleFoundation } from '@pmwcs/toggleable'
import { useFoundation } from '@pmwcs/base'
import { MDCCheckboxFoundation } from '@material/checkbox'

export const useCheckboxFoundation = (props) => {
  const { renderToggle, toggleRootProps, id } = useToggleFoundation(props)

  const { foundation, ...elements } = useFoundation({
    props,
    elements: {
      rootEl: true,
      checkboxEl: true
    },
    foundation: ({ rootEl, checkboxEl, getProps }) => {
      return new MDCCheckboxFoundation({
        addClass: (className) => rootEl.addClass(className),
        removeClass: (className) => rootEl.removeClass(className),
        setNativeControlAttr: (attr, value) =>
          checkboxEl.setProp(attr, value),
        removeNativeControlAttr: (attr) =>
          checkboxEl.removeProp(attr),
        isIndeterminate: () => !!getProps().indeterminate,
        isChecked: () =>
          getProps().checked !== undefined
            ? !!getProps().checked
            : !!(checkboxEl.ref)?.checked,
        hasNativeControl: () => !!checkboxEl.ref,
        setNativeControlDisabled: (disabled) =>
          checkboxEl.setProp('disabled', disabled),
        forceLayout: () => rootEl.ref?.offsetWidth,
        isAttachedToDOM: () => true
      })
    }
  })

  const { rootEl, checkboxEl } = elements

  // Handles syncing of indeterminate state
  const doSync = useCallback(() => {
    if (checkboxEl.ref) {
      (checkboxEl.ref).indeterminate = Boolean(
        props.indeterminate
      )
    }
    window.requestAnimationFrame(() => {
      foundation.handleChange()
    })
  }, [props.indeterminate, foundation, checkboxEl.ref])

  useEffect(() => {
    doSync()
  }, [doSync])

  // Callback handling
  const handleAnimationEnd = (evt) => {
    props.onAnimationEnd?.(evt)
    foundation.handleAnimationEnd()
  }

  const handleOnChange = (evt) => {
    props.onChange?.(evt)
    doSync()
  }

  rootEl.setProp('onAnimationEnd', handleAnimationEnd, true)
  checkboxEl.setProp('onChange', handleOnChange, true)

  return { foundation, renderToggle, toggleRootProps, id, ...elements }
}
