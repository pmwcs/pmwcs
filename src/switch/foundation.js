import { useEffect } from 'preact/hooks'
import { useToggleFoundation } from '@pmwc/toggleable'
import { useFoundation } from '@pmwc/base'

import { MDCSwitchFoundation } from '@material/switch'

export const useSwitchFoundation = (props) => {
  const { renderToggle, toggleRootProps, id } = useToggleFoundation(props)

  const { foundation, ...elements } = useFoundation({
    props,
    elements: {
      rootEl: true,
      checkboxEl: true
    },
    foundation: ({ rootEl, checkboxEl }) => {
      return new MDCSwitchFoundation({
        addClass: (className) => rootEl.addClass(className),
        removeClass: (className) => rootEl.removeClass(className),
        setNativeControlChecked: (checked) =>
          checkboxEl.setProp('checked', checked),
        setNativeControlDisabled: (disabled) =>
          checkboxEl.setProp('disabled', disabled),
        setNativeControlAttr: (attr, value) =>
          rootEl.setProp(attr, value)
      })
    }
  })

  const { checkboxEl } = elements

  // On mount, sync the values with the native checkbox
  useEffect(() => {
    checkboxEl.ref &&
      foundation.updateCheckedStyling_(
        checkboxEl.ref.checked
      )
    checkboxEl.ref &&
      foundation.setDisabled(checkboxEl.ref.disabled)
  }, [checkboxEl.ref, foundation])

  // sync checked
  useEffect(() => {
    if (props.checked !== undefined) {
      foundation.updateCheckedStyling_(props.checked)
    }
  }, [props.checked, foundation])

  // sync disabled
  useEffect(() => {
    if (props.disabled !== undefined) {
      foundation.setDisabled(props.disabled)
    }
  }, [props.disabled, foundation])

  // Callback handling
  const handleOnChange = (evt) => {
    foundation.handleChange(evt)
    props.onChange?.(evt)
  }

  checkboxEl.setProp('onChange', handleOnChange, true)

  return { foundation, renderToggle, toggleRootProps, id, ...elements }
}
