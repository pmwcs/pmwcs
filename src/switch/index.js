import { h } from 'preact'
import { memo } from 'preact/compat'

import {
  classNames,
  mergeRefs,
  Tag,
  useClassNames,
  createComponent
} from '@pmwcs/base'
import { withRipple } from '@pmwcs/ripple'
import { useSwitchFoundation } from './foundation'

/*********************************************************************
 * Switch
 *********************************************************************/

/** A Switch component. */
export const Switch = createComponent(function Switch (props, ref) {
  const {
    renderToggle,
    id,
    toggleRootProps,
    rootEl,
    checkboxEl
  } = useSwitchFoundation(props)

  const {
    children,
    className,
    label,
    style,
    primary,
    inputRef,
    foundationRef,
    ...rest
  } = props

  const rootClassName = useClassNames(
    toggleRootProps, [
      'mdc-switch', {
        'mdc-switch--primary': primary
      }
    ])

  const renderedSwitch = (
    <Tag
      {...rootEl.props({ ...toggleRootProps, className: rootClassName })}
      ref={ref}
    >
      <SwitchTrack />
      <SwitchThumbUnderlay>
        <SwitchThumb />
        <input
          {...checkboxEl.props({
            ...rest,
            className: 'mdc-switch__native-control'
          })}
          type='checkbox'
          id={id}
          ref={mergeRefs(checkboxEl.setRef, inputRef)}
          role='switch'
          aria-checked={rest.checked ?? rest['aria-checked']}
        />
      </SwitchThumbUnderlay>
      <SwitchKnob />
    </Tag>
  )

  return renderToggle(renderedSwitch)
})

/*********************************************************************
 * Bits
 *********************************************************************/

const SwitchTrack = memo(function SwitchTrack () {
  return <div className='mdc-switch__track' />
})

const SwitchKnob = memo(function SwitchKnob () {
  return <div className='mdc-switch__knob' />
})

const SwitchThumb = memo(function SwitchThumb () {
  return <div className='mdc-switch__thumb' />
})

const SwitchThumbUnderlay = withRipple({
  unbounded: true,
  surface: false
})(function SwitchThumbUnderlay ({
  className,
  ...rest
}) {
  return (
    <div
      className={classNames(className, 'mdc-switch__thumb-underlay')}
      {...rest}
    />
  )
})
