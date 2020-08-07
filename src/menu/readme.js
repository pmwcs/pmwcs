import { __read } from "tslib";
import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsSubtitle, DocsP } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { Menu, MenuItem, MenuSurface, MenuSurfaceAnchor, SimpleMenu, SimpleMenuSurface } from '.';
import { ListDivider } from '../list';
import { Button } from '../button';
import { Select } from '../select';
import { IconButton } from '../icon-button';
import { Checkbox } from '../checkbox';
export default function () {
    return (React.createElement(Docs, { title: "Menus", lead: "Menus display a list of choices on a transient sheet of material.", module: "@pmwc/menu", styles: [
            '@material/menu/dist/mdc.menu.css',
            '@material/menu-surface/dist/mdc.menu-surface.css',
            '@material/ripple/dist/mdc.ripple.css',
            '@material/list/dist/mdc.list.css',
            '@pmwc/icon/icon.css'
        ], docsLink: "https://material.io/develop/web/components/menus/", examples: examples },
        React.createElement(DocsSubtitle, null, "Basic Usage"),
        React.createElement(DocsP, null, "You can compose a menu with the given components, and manually manage the open state. `Menu` expects MenuItems as children while `MenuSurface` is a generic container which can have anything as a child."),
        React.createElement(DocsExample, null, function Example() {
            var _a = __read(React.useState(false), 2), open = _a[0], setOpen = _a[1];
            return (React.createElement(MenuSurfaceAnchor, null,
                React.createElement(Menu, { open: open, onSelect: function (evt) { return console.log(evt.detail.index); }, onClose: function (evt) { return setOpen(false); } },
                    React.createElement(MenuItem, null, "Cookies"),
                    React.createElement(MenuItem, null, "Pizza"),
                    React.createElement(ListDivider, null),
                    React.createElement(MenuItem, null, "Icecream")),
                React.createElement(Button, { raised: true, onClick: function (evt) { return setOpen(!open); } }, "Menu")));
        }),
        React.createElement(DocsExample, null, function Example() {
            var _a = __read(React.useState(false), 2), open = _a[0], setOpen = _a[1];
            return (React.createElement(MenuSurfaceAnchor, null,
                React.createElement(MenuSurface, { open: open, onClose: function (evt) { return setOpen(false); } },
                    React.createElement("div", { style: { padding: '1rem', width: '8rem' } }, "Make the content whatever you want.")),
                React.createElement(Button, { raised: true, onClick: function (evt) { return setOpen(!open); } }, "Menu Surface")));
        }),
        React.createElement(DocsExample, null, function Example() {
            var _a = __read(React.useState(false), 2), open = _a[0], setOpen = _a[1];
            return (React.createElement(MenuSurfaceAnchor, null,
                React.createElement(MenuSurface, { open: open, onClose: function (evt) { return setOpen(false); } },
                    React.createElement("div", { style: { padding: '1rem', width: '8rem' } }, "Menu")),
                React.createElement(IconButton, { icon: "menu", onClick: function (evt) { return setOpen(!open); } })));
        }),
        React.createElement(DocsSubtitle, null, "Simplified usage"),
        React.createElement(DocsP, null, "RMWC provides a convenience `SimpleMenu` component that takes a handle as a prop, and manages the open state for you."),
        React.createElement(DocsExample, null,
            React.createElement(SimpleMenu, { handle: React.createElement(Button, null, "Simple Menu") },
                React.createElement(MenuItem, null, "Cookies"),
                React.createElement(MenuItem, null, "Pizza"),
                React.createElement(MenuItem, null, "Icecream"))),
        React.createElement(DocsExample, null,
            React.createElement(SimpleMenuSurface, { handle: React.createElement(Button, null, "Simple Menu Surface") },
                React.createElement("div", { style: { padding: '1rem', width: '8rem' } }, "Make the content whatever you want."))),
        React.createElement(DocsSubtitle, null, "Anchoring"),
        React.createElement(DocsP, null, "By default, Menus will attempt to automatically position themselves, but this behavior can be overridden by setting the `anchorCorner` prop."),
        React.createElement(DocsExample, null, function Example() {
            var _a = __read(React.useState('topLeft'), 2), anchorCorner = _a[0], setAnchorCorner = _a[1];
            return (React.createElement(React.Fragment, null,
                React.createElement(MenuSurfaceAnchor, null,
                    React.createElement(MenuSurface, { anchorCorner: anchorCorner, open: true },
                        React.createElement("div", { style: { padding: '1rem', width: '8rem' } },
                            "anchorCorner: ",
                            anchorCorner)),
                    React.createElement(Button, { raised: true, label: "Anchored Menu" })),
                React.createElement(Select, { value: anchorCorner, label: "anchorCorner", onChange: function (evt) { return setAnchorCorner(evt.currentTarget.value); }, options: [
                        'topLeft',
                        'topRight',
                        'bottomLeft',
                        'bottomRight',
                        'topStart',
                        'topEnd',
                        'bottomStart',
                        'bottomEnd'
                    ] })));
        }),
        React.createElement(DocsSubtitle, null, "Rendering through Portals"),
        React.createElement(DocsP, null, "Occasionally, you may find your menu being cut off from being inside a container that is styled to be `overflow:hidden`. RMWC provides a `renderToPortal` prop that lets you use React's portal functionality to render the menu dropdown in a different container."),
        React.createElement(DocsP, null, "You can specify any element or selector you want, but the simplest method is to pass `true` and use RMWC's built in `Portal` component."),
        React.createElement(DocsExample, { codeOnly: true }, /* jsx */ "\n          // Somewhere at the top level of your app\n          // Render the RMWC Portal\n          // You only have to do this once\n          import { h } from 'preact';\n          import { Portal } from '@pmwc/base';\n\n          export default function App() {\n            return (\n              <div>\n                ...\n                <Portal />\n              </div>\n            )\n          }\n        "),
        React.createElement(DocsP, null, "Now you can use the `renderToPortal` prop. Below is a contrived example of a menu being cut off due to `overflow: hidden`."),
        React.createElement(DocsExample, null, function Example() {
            var _a = __read(React.useState(true), 2), renderToPortal = _a[0], setRenderToPortal = _a[1];
            var options = ['Cookies', 'Pizza', 'Icecream'];
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { style: {
                        marginBottom: '10rem',
                        height: '3.5rem',
                        overflow: 'hidden'
                    } },
                    React.createElement(MenuSurfaceAnchor, null,
                        React.createElement(Button, { raised: true }, "Open Menu"),
                        React.createElement(Menu, { open: true, renderToPortal: renderToPortal }, options.map(function (o) { return (React.createElement(MenuItem, { key: o }, o)); })))),
                React.createElement(Checkbox, { checked: renderToPortal, onChange: function (evt) { return setRenderToPortal(evt.currentTarget.checked); }, label: "renderToPortal" })));
        }),
        React.createElement(DocProps, { src: propsSrc, components: [
                { displayName: 'Menu', component: Menu },
                { displayName: 'MenuItem', component: MenuItem },
                { displayName: 'MenuSurface', component: MenuSurface },
                { displayName: 'MenuSurfaceAnchor', component: MenuSurfaceAnchor },
                { displayName: 'SimpleMenu', component: SimpleMenu },
                { displayName: 'SimpleMenuSurface', component: SimpleMenuSurface }
            ] })));
}
export var galleryExample = (React.createElement("div", { "aria-hidden": "false", className: "mdc-menu  mdc-menu-surface--open mdc-menu-surface", style: { position: 'static' } },
    React.createElement("div", { role: "menu", className: "mdc-list mdc-menu__items mdc-list" },
        React.createElement("div", { role: "menuitem", className: "mdc-ripple-upgraded mdc-list-item" }, "Cookies"),
        React.createElement("div", { role: "menuitem", className: "mdc-ripple-upgraded mdc-list-item" }, "Pizza"),
        React.createElement("div", { role: "menuitem", className: "mdc-ripple-upgraded mdc-list-item" }, "Icecream"))));
