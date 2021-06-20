import { h, Fragment } from 'preact'
import { useClassNames, Tag, createComponent } from '@pmwcs/base'

/** A Badge component for indicating alerts or counts. */
export const Badge = createComponent(function Badge (props, ref) {
  const { align = 'end', label, style, exited, inset, tag = 'div', ...rest } = props

  const className = useClassNames(props, [
    'pmwc-badge',
    `pmwc-badge--align-${align}`,
    {
      'pmwc-badge--no-content': !(label ?? false),
      'pmwc-badge--exited': exited
    }
  ])

  const finalStyle =
    inset !== undefined
      ? {
          ...style,
          '--pmwc-badge-inset': inset
        }
      : style

  return (
    <Tag {...rest} tag={tag} style={finalStyle} className={className} ref={ref}>
      {label ?? <Fragment>&nbsp;</Fragment>}
    </Tag>
  )
})

/** An anchor component for badges. */
export const BadgeAnchor = createComponent(
  function BadgeAnchor (props, ref) {
    const { children, tag = 'div', ...rest } = props
    const className = useClassNames(props, ['pmwc-badge-anchor'])
    return (
      <Tag {...rest} tag={tag} className={className} ref={ref}>
        {children}
      </Tag>
    )
  }
)
