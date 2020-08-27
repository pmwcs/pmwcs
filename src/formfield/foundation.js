import { MDCFormFieldFoundation } from '@material/form-field'
import { useFoundation } from '@pmwcs/base'

export const useFormfieldFoundation = (props) => {
  useFoundation({
    props,
    elements: {},
    foundation: () =>
      // For PMWCS, the entire foundation is a noop. Interactions and ripples are controlled
      // on the components themselves
      new MDCFormFieldFoundation({
        registerInteractionHandler: () => {},
        deregisterInteractionHandler: () => {},
        activateInputRipple: () => {},
        deactivateInputRipple: () => {}
      })
  })
}
