import { h } from 'preact'
import { memo } from 'preact/compat'

import { useClassNames, createComponent } from '@pmwc/base'
import { Icon } from '@pmwc/icon'
import { withRipple } from '@pmwc/ripple'
import { useIconButtonFoundation } from './foundation'

/** An IconButton component that can also be used as a toggle. */
export const IconButton = createComponent(function IconButton ({ ...rest }, ref) {
  if (rest.onIcon) {
    return <IconButtonToggle {...rest} ref={ref} />
  }
  return <IconButtonRoot {...rest} ref={ref} />
})

const IconButtonToggle = createComponent(function IconButtonToggle (props, ref) {
  const { icon, onIcon, foundationRef, ...rest } = props
  const { isOn, rootEl } = useIconButtonFoundation(props)
  return (
    <IconButtonToggleRoot
      aria-pressed={isOn}
      {...rootEl.props(rest)}
      ref={ref}
    >
      <IconButtonIcon icon={icon} />
      <IconButtonIcon icon={onIcon} on />
    </IconButtonToggleRoot>
  )
})

/*********************************************************************
 * Bits
 *********************************************************************/

const IconButtonRoot = withRipple({
  surface: false,
  unbounded: true
})(createComponent(function IconButtonRoot (props, ref) {
  const { checked, label, foundationRef, ...rest } = props
  const className = useClassNames(props, [
    'mdc-icon-button',
    {
      'mdc-icon-button--on': checked
    }
  ])
  return (
    <Icon
      role='button'
      tabIndex={0}
      aria-label={label}
      {...rest}
      className={className}
      ref={ref}
    />
  )
}))

const IconButtonToggleRoot = withRipple({
  surface: false,
  unbounded: true
})(createComponent(function IconButtonToggleRoot (props, ref) {
  const { checked, ...rest } = props
  const className = useClassNames(props, [
    'mdc-icon-button',
    {
      'mdc-icon-button--on': checked
    }
  ])
  return (
    <button
      tabIndex={0}
      {...rest}
      className={className}
      ref={ref}
    />
  )
}))

const IconButtonIcon = memo(function IconButtonIcon (props) {
  const { on, ...rest } = props
  const className = useClassNames(props, [
    'mdc-icon-button__icon',
    {
      'mdc-icon-button__icon--on': props.on
    }
  ])
  return <Icon {...rest} className={className} />
})
