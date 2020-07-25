import { h } from 'preact';
import { Docs, DocsExample, DocProps } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { Grid, GridCell, GridRow } from '.';
export default function () {
    return (React.createElement(Docs, { title: "Layout Grid", lead: "Material design\u2019s responsive UI is based on a column-variate grid layout. It has 12 columns on desktop, 8 columns on tablet and 4 columns on phone.", module: "@rmwc/grid", styles: ['@material/layout-grid/dist/mdc.layout-grid.css'], docsLink: "https://material.io/develop/web/components/layout-grid/", examples: examples },
        React.createElement(DocsExample, { label: "Standard Grid" },
            React.createElement(Grid, null,
                React.createElement(GridCell, { span: 4 }, "1"),
                React.createElement(GridCell, { span: 4 }, "2"),
                React.createElement(GridCell, { span: 4 }, "3"))),
        React.createElement(DocsExample, { label: "Sub Grids" },
            React.createElement(Grid, null,
                React.createElement(GridRow, null,
                    React.createElement(GridCell, { span: 6 }, "1"),
                    React.createElement(GridCell, { span: 6 },
                        React.createElement(GridRow, null,
                            React.createElement(GridCell, { span: 6 }, "a"),
                            React.createElement(GridCell, { span: 6 }, "b")))))),
        React.createElement(DocProps, { src: propsSrc, components: [
                { displayName: 'Grid', component: Grid },
                { displayName: 'GridCell', component: GridCell },
                { displayName: 'GridRow', component: GridRow }
            ] })));
}
export var galleryExample = (React.createElement(Grid, null, [1, 2, 3].map(function (num) { return (React.createElement(GridCell, { key: num, style: {
        textAlign: 'center',
        background: 'rgba(0,0,0,.1)',
        padding: '1rem 0'
    }, span: 4 }, num)); })));
