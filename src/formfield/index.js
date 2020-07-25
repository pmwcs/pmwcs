import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { Tag, useClassNames, createComponent } from '@rmwc/base';
import { useFormfieldFoundation } from './foundation';
/** A FormField component. */
export var FormField = createComponent(function FormField(props, ref) {
    useFormfieldFoundation(props);
    var alignEnd = props.alignEnd, foundationRef = props.foundationRef, rest = __rest(props, ["alignEnd", "foundationRef"]);
    var className = useClassNames(props, [
        'mdc-form-field',
        {
            'mdc-form-field--align-end': props.alignEnd
        }
    ]);
    return React.createElement(Tag, __assign({}, rest, { ref: ref, className: className }));
});
