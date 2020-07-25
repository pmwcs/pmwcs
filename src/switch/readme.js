import { __read } from "tslib";
import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsP } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { Switch } from '.';
export default function () {
    return (React.createElement(Docs, { title: "Switches", lead: "On/off switches toggle the state of a single settings option. The option that the switch controls, as well as the state it\u2019s in, should be made clear from the corresponding inline label. Switches take on the same visual properties of the radio button.", module: "@rmwc/switch", styles: [
            '@material/switch/dist/mdc.switch.css',
            '@material/form-field/dist/mdc.form-field.css',
            '@material/ripple/dist/mdc.ripple.css'
        ], docsLink: "https://material.io/develop/web/components/input-controls/switches/", examples: examples },
        React.createElement(DocsP, null, "Switches are identical in function to the Checkbox component, they just present a different UI / UX paradigm."),
        React.createElement(DocsExample, { label: "Uncontrolled" },
            React.createElement(Switch, { defaultChecked: true, label: "Pizza" })),
        React.createElement(DocsExample, { label: "Controlled" }, function Example() {
            var _a = __read(React.useState(false), 2), checked = _a[0], setChecked = _a[1];
            return (React.createElement(Switch, { checked: checked, onChange: function (evt) { return setChecked(!!evt.currentTarget.checked); }, label: "Cookies" }));
        }),
        React.createElement(DocsExample, { label: "Label as Child" },
            React.createElement(Switch, null, "Icecream")),
        React.createElement(DocsExample, { label: "Disabled" },
            React.createElement(React.Fragment, null,
                React.createElement(Switch, { disabled: true, label: "Disabled" }),
                React.createElement(Switch, { disabled: true, defaultChecked: true, label: "Disabled" }))),
        React.createElement(DocProps, { src: propsSrc, components: [{ displayName: 'Switch', component: Switch }] })));
}
export var galleryExample = (React.createElement(React.Fragment, null,
    React.createElement("div", { style: { marginBottom: '1rem' } },
        React.createElement(Switch, { checked: true })),
    React.createElement(Switch, null)));
