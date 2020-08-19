import { AnyComponent } from 'preact'
import { WithRippleProps } from '@pmwc/ripple'
import { IconPropT } from '@pmwc/icon'
import { HTMLProps } from '@pmwc/base'

/**
 * The Button component.
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
export const Button : AnyComponent<ButtonProps> = () => {}
