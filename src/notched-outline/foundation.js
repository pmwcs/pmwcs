import { __assign, __rest } from "tslib";
import { useEffect, useRef } from 'react';
import { useFoundation } from '@rmwc/base';
import { MDCNotchedOutlineFoundation } from '@material/notched-outline';
export var useNotchedOutlineFoundation = function (props) {
    var _a = useFoundation({
        props: props,
        elements: {
            rootEl: true,
            notchedEl: true
        },
        foundation: function (_a) {
            var rootEl = _a.rootEl, notchedEl = _a.notchedEl;
            return new MDCNotchedOutlineFoundation({
                addClass: function (className) { return rootEl.addClass(className); },
                removeClass: function (className) { return rootEl.removeClass(className); },
                setNotchWidthProperty: function (width) {
                    return notchedEl.setStyle('width', width + 'px');
                },
                removeNotchWidthProperty: function () { return notchedEl.setStyle('width', ''); }
            });
        }
    }), foundation = _a.foundation, elements = __rest(_a, ["foundation"]);
    var rootEl = elements.rootEl;
    var labelRef = useRef();
    useEffect(function () {
        !!props.notch ? foundation.notch(props.notch) : foundation.closeNotch();
    }, [props.notch, foundation]);
    useEffect(function () {
        var _a;
        labelRef.current =
            ((_a = rootEl.ref) === null || _a === void 0 ? void 0 : _a.querySelector('.mdc-floating-label')) || undefined;
        var label = labelRef.current;
        if (label) {
            label.style.transitionDuration = '0s';
            rootEl.addClass(MDCNotchedOutlineFoundation.cssClasses.OUTLINE_UPGRADED);
            requestAnimationFrame(function () {
                label && (label.style.transitionDuration = '');
            });
        }
        else {
            rootEl.addClass(MDCNotchedOutlineFoundation.cssClasses.NO_LABEL);
        }
    }, [rootEl]);
    return __assign({ foundation: foundation }, elements);
};
