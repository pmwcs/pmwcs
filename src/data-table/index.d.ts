import { AnyComponent } from 'preact'

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

export declare const DataTable : AnyComponent<DataTableProps>

/** The data table content. */
export interface DataTableContentProps {}

export declare const DataTableContent : AnyComponent<DataTableContentProps>

/** A header for the data table. */
export interface DataTableHeadProps {}

export declare const DataTableHead : AnyComponent<DataTableHeadProps>

/** A body for the data table. */
export interface DataTableBodyProps {}

export declare const DataTableBody : AnyComponent<DataTableBodyProps>

/** A row for the data table. */
export interface DataTableRowProps {
  /** Styles the row in a selected state. */
  selected?: boolean;
  /** Styles the row in a bolder activated state. */
  activated?: boolean;
}

export declare const DataTableRow : AnyComponent<DataTableRowProps>

/** A header cell for the data table. */
export interface DataTableHeadCellProps extends SharedDataTableCellProps {
  /** Make the column sortable. Null for not sorted, 1 for ascending, and -1 for descending. */
  sort?: null | number;
  /** A callback for when the sorting method changes. Null for not sorted, 1 for ascending, and -1 for descending.*/
  onSortChange?: (dir: null | number) => void;
  /** Children to pass to the cell. */
  children?: React.ReactNode;
}

export declare const DataTableHeadCell : AnyComponent<DataTableHeadCellProps>

/** A cell for the DataTable */
export interface DataTableCellProps extends SharedDataTableCellProps {}

export declare const DataTableCell : AnyComponent<DataTableCellProps>

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

export declare const SimpleDataTable : AnyComponent<SimpleDataTableProps>
