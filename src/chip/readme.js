import { __assign, __read } from "tslib";
import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsSubtitle, DocsP } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { Chip, ChipSet } from '.';
export default function () {
    return (React.createElement(Docs, { title: "Chips", lead: "Chips represent complex entities in small blocks, such as a contact.", module: "@rmwc/chip", styles: [
            '@material/chips/dist/mdc.chips.css',
            '@rmwc/icon/icon.css',
            '@material/ripple/dist/mdc.ripple.css'
        ], docsLink: "https://material.io/develop/web/components/chips/", examples: examples },
        React.createElement(DocsExample, { label: "Default" },
            React.createElement(ChipSet, null,
                React.createElement(Chip, { selected: true, label: "Cookies" }),
                React.createElement(Chip, { label: "Pizza" }),
                React.createElement(Chip, { label: "Icecream" }))),
        React.createElement(DocsExample, { label: "With Icons" },
            React.createElement(ChipSet, null,
                React.createElement(Chip, { icon: "favorite", label: "Cookies", trailingIcon: "close" }))),
        React.createElement(DocsExample, { label: "Event Handling" }, function Example() {
            var _a = __read(React.useState(false), 2), selected = _a[0], setSelected = _a[1];
            return (React.createElement(ChipSet, null,
                React.createElement(Chip, { key: "my-chip", label: "Click Me", checkmark: true, selected: selected, onRemove: function (evt) { return console.log('onRemove', evt.detail); }, onInteraction: function (evt) {
                        console.log('onInteraction', evt.detail);
                        setSelected(!selected);
                    }, onTrailingIconInteraction: function (evt) {
                        return console.log('onTrailingIconIteraction', evt.detail);
                    }, trailingIcon: "close" })));
        }),
        React.createElement(DocsSubtitle, null, "Filter and Choice Chipsets"),
        React.createElement(DocsP, null, "You can specify a `ChipSet` as either a `filter` of `choice` which slightly changes the visual styling of selected chips. While `material-components-web` has some built in functionality for chip sets, it doesn't fit well with React's unidirectional data flow. It is recommended you use standard React patterns to store selected chips in your state and render them accordingly."),
        React.createElement(DocsP, null, "Clicking on the trailing close icon will trigger a close animation and put the chip in an exited state, but it is up to you to remove component out from rendering. The you use the `onRemove` prop implement this behavior."),
        React.createElement(DocsExample, { label: "Filter" }, function Example() {
            var _a = __read(React.useState({
                cookies: false,
                pizza: false,
                icecream: false
            }), 2), selected = _a[0], setSelected = _a[1];
            //@ts-ignore
            var toggleSelected = function (key) {
                var _a;
                return setSelected(__assign(__assign({}, selected), (_a = {}, _a[key] = !selected[key], _a)));
            };
            return (React.createElement(ChipSet, { filter: true },
                React.createElement(Chip, { selected: selected.cookies, checkmark: true, onInteraction: function () { return toggleSelected('cookies'); }, label: "Cookies" }),
                React.createElement(Chip, { selected: selected.pizza, checkmark: true, onInteraction: function () { return toggleSelected('pizza'); }, icon: "local_pizza", label: "Pizza" }),
                React.createElement(Chip, { selected: selected.icecream, checkmark: true, onInteraction: function () { return toggleSelected('icecream'); }, icon: "favorite_border", label: "Icecream" })));
        }),
        React.createElement(DocsExample, { label: "Choice" }, function Example() {
            var _a = __read(React.useState({
                cookies: false,
                pizza: false,
                icecream: false
            }), 2), selected = _a[0], setSelected = _a[1];
            //@ts-ignore
            var toggleSelected = function (key) {
                var _a;
                return setSelected(__assign(__assign({}, selected), (_a = {}, _a[key] = !selected[key], _a)));
            };
            return (React.createElement(ChipSet, { choice: true },
                React.createElement(Chip, { selected: selected.cookies, onInteraction: function () { return toggleSelected('cookies'); }, label: "Cookies" }),
                React.createElement(Chip, { selected: selected.pizza, onInteraction: function () { return toggleSelected('pizza'); }, icon: "local_pizza", label: "Pizza" }),
                React.createElement(Chip, { selected: selected.icecream, onInteraction: function () { return toggleSelected('icecream'); }, icon: "favorite_border", label: "Icecream" })));
        }),
        React.createElement(DocProps, { src: propsSrc, components: [
                { displayName: 'Chip', component: Chip },
                { displayName: 'ChipSet', component: ChipSet }
            ] })));
}
export var galleryExample = React.createElement(Chip, { selected: true, checkmark: true, label: "Cookies" });
