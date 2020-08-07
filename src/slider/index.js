import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { useClassNames, Tag, createComponent } from '@pmwc/base';
import { useSliderFoundation } from './foundation';
var SliderTrack = React.memo(React.forwardRef(function SliderTrack(props, ref) {
    return React.createElement("div", { ref: ref, className: "mdc-slider__track" });
}));
var SliderTrackMarkerContainer = React.memo(React.forwardRef(function SliderTrackMarkerContainer(props, ref) {
    return React.createElement("div", { ref: ref, className: "mdc-slider__track-marker-container" });
}));
var SliderPin = React.memo(function SliderPin(_a) {
    var value = _a.value;
    return (React.createElement("div", { className: "mdc-slider__pin" },
        React.createElement("span", { className: "mdc-slider__pin-value-marker" }, value)));
});
var SliderThumb = React.memo(function SliderThumb() {
    return (React.createElement("svg", { className: "mdc-slider__thumb", width: "21", height: "21" },
        React.createElement("circle", { cx: "10.5", cy: "10.5", r: "7.875" })));
});
var SliderFocusRing = React.memo(function SliderFocusRing() {
    return React.createElement("div", { className: "mdc-slider__focus-ring" });
});
export var Slider = createComponent(function Slider(props, ref) {
    var _a = useSliderFoundation(props), rootEl = _a.rootEl, thumbContainerEl = _a.thumbContainerEl, sliderPinEl = _a.sliderPinEl, setTrackRef = _a.setTrackRef, setTrackMarkerContainerRef = _a.setTrackMarkerContainerRef;
    var value = props.value, min = props.min, max = props.max, discrete = props.discrete, displayMarkers = props.displayMarkers, step = props.step, disabled = props.disabled, onChange = props.onChange, onInput = props.onInput, children = props.children, foundationRef = props.foundationRef, rest = __rest(props, ["value", "min", "max", "discrete", "displayMarkers", "step", "disabled", "onChange", "onInput", "children", "foundationRef"]);
    var className = useClassNames(props, [
        'mdc-slider',
        {
            'mdc-slider--discrete': discrete,
            'mdc-slider--display-markers': displayMarkers && discrete
        }
    ]);
    var dataStep = step ? { 'data-step': step } : {};
    if (displayMarkers && !discrete) {
        console.warn("The 'displayMarkers' prop on rmwc Slider will\n        only work in conjunction with the 'discrete' prop");
    }
    return (React.createElement(Tag, __assign({ tabIndex: 0, 
        //eslint-disable-next-line jsx-a11y/role-has-required-aria-props
        role: "slider", "aria-valuemax": max, "aria-valuenow": value, "aria-label": "Select Value" }, (disabled ? { 'aria-disabled': disabled } : {}), dataStep, rest, { ref: ref, element: rootEl, className: className }),
        React.createElement("div", { className: "mdc-slider__track-container" },
            React.createElement(SliderTrack, { ref: setTrackRef }),
            displayMarkers && (React.createElement(SliderTrackMarkerContainer, { ref: setTrackMarkerContainerRef }))),
        React.createElement(Tag, { element: thumbContainerEl, className: "mdc-slider__thumb-container" },
            discrete && React.createElement(SliderPin, { value: sliderPinEl.getProp('value') }),
            React.createElement(SliderThumb, null),
            React.createElement(SliderFocusRing, null)),
        children));
});
