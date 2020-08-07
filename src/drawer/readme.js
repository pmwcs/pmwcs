import { __read } from "tslib";
import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsSubtitle, DocsP } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { Drawer, DrawerHeader, DrawerContent, DrawerTitle, DrawerSubtitle, DrawerAppContent } from '.';
import { List, ListItem } from '../list';
import { Button } from '../button';
export default function () {
    return (React.createElement(Docs, { title: "Drawers", lead: "A navigation drawer slides in from the left and contains the navigation destinations for your app.", module: "@pmwc/drawer", styles: ['@material/drawer/dist/mdc.drawer.css'], docsLink: "https://material.io/develop/web/components/drawers/", examples: examples },
        React.createElement(DocsSubtitle, null, "Permanent"),
        React.createElement(DocsP, null, "These are drawers that are permanently fixed inside of a view."),
        React.createElement(DocsExample, null,
            React.createElement(Drawer, null,
                React.createElement(DrawerHeader, null,
                    React.createElement(DrawerTitle, null, "DrawerHeader"),
                    React.createElement(DrawerSubtitle, null, "Subtitle")),
                React.createElement(DrawerContent, null,
                    React.createElement(List, null,
                        React.createElement(ListItem, null, "Cookies"),
                        React.createElement(ListItem, null, "Pizza"),
                        React.createElement(ListItem, null, "Icecream"))))),
        React.createElement(DocsSubtitle, null, "Dismissible"),
        React.createElement(DocsP, null, "These are drawers that can be toggled to an open or closed state inside of a view, but still takes up viewable space when closed."),
        React.createElement(DocsExample, null, function Example() {
            var _a = __read(React.useState(false), 2), open = _a[0], setOpen = _a[1];
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { style: { overflow: 'hidden', position: 'relative' } },
                    React.createElement(Drawer, { dismissible: true, open: open },
                        React.createElement(DrawerHeader, null,
                            React.createElement(DrawerTitle, null, "DrawerHeader"),
                            React.createElement(DrawerSubtitle, null, "Subtitle")),
                        React.createElement(DrawerContent, null,
                            React.createElement(List, null,
                                React.createElement(ListItem, null, "Cookies"),
                                React.createElement(ListItem, null, "Pizza"),
                                React.createElement(ListItem, null, "Icecream")))),
                    React.createElement(DrawerAppContent, { style: { minHeight: '15rem', padding: '1rem' } }, "DrawerAppContent is an optional component that will resize content when the dismissible drawer is open and closed. It must be placed directly after the Drawer component.")),
                React.createElement("div", { style: { textAlign: 'center' } },
                    React.createElement(Button, { onClick: function () { return setOpen(!open); }, raised: true }, "Toggle Dismissible"))));
        }),
        React.createElement(DocsSubtitle, null, "Modal"),
        React.createElement(DocsP, null, "These are drawers that can be temporarily displayed fixed on the side of the entire viewport."),
        React.createElement(DocsExample, null, function Example() {
            var _a = __read(React.useState(false), 2), open = _a[0], setOpen = _a[1];
            return (React.createElement(React.Fragment, null,
                React.createElement(Drawer, { modal: true, open: open, onClose: function () { return setOpen(false); } },
                    React.createElement(DrawerHeader, null,
                        React.createElement(DrawerTitle, null, "DrawerHeader"),
                        React.createElement(DrawerSubtitle, null, "Subtitle")),
                    React.createElement(DrawerContent, null,
                        React.createElement(List, null,
                            React.createElement(ListItem, null, "Cookies"),
                            React.createElement(ListItem, null, "Pizza"),
                            React.createElement(ListItem, null, "Icecream")))),
                React.createElement(Button, { onClick: function () { return setOpen(!open); }, raised: true }, "Toggle Modal")));
        }),
        React.createElement(DocsSubtitle, null, "Right Side Drawers"),
        React.createElement(DocsP, null, "`material-components-web` doesn't directly support right hand drawers, but it respects the `dir` attribute on DOM elements. This simple hack will allow you to get drawers that appear from the right hand side of your app. As an aside, the `dir` attribute can be used to invert many other behaviors where the element is anchored on the left."),
        React.createElement(DocsExample, null, function Example() {
            var _a = __read(React.useState(false), 2), open = _a[0], setOpen = _a[1];
            return (React.createElement(React.Fragment, null,
                React.createElement(Drawer, { dir: "rtl", modal: true, open: open, onClose: function () { return setOpen(false); } },
                    React.createElement(DrawerHeader, { dir: "ltr" },
                        React.createElement(DrawerTitle, null, "Right Drawer"),
                        React.createElement(DrawerSubtitle, null, "Subtitle")),
                    React.createElement(DrawerContent, { dir: "ltr" },
                        React.createElement(List, null,
                            React.createElement(ListItem, null, "Cookies"),
                            React.createElement(ListItem, null, "Pizza"),
                            React.createElement(ListItem, null, "Icecream")))),
                React.createElement(Button, { onClick: function () { return setOpen(!open); }, raised: true }, "Toggle Right Drawer")));
        }),
        React.createElement(DocProps, { src: propsSrc, components: [
                { displayName: 'Drawer', component: Drawer },
                { displayName: 'DrawerHeader', component: DrawerHeader },
                { displayName: 'DrawerTitle', component: DrawerTitle },
                { displayName: 'DrawerSubtitle', component: DrawerSubtitle },
                { displayName: 'DrawerContent', component: DrawerContent },
                { displayName: 'DrawerAppContent', component: DrawerAppContent }
            ] })));
}
export var galleryExample = (React.createElement(Drawer, { style: { transform: 'scale(0.75', boxShadow: '0 0 4px rgba(0,0,0,0.1)' } },
    React.createElement(DrawerHeader, null,
        React.createElement(DrawerTitle, null, "DrawerHeader"),
        React.createElement(DrawerSubtitle, null, "Subtitle")),
    React.createElement(DrawerContent, null,
        React.createElement(List, null,
            React.createElement(ListItem, null, "Cookies"),
            React.createElement(ListItem, null, "Pizza"),
            React.createElement(ListItem, null, "Icecream")))));
