import { __assign, __read, __rest } from "tslib";
import React, { useEffect, useState } from 'react';
import { List, ListItem } from '@rmwc/list';
import { getDisplayName, classNames, useClassNames, createComponent } from '@rmwc/base';
import { MenuSurface, MenuSurfaceAnchor } from '../menu-surface';
import { useMenuFoundation } from './foundation';
/** A wrapper for menu items */
export var MenuItems = createComponent(function MenuItems(props, ref) {
    var className = useClassNames(props, ['mdc-list mdc-menu__items']);
    return React.createElement(List, __assign({ role: "menu" }, props, { className: className, ref: ref }));
});
MenuItems.displayName = 'MenuItems';
/** This is just the ListItem component exported from the Menu module for convenience. You can use `ListItem` or `SimpleListItem` components from the List section as long as you add `role="menuitem"` and `tabIndex="0"` to the components for accessibility. */
export var MenuItem = createComponent(function MenuItem(props, ref) {
    return React.createElement(ListItem, __assign({ role: "menuitem", tabIndex: 0 }, props, { ref: ref }));
});
var isMenuItems = function (child) {
    return getDisplayName(child) === 'MenuItems';
};
/** A menu component for displaying lists items. */
export var Menu = createComponent(function Menu(props, ref) {
    var children = props.children, focusOnOpen = props.focusOnOpen, onSelect = props.onSelect, foundationRef = props.foundationRef, rest = __rest(props, ["children", "focusOnOpen", "onSelect", "foundationRef"]);
    var _a = useMenuFoundation(props), rootEl = _a.rootEl, setListApi = _a.setListApi, setMenuSurfaceApi = _a.setMenuSurfaceApi;
    var needsMenuItemsWrapper = (React.Children.map(children, isMenuItems) || []).every(function (val) { return val === false; });
    var menuItemsProps = {
        apiRef: setListApi
    };
    return (React.createElement(MenuSurface, __assign({}, rootEl.props(rest), { "aria-hidden": !rest.open, className: classNames('mdc-menu', rest.className), apiRef: setMenuSurfaceApi, ref: ref }), needsMenuItemsWrapper ? (React.createElement(MenuItems, __assign({}, menuItemsProps), children)) : (React.Children.map(children, function (child) {
        if (isMenuItems(child)) {
            return React.cloneElement(child, __assign(__assign({}, (React.isValidElement(child) ? child.props : {})), menuItemsProps));
        }
        return child;
    }))));
});
var simpleMenuFactory = function (MenuComponent) {
    return function (props) {
        var _a = __read(useState(!!props.open), 2), stateOpen = _a[0], setStateOpen = _a[1];
        useEffect(function () {
            if (props.open !== undefined && props.open !== stateOpen) {
                setStateOpen(!!props.open);
            }
        }, [props.open, stateOpen]);
        var handle = props.handle, onClose = props.onClose, children = props.children, _b = props.rootProps, rootProps = _b === void 0 ? {} : _b, open = props.open, foundationRef = props.foundationRef, rest = __rest(props, ["handle", "onClose", "children", "rootProps", "open", "foundationRef"]);
        var wrappedHandle = React.cloneElement(handle, __assign(__assign({}, handle.props), { onClick: function (evt) {
                setStateOpen(!stateOpen);
                if (handle.props.onClick) {
                    handle.props.onClick(evt);
                }
            } }));
        var wrappedOnClose = function (evt) {
            setStateOpen(!!open || false);
            onClose === null || onClose === void 0 ? void 0 : onClose(evt);
        };
        var RenderMenuComponent = MenuComponent;
        return (React.createElement(MenuSurfaceAnchor, __assign({}, rootProps),
            React.createElement(RenderMenuComponent, __assign({}, rest, { onClose: wrappedOnClose, open: stateOpen }), children),
            wrappedHandle));
    };
};
/** A Simplified menu component that allows you to pass a handle element and will automatically control the open state and add a MenuSurfaceAnchor */
export var SimpleMenu = simpleMenuFactory(Menu);
/** The same as SimpleMenu, but a generic surface. */
export var SimpleMenuSurface = simpleMenuFactory(MenuSurface);
