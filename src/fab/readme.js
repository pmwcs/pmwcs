import { h } from 'preact';
import { Docs, DocsExample, DocProps } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { Fab } from '.';
export default function () {
    return (React.createElement(Docs, { title: "Fabs", lead: "A floating action button (FAB) represents the primary action of a screen.", module: "@rmwc/fab", styles: [
            '@material/fab/dist/mdc.fab.css',
            '@rmwc/icon/icon.css',
            '@material/ripple/dist/mdc.ripple.css'
        ], docsLink: "https://material.io/develop/web/components/buttons/floating-action-buttons/", examples: examples },
        React.createElement(DocsExample, { label: "Default" },
            React.createElement(Fab, { icon: "favorite" })),
        React.createElement(DocsExample, { label: "Mini" },
            React.createElement(Fab, { icon: "favorite", mini: true })),
        React.createElement(DocsExample, { label: "Extended" },
            React.createElement(React.Fragment, null,
                React.createElement(Fab, { icon: "add", label: "Create" }),
                React.createElement(Fab, { trailingIcon: "add", label: "Create" }),
                React.createElement(Fab, { label: "Label only" }))),
        React.createElement(DocsExample, { label: "Theming" },
            React.createElement(React.Fragment, null,
                React.createElement(Fab, { icon: "favorite_outline", theme: ['primaryBg', 'onPrimary'] }),
                React.createElement(Fab, { icon: "delete", style: { backgroundColor: 'var(--mdc-theme-error)' }, theme: ['onError'] }))),
        React.createElement(DocProps, { src: propsSrc, components: [{ displayName: 'Fab', component: Fab }] })));
}
export var galleryExample = React.createElement(Fab, { icon: "add" });
