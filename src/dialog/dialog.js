import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { MDCDialogFoundation } from '@material/dialog';
import { useClassNames, Tag, createComponent, PortalChild } from '@rmwc/base';
import { Button } from '@rmwc/button';
import { useDialogFoundation } from './foundation';
/** A Dialog component. */
export var Dialog = createComponent(function Dialog(props, ref) {
    var rootEl = useDialogFoundation(props).rootEl;
    var className = useClassNames(props, ['mdc-dialog']);
    var children = props.children, open = props.open, onOpen = props.onOpen, onOpened = props.onOpened, onClose = props.onClose, onClosed = props.onClosed, preventOutsideDismiss = props.preventOutsideDismiss, foundationRef = props.foundationRef, renderToPortal = props.renderToPortal, ariaLabelledby = props["aria-labelledby"], ariaDescribedBy = props["aria-describedby"], rest = __rest(props, ["children", "open", "onOpen", "onOpened", "onClose", "onClosed", "preventOutsideDismiss", "foundationRef", "renderToPortal", 'aria-labelledby', 'aria-describedby']);
    return (React.createElement(PortalChild, { renderTo: renderToPortal },
        React.createElement(Tag, __assign({}, rest, { element: rootEl, className: className, ref: ref }),
            React.createElement("div", { className: "mdc-dialog__container" },
                React.createElement("div", { className: "mdc-dialog__surface", role: "alertdialog", "aria-modal": true, "aria-labelledby": ariaLabelledby, "aria-describedby": ariaDescribedBy }, children)),
            React.createElement(DialogScrim, { disableInteraction: preventOutsideDismiss }))));
});
/** A SimpleDialog component for ease of use. */
export var SimpleDialog = createComponent(function SimpleDialog(_a, ref) {
    var title = _a.title, header = _a.header, body = _a.body, footer = _a.footer, _b = _a.acceptLabel, acceptLabel = _b === void 0 ? 'Accept' : _b, _c = _a.cancelLabel, cancelLabel = _c === void 0 ? 'Cancel' : _c, children = _a.children, open = _a.open, rest = __rest(_a, ["title", "header", "body", "footer", "acceptLabel", "cancelLabel", "children", "open"]);
    return (React.createElement(Dialog, __assign({ open: open }, rest, { ref: ref }),
        (!!title || !!header) && (React.createElement(DialogTitle, null,
            !!title && title,
            !!header && header)),
        (!!body || children) && (React.createElement(DialogContent, null,
            body,
            children)),
        (!!cancelLabel || !!acceptLabel || !!footer) && (React.createElement(DialogActions, null,
            !!footer && footer,
            !!cancelLabel && (React.createElement(DialogButton, { action: "close" }, cancelLabel)),
            !!acceptLabel && (React.createElement(DialogButton, { action: "accept", isDefaultAction: true }, acceptLabel))))));
});
var DialogScrim = React.memo(function DialogScrim(_a) {
    var disableInteraction = _a.disableInteraction;
    var style = disableInteraction
        ? { pointerEvents: 'none' }
        : {};
    return React.createElement("div", { className: "mdc-dialog__scrim", style: style });
});
/** The Dialog title. */
export var DialogTitle = createComponent(function DialogTitle(props, ref) {
    var className = useClassNames(props, ['mdc-dialog__title']);
    return React.createElement(Tag, __assign({ tag: "h2" }, props, { ref: ref, className: className }));
});
/** The Dialog content. */
export var DialogContent = createComponent(function DialogContent(props, ref) {
    var className = useClassNames(props, ['mdc-dialog__content']);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
/** Actions container for the Dialog. */
export var DialogActions = createComponent(function DialogActions(props, ref) {
    var className = useClassNames(props, ['mdc-dialog__actions']);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
/** Action buttons for the Dialog. */
export var DialogButton = createComponent(function DialogButton(props, ref) {
    var _a;
    var className = useClassNames(props, ['mdc-dialog__button']);
    var _b = props.action, action = _b === void 0 ? '' : _b, isDefaultAction = props.isDefaultAction, rest = __rest(props, ["action", "isDefaultAction"]);
    var defaultProp = !!isDefaultAction
        ? (_a = {}, _a[MDCDialogFoundation.strings.BUTTON_DEFAULT_ATTRIBUTE] = true, _a) : {};
    return (React.createElement(Button, __assign({}, rest, defaultProp, { ref: ref, className: className, "data-mdc-dialog-action": action })));
});
