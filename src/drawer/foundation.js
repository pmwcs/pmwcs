import { __assign, __rest } from "tslib";
import { MDCModalDrawerFoundation, MDCDismissibleDrawerFoundation } from '@material/drawer';
import { useFoundation, focusTrapFactory, triggerWindowResize } from '@rmwc/base';
import { useRef, useEffect, useCallback } from 'react';
var useDrawerFoundationFactory = function (MDCConstructor) {
    return function useDrawerFoundation(props) {
        var focusTrapRef = useRef();
        var _a = useFoundation({
            props: props,
            elements: {
                rootEl: true,
                scrimEl: true
            },
            foundation: function (_a) {
                var rootEl = _a.rootEl, emit = _a.emit, getProps = _a.getProps;
                var previousFocusEl;
                var f = new MDCConstructor({
                    addClass: function (className) { return rootEl.addClass(className); },
                    removeClass: function (className) { return rootEl.removeClass(className); },
                    hasClass: function (className) { return rootEl.hasClass(className); },
                    elementHasClass: function (element, className) {
                        return element.classList.contains(className);
                    },
                    saveFocus: function () {
                        previousFocusEl = document.activeElement;
                    },
                    restoreFocus: function () {
                        if (rootEl.ref &&
                            rootEl.ref.contains(document.activeElement) &&
                            previousFocusEl) {
                            previousFocusEl.focus();
                        }
                    },
                    focusActiveNavigationItem: function () {
                        var _a;
                        var activeNavItemEl = (_a = rootEl.ref) === null || _a === void 0 ? void 0 : _a.querySelector(".mdc-list-item--activated");
                        if (activeNavItemEl) {
                            activeNavItemEl.focus();
                        }
                    },
                    notifyClose: function () {
                        //emit('onClose', {}, true /* shouldBubble */);
                    },
                    notifyOpen: function () {
                        emit('onOpen', {}, true /* shouldBubble */);
                    },
                    trapFocus: function () {
                        var _a;
                        try {
                            (_a = focusTrapRef.current) === null || _a === void 0 ? void 0 : _a.trapFocus();
                        }
                        catch (err) { }
                    },
                    releaseFocus: function () {
                        var _a;
                        try {
                            (_a = focusTrapRef.current) === null || _a === void 0 ? void 0 : _a.releaseFocus();
                        }
                        catch (err) { }
                    }
                });
                // Fixes a very annoying issue where the menu isn't stateful
                // this allows us to keep the menu open based on its controlled prop.
                var existingClose = f.close.bind(f);
                var newClose = function () {
                    emit('onClose', {});
                    setTimeout(function () {
                        if (!getProps().open) {
                            existingClose();
                        }
                    });
                };
                f.close = newClose;
                return f;
            }
        }), foundation = _a.foundation, elements = __rest(_a, ["foundation"]);
        var rootEl = elements.rootEl, scrimEl = elements.scrimEl;
        useEffect(function () {
            if (rootEl.ref) {
                focusTrapRef.current = focusTrapFactory(rootEl.ref);
            }
        }, [rootEl.ref]);
        useEffect(function () {
            props.open ? foundation.open() : foundation.close();
        }, [props.open, foundation]);
        var handleScrimClick = useCallback(function () {
            var _a, _b;
            (_b = (_a = foundation).handleScrimClick) === null || _b === void 0 ? void 0 : _b.call(_a);
        }, [foundation]);
        var handleKeyDown = useCallback(function (evt) {
            var _a;
            (_a = props.onKeyDown) === null || _a === void 0 ? void 0 : _a.call(props, evt);
            foundation.handleKeydown(evt);
        }, [foundation, props.onKeyDown]);
        var handleTransitionEnd = useCallback(function (evt) {
            var _a;
            (_a = props.onTransitionEnd) === null || _a === void 0 ? void 0 : _a.call(props, evt);
            foundation.handleTransitionEnd(evt);
            triggerWindowResize();
        }, [foundation, props.onTransitionEnd]);
        rootEl.setProp('onKeyDown', handleKeyDown, true);
        rootEl.setProp('onTransitionEnd', handleTransitionEnd, true);
        scrimEl.setProp('onClick', handleScrimClick, true);
        return __assign({ foundation: foundation }, elements);
    };
};
export var useDismissableDrawerFoundation = useDrawerFoundationFactory(MDCDismissibleDrawerFoundation);
export var useModalDrawerFoundation = useDrawerFoundationFactory(MDCModalDrawerFoundation);
