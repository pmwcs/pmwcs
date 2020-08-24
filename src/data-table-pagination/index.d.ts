import { AnyComponent } from 'preact'

export interface DataTablePaginationProps {
  /**
   * The total number of rows.
   * To enable server side pagination for an unknown number of items, provide -1.
   */
  count?: number;
  /**
   * The zero-based index of the current page.
   */
  page?: number;
  /**
   * The number of rows per page.
   */
  rowsPerPage?: number;
  /**
   * Customizes the options of the rows per page select field.
   * If one option is available, no select field will be displayed.
   * `[10, 50, { value: -1, label: 'All' }]` the value and label keys will be
   * used respectively for the value and label of the option
   * @default [10, 25, 50, 100]
   */
  rowsPerPageOptions: Array<number | { value: number; label: string }>;
  /**
   * Callback fired when the page is changed.
   */
  onChangePage?: (event: Event) => void;
  /**
   * Callback fired when the number of rows per page is changed.
   */
  onChangeRowsPerPage?: (event: Event) => void;
  /**
   * Label for rows per page
   * @default 'Rows per page:'
   */
  labelRowsPerPage?: AnyComponent;
  /**
   * Customize the displayed rows label.
   * @default ({ from, to, count }) => ${from}-${to} of ${count !== -1 ? count : more than ${to}}
   */
  labelDisplayedRows?: ({ from, to, count }) => string;
}

export declare const DataTablePagination : AnyComponent<DataTablePaginationProps>;
