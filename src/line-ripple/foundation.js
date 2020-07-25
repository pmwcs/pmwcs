import { __assign, __rest } from "tslib";
import { useEffect } from 'react';
import { useFoundation } from '@rmwc/base';
import { MDCLineRippleFoundation } from '@material/line-ripple';
export var useLineRippleFoundation = function (props) {
    var _a = useFoundation({
        props: props,
        elements: {
            rootEl: true
        },
        foundation: function (_a) {
            var rootEl = _a.rootEl;
            return new MDCLineRippleFoundation({
                addClass: function (className) { return rootEl.addClass(className); },
                removeClass: function (className) { return rootEl.removeClass(className); },
                hasClass: function (className) { return rootEl.hasClass(className); },
                setStyle: function (propertyName, value) {
                    return rootEl.setStyle(propertyName, value);
                },
                registerEventHandler: function (evtType, handler) { return rootEl.addEventListener(evtType, handler); },
                deregisterEventHandler: function (evtType, handler) { return rootEl.removeEventListener(evtType, handler); }
            });
        }
    }), foundation = _a.foundation, elements = __rest(_a, ["foundation"]);
    var rootEl = elements.rootEl;
    // Active
    useEffect(function () {
        props.active ? foundation.activate() : foundation.deactivate();
    }, [props.active, foundation]);
    // Center
    useEffect(function () {
        typeof props.center === 'number' &&
            foundation.setRippleCenter(props.center);
    }, [props.center, foundation]);
    // Transition end
    rootEl.setProp('onTransitionEnd', function (evt) { return foundation.handleTransitionEnd(evt); }, true);
    return __assign({ foundation: foundation }, elements);
};
