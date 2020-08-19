import { AnyComponent } from 'preact';
import { ToggleableProps } from '@pmwc/toggleable';
import { WithRippleProps } from '@pmwc/ripple';
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
