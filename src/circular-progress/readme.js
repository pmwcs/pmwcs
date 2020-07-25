import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsSubtitle } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { CircularProgress } from '.';
import { Button } from '../button';
import { List, SimpleListItem } from '../list';
import { Chip } from '../chip';
export default function () {
    return (React.createElement(Docs, { title: "Circular Progress", lead: "Circular progress indicators display progress by animating an indicator along an invisible circular track in a clockwise direction. They can be applied directly to a surface, such as a button or card.", module: "@rmwc/circular-progress", styles: ['@rmwc/circular-progress/circular-progress.css'], examples: examples, addon: true },
        React.createElement(DocsSubtitle, null, "Basic Usage"),
        React.createElement(DocsExample, { label: "Indeterminate" },
            React.createElement(CircularProgress, null)),
        React.createElement(DocsExample, { label: "Progress" },
            React.createElement(React.Fragment, null,
                React.createElement(CircularProgress, { progress: 0.3 }),
                React.createElement(CircularProgress, { progress: 0.6 }),
                React.createElement(CircularProgress, { progress: 0.9 }))),
        React.createElement(DocsSubtitle, null, "Sizing"),
        React.createElement(DocsExample, { label: "Sizes" },
            React.createElement(React.Fragment, null,
                React.createElement(CircularProgress, { size: "xsmall" }),
                React.createElement(CircularProgress, { size: "small" }),
                React.createElement(CircularProgress, { size: "medium" }),
                React.createElement(CircularProgress, { size: "large" }),
                React.createElement(CircularProgress, { size: "xlarge" }),
                React.createElement(CircularProgress, { size: 72 }))),
        React.createElement(DocsSubtitle, null, "Usage with other components"),
        React.createElement(DocsExample, null,
            React.createElement(React.Fragment, null,
                React.createElement(Button, { icon: React.createElement(CircularProgress, { theme: "secondary" }), label: "Cookies" }),
                React.createElement(List, null,
                    React.createElement(SimpleListItem, { graphic: React.createElement(CircularProgress, null), text: "Pizza" }),
                    React.createElement(SimpleListItem, { graphic: "favorite", text: "Icecream" })),
                React.createElement(Chip, { icon: React.createElement(CircularProgress, null), label: "Donuts" }))),
        React.createElement(DocProps, { src: propsSrc, components: [
                { displayName: 'CircularProgress', component: CircularProgress }
            ] })));
}
export var galleryExample = (React.createElement(React.Fragment, null, [0.3, 0.6, 0.9].map(function (num) { return (React.createElement(CircularProgress, { key: num, style: { margin: '0.4rem' }, progress: num, size: "large" })); })));
