import { AnyComponent } from 'preact';
import { ToggleableProps } from '@pmwcs/toggleable';
import { WithRippleProps } from '@pmwcs/ripple';
import { MDCCheckboxFoundation } from '@material/checkbox'

/**
 * A Checkbox component.
 */
export interface CheckboxProps
  extends WithRippleProps, ToggleableProps<MDCCheckboxFoundation> {
  /** use primary color - default is secondary. */
  primary?: boolean;
  /** Make the control indeterminate */
  indeterminate?: boolean;
}

/**
 * A Checkbox component.
 */
export declare const Checkbox : AnyComponent<CheckboxProps>
