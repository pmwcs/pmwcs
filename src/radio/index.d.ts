import * as RMWC from '@rmwc/types';
import { MDCRadioFoundation } from '@material/radio';
import { ToggleableProps, ToggleHTMLProps } from '@rmwc/toggleable';
/*********************************************************************
 * Radio
 *********************************************************************/
/** A Radio button component. */
export interface RadioProps extends RMWC.WithRippleProps, ToggleableProps<MDCRadioFoundation> {
}
export declare type RadioHTMLProps = ToggleHTMLProps;
/** A Radio button component. */
export declare const Radio: RMWC.ComponentType<RadioProps, RadioHTMLProps, 'input'>;
