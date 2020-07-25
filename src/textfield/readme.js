import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsSubtitle, DocsP } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { TextField } from '.';
export default function () {
    return (React.createElement(Docs, { title: "Text Fields", lead: "Text fields allow users to input, edit, and select text.", module: "@rmwc/textfield", styles: [
            '@material/textfield/dist/mdc.textfield.css',
            '@material/floating-label/dist/mdc.floating-label.css',
            '@material/notched-outline/dist/mdc.notched-outline.css',
            '@material/line-ripple/dist/mdc.line-ripple.css',
            '@material/ripple/dist/mdc.ripple.css',
            '@rmwc/icon/icon.css'
        ], docsLink: "https://material.io/develop/web/components/input-controls/text-field/", examples: examples },
        React.createElement(DocsSubtitle, null, "TextField Variants"),
        React.createElement(DocsExample, { label: "Standard" },
            React.createElement(TextField, { label: "standard..." })),
        React.createElement(DocsExample, { label: "Outlined" },
            React.createElement(TextField, { outlined: true, label: "outlined..." })),
        React.createElement(DocsExample, { label: "Full Width" },
            React.createElement(TextField, { fullwidth: true, placeholder: "fullWidth..." })),
        React.createElement(DocsExample, { label: "No Label" },
            React.createElement(TextField, { placeholder: "No label" })),
        React.createElement(DocsExample, { label: "Icons" },
            React.createElement(React.Fragment, null,
                React.createElement(TextField, { icon: "search", trailingIcon: "close", label: "icon..." }),
                React.createElement(TextField, { label: "trailingIcon...", trailingIcon: {
                        icon: 'close',
                        tabIndex: 0,
                        onClick: function () { return console.log('Clear'); }
                    } }))),
        React.createElement(DocsSubtitle, null, "Textareas"),
        React.createElement(DocsP, null, "You can make the TextField a textarea. Make sure to include `outlined` for proper styling You can optionally make help text always visible by passing an object as props with persistent set to true. Textareas can also have an optional character counter which will work with the maxLength property."),
        React.createElement(DocsExample, null,
            React.createElement(TextField, { textarea: true, outlined: true, fullwidth: true, label: "textarea...", rows: 8, maxLength: 20, characterCount: true, helpText: {
                    persistent: true,
                    validationMsg: true,
                    children: 'The field is required'
                } })),
        React.createElement(DocsSubtitle, null, "Validation"),
        React.createElement(DocsExample, { label: "Disabled" },
            React.createElement(TextField, { disabled: true, label: "Disabled..." })),
        React.createElement(DocsExample, { label: "Required" },
            React.createElement(TextField, { required: true, label: "Required...", value: "" })),
        React.createElement(DocsExample, { label: "Invalid" },
            React.createElement(TextField, { invalid: true, label: "Invalid...", value: "#@!$", onChange: function () { } })),
        React.createElement(DocsExample, { label: "Validation Pattern" },
            React.createElement(TextField, { label: "Validate Pattern", pattern: "[A-Za-z]{3}" })),
        React.createElement(DocsSubtitle, null, "HTML Input Types"),
        React.createElement(DocsP, null, "A preview of how `material-components-web` handles styling input types for your browser."),
        React.createElement(DocsExample, null,
            React.createElement(React.Fragment, null,
                React.createElement(TextField, { label: "text", type: "text" }),
                React.createElement(TextField, { label: "color", type: "color", style: { width: '6rem' } }),
                React.createElement(TextField, { label: "date", type: "date" }),
                React.createElement(TextField, { label: "datetime-local", type: "datetime-local" }),
                React.createElement(TextField, { label: "month", type: "month" }),
                React.createElement(TextField, { label: "range", type: "range" }),
                React.createElement(TextField, { label: "time", type: "time" }),
                React.createElement(TextField, { label: "week", type: "week" }))),
        React.createElement(DocProps, { src: propsSrc, components: [{ displayName: 'TextField', component: TextField }] })));
}
export var galleryExample = React.createElement(TextField, { icon: "search", placeholder: "Search" });
