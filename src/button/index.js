import { h } from 'preact';
import { memo } from 'preact/compat'

import { withRipple } from '@pmwc/ripple';
import { Icon } from '@pmwc/icon';
import { useClassNames, createComponent, createMemoComponent } from '@pmwc/base';

/**
 * The Button component.
 */
 export const Button = withRipple({
   surface: false
 })(createComponent(function Button(props, ref) {
  const {
    dense,
    raised,
    unelevated,
    outlined,
    danger,
    icon,
    label,
    trailingIcon,
    children,
    ...rest
  } = props;

 const className = useClassNames(props, [
   'mdc-button',
   {
     'mdc-button--dense': dense,
     'mdc-button--raised': raised,
     'mdc-button--unelevated': unelevated,
     'mdc-button--outlined': outlined
   }
 ]);

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
     <ButtonRipple />
     {!!icon && <ButtonIcon icon={icon} />}
     <span className="mdc-button__label">
       {label}
       {children}
     </span>
     {!!trailingIcon && <ButtonIcon icon={trailingIcon} />}
   </button>
 );
})
);

/*********************************************************************
 * Bits
 *********************************************************************/

const ButtonRipple = memo(function ButtonRipple() {
  return <div className="mdc-button__ripple"></div>;
});

/** An icon that goes inside of buttons. This is an instance of the Icon component. */
const ButtonIcon = createMemoComponent(function ButtonIcon(
  props,
  ref
) {
  const className = useClassNames(props, ['mdc-button__icon']);
  return <Icon {...props} className={className} ref={ref} />;
});
