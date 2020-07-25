import { __read } from "tslib";
import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsSubtitle, DocsP } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { Radio } from '.';
export default function () {
    return (React.createElement(Docs, { title: "Radio Buttons", lead: "Radio buttons allow the user to select one option from a set. Use radio buttons for exclusive selection if you think that the user needs to see all available options side-by-side.", module: "@rmwc/radio", styles: [
            '@material/radio/dist/mdc.radio.css',
            '@material/form-field/dist/mdc.form-field.css',
            '@material/ripple/dist/mdc.ripple.css'
        ], docsLink: "https://material.io/develop/web/components/input-controls/radio-buttons/", examples: examples },
        React.createElement(DocsSubtitle, null, "Controlled Usage"),
        React.createElement(DocsExample, null, function Example() {
            var _a = __read(React.useState('cookies'), 2), value = _a[0], setValue = _a[1];
            return (React.createElement(React.Fragment, null,
                React.createElement(Radio, { value: "cookies", checked: value === 'cookies', onChange: function (evt) { return setValue(String(evt.currentTarget.value)); } }, "Cookies"),
                React.createElement(Radio, { value: "pizza", checked: value === 'pizza', onChange: function (evt) { return setValue(String(evt.currentTarget.value)); } }, "Pizza"),
                React.createElement(Radio, { value: "icecream", checked: value === 'icecream', onChange: function (evt) { return setValue(String(evt.currentTarget.value)); } }, "Icecream")));
        }),
        React.createElement(DocsSubtitle, null, "Uncontrolled Usage"),
        React.createElement(DocsP, null, "You can use Radio Buttons and receive change events without having to manually set the `checked` prop. Just give the Radio components the same `name`. This example also shows using the `label` prop instead of setting the label as a child."),
        React.createElement(DocsExample, null,
            React.createElement(React.Fragment, null,
                React.createElement(Radio, { label: "Cookies", value: "cookies", name: "myRadioGroup", onChange: function (evt) { return console.log(evt.currentTarget.value); } }),
                React.createElement(Radio, { label: "Pizza", value: "pizza", name: "myRadioGroup", onChange: function (evt) { return console.log(evt.currentTarget.value); } }),
                React.createElement(Radio, { label: "Icecream", value: "icecream", name: "myRadioGroup", onChange: function (evt) { return console.log(evt.currentTarget.value); } }))),
        React.createElement(DocProps, { src: propsSrc, components: [{ displayName: 'Radio', component: Radio }] })));
}
export var galleryExample = (React.createElement(React.Fragment, null,
    React.createElement(Radio, { defaultChecked: true }),
    React.createElement(Radio, null)));
