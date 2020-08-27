import { h } from 'preact'
import { memo } from 'preact/compat'

import { withRipple } from '@pmwcs/ripple'
import { Icon } from '@pmwcs/icon'
import { Tag, useClassNames, createComponent } from '@pmwcs/base'

/** A floating action button component */
export const Fab = withRipple({ surface: false })(
  createComponent(function Fab (props, ref) {
    const {
      children,
      label,
      icon,
      trailingIcon,
      mini,
      exited,
      ...rest
    } = props

    const className = useClassNames(props, [
      'mdc-fab',
      {
        'mdc-fab--mini': mini,
        'mdc-fab--exited': exited,
        'mdc-fab--extended': label
      }
    ])

    if (trailingIcon && !label) {
      console.warn(
        'FAB \'trailingIcon\' prop should only be used in conjunction with \'label\''
      )
    }

    return (
      <Tag tag='button' label={label} {...rest} ref={ref} className={className}>
        <FabRipple />
        {!!icon && <FabIcon icon={icon} />}
        {!!label && <div className='mdc-fab__label'>{label}</div>}
        {children}
        {!!trailingIcon && <FabIcon icon={trailingIcon} />}
      </Tag>
    )
  })
)

/*********************************************************************
 * Bits
 *********************************************************************/

const FabRipple = memo(function FabRipple () {
  return <div className='mdc-fab__ripple' />
})

const FabIcon = memo(function FabIcon (props) {
  return <Icon className='mdc-fab__icon' {...props} />
})
