import {h} from 'preact';
import { EventType, SpecificEventListener } from '@material/base/types';
import { MDCFormFieldFoundation } from '@material/form-field';
import { useFoundation } from '@pmwc/base';

export const useFormfieldFoundation = (props) => {
  useFoundation({
    props,
    elements: {},
    foundation: () =>
      // For RMWC, the entire foundation is a noop. Interactions and ripples are controlled
      // on the components themselves
      new MDCFormFieldFoundation({
        registerInteractionHandler: () => {},
        deregisterInteractionHandler: () => {},
        activateInputRipple: () => {},
        deactivateInputRipple: () => {}
      })
  });
};
