import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { memo } from 'preact/compat'

import { Icon } from '@pmwc/icon';
import {
  useClassNames,
  Tag,
  createComponent,
  DataTableHeadContext,
  DataTableContext
} from '@pmwc/base';

/** The DataTable Component. */
export const DataTable = createComponent(function DataTable(
  props,
  ref
) {
  const { stickyColumns, stickyRows, ...rest } = props;
  const className = useClassNames(props, [
    'mdc-data-table',
    {
      'rmwc-data-table--sticky-columns': !!stickyColumns,
      'rmwc-data-table--sticky-columns-1': !!stickyColumns,
      'rmwc-data-table--sticky-rows': !!stickyRows,
      'rmwc-data-table--sticky-rows-1': !!stickyRows
    }
  ]);
  return (
    <DataTableContext.Provider value={true}>
      <Tag {...rest} ref={ref} className={className} />
    </DataTableContext.Provider>
  );
});

/** The data table content. */
export const DataTableContent = createComponent(
  function DataTableContent(props, ref) {
    const className = useClassNames(props, ['mdc-data-table__table']);
    return <Tag tag="table" {...props} ref={ref} className={className} />;
  }
);

/** A header for the data table. */
export const DataTableHead = createComponent(
  function DataTableHead(props, ref) {
    const className = useClassNames(props, ['rmwc-data-table__head']);
    return (
      <DataTableHeadContext.Provider value={true}>
        <Tag tag="thead" {...props} ref={ref} className={className} />
      </DataTableHeadContext.Provider>
    );
  }
);

/** A body for the data table. */
export const DataTableBody = createComponent(
  function DataTableBody(props, ref) {
    const className = useClassNames(props, ['mdc-data-table__content']);
    return <Tag tag="tbody" {...props} ref={ref} className={className} />;
  }
);

/** A row for the data table. */
export const DataTableRow = createComponent(
  function DataTableRow(props, ref) {
    const isHeaderRow = useContext(DataTableHeadContext);
    const { activated, selected, ...rest } = props;
    const className = useClassNames(props, [
      'rmwc-data-table__row',
      {
        'mdc-data-table__header-row': isHeaderRow,
        'mdc-data-table__row': !isHeaderRow,
        'mdc-data-table__row--selected': props.selected || props.activated,
        'rmwc-data-table__row--activated': props.activated
      }
    ]);
    return <Tag tag="tr" {...rest} ref={ref} className={className} />;
  }
);

const DataTableSortIcon = memo(function DataTableSortIcon() {
  return (
    <Icon
      className="rmwc-data-table__sort-icon"
      icon={
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
          />
        </svg>
      }
    />
  );
});

/** A header cell for the data table. */
export const DataTableHeadCell = createComponent(
  function DataTableHeadCell(props, ref) {
    const {
      alignStart,
      alignMiddle,
      alignEnd,
      isNumeric,
      sort,
      onSortChange,
      onClick,
      children,
      hasFormControl,
      ...rest
    } = props;

    const className = useClassNames(props, [
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

    const onClickProp =
      sort !== undefined
        ? {
            onClick: (evt) => {
              onSortChange &&
                onSortChange(sort === null ? 1 : sort === 1 ? -1 : null);

              onClick && onClick(evt);
            }
          }
        : {};

    return (
      <Tag
        tag="th"
        {...rest}
        {...onClickProp}
        className={className}
        ref={ref}
        role="columnheader"
        scope="col"
      >
        {sort !== undefined && <DataTableSortIcon />}
        {children}
      </Tag>
    );
  }
);

/** A cell for the DataTable */
export const DataTableCell = createComponent(
  function DataTableCell(props, ref) {
    const {
      alignStart,
      alignMiddle,
      alignEnd,
      isNumeric,
      hasFormControl,
      ...rest
    } = props;
    const className = useClassNames(props, [
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
    return <Tag tag="td" {...rest} ref={ref} className={className} />;
  }
);

/** A simple data table to render matrices. */
export function SimpleDataTable(props) {
  const {
    data,
    headers,
    getRowProps = (row, index, isHead) => ({}),
    getCellProps = (row, index, isHead) => ({}),
    ...rest
  } = props;

  return (
    <DataTable {...rest}>
      <DataTableContent>
        {!!headers && (
          <DataTableHead>
            {headers.map((row, i) => (
              <DataTableRow key={i} {...getRowProps(row, i, true)}>
                {row.map((cell, j) => (
                  <DataTableHeadCell key={j} {...getCellProps(cell, j, true)}>
                    {cell}
                  </DataTableHeadCell>
                ))}
              </DataTableRow>
            ))}
          </DataTableHead>
        )}
        <DataTableBody>
          {data.map((row, i) => (
            <DataTableRow key={i} {...getRowProps(row, i, false)}>
              {row.map((cell, j) => (
                <DataTableCell key={j} {...getCellProps(cell, j, false)}>
                  {cell}
                </DataTableCell>
              ))}
            </DataTableRow>
          ))}
        </DataTableBody>
      </DataTableContent>
    </DataTable>
  );
}
