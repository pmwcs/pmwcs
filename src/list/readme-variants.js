import { __assign, __read } from "tslib";
import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsSubtitle, DocsP } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples-variants.json';
import { List, ListItem, ListGroupSubheader, ListItemText, ListItemPrimaryText, ListItemSecondaryText, ListItemGraphic, ListItemMeta, ListDivider, ListGroup, SimpleListItem } from '.';
import { Avatar } from '../avatar';
import { Checkbox } from '../checkbox';
import { Switch } from '../switch';
import { Radio } from '../radio';
export default function () {
    return (React.createElement(Docs, { title: "Lists", lead: "Lists are continuous, vertical indexes of text or images.", module: "@rmwc/list", styles: ['@material/list/dist/mdc.list.css'], docsLink: "https://material.io/develop/web/components/lists/", examples: examples },
        React.createElement(DocsSubtitle, null, "Two Line"),
        React.createElement(DocsP, null, "When using the `twoLine` prop, you have to wrap the contents of the `ListItem` in `ListItemText`."),
        React.createElement(DocsExample, null,
            React.createElement(List, { twoLine: true },
                React.createElement(ListItem, null,
                    React.createElement(ListItemText, null,
                        React.createElement(ListItemPrimaryText, null, "Cookies"),
                        React.createElement(ListItemSecondaryText, null, "$4.99 a dozen"))),
                React.createElement(ListItem, null,
                    React.createElement(ListItemText, null,
                        React.createElement(ListItemPrimaryText, null, "Pizza"),
                        React.createElement(ListItemSecondaryText, null, "$1.99 a slice"))),
                React.createElement(ListItem, null,
                    React.createElement(ListItemText, null,
                        React.createElement(ListItemPrimaryText, null, "Icecream"),
                        React.createElement(ListItemSecondaryText, null, "$0.99 a scoop"))))),
        React.createElement(DocsSubtitle, null, "Leading and Trailing Icons"),
        React.createElement(DocsExample, null,
            React.createElement(List, null,
                React.createElement(ListItem, null,
                    React.createElement(ListItemGraphic, { icon: "favorite" }),
                    "Leading"),
                React.createElement(ListItem, null,
                    "Trailing",
                    React.createElement(ListItemMeta, { icon: "star" })),
                React.createElement(ListItem, null,
                    React.createElement(ListItemGraphic, { icon: "wifi" }),
                    "Leading and Trailing",
                    React.createElement(ListItemMeta, { icon: "info" })),
                React.createElement(ListItem, null,
                    React.createElement(ListItemGraphic, { icon: "wifi" }),
                    "Leading with Trailing Text",
                    React.createElement(ListItemMeta, null, "HELLO!")))),
        React.createElement(DocsSubtitle, null, "Avatar List with Dividers"),
        React.createElement(DocsExample, null,
            React.createElement(List, { twoLine: true, avatarList: true },
                React.createElement(ListGroup, null,
                    React.createElement(ListItem, null,
                        React.createElement(ListItemGraphic, { icon: React.createElement(Avatar, { src: "images/avatars/blackwidow.png", size: "xsmall", name: "Natalia Alianovna Romanova" }) }),
                        "Natalia Alianovna Romanova",
                        React.createElement(ListItemMeta, { icon: "info" })),
                    React.createElement(ListItem, null,
                        React.createElement(ListItemGraphic, { icon: React.createElement(Avatar, { src: "images/avatars/hulk.png", size: "small", name: "Bruce Banner" }) }),
                        "Bruce Banner",
                        React.createElement(ListItemMeta, { icon: "info" }))),
                React.createElement(ListDivider, null),
                React.createElement(ListGroup, null,
                    React.createElement(ListItem, null,
                        React.createElement(ListItemGraphic, { icon: React.createElement(Avatar, { src: "images/avatars/thor.png", size: "medium", name: "Thor Odinson" }) }),
                        "Thor Odinson",
                        React.createElement(ListItemMeta, { icon: "info" }))))),
        React.createElement(DocsSubtitle, null, "Selectable"),
        React.createElement(DocsP, null, "Checkboxes and Radios can be included as part of `ListItemMeta`. It is recommended when using these that you are using controlled components, and that you put your interaction handler on the `ListItem` itself. Notice the `readOnly` prop is also set on the individual form elements."),
        React.createElement(DocsExample, { label: "Checkboxes" }, function Example() {
            var _a = __read(React.useState({
                Cookies: false,
                Pizza: false,
                Icecream: false
            }), 2), checked = _a[0], setChecked = _a[1];
            return (React.createElement(List, null, ['Cookies', 'Pizza', 'Icecream'].map(function (key) { return (React.createElement(ListItem, { key: key, onClick: function () {
                    var _a;
                    return setChecked(__assign(__assign({}, checked), (_a = {}, _a[key] = !checked[key], _a)));
                } },
                key,
                React.createElement(ListItemMeta, null,
                    React.createElement(Checkbox, { checked: checked[key], readOnly: true })))); })));
        }),
        React.createElement(DocsExample, { label: "Switches" }, function Example() {
            var _a = __read(React.useState({
                Cookies: false,
                Pizza: false,
                Icecream: false
            }), 2), checked = _a[0], setChecked = _a[1];
            return (React.createElement(List, null, ['Cookies', 'Pizza', 'Icecream'].map(function (key) { return (React.createElement(ListItem, { key: key, onClick: function () {
                    var _a;
                    return setChecked(__assign(__assign({}, checked), (_a = {}, _a[key] = !checked[key], _a)));
                } },
                key,
                React.createElement(ListItemMeta, null,
                    React.createElement(Switch, { checked: checked[key], readOnly: true })))); })));
        }),
        React.createElement(DocsExample, { label: "Radios" }, function Example() {
            var _a = __read(React.useState('Cookies'), 2), checked = _a[0], setChecked = _a[1];
            return (React.createElement(List, null, ['Cookies', 'Pizza', 'Icecream'].map(function (key) { return (React.createElement(ListItem, { key: key, onClick: function () { return setChecked(key); } },
                key,
                React.createElement(ListItemMeta, null,
                    React.createElement(Radio, { checked: checked === key, readOnly: true })))); })));
        }),
        React.createElement(DocProps, { src: propsSrc, components: [
                { displayName: 'List', component: List },
                { displayName: 'ListItem', component: ListItem },
                {
                    displayName: 'ListItemPrimaryText',
                    component: ListItemPrimaryText
                },
                {
                    displayName: 'ListItemSecondaryText',
                    component: ListItemSecondaryText
                },
                { displayName: 'ListItemGraphic', component: ListItemGraphic },
                { displayName: 'ListItemMeta', component: ListItemMeta },
                { displayName: 'ListDivider', component: ListDivider },
                { displayName: 'ListGroup', component: ListGroup },
                { displayName: 'ListGroupSubheader', component: ListGroupSubheader },
                { displayName: 'SimpleListItem', component: SimpleListItem }
            ] })));
}
