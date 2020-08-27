import { h, Fragment } from 'preact'

import { classNames } from '@pmwcs/base'

/** A Tooltip component for displaying informative popover information. */
/* for the moment we go with the poor man variant */
export const Tooltip = function Tooltip ({
  children,  // :JSX[]|JSX|string
  content,    // :string
  className
}) {
  const className_ = classNames('pmwc-tooltip', className)
  return (
    <span role='tooltip' title={content} className={className_}>
      {children}
    </span>
  )
}
