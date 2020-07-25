import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsSubtitle, DocsP } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples-collapsible.json';
import { List, SimpleListItem } from '.';
import { CollapsibleList, IconButton } from '../rmwc';
export default function () {
    return (React.createElement(Docs, { title: "Collapsible Lists", lead: "Lists are continuous, vertical indexes of text or images.", module: "@rmwc/list", styles: [
            '@material/list/dist/mdc.list.css',
            '@rmwc/list/collapsible-list.css'
        ], examples: examples, addon: true },
        React.createElement(DocsP, null, "Collapsible lists aren't part of the material spec, but they've been added to RMWC after continuing requests from the community. They present an accordion style navigation element to progressively reveal content. They've have been built to work with the `List` and `ListItem` components in regards to keyboard events and styling, but they technically be used with any kind of content."),
        React.createElement(DocsExample, null,
            React.createElement(List, null,
                React.createElement(CollapsibleList, { handle: React.createElement(SimpleListItem, { text: "Cookies", graphic: "favorite", metaIcon: "chevron_right" }), onOpen: function () { return console.log('open'); }, onClose: function () { return console.log('close'); } },
                    React.createElement(SimpleListItem, { text: "Chocolate Chip" }),
                    React.createElement(SimpleListItem, { text: "Ginger Snap" }),
                    React.createElement(SimpleListItem, { text: "Peanut Butter" })),
                React.createElement(CollapsibleList, { handle: React.createElement(SimpleListItem, { text: "Pizza", graphic: "local_pizza", metaIcon: "chevron_right" }) },
                    React.createElement(SimpleListItem, { text: "Cheese" }),
                    React.createElement(SimpleListItem, { text: "Pepperoni" }),
                    React.createElement(SimpleListItem, { text: "Supreme" })),
                React.createElement(CollapsibleList, { handle: React.createElement(SimpleListItem, { text: "Icecream", graphic: "star", metaIcon: "chevron_right" }) },
                    React.createElement(SimpleListItem, { text: "Vanilla" }),
                    React.createElement(SimpleListItem, { text: "Chocolate" }),
                    React.createElement(CollapsibleList, { handle: React.createElement(SimpleListItem, { text: "Nested Collapsible", graphic: "touch_app", metaIcon: "chevron_right" }) },
                        React.createElement(SimpleListItem, { text: "Orange" }),
                        React.createElement(SimpleListItem, { text: "Strawberry" }),
                        React.createElement(SimpleListItem, { text: "Blueberry" }))),
                React.createElement(CollapsibleList, { open: true, handle: React.createElement(SimpleListItem, { text: "Custom Content, forced open", graphic: "help", metaIcon: "chevron_right" }) },
                    React.createElement("div", { style: {
                            padding: '4rem',
                            background: 'green',
                            color: 'white'
                        } }, "Collapsibles can contain any content")))),
        React.createElement(DocsSubtitle, null, "Usage as Non-List"),
        React.createElement(DocsP, null, "`CollapsibleList` is optimized to work with the `List` component but there is nothing stopping you from using any other kind of content."),
        React.createElement(DocsExample, null,
            React.createElement(CollapsibleList, { handle: React.createElement(IconButton, { icon: "favorite_outline", onIcon: "favorite" }), onOpen: function () { return console.log('open'); }, onClose: function () { return console.log('close'); } },
                React.createElement("div", { style: {
                        padding: '1rem',
                        background: 'red',
                        color: 'white',
                        display: 'inline-block'
                    } }, "Favorited!"))),
        React.createElement(DocProps, { src: propsSrc, components: [
                { displayName: 'CollapsibleList', component: CollapsibleList }
            ] })));
}
