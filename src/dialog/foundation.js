import { __assign, __rest } from "tslib";
import { MDCDialogFoundation } from '@material/dialog';
import { closest, matches, useFoundation, focusTrapFactory, triggerWindowResize } from '@rmwc/base';
import { useRef, useEffect, useMemo } from 'react';
var isScrollable = function (el) {
    return el.scrollHeight > el.offsetHeight;
};
var areTopsMisaligned = function (els) {
    var tops = new Set();
    [].forEach.call(els, function (el) { return tops.add(el.offsetTop); });
    return tops.size > 1;
};
export var useDialogFoundation = function (props) {
    var focusTrap = useRef();
    var defaultButton = useRef(null);
    var buttons = useRef(null);
    var content = useRef(null);
    var _a = useFoundation({
        props: props,
        elements: {
            rootEl: true
        },
        foundation: function (_a) {
            var rootEl = _a.rootEl, emit = _a.emit, getProps = _a.getProps;
            return new MDCDialogFoundation({
                addClass: function (className) { return rootEl.addClass(className); },
                removeClass: function (className) { return rootEl.removeClass(className); },
                hasClass: function (className) { return rootEl.hasClass(className); },
                addBodyClass: function (className) {
                    return document.body && document.body.classList.add(className);
                },
                removeBodyClass: function (className) {
                    return document.body && document.body.classList.remove(className);
                },
                eventTargetMatches: function (target, selector) {
                    return matches(target, selector);
                },
                trapFocus: function () {
                    var _a;
                    try {
                        // we don't always have an item to focus
                        // so we try catch it
                        (_a = focusTrap.current) === null || _a === void 0 ? void 0 : _a.trapFocus();
                    }
                    catch (err) { }
                },
                releaseFocus: function () { var _a; return (_a = focusTrap.current) === null || _a === void 0 ? void 0 : _a.releaseFocus(); },
                isContentScrollable: function () {
                    return !!content.current && isScrollable(content.current);
                },
                areButtonsStacked: function () { return areTopsMisaligned(buttons.current); },
                getActionFromEvent: function (evt) {
                    var element = closest(evt.target, "[" + MDCDialogFoundation.strings.ACTION_ATTRIBUTE + "]");
                    return ((element === null || element === void 0 ? void 0 : element.getAttribute(MDCDialogFoundation.strings.ACTION_ATTRIBUTE)) || null);
                },
                clickDefaultButton: function () {
                    var _a;
                    (_a = defaultButton.current) === null || _a === void 0 ? void 0 : _a.click();
                },
                reverseButtons: function () {
                    var _a, _b;
                    (_a = buttons.current) === null || _a === void 0 ? void 0 : _a.reverse();
                    (_b = buttons.current) === null || _b === void 0 ? void 0 : _b.forEach(function (button) {
                        return button.parentElement && button.parentElement.appendChild(button);
                    });
                },
                notifyOpening: function () { return emit('onOpen', {}); },
                notifyOpened: function () {
                    emit('onOpened', {});
                    // Fixes an issue with sub components that require
                    // Layout for events
                    triggerWindowResize();
                },
                notifyClosing: function (action) {
                    return emit('onClose', action ? { action: action } : {});
                },
                notifyClosed: function (action) {
                    return emit('onClosed', action ? { action: action } : {});
                },
                getInitialFocusEl: function () {
                    return document.querySelector("[" + MDCDialogFoundation.strings.INITIAL_FOCUS_ATTRIBUTE + "]");
                }
            });
        }
    }), foundation = _a.foundation, elements = __rest(_a, ["foundation"]);
    var rootEl = elements.rootEl;
    var handleDocumentKeydown = useMemo(function () {
        var bound = foundation.handleDocumentKeydown.bind(foundation);
        // Wrap the callback in a function that can
        // short circuit the escape key if we are preventing outside dismiss
        return function (evt) {
            if (evt.which === 27 && props.preventOutsideDismiss)
                return;
            return bound(evt);
        };
    }, [foundation, props.preventOutsideDismiss]);
    // Set refs on mount
    useEffect(function () {
        var _a;
        // Default button
        defaultButton.current =
            (rootEl.ref &&
                rootEl.ref.querySelector("[" + MDCDialogFoundation.strings.BUTTON_DEFAULT_ATTRIBUTE + "]")) ||
                null;
        // Buttons
        buttons.current =
            rootEl.ref &&
                [].slice.call(rootEl.ref.querySelectorAll(MDCDialogFoundation.strings.BUTTON_SELECTOR));
        // Content
        content.current =
            ((_a = rootEl.ref) === null || _a === void 0 ? void 0 : _a.querySelector(MDCDialogFoundation.strings.CONTENT_SELECTOR)) ||
                null;
    }, [rootEl.ref]);
    // Create the focus trap
    useEffect(function () {
        var surface = rootEl.ref &&
            rootEl.ref.querySelector(MDCDialogFoundation.strings.SURFACE_SELECTOR);
        if (surface) {
            focusTrap.current = focusTrapFactory(surface, {
                initialFocusEl: defaultButton.current || undefined
            });
        }
    }, [rootEl.ref]);
    // Handle open and close
    useEffect(function () {
        if (props.open) {
            if (!foundation.isOpen()) {
                document.addEventListener('keydown', handleDocumentKeydown);
                foundation.open();
            }
        }
        else {
            if (foundation.isOpen()) {
                document.removeEventListener('keydown', handleDocumentKeydown);
                foundation.close();
            }
        }
    }, [props.open, foundation, handleDocumentKeydown]);
    var handleClick = function (evt) {
        var _a;
        (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, evt);
        return foundation.handleClick(evt);
    };
    var handleKeydown = function (evt) {
        var _a;
        (_a = props.onKeyDown) === null || _a === void 0 ? void 0 : _a.call(props, evt);
        return foundation.handleKeydown(evt);
    };
    rootEl.setProp('onClick', handleClick, true);
    rootEl.setProp('onKeyDown', handleKeydown, true);
    return __assign({ foundation: foundation }, elements);
};
