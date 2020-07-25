import * as RMWC from '@rmwc/types';
import { h } from 'preact';
interface SharedDataTableCellProps {
    /** Changes alignment for numeric columns */
    isNumeric?: boolean;
    /** Align content to the start of the cell. */
    alignStart?: boolean;
    /** Align content to the middle of the cell. */
    alignMiddle?: boolean;
    /** Align content to the end of the cell. */
    alignEnd?: boolean;
    /** Optionally Remove padding on the cell for checkboxes, radios, and switches. */
    hasFormControl?: boolean;
}
/** The DataTable Component. */
export interface DataTableProps {
    /** The number of rows to affix to the top of the table when scrolling. */
    stickyRows?: number;
    /** The number of columns to affix to the side of the table when scrolling. */
    stickyColumns?: number;
}
/** The DataTable Component. */
export declare const DataTable: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<DataTableProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** The data table content. */
export interface DataTableContentProps {
}
/** The data table content. */
export declare const DataTableContent: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<DataTableContentProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A header for the data table. */
export interface DataTableHeadProps {
}
/** A header for the data table. */
export declare const DataTableHead: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<DataTableHeadProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A body for the data table. */
export interface DataTableBodyProps {
}
/** A body for the data table. */
export declare const DataTableBody: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<DataTableBodyProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A row for the data table. */
export interface DataTableRowProps {
    /** Styles the row in a selected state. */
    selected?: boolean;
    /** Styles the row in a bolder activated state. */
    activated?: boolean;
}
/** A row for the data table. */
export declare const DataTableRow: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<DataTableRowProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A header cell for the data table. */
export interface DataTableHeadCellProps extends SharedDataTableCellProps {
    /** Make the column sortable. Null for not sorted, 1 for ascending, and -1 for descending. */
    sort?: null | number;
    /** A callback for when the sorting method changes. Null for not sorted, 1 for ascending, and -1 for descending.*/
    onSortChange?: (dir: null | number) => void;
    /** Children to pass to the cell. */
    children?: React.ReactNode;
}
/** A header cell for the data table. */
export declare const DataTableHeadCell: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<DataTableHeadCellProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A cell for the DataTable */
export interface DataTableCellProps extends SharedDataTableCellProps {
}
/** A cell for the DataTable */
export declare const DataTableCell: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<DataTableCellProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A simple data table to render matrices. */
export interface SimpleDataTableProps extends DataTableProps {
    /** Data to render. */
    data: Array<any[]>;
    /** Table headers to render. */
    headers?: Array<any[]>;
    /** A function that allows you to return custom props for a row. */
    getRowProps?: (row: any[], index: number, isHead: boolean) => Object;
    /** A function that allows you to return custom props for a cell. */
    getCellProps?: (cell: any[], index: number, isHead: boolean) => Object;
}
/** A simple data table to render matrices. */
export declare function SimpleDataTable(props: SimpleDataTableProps): JSX.Element;
export {};
