import { __assign, __read, __rest, __spread } from "tslib";
import { useCallback, useState, useRef, useEffect } from 'react';
import { useFoundation, raf } from '@rmwc/base';
import { MDCSelectFoundation, cssClasses } from '@material/select';
export var useSelectFoundation = function (props) {
    var _a;
    var _b = __read(useState(), 2), notchWidth = _b[0], setNotchWidth = _b[1];
    var _c = __read(useState(false), 2), lineRippleActive = _c[0], setLineRippleActive = _c[1];
    var _d = __read(useState(0), 2), lineRippleCenter = _d[0], setLineRippleCenter = _d[1];
    var _e = __read(useState(false), 2), floatLabel = _e[0], setFloatLabel = _e[1];
    var _f = __read(useState(false), 2), menuOpen = _f[0], setMenuOpen = _f[1];
    var _g = __read(useState(''), 2), selectedTextContent = _g[0], setSelectedTextContent = _g[1];
    var selectedIndex = useRef(-1);
    var floatingLabel = useRef();
    var setFloatingLabel = function (api) {
        floatingLabel.current = api;
    };
    var menu = useRef();
    var setMenu = function (api) {
        menu.current = api;
    };
    var anchor = useRef(null);
    var setAnchor = function (el) {
        anchor.current = el;
    };
    var leadingIcon = useRef();
    var setLeadingIcon = function (api) {
        leadingIcon.current = api;
    };
    var nativeControl = useRef();
    var setNativeControl = function (el) {
        nativeControl.current = el;
    };
    var silenceChange = useRef(false);
    var _h = useFoundation({
        props: props,
        elements: { rootEl: true, selectedTextEl: true },
        foundation: function (_a) {
            var rootEl = _a.rootEl, selectedTextEl = _a.selectedTextEl, getProps = _a.getProps, emit = _a.emit;
            var isNative = function () { return !getProps().enhanced; };
            var getSelectAdapterMethods = function () {
                var items = function () {
                    var _a, _b;
                    return (isNative()
                        ? Array.apply(null, (_a = nativeControl.current) === null || _a === void 0 ? void 0 : _a.options)
                        : (_b = menu.current) === null || _b === void 0 ? void 0 : _b.items()) || [];
                };
                var getValue = function (el) {
                    return (el.getAttribute('data-value') || el.getAttribute('value') || '');
                };
                return {
                    getSelectedMenuItem: function () {
                        var _a, _b, _c;
                        if (isNative()) {
                            return ((_a = nativeControl.current) === null || _a === void 0 ? void 0 : _a.selectedOptions[0]) || null;
                        }
                        if (selectedIndex.current === -1) {
                            return (((_c = (_b = menu.current) === null || _b === void 0 ? void 0 : _b.getSurfaceElement()) === null || _c === void 0 ? void 0 : _c.querySelector('.mdc-list-item--activated')) || null);
                        }
                        else {
                            return items()[selectedIndex.current];
                        }
                    },
                    getMenuItemAttr: function (menuItem, attr) {
                        if (attr === 'data-value') {
                            return getValue(menuItem);
                        }
                        return menuItem.getAttribute(attr);
                    },
                    setSelectedText: function (text) {
                        setSelectedTextContent(text);
                    },
                    isSelectedTextFocused: function () {
                        return !!(selectedTextEl.ref &&
                            selectedTextEl.ref === document.activeElement);
                    },
                    getSelectedTextAttr: function (attr) { return selectedTextEl.getProp(attr); },
                    setSelectedTextAttr: function (attr, value) {
                        if (attr === 'tabindex') {
                            // Fixes bug 595 https://github.com/jamesmfriedman/rmwc/issues/595.
                            // Native selects don't need tabIndexes on the root element
                            if (isNative())
                                return;
                            attr = 'tabIndex';
                        }
                        selectedTextEl.setProp(attr, value);
                    },
                    openMenu: function () {
                        setMenuOpen(true);
                    },
                    closeMenu: function () {
                        setMenuOpen(false);
                    },
                    getAnchorElement: function () { return anchor.current; },
                    setMenuAnchorElement: function (anchorEl) { return setAnchor(anchorEl); },
                    setMenuAnchorCorner: function (anchorCorner) { var _a; return (_a = menu.current) === null || _a === void 0 ? void 0 : _a.setAnchorCorner(anchorCorner); },
                    setMenuWrapFocus: function (wrapFocus) {
                        //(this.menu_.wrapFocus = wrapFocus)
                    },
                    setAttributeAtIndex: function () {
                        var _a;
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return (_a = menu.current) === null || _a === void 0 ? void 0 : _a.setAttributeForElementIndex.apply(_a, __spread(args));
                    },
                    removeAttributeAtIndex: function (index, attributeName) { var _a; return (_a = menu.current) === null || _a === void 0 ? void 0 : _a.items()[index].removeAttribute(attributeName); },
                    focusMenuItemAtIndex: function () {
                        var _a;
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return (_a = menu.current) === null || _a === void 0 ? void 0 : _a.focusItemAtIndex.apply(_a, __spread(args));
                    },
                    getMenuItemCount: function () {
                        return items().length;
                    },
                    getMenuItemValues: function () { return items().map(getValue) || []; },
                    getMenuItemTextAtIndex: function (index) {
                        return items()[index].textContent;
                    },
                    addClassAtIndex: function () {
                        var _a;
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return (_a = menu.current) === null || _a === void 0 ? void 0 : _a.addClassToElementIndex.apply(_a, __spread(args));
                    },
                    removeClassAtIndex: function () {
                        var _a;
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return (_a = menu.current) === null || _a === void 0 ? void 0 : _a.removeClassFromElementAtIndex.apply(_a, __spread(args));
                    }
                };
            };
            var getCommonAdapterMethods = function () {
                return {
                    addClass: function (className) {
                        rootEl.addClass(className);
                    },
                    removeClass: function (className) {
                        rootEl.removeClass(className);
                    },
                    hasClass: function (className) { return rootEl.hasClass(className); },
                    isRtl: function () {
                        return rootEl.ref &&
                            window
                                .getComputedStyle(rootEl.ref)
                                .getPropertyValue('direction') === 'rtl';
                    },
                    setRippleCenter: function (normalizedX) {
                        setLineRippleCenter(normalizedX);
                    },
                    activateBottomLine: function () { return setLineRippleActive(true); },
                    deactivateBottomLine: function () { return setLineRippleActive(false); },
                    notifyChange: function (value) {
                        if (!silenceChange.current) {
                            emit('onChange', {
                                index: selectedIndex.current,
                                value: value
                            }, true);
                        }
                    }
                };
            };
            var getOutlineAdapterMethods = function () {
                return {
                    hasOutline: function () { return !!getProps().outlined; },
                    notchOutline: function (labelWidth) {
                        setNotchWidth(labelWidth);
                    },
                    closeOutline: function () {
                        setNotchWidth(undefined);
                    }
                };
            };
            var getLabelAdapterMethods = function () {
                return {
                    hasLabel: function () { return !!getProps().label; },
                    floatLabel: function (shouldFloat) {
                        setFloatLabel(shouldFloat);
                    },
                    getLabelWidth: function () {
                        var _a;
                        return ((_a = floatingLabel.current) === null || _a === void 0 ? void 0 : _a.getWidth()) || 0;
                    }
                };
            };
            var getFoundationMap = function () {
                return {
                    leadingIcon: (leadingIcon.current && leadingIcon.current.getFoundation()) ||
                        undefined
                };
            };
            var f = new MDCSelectFoundation(__assign(__assign(__assign(__assign({}, getSelectAdapterMethods()), getCommonAdapterMethods()), getOutlineAdapterMethods()), getLabelAdapterMethods()), getFoundationMap());
            // This foundation requires a bit of monkey patching
            // in order to get placeholders working correctly
            var adapter = f.adapter_;
            // @ts-ignore private override
            f.updateLabel_ = function () {
                var doWork = function () {
                    var value = f.getValue();
                    // This is the line we have to override to work with placeholders
                    // we need to consider haveing a placeholder as a valid value
                    var optionHasValue = !!getProps().placeholder || value.length > 0;
                    if (adapter.hasLabel()) {
                        f.notchOutline(optionHasValue);
                        if (!adapter.hasClass(cssClasses.FOCUSED)) {
                            adapter.floatLabel(optionHasValue);
                        }
                    }
                };
                doWork();
            };
            // This is only set one time in the constructor which
            // is before React even has a chance to render...
            // Make it a dynamic getter
            Object.defineProperty(f, 'menuItemValues_', {
                get: function () {
                    return adapter.getMenuItemValues();
                }
            });
            // We have to add some logic after the original init function
            // in order to sync placeholder labels
            // Also... MDC fires change events on init which is the
            // exact opposite of what we want to happen with normal selects
            var init = f.init.bind(f);
            f.init = function () {
                silenceChange.current = true;
                init();
                var placeholder = String(getProps().placeholder || '');
                if (!f.getValue() && placeholder) {
                    adapter.setSelectedText(placeholder);
                }
                silenceChange.current = false;
            };
            return f;
        }
    }), foundation = _h.foundation, elements = __rest(_h, ["foundation"]);
    var selectedTextEl = elements.selectedTextEl, rootEl = elements.rootEl;
    var handleFocus = useCallback(function (evt) {
        var _a;
        (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, evt);
        foundation.handleFocus();
    }, [props.onFocus, foundation]);
    var handleBlur = useCallback(function (evt) {
        var _a;
        (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, evt);
        foundation.handleBlur();
    }, [props.onBlur, foundation]);
    var handleClick = useCallback(function (evt) {
        var _a;
        // Fixes an issue where clicking on the select when it
        // is already opens fires events in an incorrect order.
        // We can't use Reacts menuOpen variable because it is
        // ahead of the actual DOM animation...
        // Not ideal, but no other way currently
        if ((_a = rootEl.ref) === null || _a === void 0 ? void 0 : _a.querySelector('.mdc-menu-surface--open')) {
            return;
        }
        var getNormalizedXCoordinate = function (evt) {
            var targetClientRect = evt.target.getBoundingClientRect();
            var xCoordinate = evt.clientX;
            return xCoordinate - targetClientRect.left;
        };
        var coord = getNormalizedXCoordinate(evt);
        selectedTextEl.ref && selectedTextEl.ref.focus();
        foundation.handleClick(coord);
    }, [foundation, selectedTextEl.ref, rootEl.ref]);
    var handleKeydown = useCallback(function (evt) {
        var _a;
        (_a = props.onKeyDown) === null || _a === void 0 ? void 0 : _a.call(props, evt);
        foundation.handleKeydown(evt);
    }, [foundation, props.onKeyDown]);
    var handleMenuSelected = useCallback(function (index) {
        selectedIndex.current = index;
        foundation.handleMenuItemAction(index);
    }, [foundation]);
    var handleMenuOpened = useCallback(function () {
        foundation.handleMenuOpened();
    }, [foundation]);
    var handleMenuClosed = useCallback(function () {
        setMenuOpen(false);
        foundation.handleMenuClosed();
    }, [foundation]);
    // For controlled selects that are enhanced
    // we need to jump through some checks to see if we need to update the
    // value in our foundation
    var foundationValue = foundation.getValue();
    // Use the value OR the default value if there is no index selected
    var value = (_a = props.value) !== null && _a !== void 0 ? _a : (selectedIndex.current === -1 ? props.defaultValue : undefined);
    // Use the length of the options as an indication we need to re-render and
    // check if our value is accurate. This is for situations where people populate the select
    // async. We can't rely on object identity since lots of people pass options inline.
    var optionsLength = Array.isArray(props.options)
        ? props.options.length
        : Object.values(props.options || {}).length;
    // MDC Select is a bit of a mess here...
    // - We have to set our value
    // - In the event of a controlled value change, we don't want to fire a change event
    // - Jump through stupid hoops to prevent the event from firing
    useEffect(function () {
        silenceChange.current = true;
        if (value !== undefined && value !== foundationValue) {
            // @ts-ignore unsafe private variable access
            var index = foundation.menuItemValues_.indexOf(value);
            selectedIndex.current = index;
            foundation.setValue(value || '');
        }
        raf(function () {
            silenceChange.current = false;
        });
    }, [value, foundationValue, optionsLength, foundation]);
    // Disabled
    useEffect(function () {
        foundation.setDisabled(!!props.disabled);
    }, [foundation, props.disabled]);
    // Set anchor
    useEffect(function () {
        var _a;
        rootEl.ref && ((_a = menu.current) === null || _a === void 0 ? void 0 : _a.setAnchorElement(rootEl.ref));
    }, [rootEl.ref]);
    return __assign({ notchWidth: notchWidth,
        menuOpen: menuOpen,
        lineRippleActive: lineRippleActive,
        lineRippleCenter: lineRippleCenter,
        floatLabel: floatLabel, selectedIndex: selectedIndex.current, selectedTextContent: selectedTextContent,
        setFloatingLabel: setFloatingLabel,
        setMenu: setMenu,
        setLeadingIcon: setLeadingIcon,
        setNativeControl: setNativeControl,
        handleFocus: handleFocus,
        handleBlur: handleBlur,
        handleClick: handleClick,
        handleKeydown: handleKeydown,
        handleMenuClosed: handleMenuClosed,
        handleMenuOpened: handleMenuOpened,
        handleMenuSelected: handleMenuSelected }, elements);
};
