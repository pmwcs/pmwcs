import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { MDCSnackbarFoundation } from '@material/snackbar';
import { Button } from '@pmwc/button';
import { useClassNames, Tag, createComponent } from '@pmwc/base';
import { useSnackbarFoundation } from './foundation';
import { IconButton } from '@pmwc/icon-button';
import { Icon } from '@pmwc/icon';
/** A Snackbar component for notifications. */
export var Snackbar = createComponent(function Snackbar(props, ref) {
    var _a = useSnackbarFoundation(props), rootEl = _a.rootEl, surfaceEl = _a.surfaceEl, labelEl = _a.labelEl;
    var open = props.open, message = props.message, timeout = props.timeout, dismissIcon = props.dismissIcon, onOpen = props.onOpen, onClose = props.onClose, children = props.children, action = props.action, icon = props.icon, leading = props.leading, stacked = props.stacked, dismissesOnAction = props.dismissesOnAction, foundationRef = props.foundationRef, rest = __rest(props, ["open", "message", "timeout", "dismissIcon", "onOpen", "onClose", "children", "action", "icon", "leading", "stacked", "dismissesOnAction", "foundationRef"]);
    var className = useClassNames(props, [
        'mdc-snackbar',
        {
            'mdc-snackbar--leading': leading,
            'mdc-snackbar--stacked': stacked
        }
    ]);
    var actions = Array.isArray(action)
        ? action
        : action
            ? [action]
            : [];
    return (React.createElement(Tag, __assign({}, rest, { ref: ref, element: rootEl, "aria-live": "assertive", "aria-atomic": true, "aria-hidden": true, className: className }),
        React.createElement("div", __assign({}, surfaceEl.props({}), { className: "mdc-snackbar__surface" }),
            !!icon && (React.createElement(Icon, { style: {
                    color: 'rgba(255, 255, 255, 0.87)',
                    fill: 'currentColor',
                    marginLeft: '1rem'
                }, icon: icon })),
            React.createElement(SnackbarLabel, null,
                message,
                React.createElement("div", { style: { display: 'none' }, ref: labelEl.setRef })),
            React.createElement(SnackbarActions, null,
                actions.map(function (a, i) { return (React.createElement(React.Fragment, { key: i }, a)); }),
                dismissIcon && (React.createElement(SnackbarDismiss, { icon: dismissIcon === true ? 'close' : dismissIcon }))),
            children)));
});
/*********************************************************************
 * Bits
 *********************************************************************/
function SnackbarLabel(props) {
    return (React.createElement("div", __assign({ role: "status", "aria-live": "polite", className: "mdc-snackbar__label" }, props)));
}
function SnackbarActions(props) {
    return React.createElement("div", __assign({ className: "mdc-snackbar__actions" }, props));
}
/** A button for a snackbar action. */
export var SnackbarAction = createComponent(function SnackbarAction(props, ref) {
    var className = useClassNames(props, ['mdc-snackbar__action']);
    var _a = props.action, action = _a === void 0 ? MDCSnackbarFoundation.strings.REASON_ACTION : _a, rest = __rest(props, ["action"]);
    return (React.createElement(Button, __assign({}, rest, { className: className, ref: ref, "data-mdc-snackbar-action": action })));
});
function SnackbarDismiss(props) {
    return React.createElement(IconButton, __assign({}, props, { className: "mdc-snackbar__dismiss" }));
}
