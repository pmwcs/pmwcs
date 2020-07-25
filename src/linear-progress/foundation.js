import { __assign, __read, __rest } from "tslib";
import { useEffect, useState } from 'react';
import { MDCLinearProgressFoundation } from '@material/linear-progress';
import { useFoundation } from '@rmwc/base';
export var useLinearProgressFoundation = function (props) {
    var _a = useFoundation({
        props: props,
        elements: { rootEl: true },
        foundation: function (_a) {
            var rootEl = _a.rootEl;
            return new MDCLinearProgressFoundation({
                addClass: function (className) { return rootEl.addClass(className); },
                getPrimaryBar: function () {
                    var _a;
                    return (((_a = rootEl.ref) === null || _a === void 0 ? void 0 : _a.querySelector(MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR)) || null);
                },
                forceLayout: function () { var _a; return (_a = rootEl.ref) === null || _a === void 0 ? void 0 : _a.offsetWidth; },
                getBuffer: function () {
                    var _a;
                    return ((_a = rootEl.ref) === null || _a === void 0 ? void 0 : _a.querySelector(MDCLinearProgressFoundation.strings.BUFFER_SELECTOR)) || null;
                },
                hasClass: function (className) { return rootEl.hasClass(className); },
                removeClass: function (className) { return rootEl.removeClass(className); },
                setStyle: function (el, styleProperty, value) {
                    el.style[styleProperty] = value;
                }
            });
        }
    }), foundation = _a.foundation, elements = __rest(_a, ["foundation"]);
    var _b = __read(useState(undefined), 2), determinate = _b[0], setDeterminate = _b[1];
    // progress and determinate
    useEffect(function () {
        foundation.setProgress(props.progress || 0);
        var isDeterminate = props.progress !== undefined;
        if (isDeterminate !== determinate) {
            foundation.setDeterminate(isDeterminate);
            setDeterminate(isDeterminate);
        }
    }, [props.progress, determinate, foundation]);
    // buffer
    useEffect(function () {
        foundation.setBuffer(props.buffer || 0);
    }, [props.buffer, foundation]);
    // reversed
    useEffect(function () {
        foundation.setReverse(!!props.reversed);
    }, [props.reversed, foundation]);
    // closed
    useEffect(function () {
        props.closed ? foundation.close() : foundation.open();
    }, [props.closed, foundation]);
    return __assign({ foundation: foundation }, elements);
};
