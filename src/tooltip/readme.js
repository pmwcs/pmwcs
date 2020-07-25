import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsSubtitle, DocsP } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { Tooltip } from '.';
import { IconButton } from '../icon-button';
import { Button } from '../button';
import { Avatar } from '../avatar';
import { PMWCProvider } from '../provider';
export default function () {
    return (React.createElement(Docs, { title: "Tooltips", lead: "Tooltips display informative text when users hover over, focus on, or tap an element.", module: "@rmwc/tooltip", styles: ['@rmwc/tooltip/tooltip.css'], examples: examples, addon: true },
        React.createElement(DocsSubtitle, null, "Basic Usage"),
        React.createElement(DocsP, null, "Wrap any component in a `Tooltip` and provide the content attribute. The only requirement is that is has a single React child, and that the child can accept `onMouseEnter`, `onMouseLeave`, `onFocus`, and `onClick` props."),
        React.createElement(DocsExample, { label: "Default" },
            React.createElement(React.Fragment, null,
                React.createElement(Tooltip, { content: "Cookies" },
                    React.createElement(IconButton, { icon: "star_border" })),
                React.createElement(Tooltip, { content: "Pizza" },
                    React.createElement(IconButton, { icon: "favorite_border" })),
                React.createElement(Tooltip, { content: "Icecream" },
                    React.createElement(IconButton, { icon: "mood" })))),
        React.createElement(DocsSubtitle, null, "Variants"),
        React.createElement(DocsExample, { label: "With Arrow" },
            React.createElement(Tooltip, { content: "Cake", showArrow: true },
                React.createElement(IconButton, { icon: "cake" }))),
        React.createElement(DocsExample, { label: "Controlled / Always open" },
            React.createElement(Tooltip, { content: "Hello", align: "right", open: true },
                React.createElement(IconButton, { icon: "mood" }))),
        React.createElement(DocsExample, { label: "Rich Content" },
            React.createElement(Tooltip, { content: React.createElement("div", { style: { display: 'flex' } },
                    React.createElement(Avatar, { src: "images/avatars/captainamerica.png", size: "large", name: "Steve Rogers" }),
                    React.createElement("div", { style: { marginLeft: '0.5rem' } },
                        React.createElement("b", null, "Captain America"),
                        React.createElement("div", null, "Steve Rogers"))) },
                React.createElement("span", { role: "button" }, "S. Rogers"))),
        React.createElement(DocsExample, { label: "Styled content" },
            React.createElement(Tooltip
            /** You make something like a popover window by just styling your inner content. */
            , { 
                /** You make something like a popover window by just styling your inner content. */
                content: React.createElement("div", { style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'white',
                        width: '20rem',
                        height: '8rem',
                        color: 'black',
                        borderRadius: '3px',
                        margin: '0 -3px'
                    } }, "Hello World!") },
                React.createElement("span", { role: "button" }, "Popover Window"))),
        React.createElement(DocsExample, { label: "Delay" },
            React.createElement(React.Fragment, null,
                React.createElement(Tooltip, { content: "Cookies", enterDelay: 1000 },
                    React.createElement(Button, { label: "Enter Delay" })),
                React.createElement(Tooltip, { content: "Pizza", leaveDelay: 1000 },
                    React.createElement(Button, { label: "Leave Delay" })),
                React.createElement(Tooltip, { content: "Icecream", enterDelay: 1000, leaveDelay: 1000 },
                    React.createElement(Button, { label: "Both" })))),
        React.createElement(DocsExample, { label: "Alignment" }, function AlignmentExample() {
            return [
                'left',
                'right',
                'top',
                'bottom',
                'topLeft',
                'topRight',
                'bottomLeft',
                'bottomRight'
            ].map(function (align) { return (
            //@ts-ignore
            React.createElement(Tooltip, { key: align, content: "Align: " + align, align: align },
                React.createElement(IconButton, { icon: "trip_origin" }))); });
        }),
        React.createElement(DocsSubtitle, null, "Activation"),
        React.createElement(DocsP, null, "By default, tooltips will activate on hover and focus. You can change this behavior by passing one or more options to the `activateOn` prop."),
        React.createElement(DocsExample, { label: "Default" },
            React.createElement(React.Fragment, null,
                React.createElement(Tooltip, { content: "Cookies", activateOn: "hover" },
                    React.createElement(Button, { label: "Hover" })),
                "''",
                React.createElement(Tooltip, { content: "Pizza", activateOn: "click" },
                    React.createElement(Button, { label: "Click" })),
                React.createElement(Tooltip, { content: "Icecream", activateOn: "focus" },
                    React.createElement(Button, { label: "Focus" })),
                React.createElement(Tooltip, { content: "Cake", activateOn: ['hover', 'focus'] },
                    React.createElement(Button, { label: "Multiple" })))),
        React.createElement(DocsSubtitle, null, "Usage with PMWCProvider"),
        React.createElement(DocsP, null, "The PMWCProvider allows you to specify global defaults for your tooltips."),
        React.createElement(DocsExample, { label: "Using Provider" },
            React.createElement(PMWCProvider, { tooltip: {
                    align: 'right',
                    activateOn: 'hover',
                    showArrow: true,
                    leaveDelay: 500,
                    enterDelay: 0
                } },
                React.createElement(Tooltip, { content: "Hello World!" },
                    React.createElement(Button, { label: "With Provider" })))),
        React.createElement(DocProps, { src: propsSrc, components: [{ displayName: 'Tooltip', component: Tooltip }] })));
}
export var galleryExample = (React.createElement(React.Fragment, null,
    React.createElement(Tooltip, { content: "Favorite RMWC!", open: true },
        React.createElement(IconButton, { icon: "favorite_outline" }))));
