import { __assign, __rest } from "tslib";
import { useEffect } from 'react';
import { useToggleFoundation } from '@rmwc/toggleable';
import { useFoundation } from '@rmwc/base';
import { MDCSwitchFoundation } from '@material/switch';
export var useSwitchFoundation = function (props) {
    var _a = useToggleFoundation(props), renderToggle = _a.renderToggle, toggleRootProps = _a.toggleRootProps, id = _a.id;
    var _b = useFoundation({
        props: props,
        elements: {
            rootEl: true,
            checkboxEl: true
        },
        foundation: function (_a) {
            var rootEl = _a.rootEl, checkboxEl = _a.checkboxEl;
            return new MDCSwitchFoundation({
                addClass: function (className) { return rootEl.addClass(className); },
                removeClass: function (className) { return rootEl.removeClass(className); },
                setNativeControlChecked: function (checked) {
                    return checkboxEl.setProp('checked', checked);
                },
                setNativeControlDisabled: function (disabled) {
                    return checkboxEl.setProp('disabled', disabled);
                },
                setNativeControlAttr: function (attr, value) {
                    return rootEl.setProp(attr, value);
                }
            });
        }
    }), foundation = _b.foundation, elements = __rest(_b, ["foundation"]);
    var checkboxEl = elements.checkboxEl;
    // On mount, sync the values with the native checkbox
    useEffect(function () {
        checkboxEl.ref &&
            foundation.updateCheckedStyling_(checkboxEl.ref.checked);
        checkboxEl.ref &&
            foundation.setDisabled(checkboxEl.ref.disabled);
    }, [checkboxEl.ref, foundation]);
    // sync checked
    useEffect(function () {
        if (props.checked !== undefined) {
            foundation.updateCheckedStyling_(props.checked);
        }
    }, [props.checked, foundation]);
    // sync disabled
    useEffect(function () {
        if (props.disabled !== undefined) {
            foundation.setDisabled(props.disabled);
        }
    }, [props.disabled, foundation]);
    // Callback handling
    var handleOnChange = function (evt) {
        var _a;
        foundation.handleChange(evt);
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, evt);
    };
    checkboxEl.setProp('onChange', handleOnChange, true);
    return __assign({ foundation: foundation, renderToggle: renderToggle, toggleRootProps: toggleRootProps, id: id }, elements);
};
