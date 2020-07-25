import { h } from 'preact';
import { Docs, DocsExample, DocProps } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { LinearProgress } from '.';
export default function () {
    return (React.createElement(Docs, { title: "Linear Progress", lead: "Progress and activity indicators are visual indications of an app loading content.", module: "@rmwc/linear-progress", styles: ['@material/linear-progress/dist/mdc.linear-progress.css'], docsLink: "https://material.io/develop/web/components/linear-progress/", examples: examples },
        React.createElement(DocsExample, { label: "Default" },
            React.createElement(LinearProgress, { progress: 0.5 })),
        React.createElement(DocsExample, { label: "Buffered" },
            React.createElement(LinearProgress, { progress: 0.6, buffer: 0.8 })),
        React.createElement(DocsExample, { label: "Indeterminate" },
            React.createElement(LinearProgress, null)),
        React.createElement(DocsExample, { label: "Reversed" },
            React.createElement(LinearProgress, { progress: 0.2, reversed: true })),
        React.createElement(DocProps, { src: propsSrc, components: [
                { displayName: 'LinearProgress', component: LinearProgress }
            ] })));
}
export var galleryExample = (React.createElement(LinearProgress, { style: { minWidth: '10rem' }, progress: 0.6 }));
