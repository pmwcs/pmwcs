import { __assign, __rest } from "tslib";
import { useEffect, useRef } from 'react';
import { useFoundation } from '@rmwc/base';
import { MDCTopAppBarFoundation, MDCFixedTopAppBarFoundation, MDCShortTopAppBarFoundation } from '@material/top-app-bar';
export var useTopAppBarFoundation = function (props) {
    var scrollTargetRef = useRef(null);
    var navIconRef = useRef(null);
    var _a = useFoundation({
        props: props,
        elements: {
            rootEl: true
        },
        foundation: function (_a) {
            var rootEl = _a.rootEl, emit = _a.emit;
            var adapter = {
                hasClass: function (className) { return rootEl.hasClass(className); },
                addClass: function (className) { return rootEl.addClass(className); },
                removeClass: function (className) { return rootEl.removeClass(className); },
                setStyle: function (property, value) {
                    return rootEl.setStyle(property, value);
                },
                getTopAppBarHeight: function () { var _a; return ((_a = rootEl.ref) === null || _a === void 0 ? void 0 : _a.clientHeight) || 0; },
                notifyNavigationIconClicked: function () { return emit('onNav', {}); },
                getViewportScrollY: function () {
                    var target = scrollTargetRef.current;
                    return target
                        ? target['pageYOffset' in target ? 'pageYOffset' : 'scrollTop']
                        : 0;
                },
                getTotalActionItems: function () {
                    return rootEl.ref
                        ? rootEl.ref.querySelectorAll(MDCTopAppBarFoundation.strings.ACTION_ITEM_SELECTOR).length
                        : 0;
                }
            };
            var foundation;
            if (props.short) {
                foundation = new MDCShortTopAppBarFoundation(adapter);
            }
            else if (props.fixed) {
                foundation = new MDCFixedTopAppBarFoundation(adapter);
            }
            else {
                foundation = new MDCTopAppBarFoundation(adapter);
            }
            return foundation;
        }
    }), foundation = _a.foundation, elements = __rest(_a, ["foundation"]);
    var rootEl = elements.rootEl;
    useEffect(function () {
        var _a, _b;
        var target = props.scrollTarget || ((_b = (_a = rootEl.ref) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView) || window;
        var handleTargetScroll = foundation.handleTargetScroll.bind(foundation);
        target.addEventListener('scroll', handleTargetScroll);
        scrollTargetRef.current = target;
        return function () {
            target.removeEventListener('scroll', handleTargetScroll);
        };
    }, [props.scrollTarget, scrollTargetRef, foundation, rootEl.ref]);
    useEffect(function () {
        var _a, _b;
        navIconRef.current =
            ((_a = rootEl.ref) === null || _a === void 0 ? void 0 : _a.querySelector(MDCTopAppBarFoundation.strings.NAVIGATION_ICON_SELECTOR)) || null;
        var handler = foundation.handleNavigationClick.bind(foundation);
        (_b = navIconRef.current) === null || _b === void 0 ? void 0 : _b.addEventListener('click', handler);
        return function () {
            var _a;
            (_a = navIconRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('click', handler);
        };
    }, [rootEl.ref, foundation]);
    // The Top App Bar sets these values in its constructor...
    // Reinit them after mount
    useEffect(function () {
        // @ts-ignore
        foundation.lastScrollPosition_ = foundation.adapter_.getViewportScrollY();
        // @ts-ignore
        foundation.topAppBarHeight_ = foundation.adapter_.getTopAppBarHeight();
    }, [foundation]);
    return __assign({ foundation: foundation }, elements);
};
