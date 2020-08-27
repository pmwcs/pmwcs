import { h } from 'preact'
import { createComponent, useClassNames } from '@pmwcs/base'

import usePagination from './usePagination'
import { PaginationItem } from './pagination-item'

const BEM = 'pmwc-pagination'

function defaultGetAriaLabel (type, page, selected) {
  if (type === 'page') {
    return `${selected ? '' : 'Go to '}page ${page}`
  }
  return `Go to ${type} page`
}

export const Pagination = createComponent(function Pagination (props, ref) {
  const {
    boundaryCount,
    className,
    count,
    defaultPage,
    disabled,
    getItemAriaLabel = defaultGetAriaLabel,
    hideNextButton,
    hidePrevButton,
    onChange,
    page,
    renderItem = (item) => <PaginationItem {...item} />,
    rounded,
    showFirstButton,
    showLastButton,
    siblingCount,
    size = 'medium',
    primary,
    secondary,
    ...other
  } = props

  const { items } = usePagination({ ...props, componentName: 'Pagination' })

  const className_ = useClassNames(props, [className, BEM])

  return (
    <nav
      aria-label='pagination navigation'
      ref={ref}
      {...other}
    >
      <ul className={className_}>
        {items.map((item, index) => (
          <li key={index}>
            {renderItem({
              ...item,
              'aria-label': getItemAriaLabel(item.type, item.page, item.selected),
              primary,
              secondary,
              rounded,
              size
            })}
          </li>
        ))}
      </ul>
    </nav>
  )
})
