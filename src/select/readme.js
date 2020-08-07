import { __read } from "tslib";
import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsSubtitle, DocsP } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { Select } from '.';
export default function () {
    return (React.createElement(Docs, { title: "Select Menus", lead: "Menus display a list of choices on a transient sheet of material.", module: "@pmwc/select", styles: [
            '@pmwc/select/select.css',
            '@material/select/dist/mdc.select.css',
            '@material/floating-label/dist/mdc.floating-label.css',
            '@material/notched-outline/dist/mdc.notched-outline.css',
            '@material/line-ripple/dist/mdc.line-ripple.css',
            '@material/list/dist/mdc.list.css',
            '@material/menu/dist/mdc.menu.css',
            '@material/menu-surface/dist/mdc.menu-surface.css',
            '@material/ripple/dist/mdc.ripple.css'
        ], docsLink: "https://material.io/develop/web/components/input-controls/select-menus/", examples: examples },
        React.createElement(DocsSubtitle, null, "Select Styles"),
        React.createElement(DocsP, null, "Selects come in three different styles: standard,outlined, and enhanced."),
        React.createElement(DocsExample, { label: "Standard" },
            React.createElement(Select, { label: "Standard", options: ['Cookies', 'Pizza', 'Icecream'] })),
        React.createElement(DocsExample, { label: "Outlined" },
            React.createElement(Select, { label: "Outlined", outlined: true, options: ['Cookies', 'Pizza', 'Icecream'] })),
        React.createElement(DocsExample, { label: "Enhanced" },
            React.createElement(Select, { label: "Enhanced", enhanced: true, options: ['Cookies', 'Pizza', 'Icecream'] })),
        React.createElement(DocsExample, { label: "With Options" },
            React.createElement(Select, { label: "With Icon", defaultValue: "Pizza", helpText: "Choose your favorite snack...", icon: "favorite", options: ['Cookies', 'Pizza', 'Icecream'] })),
        React.createElement(DocsSubtitle, null, "Validation"),
        React.createElement(DocsExample, { label: "Required" },
            React.createElement(Select, { label: "Required", required: true, options: ['Cookies', 'Pizza', 'Icecream'] })),
        React.createElement(DocsExample, { label: "Invalid" },
            React.createElement(Select, { label: "Invalid", invalid: true, options: ['Cookies', 'Pizza', 'Icecream'] })),
        React.createElement(DocsExample, { label: "Disabled" },
            React.createElement(Select, { label: "Disabled", disabled: true, options: ['Cookies', 'Pizza', 'Icecream'] })),
        React.createElement(DocsSubtitle, null, "Controlled / Uncontrolled"),
        React.createElement(DocsP, null, "The Select component has the same behaviors as a native HTML select and be both controlled and uncontrolled."),
        React.createElement(DocsExample, { label: "Controlled" }, function () {
            var _a = __read(React.useState('Cookies'), 2), value = _a[0], setValue = _a[1];
            return (React.createElement(Select, { label: "Controlled", options: ['Cookies', 'Pizza', 'Icecream'], value: value, onChange: function (evt) { return setValue(evt.currentTarget.value); } }));
        }),
        React.createElement(DocsExample, { label: "Uncontrolled" },
            React.createElement(Select, { label: "Uncontrolled", options: ['Cookies', 'Pizza', 'Icecream'], defaultValue: "Cookies", onChange: function (evt) { return console.log(evt.currentTarget.value); } })),
        React.createElement(DocsSubtitle, null, "Data Driven Selects"),
        React.createElement(DocsP, null, "To fit common use cases, RMWC Select provides a data driven method for rendering select menus. There are multiple formats you can pass data in, use the one that best fits your requirements. To make your label not float by default and to have an unselected blank value, set the `placeholder` prop to a blank string."),
        React.createElement(DocsExample, { label: "Formatted Options" }, function Example() {
            // A controlled select Using a formatted array of options
            var options = [
                {
                    label: 'Cookies',
                    value: '1'
                },
                {
                    label: 'Pizza',
                    value: '2',
                    /** Any additional items will be passed to the
                       child ListItem as props */
                    'aria-disabled': true,
                    tabIndex: -1
                },
                {
                    label: 'Icecream',
                    value: '3'
                }
            ];
            return React.createElement(Select, { label: "Array", options: options });
        }),
        React.createElement(DocsExample, { label: "Value => Label Map" },
            React.createElement(Select, { label: "Object map", options: { '1': 'Cookies', '2': 'Pizza', '3': 'Icecream' } })),
        React.createElement(DocsExample, { label: "Array" },
            React.createElement(Select, { label: "Simple Array", placeholder: "-- Select One --", options: ['Cookies', 'Pizza', 'Icecream'] })),
        React.createElement(DocsSubtitle, null, "Manually Building the List"),
        React.createElement(DocsP, null, "If you want full control over the child `ListItems`, you can manually build the list yourself."),
        React.createElement(DocsExample, { label: "Manually Built" },
            React.createElement(Select, { label: "Manual", defaultValue: "Cookies" },
                React.createElement("option", { value: "Cookies" }, "Cookies"),
                React.createElement("option", { value: "Pizza" }, "Pizza"),
                React.createElement("option", { value: "Icecream" }, "Icecream"))),
        React.createElement(DocsSubtitle, null, "Option Groups"),
        React.createElement(DocsP, null, "Both native and enhanced Selects can contain option groups. Just nest additional options arrays in your data."),
        React.createElement(DocsExample, { label: "Option Groups: Formatted" },
            React.createElement(Select, { label: "Formatted", enhanced: true, options: [
                    {
                        label: 'Dinner',
                        options: [
                            {
                                label: 'Pizza',
                                value: '2'
                            }
                        ]
                    },
                    {
                        label: 'Dessert',
                        options: [
                            {
                                label: 'Cookies',
                                value: '1'
                            },
                            {
                                label: 'Icecream',
                                value: '3'
                            }
                        ]
                    }
                ] })),
        React.createElement(DocsExample, { label: "Options Groups: Manually Built" },
            React.createElement(Select, { label: "Manually Built" },
                React.createElement("optgroup", { label: "Dinner" },
                    React.createElement("option", { value: "Pizza" }, "Pizza")),
                React.createElement("optgroup", { label: "Dessert" },
                    React.createElement("option", { value: "Cookies" }, "Cookies"),
                    React.createElement("option", { value: "Icecream" }, "Icecream")))),
        React.createElement(DocProps, { src: propsSrc, components: [{ displayName: 'Select', component: Select }] })));
}
export var galleryExample = (React.createElement(Select, { options: [], placeholder: "--Select One--", label: "Favorite Food" }));
