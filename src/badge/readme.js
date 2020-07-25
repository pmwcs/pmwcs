import { __read } from "tslib";
import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsSubtitle, DocsP } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { Badge, BadgeAnchor } from '.';
import { Button } from '../button';
import { IconButton } from '../icon-button';
import { Avatar } from '../avatar';
export default function () {
    return (React.createElement(Docs, { title: "Badges", lead: "Badges are small status descriptors for UI elements. A badge consists of a small circle, typically containing a number or other short set of characters, that appears in proximity to another object.", module: "@rmwc/badge", styles: ['@rmwc/badge/badge.css'], examples: examples, addon: true },
        React.createElement(DocsExample, { label: "Basic" },
            React.createElement(Badge, { align: "inline" })),
        React.createElement(DocsExample, { label: "Labels" },
            React.createElement(React.Fragment, null,
                React.createElement(Badge, { align: "inline", label: 20 }),
                React.createElement(Badge, { align: "inline", label: "99+" }),
                React.createElement(Badge, { align: "inline", label: "New" }))),
        React.createElement(DocsExample, { label: "Theming" },
            React.createElement(React.Fragment, null,
                React.createElement(Badge, { theme: ['primaryBg', 'onPrimary'], align: "inline" }),
                React.createElement(Badge, { style: { background: 'hotpink' }, align: "inline" }),
                React.createElement(Badge, { theme: ['secondaryBg', 'onSecondary'], align: "inline", label: "Theme" }))),
        React.createElement(DocsSubtitle, null, "Usage with other components"),
        React.createElement(DocsP, null, "The badge component has been designed to play well with the majority of components in RMWC. You can place it inside of any component that accepts children and its default position will be absolute to the top end corner."),
        React.createElement(DocsP, null, "Because passing a Badge as a child doesn't always work (for things like `overflow: hidden` elements), you can use the `BadgeAnchor` component. This is really just a div with `position: relative` and some other sensible layout properties set on it, so you can use this or your own CSS to achieve the same result. Additionally, exact positioning is highly dependent on your design and shape of your components. Badges provide an `inset` property that allows you to adjust the positioning of the Badge as necessary."),
        React.createElement(DocsExample, null,
            React.createElement(React.Fragment, null,
                React.createElement(BadgeAnchor, null,
                    React.createElement(Button, { raised: true, label: "Button" }),
                    React.createElement(Badge, null)),
                React.createElement(BadgeAnchor, null,
                    React.createElement(Button, { raised: true, label: "Button", theme: ['secondaryBg', 'onSecondary'] }),
                    React.createElement(Badge, { style: { background: 'hotpink' }, label: "Hello" })))),
        React.createElement(DocsExample, null,
            React.createElement(BadgeAnchor, null,
                React.createElement(IconButton, { icon: "notifications" }),
                React.createElement(Badge, { inset: "0.75rem" }))),
        React.createElement(DocsExample, null,
            React.createElement(React.Fragment, null,
                React.createElement(BadgeAnchor, null,
                    React.createElement(Avatar, { src: "images/avatars/ironman.png", size: "large", name: "Tony Stark" }),
                    React.createElement(Badge, { inset: "5px" })),
                React.createElement(BadgeAnchor, null,
                    React.createElement(Avatar, { src: "images/avatars/blackwidow.png", size: "large", name: "Natalia Alianovna Romanova", square: true }),
                    React.createElement(Badge, null)))),
        React.createElement(DocsSubtitle, null, "Alignment"),
        React.createElement(DocsP, null, "Badges can be aligned to the start, end, or use inline alignment. They are also RTL aware. They default to align end."),
        React.createElement(DocsExample, { center: true },
            React.createElement(React.Fragment, null,
                React.createElement(BadgeAnchor, null,
                    React.createElement(Button, { raised: true, label: "Align Start" }),
                    React.createElement(Badge, { align: "start" })),
                React.createElement(BadgeAnchor, null,
                    React.createElement(Button, { raised: true, label: "Align End" }),
                    React.createElement(Badge, { align: "end" })))),
        React.createElement(DocsSubtitle, null, "Transitions"),
        React.createElement(DocsP, null, "You can transition between the standalone indicator and a badge with content. The badge will consider any `label` other than null or undefined as valid content."),
        React.createElement(DocsExample, { center: true }, function Example() {
            var _a = __read(React.useState(undefined), 2), label = _a[0], setLabel = _a[1];
            React.useEffect(function () {
                var timeout = setTimeout(function () {
                    switch (label) {
                        case '99+':
                            setLabel(undefined);
                            break;
                        case '':
                            setLabel('99+');
                            break;
                        case undefined:
                            setLabel('');
                            break;
                    }
                }, 1800);
                return function () { return clearTimeout(timeout); };
            }, [label]);
            return (React.createElement(BadgeAnchor, null,
                React.createElement(Button, { raised: true, label: "Button" }),
                React.createElement(Badge, { label: label, exited: label === undefined })));
        }),
        React.createElement(DocProps, { src: propsSrc, components: [
                { displayName: 'Badge', component: Badge },
                { displayName: 'BadgeAnchor', component: BadgeAnchor }
            ] })));
}
export var galleryExample = (React.createElement(BadgeAnchor, { style: {
        width: '3rem',
        height: '3rem',
        border: '1px solid rgba(0,0,0,.33)',
        borderRadius: '0.5rem'
    } },
    React.createElement(Badge, { label: "+99" })));
