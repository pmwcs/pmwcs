import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { getDisplayName, Tag, useClassNames, createComponent } from '@pmwc/base';
/** A Grid component */
export var Grid = createComponent(function Grid(props, ref) {
    var _a;
    var children = props.children, fixedColumnWidth = props.fixedColumnWidth, align = props.align, rest = __rest(props, ["children", "fixedColumnWidth", "align"]);
    var needsInnerGrid = !(getDisplayName(children) === 'GridRow');
    var className = useClassNames(props, [
        'mdc-layout-grid',
        (_a = {},
            _a["mdc-layout-grid--align-" + (align || '')] = props.align !== undefined,
            _a['mdc-layout-grid--fixed-column-width'] = fixedColumnWidth,
            _a)
    ]);
    return (React.createElement(Tag, __assign({}, rest, { className: className, ref: ref }), !!needsInnerGrid ? React.createElement(GridRow, null, children) : children));
});
/** A Grid cell */
export var GridCell = createComponent(function GridCell(props, ref) {
    var _a;
    var span = props.span, phone = props.phone, tablet = props.tablet, desktop = props.desktop, order = props.order, align = props.align, rest = __rest(props, ["span", "phone", "tablet", "desktop", "order", "align"]);
    var className = useClassNames(props, [
        'mdc-layout-grid__cell',
        (_a = {},
            _a["mdc-layout-grid__cell--order-" + (order || '')] = order !== undefined,
            _a["mdc-layout-grid__cell--align-" + (align || '')] = align !== undefined,
            _a["mdc-layout-grid__cell--span-" + (span || '')] = span !== undefined,
            _a["mdc-layout-grid__cell--span-" + (phone || '') + "-phone"] = phone !== undefined,
            _a["mdc-layout-grid__cell--span-" + (tablet || '') + "-tablet"] = tablet !== undefined,
            _a["mdc-layout-grid__cell--span-" + (desktop || '') + "-desktop"] = props.desktop !== undefined,
            _a)
    ]);
    return React.createElement(Tag, __assign({}, rest, { ref: ref, className: className }));
});
/** By default, an inner grid component is included inside of <Grid>. Use GridRow when doing nested Grids. */
export var GridRow = createComponent(function GridRow(props, ref) {
    var className = useClassNames(props, ['mdc-layout-grid__inner']);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
GridRow.displayName = 'GridRow';
