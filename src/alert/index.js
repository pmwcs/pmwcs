import { h } from 'preact'

import { Typography } from '@pmwc/typography'
import { Icon } from '@pmwc/icon'
import { IconButton } from '@pmwc/icon-button'
import {
  useClassNames,
  createComponent,
  createMemoComponent
} from '@pmwc/base'
import {
  SvgAlert
} from './icons.js'

/** An Alert component for displaying a short, important message. */
export const Alert = createComponent(function Avatar (props, ref) {
  const {
    severity = 'warning',
    icon,
    outlined,
    filled,
    children,
    onClose,
    action: action_,
    ...rest
  } = props

  const className = useClassNames(props, [
    'pmwc-alert',
    {
      [`pmwc-alert--${severity}`]: severity,
      'pmwc-alert--outlined': outlined,
      'pmwc-alert--filled': filled
    }
  ])

  const action = !onClose
    ? action_
    : <IconButton size='xsmall' icon='close' onClick={onClose} />

  return (
    <div {...rest} ref={ref} className={className}>
      {icon !== false
        ? <AlertIcon icon={icon} severity={severity} />
        : null}
      <Typography tag='div' use='body2' className='pmwc-alert-message'>
        {children}
      </Typography>
      {action
        ? <div className='pmwc-alert-action'>{action}</div>
        : null}
    </div>
  )
})
Alert.displayName = 'Alert'

export const AlertTitle = createMemoComponent(function AlertTitle ({ children }, ref) {
  return (
    <Typography tag='div' use='body1' ref={ref} className='pmwc-alert-title'>
      {children}
    </Typography>
  )
})
AlertTitle.displayName = 'AlertTitle'

export const AlertIcon = createMemoComponent(
  function AlertIcon (props, ref) {
    const { severity, icon, ...rest } = props

    const className = useClassNames(props, [
      'pmwc-alert-icon',
      {
        [`pmwc-alert-icon--${severity}`]: severity
      }
    ])

    const icon_ = icon || SvgAlert({ severity })

    return (
      <Icon {...rest} icon={icon_} aria-hidden='true' ref={ref} className={className} />
    )
  }
)
AlertIcon.displayName = 'AlertIcon'
