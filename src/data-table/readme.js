import { __assign, __read } from "tslib";
import { h } from 'preact';
import { Docs, DocsExample, DocsSubtitle, DocProps, DocsP } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { DataTable, DataTableContent, DataTableHead, DataTableBody, DataTableHeadCell, DataTableRow, DataTableCell, SimpleDataTable } from '.';
import { Select } from '../select';
import { Checkbox } from '../checkbox';
import { Switch } from '../switch';
export default function () {
    return (React.createElement(Docs, { title: "Data Tables", lead: "Data tables display sets of data.", module: "@pmwc/data-table", styles: [
            '@material/data-table/dist/mdc.data-table.css',
            '@pmwc/data-table/data-table.css',
            '@pmwc/icon/icon.css'
        ], examples: examples },
        React.createElement(DocsSubtitle, null, "Standard Table"),
        React.createElement(DocsP, null, "The DataTable components are intended to be flexible, properly styled, Material compliant HTML tables. Because of the complexities of working with datasets (especially large ones), the DataTable component DOES NOT handle pagination, data fetching, sorting, or performance of long lists."),
        React.createElement(DocsExample, null, function Example() {
            var _a = __read(React.useState(null), 2), sortDir = _a[0], setSortDir = _a[1];
            return (React.createElement(DataTable, null,
                React.createElement(DataTableContent, null,
                    React.createElement(DataTableHead, null,
                        React.createElement(DataTableRow, null,
                            React.createElement(DataTableHeadCell, null, "Item"),
                            React.createElement(DataTableHeadCell, { alignEnd: true, sort: sortDir, onSortChange: function (sortDir) {
                                    // @ts-ignore
                                    setSortDir(sortDir);
                                    console.log(sortDir);
                                } }, "Quantity (Click Me)"),
                            React.createElement(DataTableHeadCell, { alignEnd: true }, "Unit price"))),
                    React.createElement(DataTableBody, null,
                        React.createElement(DataTableRow, null,
                            React.createElement(DataTableCell, null, "Cookies"),
                            React.createElement(DataTableCell, { alignEnd: true }, "25"),
                            React.createElement(DataTableCell, { alignEnd: true }, "$2.90")),
                        React.createElement(DataTableRow, { selected: true },
                            React.createElement(DataTableCell, null, "Pizza"),
                            React.createElement(DataTableCell, { alignEnd: true }, "50"),
                            React.createElement(DataTableCell, { alignEnd: true }, "$1.25")),
                        React.createElement(DataTableRow, null,
                            React.createElement(DataTableCell, null, "Icecream"),
                            React.createElement(DataTableCell, { alignEnd: true }, "10"),
                            React.createElement(DataTableCell, { alignEnd: true }, "$2.35"))))));
        }),
        React.createElement(DocsSubtitle, null, "Scrollable / Sticky Rows and Columns"),
        React.createElement(DocsP, null, "You can set a fixed sized for your table container to make it scrollable. Additionally, you can specify `stickyRows` or `stickyColumns` to affix rows or columns. Currently, only 1 row / column is supported but more may be supported in a future release."),
        React.createElement(DocsExample, null, function Example() {
            var _a = __read(React.useState(0), 2), rows = _a[0], setRows = _a[1];
            var _b = __read(React.useState(0), 2), cols = _b[0], setCols = _b[1];
            var sampleColumns = Array(7).fill(undefined);
            var sampleRows = Array(50).fill(undefined);
            return (React.createElement(React.Fragment, null,
                React.createElement(DataTable, { style: { height: '300px', width: '375px' }, stickyRows: rows, stickyColumns: cols },
                    React.createElement(DataTableContent, null,
                        React.createElement(DataTableHead, null,
                            React.createElement(DataTableRow, null,
                                React.createElement(DataTableHeadCell, null, "Label"),
                                sampleColumns.map(function (v, i) { return (React.createElement(DataTableHeadCell, { key: i }, "Header")); }))),
                        React.createElement(DataTableBody, null, sampleRows.map(function (v, i) { return (React.createElement(DataTableRow, { key: i },
                            React.createElement(DataTableCell, null, "Label"),
                            React.createElement(DataTableCell, null,
                                "R",
                                i,
                                " C1"),
                            React.createElement(DataTableCell, null,
                                "R",
                                i,
                                " C2"),
                            React.createElement(DataTableCell, null,
                                "R",
                                i,
                                " C3"),
                            React.createElement(DataTableCell, null,
                                "R",
                                i,
                                " C4"),
                            React.createElement(DataTableCell, null,
                                "R",
                                i,
                                " C5"),
                            React.createElement(DataTableCell, null,
                                "R",
                                i,
                                " C6"),
                            React.createElement(DataTableCell, null,
                                "R",
                                i,
                                " C7"))); })))),
                React.createElement("div", { className: "doc-controls" },
                    React.createElement(Select, { label: "Sticky Rows", options: ['0', '1'], value: String(rows), onChange: function (evt) { return setRows(Number(evt.currentTarget.value)); } }),
                    React.createElement(Select, { label: "Sticky Cols", options: ['0', '1'], value: String(cols), onChange: function (evt) { return setCols(Number(evt.currentTarget.value)); } }))));
        }),
        React.createElement(DocsSubtitle, null, "Form Controls"),
        React.createElement(DocsP, null, "DataTables play nice with the rest of the RMWC form controls. You are responsible for scripting your own selection behavior."),
        React.createElement(DocsExample, null, function Example() {
            var _a = __read(React.useState({}), 2), checked = _a[0], setChecked = _a[1];
            var sampleRows = new Array(5).fill(undefined);
            return (React.createElement(DataTable, null,
                React.createElement(DataTableContent, null,
                    React.createElement(DataTableHead, null,
                        React.createElement(DataTableRow, null,
                            React.createElement(DataTableHeadCell, { hasFormControl: true },
                                React.createElement(Checkbox, null)),
                            React.createElement(DataTableHeadCell, null, "Label"),
                            React.createElement(DataTableHeadCell, null, "Header"),
                            React.createElement(DataTableHeadCell, null, "Header"),
                            React.createElement(DataTableHeadCell, null, "Toggle"))),
                    React.createElement(DataTableBody, null, sampleRows.map(function (v, i) { return (
                    // @ts-ignore
                    React.createElement(DataTableRow, { key: i, selected: checked[i] },
                        React.createElement(DataTableCell, { hasFormControl: true },
                            React.createElement(Checkbox
                            // @ts-ignore
                            , { 
                                // @ts-ignore
                                checked: checked[i], onChange: function (evt) {
                                    // @ts-ignore
                                    checked[i] = evt.currentTarget.checked;
                                    setChecked(__assign({}, checked));
                                } })),
                        React.createElement(DataTableCell, null, "Label"),
                        React.createElement(DataTableCell, null,
                            React.createElement(Select, { placeholder: "--Select--", options: ['Cookies', 'Pizza', 'Icecream'] })),
                        React.createElement(DataTableCell, null,
                            "R",
                            i,
                            " C3"),
                        React.createElement(DataTableCell, null,
                            React.createElement(Switch, null)))); })))));
        }),
        React.createElement(DocsSubtitle, null, "Simplified Usage"),
        React.createElement(DocsP, null, "If you just need to throw a table on the screen, you can pass an array of data to SimpleDataTable."),
        React.createElement(DocsExample, null,
            React.createElement(SimpleDataTable, { getRowProps: function (row) {
                    return row[1] > 100 ? { activated: true } : {};
                }, getCellProps: function (cell, index, isHead) {
                    var props = { isNumeric: index > 0, style: undefined };
                    return !isHead && index === 2 && !cell.includes('$')
                        ? __assign(__assign({}, props), { style: { color: 'red' } }) : props;
                }, headers: [['Item', 'Quantity', 'Value']], data: [
                    ['Cookies', 25, '$12.40'],
                    ['Pizza', 11, '$10.43'],
                    ['Icecream', 3, '1.43'],
                    ['Candy', 72, '$22.45'],
                    ['Cakes', 101, '$215.05'],
                    ['Muffins', 3, '$5.97']
                ] })),
        React.createElement(DocProps, { src: propsSrc, components: [
                { displayName: 'DataTable', component: DataTable },
                { displayName: 'DataTableRow', component: DataTableRow },
                { displayName: 'DataTableCell', component: DataTableCell },
                { displayName: 'DataTableHead', component: DataTableHead },
                { displayName: 'DataTableBody', component: DataTableBody },
                { displayName: 'DataTableHeadCell', component: DataTableHeadCell },
                { displayName: 'SimpleDataTable', component: SimpleDataTable }
            ] })));
}
export var galleryExample = (React.createElement(DataTable, { style: { transform: 'scale(0.66)' } },
    React.createElement(DataTableContent, null,
        React.createElement(DataTableHead, null,
            React.createElement(DataTableRow, null,
                React.createElement(DataTableHeadCell, null, "Item"),
                React.createElement(DataTableHeadCell, { alignEnd: true }, "Quantity (Click Me)"),
                React.createElement(DataTableHeadCell, { alignEnd: true }, "Unit price"))),
        React.createElement(DataTableBody, null,
            React.createElement(DataTableRow, null,
                React.createElement(DataTableCell, null, "Cookies"),
                React.createElement(DataTableCell, { alignEnd: true }, "25"),
                React.createElement(DataTableCell, { alignEnd: true }, "$2.90")),
            React.createElement(DataTableRow, { activated: true },
                React.createElement(DataTableCell, null, "Pizza"),
                React.createElement(DataTableCell, { alignEnd: true }, "50"),
                React.createElement(DataTableCell, { alignEnd: true }, "$1.25")),
            React.createElement(DataTableRow, null,
                React.createElement(DataTableCell, null, "Icecream"),
                React.createElement(DataTableCell, { alignEnd: true }, "10"),
                React.createElement(DataTableCell, { alignEnd: true }, "$2.35"))))));
