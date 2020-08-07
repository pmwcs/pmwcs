import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { mergeRefs, Tag, useClassNames, createComponent } from '@pmwc/base';
import { useDismissableDrawerFoundation, useModalDrawerFoundation } from './foundation';
/** A Drawer component. */
export var Drawer = createComponent(function Drawer(props, ref) {
    if (props.dismissible) {
        return React.createElement(DismissibleDrawer, __assign({}, props, { ref: ref }));
    }
    if (props.modal) {
        return React.createElement(ModalDrawer, __assign({}, props, { ref: ref }));
    }
    return React.createElement(DrawerRoot, __assign({}, props, { ref: ref }));
});
var slidableDrawerFactory = function (useDrawerFoundation) {
    var DrawerInner = createComponent(function DrawerInner(props, ref) {
        var _a = useDrawerFoundation(props), rootEl = _a.rootEl, scrimEl = _a.scrimEl;
        var onOpen = props.onOpen, onClose = props.onClose, open = props.open, foundationRef = props.foundationRef, rest = __rest(props, ["onOpen", "onClose", "open", "foundationRef"]);
        return (React.createElement(React.Fragment, null,
            React.createElement(DrawerRoot, __assign({ ref: mergeRefs(rootEl.setRef, ref) }, rootEl.props(rest))),
            rest.modal && React.createElement(DrawerScrim, __assign({}, scrimEl.props({})))));
    });
    return DrawerInner;
};
var ModalDrawer = slidableDrawerFactory(useModalDrawerFoundation);
var DismissibleDrawer = slidableDrawerFactory(useDismissableDrawerFoundation);
var DrawerRoot = createComponent(function DrawerRoot(props, ref) {
    var dismissible = props.dismissible, modal = props.modal, foundationRef = props.foundationRef, rest = __rest(props, ["dismissible", "modal", "foundationRef"]);
    var className = useClassNames(props, [
        'mdc-drawer',
        {
            'mdc-drawer--dismissible': dismissible,
            'mdc-drawer--modal': modal
        }
    ]);
    return React.createElement(Tag, __assign({ tag: "aside" }, rest, { ref: ref, className: className }));
});
/** An optional header for the Drawer. */
export var DrawerHeader = createComponent(function DrawerHeader(props, ref) {
    var className = useClassNames(props, ['mdc-drawer__header']);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
/** An title for the DrawerHeader. */
export var DrawerTitle = createComponent(function DrawerTitle(props, ref) {
    var className = useClassNames(props, ['mdc-drawer__title']);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
/** A subtitle for the DrawerHeader. */
export var DrawerSubtitle = createComponent(function DrawerSubtitle(props, ref) {
    var className = useClassNames(props, ['mdc-drawer__subtitle']);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
/** Content for Drawers. */
export var DrawerContent = createComponent(function DrawerContent(props, ref) {
    var className = useClassNames(props, ['mdc-drawer__content']);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
/** Protects the app's UI from interactions while a modal drawer is open. */
var DrawerScrim = function (_a) {
    var onClick = _a.onClick;
    return React.createElement("div", { className: "mdc-drawer-scrim", onClick: onClick });
};
/** For the Dismissible variant only. Sibling element that is resized when the drawer opens/closes. */
export var DrawerAppContent = createComponent(function DrawerAppContent(props, ref) {
    var className = useClassNames(props, ['mdc-drawer-app-content']);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
