import { useFoundation } from '@pmwcs/base'
import { MDCTextFieldIconFoundation } from '@material/textfield'

export const useTextFieldIconFoundation = (props) => {
  const { foundation, ...elements } = useFoundation({
    props,
    elements: { rootEl: true },
    api: ({
      foundation
    }) => {
      return {
        getFoundation: () => foundation
      }
    },
    foundation: ({ rootEl, emit }) => {
      const f = new MDCTextFieldIconFoundation({
        getAttr: (attr) => rootEl.getProp(attr),
        setAttr: (attr, value) =>
          rootEl.setProp(attr, value),
        removeAttr: (attr) => rootEl.removeProp(attr),
        setContent: (content) => {
          rootEl.setProp('icon', content)
        },
        registerInteractionHandler: (
          evtType,
          handler
        ) => rootEl.addEventListener(evtType, handler),
        deregisterInteractionHandler: (
          evtType,
          handler
        ) => rootEl.removeEventListener(evtType, handler),
        notifyIconAction: () => emit('onClick', {}, true)
      })

      return f
    }
  })

  return { ...elements }
}
