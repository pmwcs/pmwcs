import { __assign, __read } from "tslib";
import { h } from 'preact';
import { Docs, DocsExample, DocProps } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { GridList, GridTile, GridTileIcon, GridTilePrimary, GridTilePrimaryContent, GridTileSecondary, GridTileTitle, GridTileTitleSupportText } from '.';
import { Checkbox } from '../checkbox';
import { Select } from '../select';
export default function () {
    return (React.createElement(Docs, { title: "Grid Lists", lead: "Grid lists are an alternative to standard list views.", module: "@pmwc/grid-list", styles: ['@material/grid-list/dist/mdc.grid-list.css'], docsLink: "https://material.io/components/web/catalog/grid-lists/", examples: examples },
        React.createElement(DocsExample, null, function Example() {
            var _a = __read(React.useState({
                tileGutter1: false,
                headerCaption: false,
                twolineCaption: false,
                withIconAlignStart: false,
                tileAspect: '1x1'
            }), 2), state = _a[0], setState = _a[1];
            return (React.createElement(React.Fragment, null,
                React.createElement(GridList, { tileGutter1: state.tileGutter1, headerCaption: state.headerCaption, twolineCaption: state.twolineCaption, withIconAlignStart: state.withIconAlignStart, 
                    // @ts-ignore
                    tileAspect: state.tileAspect }, Array(8)
                    .fill(undefined)
                    .map(function (val, i) { return (React.createElement(GridTile, { key: i },
                    React.createElement(GridTilePrimary, null,
                        React.createElement(GridTilePrimaryContent, { src: "images/backgrounds/mb-bg-fb-06.png", alt: "test" })),
                    React.createElement(GridTileSecondary, null,
                        React.createElement(GridTileIcon, { icon: "info" }),
                        React.createElement(GridTileTitle, null,
                            "Tile ",
                            i + 1)))); })),
                [
                    'tileGutter1',
                    'headerCaption',
                    'twoLineCaption',
                    'withIconAlignStart'
                ].map(function (key) { return (React.createElement(Checkbox, { key: key, label: key, onChange: function (evt) {
                        var _a;
                        return setState(__assign(__assign({}, state), (_a = {}, _a[key] = evt.currentTarget.checked, _a)));
                    } })); }),
                React.createElement(Select, { value: state.tileAspect, onChange: function (evt) {
                        return setState(__assign(__assign({}, state), { tileAspect: String(evt.currentTarget.value) }));
                    }, label: "tileAspect", options: ['1x1', '16x9', '2x3', '3x2', '4x3', '3x4'] })));
        }),
        React.createElement(DocProps, { src: propsSrc, components: [
                { displayName: 'GridList', component: GridList },
                { displayName: 'GridTile', component: GridTile },
                { displayName: 'GridTileIcon', component: GridTileIcon },
                { displayName: 'GridTilePrimary', component: GridTilePrimary },
                { displayName: 'GridTileSecondary', component: GridTileSecondary },
                {
                    displayName: 'GridTileTitleSupportText',
                    component: GridTileTitleSupportText
                },
                { displayName: 'GridTileTitle', component: GridTileTitle }
            ] })));
}
export var galleryExample = (React.createElement(GridList, { tileGutter1: true, style: { transform: 'scale(0.5)' } }, Array(4)
    .fill(undefined)
    .map(function (val, i) { return (React.createElement(GridTile, { key: i, style: { maxWidth: '100px' } },
    React.createElement(GridTilePrimary, null,
        React.createElement(GridTilePrimaryContent, { src: "images/backgrounds/mb-bg-fb-06.png", alt: "test" })),
    React.createElement(GridTileSecondary, null,
        React.createElement(GridTileIcon, { icon: "info" }),
        React.createElement(GridTileTitle, null,
            "Tile ",
            i + 1)))); })));
