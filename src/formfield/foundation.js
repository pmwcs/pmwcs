import { MDCFormFieldFoundation } from '@material/form-field';
import { useFoundation } from '@rmwc/base';
export var useFormfieldFoundation = function (props) {
    useFoundation({
        props: props,
        elements: {},
        foundation: function () {
            // For RMWC, the entire foundation is a noop. Interactions and ripples are controlled
            // on the components themselves
            return new MDCFormFieldFoundation({
                registerInteractionHandler: function (evtType, handler) { },
                deregisterInteractionHandler: function (evtType, handler) { },
                activateInputRipple: function () { },
                deactivateInputRipple: function () { }
            });
        }
    });
};
