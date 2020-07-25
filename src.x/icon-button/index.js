/** @jsx h */
import { h } from 'preact'
import { classNames } from '../base'

export function IconButton (
  {
    ref,
    dense,
    raised,
    unelevated,
    outlined,
    danger,
    icon,
    label,
    trailingIcon,
    children,
    className: _className,
    ...rest
  }
) {
  const className = classNames(
    _className,
    'mdc-button',
    {
      'mdc-button--dense': dense,
      'mdc-button--raised': raised,
      'mdc-button--unelevated': unelevated,
      'mdc-button--outlined': outlined
    }
  )

  if (danger) {
    const existingStyle = rest.style || {};
    const dangerStyle = {
      '--mdc-theme-primary': 'var(--mdc-theme-error)',
      '--mdc-theme-on-primary': 'var(--mdc-theme-on-error)'
    };
    rest.style = {
      ...dangerStyle,
      ...existingStyle
    };
  }

  return (
    <button {...rest} ref={ref} className={className}>
      <span className="mdc-button__label">
        {label}
        {children}
      </span>
    </button>
  )
}
