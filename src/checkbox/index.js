import { __assign, __rest } from "tslib";
import React, { useContext } from 'react';
import { MDCCheckboxFoundation } from '@material/checkbox';
import { Tag, useClassNames, mergeRefs, createComponent, DataTableContext, DataTableHeadContext } from '@rmwc/base';
import { withRipple } from '@rmwc/ripple';
import { useCheckboxFoundation } from './foundation';
/*********************************************************************
 * Events
 *********************************************************************/
/**
 * This is an awful freaking bugfix
 * Basically, MDC decided that patching the native getter and setter
 * on a checkbox would be fun which consequently kills Reacts ability
 * to do the same.
 */
// @ts-ignore
MDCCheckboxFoundation.prototype.installPropertyChangeHooks_ = function () { };
/** A Checkbox component. */
export var Checkbox = createComponent(function Checkbox(props, ref) {
    var _a = useCheckboxFoundation(props), renderToggle = _a.renderToggle, id = _a.id, toggleRootProps = _a.toggleRootProps, rootEl = _a.rootEl, checkboxEl = _a.checkboxEl;
    var children = props.children, className = props.className, label = props.label, style = props.style, indeterminate = props.indeterminate, inputRef = props.inputRef, foundationRef = props.foundationRef, rest = __rest(props, ["children", "className", "label", "style", "indeterminate", "inputRef", "foundationRef"]);
    var checkbox = (React.createElement(CheckboxRoot, __assign({}, rootEl.props(__assign({ checked: rest.checked, indeterminate: indeterminate }, toggleRootProps)), { ref: mergeRefs(rootEl.setRef, ref) }),
        React.createElement("input", __assign({}, checkboxEl.props(__assign(__assign({}, rest), { className: 'mdc-checkbox__native-control' })), { type: "checkbox", ref: mergeRefs(checkboxEl.setRef, inputRef), id: id })),
        React.createElement(CheckboxBackground, null),
        React.createElement(CheckboxRipple, null)));
    return renderToggle(checkbox);
});
/*********************************************************************
 * Bits
 *********************************************************************/
var CheckboxRoot = withRipple({
    surface: false,
    unbounded: true
})(React.forwardRef(function CheckboxRoot(props, ref) {
    var isDataTable = useContext(DataTableContext);
    var isDataTableHeader = useContext(DataTableHeadContext);
    var disabled = props.disabled, checked = props.checked, indeterminate = props.indeterminate, rest = __rest(props, ["disabled", "checked", "indeterminate"]);
    var className = useClassNames(props, [
        'mdc-checkbox',
        {
            'mdc-data-table__row-checkbox': isDataTable && !isDataTableHeader,
            'mdc-data-table__header-row-checkbox': isDataTableHeader,
            'mdc-checkbox--disabled': disabled,
            'mdc-checkbox--selected': checked || indeterminate
        }
    ]);
    return React.createElement(Tag, __assign({}, rest, { className: className, ref: ref }));
}));
var CheckboxRipple = React.memo(function CheckboxRipple() {
    return React.createElement("div", { className: "mdc-checkbox__ripple" });
});
var CheckboxBackground = React.memo(function () {
    return (React.createElement("div", { className: "mdc-checkbox__background" },
        React.createElement("svg", { className: "mdc-checkbox__checkmark", viewBox: "0 0 24 24" },
            React.createElement("path", { className: "mdc-checkbox__checkmark-path", fill: "none", stroke: "white", d: "M1.73,12.91 8.1,19.28 22.79,4.59" })),
        React.createElement("div", { className: "mdc-checkbox__mixedmark" })));
});
