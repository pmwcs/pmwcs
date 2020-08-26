# Data Table Pagination `PMWC ADDON`

Pagination for data tables.

- Module **@pmwc/data-table-pagination**
- Import styles:
  - Using CSS Loader
    - import '@pmwc/data-table-pagination/styles';
  - Or include stylesheets
    - **'@pmwc/data-table-pagination/data-table-pagination.css'**
    - **'@pmwc/icon-button/styles'**
    - **'@pmwc/select/styles'**

## Uncontrolled

```jsx
<DataTablePagination
  defaultPage={1}
  count={12}
  onChangePage={(evt, page) => {}}
  onChangeRowsPerPage={(evt, rowsPerPage) => {}}
/>
```

## Controlled

```jsx
function Controlled ({ page: page_, count = 55 }) {
  const [page, setPage] = useState(page_)
  const rowsPerPageOptions = [
    10, 25, { value: -1, label: 'Todas' }
  ]
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0])

  return (
    <DataTablePagination
      count={count}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={rowsPerPageOptions}
      onChangePage={(_, page) => setPage(page)}
      onChangeRowsPerPage={(_, rowsPerPage) => setRowsPerPage(rowsPerPage)}
      labelRowsPerPage='Filas por página'
      labelDisplayedRows={({ from, to, count }) => `del ${from} a ${to} ${count === -1 ? '' : `de ${count}`}`}
    />
  )
}
```

## DataTablePagination
The DataTablePagination Component.

### Props

| Name | Type | Description |
|------|------|-------------|
| `count` | `number` | The total number of rows. To enable server side pagination for an unknown number of items, provide -1. |
| `page` | `number` | The zero-based index of the current page. |
| `rowsPerPage` | `number` | The number of rows per page. |
| `rowsPerPageOptions` | `Array<number \| { value: number; label: string }>` | Customizes the options of the rows per page select field. <br> If one option is available, no select field will be displayed. <br> `[10, 50, { value: -1, label: 'All' }]` the value and label keys will be used respectively for the value and label of the option. <br> default is `[10, 25, 50, 100]` |
| `onChangePage` | `(event: Event) => void` | Callback fired when the page is changed. |
| `onChangeRowsPerPage` | `(event: Event) => void` | Callback fired when the number of rows per page is changed. |
| `labelRowsPerPage` | `AnyComponent` | Label for rows per page. Default 'Rows per page:' |
| `labelDisplayedRows` | `({ from, to, count }) => string` | Customize the displayed rows label. Default `({ from, to, count }) => ${from}-${to} of ${count !== -1 ? count : more than ${to}}` |
