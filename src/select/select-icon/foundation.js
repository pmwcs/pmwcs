import { useFoundation } from '@pmwc/base'
import { MDCSelectIconFoundation } from '@material/select'

export const useSelectIconFoundation = (props) => {
  const { foundation, ...elements } = useFoundation({
    props,
    elements: { rootEl: true },
    api: ({ foundation }) => {
      return {
        getFoundation: () => foundation
      }
    },
    foundation: ({ rootEl, emit }) => {
      return new MDCSelectIconFoundation({
        getAttr: (attr) => rootEl.getProp(attr),
        setAttr: (attr, value) =>
          rootEl.setProp(attr, value),
        removeAttr: (attr) => rootEl.removeProp(attr),
        setContent: (content) => {
          rootEl.ref && (rootEl.ref.textContent = content)
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
    }
  })

  return { ...elements }
}
