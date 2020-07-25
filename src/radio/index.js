import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { Tag, useClassNames, mergeRefs, createComponent } from '@rmwc/base';
import { withRipple } from '@rmwc/ripple';
import { useRadioFoundation } from './foundation';
/** A Radio button component. */
export var Radio = createComponent(function Radio(props, ref) {
    var _a = useRadioFoundation(props), renderToggle = _a.renderToggle, id = _a.id, toggleRootProps = _a.toggleRootProps, rootEl = _a.rootEl;
    var children = props.children, className = props.className, label = props.label, style = props.style, inputRef = props.inputRef, foundationRef = props.foundationRef, rest = __rest(props, ["children", "className", "label", "style", "inputRef", "foundationRef"]);
    var radio = (React.createElement(RadioRoot, __assign({}, rootEl.props(toggleRootProps), { ref: mergeRefs(rootEl.setRef, ref) }),
        React.createElement("input", __assign({}, rest, { className: "mdc-radio__native-control", type: "radio", id: id, ref: inputRef })),
        React.createElement(RadioBackground, null),
        React.createElement(RadioRipple, null)));
    return renderToggle(radio);
});
/*********************************************************************
 * Bits
 *********************************************************************/
var RadioRipple = React.memo(function RadioRipple() {
    return React.createElement("div", { className: "mdc-radio__ripple" });
});
var RadioRoot = withRipple({
    surface: false,
    unbounded: true
})(React.forwardRef(function RadioRoot(props, ref) {
    var disabled = props.disabled, rest = __rest(props, ["disabled"]);
    var className = useClassNames(props, [
        'mdc-radio',
        {
            'mdc-radio--disabled': disabled
        }
    ]);
    return React.createElement(Tag, __assign({}, rest, { className: className, ref: ref }));
}));
var RadioBackground = React.memo(function RadioBackground() {
    return (React.createElement("div", { className: "mdc-radio__background" },
        React.createElement("div", { className: "mdc-radio__outer-circle" }),
        React.createElement("div", { className: "mdc-radio__inner-circle" })));
});
