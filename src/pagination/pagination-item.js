import { h } from 'preact'
import { createComponent, useClassNames } from '@pmwc/base'
import { IconButton } from '@pmwc/icon-button'

const BEM = 'pmwc-pagination-item'

export const PaginationItem = (createComponent(function PaginationItem (props, ref) {
  const {
    classes,
    className,
    color = 'standard',
    component,
    disabled = false,
    page,
    selected = false,
    // shape = 'round',
    size = 'medium',
    type = 'page',
    // variant = 'text',
    ...rest
  } = props

  const normalizedIcons = {
    previous: 'navigate_before',
    next: 'navigate_next',
    first: 'first_page',
    last: 'last_page'
  }

  const icon = normalizedIcons[type]

  const isEllipsis = type === 'start-ellipsis' || type === 'end-ellipsis'

  const className_ = useClassNames(props, [
    className,
    BEM,
    {
      'mdc-icon-button': !isEllipsis,
      [`${BEM}--disabled`]: disabled,
      [`${BEM}--selected`]: selected,
      [`${BEM}--primary`]: color === 'primary',
      [`${BEM}--secondary`]: color === 'secondary',
      [`${BEM}--size-${size}`]: size !== 'medium',
      [`${BEM}--text`]: !icon
    }
  ])

  return isEllipsis
    ? (
      <div ref={ref} disabled className={className_}>…</div>
    )
    : (
      <IconButton
        ref={ref}
        tabindex={0}
        className={className_}
        icon={icon}
        disabled={disabled}
        {...rest}
      >
        {type === 'page' && page}
      </IconButton>
    )
}))
