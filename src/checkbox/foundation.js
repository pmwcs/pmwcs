import { __assign, __rest } from "tslib";
import { useToggleFoundation } from '@rmwc/toggleable';
import { useFoundation } from '@rmwc/base';
import { MDCCheckboxFoundation } from '@material/checkbox';
import { useEffect, useCallback } from 'react';
export var useCheckboxFoundation = function (props) {
    var _a = useToggleFoundation(props), renderToggle = _a.renderToggle, toggleRootProps = _a.toggleRootProps, id = _a.id;
    var _b = useFoundation({
        props: props,
        elements: {
            rootEl: true,
            checkboxEl: true
        },
        foundation: function (_a) {
            var rootEl = _a.rootEl, checkboxEl = _a.checkboxEl, getProps = _a.getProps;
            return new MDCCheckboxFoundation({
                addClass: function (className) { return rootEl.addClass(className); },
                removeClass: function (className) { return rootEl.removeClass(className); },
                setNativeControlAttr: function (attr, value) {
                    return checkboxEl.setProp(attr, value);
                },
                removeNativeControlAttr: function (attr) {
                    return checkboxEl.removeProp(attr);
                },
                isIndeterminate: function () { return !!getProps().indeterminate; },
                isChecked: function () {
                    var _a;
                    return getProps().checked !== undefined
                        ? !!getProps().checked
                        : !!((_a = checkboxEl.ref) === null || _a === void 0 ? void 0 : _a.checked);
                },
                hasNativeControl: function () { return !!checkboxEl.ref; },
                setNativeControlDisabled: function (disabled) {
                    return checkboxEl.setProp('disabled', disabled);
                },
                forceLayout: function () { var _a; return (_a = rootEl.ref) === null || _a === void 0 ? void 0 : _a.offsetWidth; },
                isAttachedToDOM: function () { return true; }
            });
        }
    }), foundation = _b.foundation, elements = __rest(_b, ["foundation"]);
    var rootEl = elements.rootEl, checkboxEl = elements.checkboxEl;
    // Handles syncing of indeterminate state
    var doSync = useCallback(function () {
        if (checkboxEl.ref) {
            checkboxEl.ref.indeterminate = Boolean(props.indeterminate);
        }
        window.requestAnimationFrame(function () {
            foundation.handleChange();
        });
    }, [props.indeterminate, foundation, checkboxEl.ref]);
    useEffect(function () {
        doSync();
    }, [doSync]);
    // Callback handling
    var handleAnimationEnd = function (evt) {
        var _a;
        (_a = props.onAnimationEnd) === null || _a === void 0 ? void 0 : _a.call(props, evt);
        foundation.handleAnimationEnd();
    };
    var handleOnChange = function (evt) {
        var _a;
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, evt);
        doSync();
    };
    rootEl.setProp('onAnimationEnd', handleAnimationEnd, true);
    checkboxEl.setProp('onChange', handleOnChange, true);
    return __assign({ foundation: foundation, renderToggle: renderToggle, toggleRootProps: toggleRootProps, id: id }, elements);
};
