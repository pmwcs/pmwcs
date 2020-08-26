import { h } from 'preact'
import { createComponent, useControlled, useClassNames } from '@pmwc/base'
import { Typography } from '@pmwc/typography'
import { IconButton } from '@pmwc/icon-button'
import { Select } from '@pmwc/select'

const BEM = 'pmwc-table-pagination'

const defaultLabelDisplayedRows = ({ from, to, count }) => `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`

const getFromTo = (page, count, rowsPerPage) => {
  if (page === -1 || rowsPerPage === -1) {
    return { isFirst: true, isLast: true, from: 1, to: count }
  }
  const to_ = page * rowsPerPage
  const from = to_ - rowsPerPage + 1
  const to = count >= 0 ? Math.min(to_, count) : to_
  const isFirst = page === 1
  const isLast = page === Math.ceil(count / rowsPerPage)
  return { isFirst, isLast, from, to }
}

const getNewPage = ({ page, count, rowsPerPage, newRowsPerPage }) => {
  const row_ = page * rowsPerPage
  const row = count !== -1 ? Math.min(row_, count) : row_
  const newPage = newRowsPerPage === -1 ? newRowsPerPage : Math.ceil(row / newRowsPerPage)
  return newPage
}

const rowOptionValues = (rowsPerPageOptions) => rowsPerPageOptions.map(opt =>
  (typeof opt === 'object') ? opt : { value: opt, label: String(opt) }
)

const defaultRowsPerPage = (rowsPerPageOptions, rowsPerPage) => {
  for (const { value } of rowsPerPageOptions) {
    if (value === rowsPerPage) {
      return rowsPerPage
    }
  }
  return rowsPerPageOptions[0].value
}

const normRowOptions = ({ rowsPerPageOptions = [10, 25, 50, 100], rowsPerPage }) => {
  const rowsPerPageOptions_ = rowOptionValues(rowsPerPageOptions)
  const rowsPerPage_ = defaultRowsPerPage(rowsPerPageOptions_, rowsPerPage)
  return [rowsPerPageOptions_, rowsPerPage_]
}

const gotoLastPage = (page, count, rowsPerPage) => {
  return count === -1 ? page + 1 : Math.ceil(count / rowsPerPage)
}

export const DataTablePagination = createComponent(function DataTablePagination (props) {
  const {
    count: count_,
    page: page_,
    defaultPage = 1,
    rowsPerPage: controlledRowsPerPage,
    rowsPerPageOptions,
    onChangePage,
    onChangeRowsPerPage,
    labelRowsPerPage = 'Rows per page:',
    labelDisplayedRows = defaultLabelDisplayedRows,
    enhanced,
    ...rest
  } = props

  const [rowsPerPageOptions_, rowsPerPage_] = normRowOptions(props)
  const count = count_ === undefined ? -1 : count_

  const [page, setPageState] = useControlled({
    controlled: page_,
    default: defaultPage
  })

  const [rowsPerPage, setRowsPerPageState] = useControlled({
    controlled: controlledRowsPerPage ? rowsPerPage_ : undefined,
    default: rowsPerPage_
  })
  const { isFirst, isLast, from, to } = getFromTo(page, count, rowsPerPage)

  const onChangeRowsPerPage_ = (evt) => {
    const { index } = evt.currentTarget
    const value = rowsPerPageOptions_[index].value
    onChangeRowsPerPage?.(evt, value)
    setRowsPerPageState(value)
    const newPage = getNewPage({ page, count, rowsPerPage, newRowsPerPage: value })
    onChangePage_(evt, newPage)
  }

  const onChangePage_ = (evt, page) => {
    onChangePage?.(evt, page)
    setPageState(page)
  }

  const className_ = useClassNames(props, [BEM])

  const icons = [
    {
      icon: 'first_page',
      disabled: isFirst,
      onClick: (evt) => onChangePage_(evt, 1)
    }, {
      icon: 'navigate_before',
      disabled: isFirst,
      onClick: (evt) => onChangePage_(evt, page - 1)
    }, {
      icon: 'navigate_next',
      disabled: isLast,
      onClick: (evt) => onChangePage_(evt, page + 1)
    }, {
      icon: 'last_page',
      disabled: isLast,
      onClick: (evt) => onChangePage_(evt, gotoLastPage(page, count, rowsPerPage))
    }
  ]

  return (
    <Typography tag='div' use='body2' {...rest} className={className_}>
      {labelRowsPerPage}
      &nbsp;
      <Select
        noBorder
        size='small'
        enhanced={enhanced}
        value={rowsPerPage}
        options={rowsPerPageOptions_}
        onChange={onChangeRowsPerPage_}
      />
      &nbsp;
      {labelDisplayedRows({ from, to, count })}
      {icons.map((props) => (
        <IconButton key={props.icon} {...props} size='small' />
      ))}
    </Typography>
  )
})
