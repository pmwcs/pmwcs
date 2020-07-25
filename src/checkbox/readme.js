import { __read } from "tslib";
import { h } from 'preact';
import { Docs, DocsExample, DocProps } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { Checkbox } from '.';
export default function () {
    return (React.createElement(Docs, { title: "Checkboxes", lead: "Checkboxes allow the user to select multiple options from a set.", module: "@rmwc/checkbox", styles: [
            '@material/checkbox/dist/mdc.checkbox.css',
            '@material/form-field/dist/mdc.form-field.css',
            '@material/ripple/dist/mdc.ripple.css'
        ], docsLink: "https://material.io/develop/web/components/input-controls/checkboxes/", examples: examples },
        React.createElement(DocsExample, { label: "Controlled" }, function Example() {
            var _a = __read(React.useState(false), 2), checked = _a[0], setChecked = _a[1];
            return (React.createElement(Checkbox, { label: "Cookies", checked: checked, onChange: function (evt) { return setChecked(!!evt.currentTarget.checked); } }));
        }),
        React.createElement(DocsExample, { label: "Uncontrolled" },
            React.createElement(Checkbox, { label: "Pizza" })),
        React.createElement(DocsExample, { label: "Label as Child" },
            React.createElement(Checkbox, null, "Icecream")),
        React.createElement(DocsExample, { label: "States" },
            React.createElement(React.Fragment, null,
                React.createElement(Checkbox, { label: "Broccoli", indeterminate: true }),
                React.createElement(Checkbox, { label: "Always On", checked: true }),
                React.createElement(Checkbox, { label: "Always Off", checked: false }))),
        React.createElement(DocProps, { src: propsSrc, components: [{ displayName: 'Checkbox', component: Checkbox }] })));
}
export var galleryExample = (React.createElement(React.Fragment, null,
    React.createElement(Checkbox, { defaultChecked: true }),
    React.createElement(Checkbox, null)));
