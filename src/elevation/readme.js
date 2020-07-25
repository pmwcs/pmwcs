import { __read } from "tslib";
import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsSubtitle, DocsP } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { Elevation } from '.';
export default function () {
    return (React.createElement(Docs, { title: "Elevation", lead: "Elevation is the relative distance between two surfaces along the z-axis.", module: "@rmwc/elevation", styles: ['@material/elevation/dist/mdc.elevation.css'], docsLink: "https://material.io/develop/web/components/elevation/", examples: examples },
        React.createElement(DocsExample, { label: "Elevation" },
            React.createElement(React.Fragment, null, Array(25)
                .fill(undefined)
                .map(function (val, i) { return (React.createElement(Elevation, { z: i, key: i },
                i,
                "dp")); }))),
        React.createElement(DocsExample, { label: "Transition" }, function Example() {
            var _a = __read(React.useState(0), 2), elevation = _a[0], setElevation = _a[1];
            return (React.createElement(Elevation, { z: elevation, transition: true, onMouseOver: function () { return setElevation(24); }, onMouseOut: function () { return setElevation(0); } },
                "Hover Me ",
                elevation,
                "dp"));
        }),
        React.createElement(DocsSubtitle, null, "Wrapping Children"),
        React.createElement(DocsP, null, "You can avoid adding extra DOM nodes by using the `wrap` prop on elevation. This will apply the classes directly to the child component. Additionally, Elevation is simply a `className`, so you can achieve the same effect by adding `className=\"mdc-elevation--z15\"`."),
        React.createElement(DocsExample, null,
            React.createElement(Elevation, { z: 21, wrap: true },
                React.createElement("span", null, "Wrapped!"))),
        React.createElement(DocProps, { src: propsSrc, components: [{ displayName: 'Elevation', component: Elevation }] })));
}
export var galleryExample = [2, 24].map(function (num) { return (React.createElement(Elevation, { key: num, z: num, style: {
        backgroundColor: 'var(--mdc-theme-primary)',
        width: '3rem',
        height: '3rem',
        lineHeight: '3rem',
        textAlign: 'center',
        margin: '0.5rem',
        borderRadius: '6px',
        display: 'inline-block'
    } })); });
