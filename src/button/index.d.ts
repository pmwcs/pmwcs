import { AnyComponent } from 'preact'
import { WithRippleProps } from '@pmwcs/ripple'
import { IconPropT } from '@pmwcs/icon'
import { HTMLProps } from '@pmwcs/base'

/**
 * The Button component props
 */
export interface ButtonProps extends WithRippleProps, HTMLProps {
  /** Make the Button dense. */
  dense?: boolean;
  /** Make the Button raised. */
  raised?: boolean;
  /** Make the button unelevated. */
  unelevated?: boolean;
  /** Make the button outlined. */
  outlined?: boolean;
  /** Make the button disabled. */
  disabled?: boolean;
  /** Used to indicate a dangerous action. */
  danger?: boolean;
  /** Choose secondary theme. */
  secondary?: boolean;
  /** Choose standard theme. */
  standard?: boolean;
  /** Set button as activated. */
  activated?: boolean;
  /** Content specified as a label prop. */
  label?: AnyComponent;
  /** An Icon for the Button */
  icon?: IconPropT;
  /** A trailing icon for the Button */
  trailingIcon?: IconPropT;
  /** Content specified as children. */
  children?: AnyComponent;
  /** onClick handler */
  onClick?: (event: Event) => void | null;
  /** additional class name */
  className?: string;
  /** additional styling */
  style?: { [key: string]: any };
}

/**
 * The Button component.
 */
export declare const Button : AnyComponent<ButtonProps>
