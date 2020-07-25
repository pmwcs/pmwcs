import { __assign, __rest } from "tslib";
import React, { useContext } from 'react';
import { Icon } from '@rmwc/icon';
import { useClassNames, Tag, createComponent, DataTableHeadContext, DataTableContext } from '@rmwc/base';
/** The DataTable Component. */
export var DataTable = createComponent(function DataTable(props, ref) {
    var stickyColumns = props.stickyColumns, stickyRows = props.stickyRows, rest = __rest(props, ["stickyColumns", "stickyRows"]);
    var className = useClassNames(props, [
        'mdc-data-table',
        {
            'rmwc-data-table--sticky-columns': !!stickyColumns,
            'rmwc-data-table--sticky-columns-1': !!stickyColumns,
            'rmwc-data-table--sticky-rows': !!stickyRows,
            'rmwc-data-table--sticky-rows-1': !!stickyRows
        }
    ]);
    return (React.createElement(DataTableContext.Provider, { value: true },
        React.createElement(Tag, __assign({}, rest, { ref: ref, className: className }))));
});
/** The data table content. */
export var DataTableContent = createComponent(function DataTableContent(props, ref) {
    var className = useClassNames(props, ['mdc-data-table__table']);
    return React.createElement(Tag, __assign({ tag: "table" }, props, { ref: ref, className: className }));
});
/** A header for the data table. */
export var DataTableHead = createComponent(function DataTableHead(props, ref) {
    var className = useClassNames(props, ['rmwc-data-table__head']);
    return (React.createElement(DataTableHeadContext.Provider, { value: true },
        React.createElement(Tag, __assign({ tag: "thead" }, props, { ref: ref, className: className }))));
});
/** A body for the data table. */
export var DataTableBody = createComponent(function DataTableBody(props, ref) {
    var className = useClassNames(props, ['mdc-data-table__content']);
    return React.createElement(Tag, __assign({ tag: "tbody" }, props, { ref: ref, className: className }));
});
/** A row for the data table. */
export var DataTableRow = createComponent(function DataTableRow(props, ref) {
    var isHeaderRow = useContext(DataTableHeadContext);
    var activated = props.activated, selected = props.selected, rest = __rest(props, ["activated", "selected"]);
    var className = useClassNames(props, [
        'rmwc-data-table__row',
        {
            'mdc-data-table__header-row': isHeaderRow,
            'mdc-data-table__row': !isHeaderRow,
            'mdc-data-table__row--selected': props.selected || props.activated,
            'rmwc-data-table__row--activated': props.activated
        }
    ]);
    return React.createElement(Tag, __assign({ tag: "tr" }, rest, { ref: ref, className: className }));
});
var DataTableSortIcon = React.memo(function DataTableSortIcon() {
    return (React.createElement(Icon, { className: "rmwc-data-table__sort-icon", icon: React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24" },
            React.createElement("path", { fill: "currentColor", d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" })) }));
});
/** A header cell for the data table. */
export var DataTableHeadCell = createComponent(function DataTableHeadCell(props, ref) {
    var alignStart = props.alignStart, alignMiddle = props.alignMiddle, alignEnd = props.alignEnd, isNumeric = props.isNumeric, sort = props.sort, onSortChange = props.onSortChange, onClick = props.onClick, children = props.children, hasFormControl = props.hasFormControl, rest = __rest(props, ["alignStart", "alignMiddle", "alignEnd", "isNumeric", "sort", "onSortChange", "onClick", "children", "hasFormControl"]);
    var className = useClassNames(props, [
        'rmwc-data-table__cell',
        'mdc-data-table__header-cell',
        {
            'rmwc-data-table__head-cell--sortable': sort !== undefined,
            'rmwc-data-table__head-cell--sorted': !!sort,
            'rmwc-data-table__head-cell--sorted-ascending': sort === 1,
            'rmwc-data-table__head-cell--sorted-descending': sort === -1,
            'mdc-data-table__header-cell--checkbox': hasFormControl,
            'mdc-data-table__header-cell--numeric': isNumeric,
            'rmwc-data-table__cell--align-start': alignStart,
            'rmwc-data-table__cell--align-middle': alignMiddle,
            'rmwc-data-table__cell--align-end': alignEnd
        }
    ]);
    var onClickProp = sort !== undefined
        ? {
            onClick: function (evt) {
                onSortChange &&
                    onSortChange(sort === null ? 1 : sort === 1 ? -1 : null);
                onClick && onClick(evt);
            }
        }
        : {};
    return (React.createElement(Tag, __assign({ tag: "th" }, rest, onClickProp, { className: className, ref: ref, role: "columnheader", scope: "col" }),
        sort !== undefined && React.createElement(DataTableSortIcon, null),
        children));
});
/** A cell for the DataTable */
export var DataTableCell = createComponent(function DataTableCell(props, ref) {
    var alignStart = props.alignStart, alignMiddle = props.alignMiddle, alignEnd = props.alignEnd, isNumeric = props.isNumeric, hasFormControl = props.hasFormControl, rest = __rest(props, ["alignStart", "alignMiddle", "alignEnd", "isNumeric", "hasFormControl"]);
    var className = useClassNames(props, [
        'mdc-data-table__cell',
        'rmwc-data-table__cell',
        {
            'mdc-data-table__cell--numeric': isNumeric,
            'mdc-data-table__cell--checkbox': hasFormControl,
            'rmwc-data-table__cell--align-start': props.alignStart,
            'rmwc-data-table__cell--align-middle': props.alignMiddle,
            'rmwc-data-table__cell--align-end': props.alignEnd
        }
    ]);
    return React.createElement(Tag, __assign({ tag: "td" }, rest, { ref: ref, className: className }));
});
/** A simple data table to render matrices. */
export function SimpleDataTable(props) {
    var data = props.data, headers = props.headers, _a = props.getRowProps, getRowProps = _a === void 0 ? function (row, index, isHead) { return ({}); } : _a, _b = props.getCellProps, getCellProps = _b === void 0 ? function (row, index, isHead) { return ({}); } : _b, rest = __rest(props, ["data", "headers", "getRowProps", "getCellProps"]);
    return (React.createElement(DataTable, __assign({}, rest),
        React.createElement(DataTableContent, null,
            !!headers && (React.createElement(DataTableHead, null, headers.map(function (row, i) { return (React.createElement(DataTableRow, __assign({ key: i }, getRowProps(row, i, true)), row.map(function (cell, j) { return (React.createElement(DataTableHeadCell, __assign({ key: j }, getCellProps(cell, j, true)), cell)); }))); }))),
            React.createElement(DataTableBody, null, data.map(function (row, i) { return (React.createElement(DataTableRow, __assign({ key: i }, getRowProps(row, i, false)), row.map(function (cell, j) { return (React.createElement(DataTableCell, __assign({ key: j }, getCellProps(cell, j, false)), cell)); }))); })))));
}
