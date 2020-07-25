import { __assign, __rest } from "tslib";
import { useRef, useEffect } from 'react';
import { useFoundation, emptyClientRect } from '@rmwc/base';
import { debounce } from '@rmwc/base';
import { MDCSliderFoundation } from '@material/slider';
export var useSliderFoundation = function (props) {
    var trackRef = useRef();
    var setTrackRef = function (element) { return (trackRef.current = element); };
    var trackmarkerContainerRef = useRef();
    var setTrackMarkerContainerRef = function (element) {
        return (trackmarkerContainerRef.current = element);
    };
    var _a = useFoundation({
        props: props,
        elements: {
            rootEl: true,
            thumbContainerEl: true,
            sliderPinEl: true
        },
        foundation: function (_a) {
            var rootEl = _a.rootEl, thumbContainerEl = _a.thumbContainerEl, sliderPinEl = _a.sliderPinEl, emit = _a.emit;
            return new MDCSliderFoundation({
                hasClass: function (className) { return rootEl.hasClass(className); },
                addClass: function (className) { return rootEl.addClass(className); },
                removeClass: function (className) { return rootEl.removeClass(className); },
                getAttribute: function (name) {
                    return rootEl.getProp(name);
                },
                setAttribute: debounce(function (name, value) { return rootEl.setProp(name, value); }, 300),
                removeAttribute: function (name) { return rootEl.removeProp(name); },
                computeBoundingRect: function () {
                    return rootEl.ref ? rootEl.ref.getBoundingClientRect() : emptyClientRect;
                },
                getTabIndex: function () { return (rootEl.ref ? rootEl.ref.tabIndex : 0); },
                registerInteractionHandler: function (evtType, handler) {
                    rootEl.addEventListener(evtType, handler);
                },
                deregisterInteractionHandler: function (evtType, handler) {
                    rootEl.removeEventListener(evtType, handler);
                },
                registerThumbContainerInteractionHandler: function (evtType, handler) {
                    thumbContainerEl.addEventListener(evtType, handler);
                },
                deregisterThumbContainerInteractionHandler: function (evtType, handler) {
                    thumbContainerEl.removeEventListener(evtType, handler);
                },
                registerBodyInteractionHandler: function (evtType, handler) {
                    document.body && document.body.addEventListener(evtType, handler);
                },
                deregisterBodyInteractionHandler: function (evtType, handler) {
                    document.body && document.body.removeEventListener(evtType, handler);
                },
                registerResizeHandler: function (handler) {
                    window.addEventListener('resize', handler);
                },
                deregisterResizeHandler: function (handler) {
                    window.removeEventListener('resize', handler);
                },
                notifyInput: function () {
                    emit('onInput', { value: foundation.getValue() });
                },
                notifyChange: function () {
                    emit('onChange', { value: foundation.getValue() });
                },
                setThumbContainerStyleProperty: function (propertyName, value) {
                    thumbContainerEl.setStyle(propertyName, value);
                },
                setTrackStyleProperty: function (propertyName, value) {
                    var _a;
                    (_a = trackRef.current) === null || _a === void 0 ? void 0 : _a.style.setProperty(propertyName, value);
                },
                setMarkerValue: function (value) {
                    sliderPinEl.setProp('value', value);
                },
                setTrackMarkers: function (step, max, min) {
                    var _a;
                    var stepStr = step.toLocaleString();
                    var maxStr = max.toLocaleString();
                    var minStr = min.toLocaleString();
                    // keep calculation in css for better rounding/subpixel behavior
                    var markerAmount = "((" + maxStr + " - " + minStr + ") / " + stepStr + ")";
                    var markerWidth = "2px";
                    var markerBkgdImage = "linear-gradient(to right, currentColor " + markerWidth + ", transparent 0)";
                    var markerBkgdLayout = "0 center / calc((100% - " + markerWidth + ") / " + markerAmount + ") 100% repeat-x";
                    var markerBkgdShorthand = markerBkgdImage + " " + markerBkgdLayout;
                    (_a = trackmarkerContainerRef.current) === null || _a === void 0 ? void 0 : _a.style.setProperty('background', markerBkgdShorthand);
                },
                isRTL: function () {
                    return !!rootEl.ref && getComputedStyle(rootEl.ref).direction === 'rtl';
                }
            });
        }
    }), foundation = _a.foundation, elements = __rest(_a, ["foundation"]);
    // max
    useEffect(function () {
        props.max !== undefined && foundation.setMax(+props.max);
    }, [props.max, foundation]);
    // min
    useEffect(function () {
        props.min !== undefined && foundation.setMin(+props.min);
    }, [props.min, foundation]);
    // value
    useEffect(function () {
        var value = props.value !== undefined ? Number(props.value) : foundation.getValue();
        var min = foundation.getMin();
        var max = foundation.getMax();
        // make value in bounds
        if (value < min) {
            console.warn("Attempted to set slider to " + value + " which is less than min: " + min);
            value = min;
        }
        if (value > max) {
            console.warn("Attempted to set slider to " + value + " which is greater than max: " + max);
            value = max;
        }
        foundation.setValue(value);
    }, [props.value, foundation]);
    // step
    useEffect(function () {
        props.step !== undefined && foundation.setStep(+props.step);
    }, [props.step, foundation]);
    // disabled
    useEffect(function () {
        props.disabled !== undefined && foundation.setDisabled(props.disabled);
    }, [props.disabled, foundation]);
    // discrete
    useEffect(function () {
        if (props.discrete !== undefined) {
            // @ts-ignore unsafe private variable access
            foundation.isDiscrete_ = props.discrete;
        }
        if (props.discrete && foundation.getStep() === 0) {
            foundation.setStep(1);
        }
    }, [props.discrete, foundation]);
    // displayMarkers
    useEffect(function () {
        // @ts-ignore unsafe private variable access
        var hasTrackMarker = foundation.hasTrackMarker_;
        if (props.displayMarkers !== undefined &&
            props.displayMarkers !== hasTrackMarker) {
            // @ts-ignore unsafe private variable access
            foundation.hasTrackMarker_ = props.displayMarkers;
            window.requestAnimationFrame(function () { return foundation.setupTrackMarker(); });
        }
    }, [props.displayMarkers, foundation]);
    // bugfix
    useEffect(function () {
        // Fixes an issue where synthetic events were being
        // accessed in the Foundation and causing an error
        // @ts-ignore unsafe private access
        var existinghandleDown_ = foundation.handleDown_.bind(foundation);
        // @ts-ignore unsafe private access
        foundation.handleDown_ = function (evt) {
            evt.persist();
            existinghandleDown_(evt);
        };
    }, [foundation]);
    return __assign({ setTrackRef: setTrackRef,
        setTrackMarkerContainerRef: setTrackMarkerContainerRef }, elements);
};
