import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { classNames, mergeRefs, Tag, useClassNames, createComponent } from '@rmwc/base';
import { withRipple } from '@rmwc/ripple';
import { useSwitchFoundation } from './foundation';
/** A Switch component. */
export var Switch = createComponent(function Switch(props, ref) {
    var _a;
    var _b = useSwitchFoundation(props), renderToggle = _b.renderToggle, id = _b.id, toggleRootProps = _b.toggleRootProps, rootEl = _b.rootEl, checkboxEl = _b.checkboxEl;
    var rootClassName = useClassNames(toggleRootProps, ['mdc-switch']);
    var children = props.children, className = props.className, label = props.label, style = props.style, inputRef = props.inputRef, foundationRef = props.foundationRef, rest = __rest(props, ["children", "className", "label", "style", "inputRef", "foundationRef"]);
    var renderedSwitch = (React.createElement(Tag, __assign({}, rootEl.props(__assign(__assign({}, toggleRootProps), { className: rootClassName })), { ref: ref }),
        React.createElement(SwitchTrack, null),
        React.createElement(SwitchThumbUnderlay, null,
            React.createElement(SwitchThumb, null),
            React.createElement("input", __assign({}, checkboxEl.props(__assign(__assign({}, rest), { className: 'mdc-switch__native-control' })), { type: "checkbox", id: id, ref: mergeRefs(checkboxEl.setRef, inputRef), role: "switch", "aria-checked": (_a = rest.checked) !== null && _a !== void 0 ? _a : rest['aria-checked'] }))),
        React.createElement(SwitchKnob, null)));
    return renderToggle(renderedSwitch);
});
/*********************************************************************
 * Bits
 *********************************************************************/
var SwitchTrack = React.memo(function SwitchTrack() {
    return React.createElement("div", { className: "mdc-switch__track" });
});
var SwitchKnob = React.memo(function SwitchKnob() {
    return React.createElement("div", { className: "mdc-switch__knob" });
});
var SwitchThumb = React.memo(function SwitchThumb() {
    return React.createElement("div", { className: "mdc-switch__thumb" });
});
var SwitchThumbUnderlay = withRipple({
    unbounded: true,
    surface: false
})(function SwitchThumbUnderlay(_a) {
    var className = _a.className, rest = __rest(_a, ["className"]);
    return (React.createElement("div", __assign({ className: classNames(className, 'mdc-switch__thumb-underlay') }, rest)));
});
