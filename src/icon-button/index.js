import { h } from 'preact'
import { memo } from 'preact/compat'

import { useClassNames, createComponent } from '@pmwcs/base'
import { Icon } from '@pmwcs/icon'
import { withRipple } from '@pmwcs/ripple'
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
  const { checked, label, foundationRef, onKeyDown, size, primary, secondary, outlined, ripple, ...rest } = props
  const className = useClassNames(props, [
    'mdc-icon-button',
    {
      'mdc-icon-button--on': checked,
      'pmwc-icon-button--primary': primary,
      'pmwc-icon-button--secondary': secondary,
      'pmwc-icon-button--outlined': outlined,
      [`pmwc-icon-button--size-${size}`]: size
    }
  ])

  return (
    <Icon
      tag='button'
      tabindex={0}
      aria-label={label}
      {...rest}
      size={size}
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
      tabindex={0}
      {...rest}
      className={className}
      ref={ref}
    />
  )
}))

const IconButtonIcon = memo(function IconButtonIcon (props) {
  const { on, size, ...rest } = props
  const className = useClassNames(props, [
    'mdc-icon-button__icon',
    {
      'mdc-icon-button__icon--on': props.on,
      [`pmwc-icon-button--size-${size}`]: size
    }
  ])
  return <Icon {...rest} size={size} className={className} />
})
