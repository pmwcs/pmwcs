import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { Icon } from '@rmwc/icon';
import { useClassNames, Tag, createComponent, createMemoComponent } from '@rmwc/base';
/** Grid List Component */
export var GridList = createComponent(function GridList(props, ref) {
    var _a;
    var tileGutter1 = props.tileGutter1, headerCaption = props.headerCaption, twolineCaption = props.twolineCaption, withIconAlignStart = props.withIconAlignStart, _b = props.tileAspect, tileAspect = _b === void 0 ? '1x1' : _b, children = props.children, rest = __rest(props, ["tileGutter1", "headerCaption", "twolineCaption", "withIconAlignStart", "tileAspect", "children"]);
    var className = useClassNames(props, [
        'mdc-grid-list',
        (_a = {
                'mdc-grid-list--tile-gutter-1': tileGutter1,
                'mdc-grid-list--header-caption': headerCaption,
                'mdc-grid-list--twoline-caption': twolineCaption,
                'mdc-grid-list--with-icon-align-start': withIconAlignStart
            },
            _a["mdc-grid-list--tile-aspect-" + (tileAspect || '')] = tileAspect,
            _a)
    ]);
    return (React.createElement(Tag, __assign({}, rest, { ref: ref, className: className }),
        React.createElement("ul", { className: "mdc-grid-list__tiles" }, children)));
});
/** The primary content for a Grid tile */
export var GridTilePrimary = createComponent(function GridTilePrimary(props, ref) {
    var className = useClassNames(props, ['mdc-grid-tile__primary']);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
/** The inner primary content for a Grid tile */
export var GridTilePrimaryContent = createComponent(function GridTilePrimaryContent(props, ref) {
    var className = useClassNames(props, ['mdc-grid-tile__primary-content']);
    return React.createElement(Tag, __assign({ tag: "img" }, props, { ref: ref, className: className }));
});
/** A grid tile */
export var GridTile = createComponent(function GridTile(props, ref) {
    var className = useClassNames(props, ['mdc-grid-tile']);
    return React.createElement(Tag, __assign({ tag: "li" }, props, { ref: ref, className: className }));
});
/** The secondary content for a Grid tile */
export var GridTileSecondary = createComponent(function GridTileSecondary(props, ref) {
    var className = useClassNames(props, ['mdc-grid-tile__secondary']);
    return React.createElement(Tag, __assign({ tag: "span" }, props, { ref: ref, className: className }));
});
/** The icon for a Grid tile. This is an instance of Icon component. */
export var GridTileIcon = createMemoComponent(function GridTileIcon(props, ref) {
    var className = useClassNames(props, ['mdc-grid-tile__icon']);
    return React.createElement(Icon, __assign({}, props, { ref: ref, className: className }));
});
/** The title for a Grid tile */
export var GridTileTitle = createComponent(function GridTileTitle(props, ref) {
    var className = useClassNames(props, ['mdc-grid-tile__title']);
    return React.createElement(Tag, __assign({ tag: "span" }, props, { ref: ref, className: className }));
});
/** Supporting Text for the Grid Tile */
export var GridTileTitleSupportText = createComponent(function GridTileTitleSupportText(props, ref) {
    var className = useClassNames(props, ['mdc-grid-tile__support-text']);
    return React.createElement(Tag, __assign({ tag: "span" }, props, { ref: ref, className: className }));
});
