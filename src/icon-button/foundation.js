import { useEffect } from 'preact/hooks'
import { useFoundation } from '@pmwcs/base'
import { MDCIconButtonToggleFoundation } from '@material/icon-button'

export function useIconButtonFoundation (props) {
  const { foundation, ...elements } = useFoundation({
    props,
    elements: { rootEl: true },
    foundation: ({ rootEl, emit }) => {
      return new MDCIconButtonToggleFoundation({
        addClass: (className) => rootEl.addClass(className),
        removeClass: (className) => rootEl.removeClass(className),
        hasClass: (className) => rootEl.hasClass(className),
        setAttr: (attrName, attrValue) =>
          rootEl.setProp(attrName, attrValue),
        notifyChange: (evtData) => emit('onChange', evtData)
      })
    }
  })

  const { rootEl } = elements
  const isOn = props.checked !== undefined ? props.checked : foundation.isOn()

  useEffect(() => {
    if (isOn !== foundation.isOn()) {
      foundation.toggle(isOn)
    }
  }, [foundation, isOn])

  const handleClick = (evt) => {
    props.onClick?.(evt)
    foundation.handleClick()
  }
  rootEl.setProp('onClick', handleClick, true)

  return { isOn, foundation, ...elements }
};
