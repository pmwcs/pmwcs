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
    rounded,
    size = 'medium',
    type = 'page',
    ripple,
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
  const primary = color === 'primary'
  const secondary = color === 'secondary'

  const className_ = useClassNames(props, [
    className,
    BEM,
    {
      'mdc-icon-button': !isEllipsis,
      [`${BEM}--disabled`]: disabled,
      [`${BEM}--selected`]: selected,
      [`${BEM}--primary`]: primary,
      [`${BEM}--secondary`]: secondary,
      [`${BEM}--size-${size}`]: size !== 'medium',
      [`${BEM}--text`]: !icon,
      [`${BEM}--rounded`]: rounded
    }
  ])

  const ripple_ = ripple === false ? false : { secondary, primary }

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
        primary={primary}
        secondary={secondary}
        disabled={disabled}
        size={size}
        ripple={ripple_}
        {...rest}
      >
        {type === 'page' && page}
      </IconButton>
    )
}))
