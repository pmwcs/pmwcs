import { __read } from "tslib";
import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsP } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { Slider } from '.';
export default function () {
    return (React.createElement(Docs, { title: "Sliders", lead: "Sliders let users select from a range of values by moving the slider thumb.", module: "@rmwc/slider", styles: ['@material/slider/dist/mdc.slider.css'], docsLink: "https://material.io/develop/web/components/input-controls/sliders/", examples: examples },
        React.createElement(DocsP, null, "Sliders can be both uncontrolled and controlled. When creating a controlled `Slider`, you should be listening to the `onInput` event and use `evt.detail.value` to set your new value."),
        React.createElement(DocsP, null, "Sliders will automatically layout themselves on window resize. If you need to manually trigger a layout because the sliders container size changed, the simplest way is to trigger a resize event `window.dispatchEvent(new Event('resize'));`."),
        React.createElement(DocsP, null, "**Known Issue** `material-components-web` uses pointer events internally. If you are using something below React 16.4, you will see unknown attribute errors, however the slider should still work."),
        React.createElement(DocsExample, { label: "Uncontrolled" },
            React.createElement(Slider, { onInput: function (evt) { return console.log(evt); }, onChange: function (evt) { return console.log(evt); } })),
        React.createElement(DocsExample, { label: "Controlled" }, function Example() {
            var _a = __read(React.useState(50), 2), value = _a[0], setValue = _a[1];
            // onInput is required and will fire continuously.
            // onChange is optional and fires at the end of the interaction
            return (React.createElement(Slider, { value: value, onChange: function (evt) { return setValue(evt.detail.value); }, onInput: function (evt) { return setValue(evt.detail.value); }, discrete: true, step: 1 }));
        }),
        React.createElement(DocsExample, { label: "With Markers" },
            React.createElement(Slider, { discrete: true, displayMarkers: true, min: 100, max: 200, step: 5 })),
        React.createElement(DocProps, { src: propsSrc, components: [{ displayName: 'Slider', component: Slider }] })));
}
export var galleryExample = (React.createElement(Slider, { style: { minWidth: '10rem' }, value: 66, onChange: function () { } }));
