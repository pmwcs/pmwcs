import { __assign, __read, __rest } from "tslib";
import { useState, useRef, useEffect } from 'react';
import { useFoundation } from '@rmwc/base';
import { MDCTextFieldFoundation } from '@material/textfield';
export var useTextFieldFoundation = function (props) {
    var _a = __read(useState(false), 2), lineRippleActive = _a[0], setLineRippleActive = _a[1];
    var _b = __read(useState(0), 2), lineRippleCenter = _b[0], setLineRippleCenter = _b[1];
    var _c = __read(useState(), 2), notchWidth = _c[0], setNotchWidth = _c[1];
    var _d = __read(useState(false), 2), shakeLabel = _d[0], setShakeLabel = _d[1];
    var _e = __read(useState(false), 2), floatLabel = _e[0], setFloatlabel = _e[1];
    var characterCounter = useRef();
    var setCharacterCounter = function (api) {
        return (characterCounter.current = api);
    };
    var leadingIcon = useRef();
    var setLeadingIcon = function (api) {
        return (leadingIcon.current = api);
    };
    var trailingIcon = useRef();
    var setTrailingIcon = function (api) {
        return (trailingIcon.current = api);
    };
    var floatingLabel = useRef();
    var setFloatingLabel = function (api) {
        return (floatingLabel.current = api);
    };
    var _f = useFoundation({
        props: props,
        elements: { rootEl: true, inputEl: true },
        foundation: function (_a) {
            var rootEl = _a.rootEl, inputEl = _a.inputEl, getProps = _a.getProps;
            var getLabelAdapterMethods = function () {
                return {
                    shakeLabel: function (shouldShake) { return setShakeLabel(shouldShake); },
                    floatLabel: function (shouldFloat) {
                        var _a;
                        setFloatlabel((_a = getProps().floatLabel) !== null && _a !== void 0 ? _a : shouldFloat);
                    },
                    hasLabel: function () {
                        return !!getProps().label;
                    },
                    getLabelWidth: function () { var _a; return ((_a = floatingLabel.current) === null || _a === void 0 ? void 0 : _a.getWidth()) || 0; }
                };
            };
            var getLineRippleAdapterMethods = function () {
                return {
                    activateLineRipple: function () {
                        setLineRippleActive(true);
                    },
                    deactivateLineRipple: function () {
                        setLineRippleActive(false);
                    },
                    setLineRippleTransformOrigin: function (normalizedX) {
                        setLineRippleCenter(normalizedX);
                    }
                };
            };
            var getOutlineAdapterMethods = function () {
                return {
                    notchOutline: function (labelWidth) {
                        setNotchWidth(labelWidth);
                    },
                    closeOutline: function () {
                        var _a;
                        (_a = getProps().floatLabel) !== null && _a !== void 0 ? _a : setNotchWidth(undefined);
                    },
                    hasOutline: function () {
                        return !!getProps().outlined;
                    }
                };
            };
            var getInputAdapterMethods = function () {
                return {
                    registerInputInteractionHandler: function (evtType, handler) { return inputEl.addEventListener(evtType, handler); },
                    deregisterInputInteractionHandler: function (evtType, handler) { return inputEl.removeEventListener(evtType, handler); },
                    getNativeInput: function () { return inputEl.ref; }
                };
            };
            var getFoundationMap = function () {
                return {
                    characterCounter: characterCounter.current
                        ? characterCounter.current.getFoundation()
                        : undefined,
                    helperText: undefined,
                    leadingIcon: leadingIcon.current
                        ? leadingIcon.current.getFoundation()
                        : undefined,
                    trailingIcon: trailingIcon.current
                        ? trailingIcon.current.getFoundation()
                        : undefined
                };
            };
            return new MDCTextFieldFoundation(__assign(__assign(__assign(__assign({ addClass: function (className) { return rootEl.addClass(className); }, removeClass: function (className) { return rootEl.removeClass(className); }, hasClass: function (className) { return rootEl.hasClass(className); }, registerTextFieldInteractionHandler: function (evtType, handler) { return rootEl.addEventListener(evtType, handler); }, deregisterTextFieldInteractionHandler: function (evtType, handler) { return rootEl.removeEventListener(evtType, handler); }, registerValidationAttributeChangeHandler: function (handler) {
                    var getAttributesList = function (mutationsList) {
                        return mutationsList.map(function (mutation) { return mutation.attributeName; });
                    };
                    if (inputEl.ref) {
                        var observer = new MutationObserver(function (mutationsList) {
                            return handler(getAttributesList(mutationsList));
                        });
                        var targetNode = inputEl.ref;
                        var config = { attributes: true };
                        targetNode && observer.observe(targetNode, config);
                        return observer;
                    }
                    return {};
                }, deregisterValidationAttributeChangeHandler: function (observer) {
                    observer && observer.disconnect();
                }, isFocused: function () {
                    return document.activeElement === inputEl.ref;
                } }, getInputAdapterMethods()), getLabelAdapterMethods()), getLineRippleAdapterMethods()), getOutlineAdapterMethods()), getFoundationMap());
        }
    }), foundation = _f.foundation, elements = __rest(_f, ["foundation"]);
    // Fixes bug #362
    // MDC breaks Reacts unidirectional data flow...
    // We have to capture the value before render
    // and then compare it to props.value after render in order to set
    // the appropriate foundation value without breaking its initial state
    var foundationValue = foundation.getValue();
    useEffect(function () {
        if (props.value !== undefined && props.value !== foundationValue) {
            foundation.setValue(String(props.value));
        }
    }, [props.value, foundation, foundationValue]);
    // Allow the user to float the label themselves
    useEffect(function () {
        if (props.floatLabel !== undefined) {
            foundation.notchOutline(props.floatLabel);
            // @ts-ignore unsafe adapter access
            foundation.adapter_.floatLabel(props.floatLabel);
        }
    }, [foundation, props.floatLabel]);
    return __assign({ shakeLabel: shakeLabel,
        floatLabel: floatLabel,
        notchWidth: notchWidth,
        lineRippleActive: lineRippleActive,
        lineRippleCenter: lineRippleCenter,
        setCharacterCounter: setCharacterCounter,
        setLeadingIcon: setLeadingIcon,
        setTrailingIcon: setTrailingIcon,
        setFloatingLabel: setFloatingLabel }, elements);
};
