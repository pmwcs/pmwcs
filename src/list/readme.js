import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsSubtitle, DocsP } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { List, ListItem, ListItemText, ListItemPrimaryText, ListItemSecondaryText, ListItemGraphic, ListItemMeta, ListDivider, ListGroup, ListGroupSubheader, SimpleListItem } from '.';
export default function () {
    return (React.createElement(Docs, { title: "Lists", lead: "Lists are continuous, vertical indexes of text or images.", module: "@rmwc/list", styles: [
            '@material/list/dist/mdc.list.css',
            '@material/ripple/dist/mdc.ripple.css',
            '@rmwc/icon/icon.css'
        ], docsLink: "https://material.io/develop/web/components/lists/", examples: examples },
        React.createElement(DocsSubtitle, null, "Basic Usage"),
        React.createElement(DocsExample, { label: "Default" },
            React.createElement(List, null,
                React.createElement(ListItem, null, "Cookies"),
                React.createElement(ListItem, null, "Pizza"),
                React.createElement(ListItem, null, "Icecream"))),
        React.createElement(DocsExample, { label: "Fully Featured" },
            React.createElement(List, { twoLine: true },
                React.createElement(ListItem, null,
                    React.createElement(ListItemGraphic, { icon: "star_border" }),
                    React.createElement(ListItemText, null,
                        React.createElement(ListItemPrimaryText, null, "Cookies"),
                        React.createElement(ListItemSecondaryText, null, "$4.99 a dozen")),
                    React.createElement(ListItemMeta, { icon: "info" })),
                React.createElement(ListItem, null,
                    React.createElement(ListItemGraphic, { icon: "local_pizza" }),
                    React.createElement(ListItemText, null,
                        React.createElement(ListItemPrimaryText, null, "Pizza"),
                        React.createElement(ListItemSecondaryText, null, "$1.99 a slice")),
                    React.createElement(ListItemMeta, { icon: "info" })),
                React.createElement(ListItem, { activated: true },
                    React.createElement(ListItemGraphic, { icon: "mood" }),
                    React.createElement(ListItemText, null,
                        React.createElement(ListItemPrimaryText, null, "Icecream"),
                        React.createElement(ListItemSecondaryText, null, "$0.99 a scoop")),
                    React.createElement(ListItemMeta, null, "Winner!")))),
        React.createElement(DocsSubtitle, null, "Simplified Usage"),
        React.createElement(DocsP, null, "While there are siutations where you would need / want to compose the entire list yourself, it can be quite verbose. `SimpleListItem` provides a compact syntax that allows you to pass all options as props. The following example is roughly equivalent to the one above."),
        React.createElement(DocsExample, { label: "Simple" },
            React.createElement(List, { twoLine: true },
                React.createElement(SimpleListItem, { graphic: "star_border", text: "Cookies", secondaryText: "Chocolate chip", metaIcon: "info" }),
                React.createElement(SimpleListItem, { graphic: "local_pizza", text: "Pizza", secondaryText: "Pepperoni", metaIcon: "info" }),
                React.createElement(SimpleListItem, { activated: true, graphic: "mood", text: "Icecream", secondaryText: "Chocolate cookie dough", meta: "Winner!" }))),
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
export var galleryExample = (React.createElement(List, { twoLine: true, style: { transform: 'scale(0.75)' } },
    React.createElement(SimpleListItem, { graphic: "star_border", text: "Cookies", secondaryText: "Chocolate chip", metaIcon: "info" }),
    React.createElement(SimpleListItem, { graphic: "local_pizza", text: "Pizza", secondaryText: "Pepperoni", metaIcon: "info" }),
    React.createElement(SimpleListItem, { activated: true, graphic: "mood", text: "Icecream", secondaryText: "Chocolate cookie dough", meta: "Winner!" })));
