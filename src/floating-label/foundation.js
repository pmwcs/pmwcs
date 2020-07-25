import { __assign, __rest } from "tslib";
import { useFoundation } from '@rmwc/base';
import { MDCFloatingLabelFoundation } from '@material/floating-label';
import { useEffect } from 'react';
export var useFloatingLabelFoundation = function (props) {
    var _a = useFoundation({
        props: props,
        elements: {
            rootEl: true
        },
        api: function (_a) {
            var foundation = _a.foundation;
            return {
                getWidth: function () {
                    return foundation.getWidth();
                }
            };
        },
        foundation: function (_a) {
            var rootEl = _a.rootEl;
            return new MDCFloatingLabelFoundation({
                addClass: function (className) { return rootEl.addClass(className); },
                removeClass: function (className) { return rootEl.removeClass(className); },
                getWidth: function () { var _a; return ((_a = rootEl.ref) === null || _a === void 0 ? void 0 : _a.scrollWidth) || 0; },
                registerInteractionHandler: function (evtType, handler) { return rootEl.addEventListener(evtType, handler); },
                deregisterInteractionHandler: function (evtType, handler) { return rootEl.removeEventListener(evtType, handler); }
            });
        }
    }), foundation = _a.foundation, elements = __rest(_a, ["foundation"]);
    // Shake
    useEffect(function () {
        foundation.shake(!!props.shake);
    }, [props.shake, foundation]);
    // Float
    useEffect(function () {
        foundation.float(!!props.float);
    }, [props.float, foundation]);
    return __assign({ foundation: foundation }, elements);
};
