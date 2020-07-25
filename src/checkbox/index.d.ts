import * as RMWC from '@rmwc/types';
import { MDCCheckboxFoundation } from '@material/checkbox';
import { ToggleableProps, ToggleHTMLProps } from '@rmwc/toggleable';
/*********************************************************************
 * Checkbox
 *********************************************************************/
/** A Checkbox component. */
export interface CheckboxProps extends RMWC.WithRippleProps, ToggleableProps<MDCCheckboxFoundation> {
    /** Make the control indeterminate */
    indeterminate?: boolean;
}
export declare type CheckboxHTMLProps = ToggleHTMLProps;
/** A Checkbox component. */
export declare const Checkbox: RMWC.ComponentType<CheckboxProps, CheckboxHTMLProps, 'input'>;
