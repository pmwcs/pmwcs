import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { useFloatingLabelFoundation } from './foundation';
import { createComponent, mergeRefs } from '@rmwc/base';
export var FloatingLabel = createComponent(function FloatingLabel(props, ref) {
    var rootEl = useFloatingLabelFoundation(props).rootEl;
    var shake = props.shake, float = props.float, apiRef = props.apiRef, rest = __rest(props, ["shake", "float", "apiRef"]);
    return (React.createElement("span", __assign({}, rootEl.props(__assign(__assign({}, rest), { className: 'mdc-floating-label' })), { ref: mergeRefs(rootEl.setRef, ref) })));
});
