import * as RMWC from '@rmwc/types';
import { MDCSwitchFoundation } from '@material/switch';
import { ToggleableProps, ToggleHTMLProps } from '@rmwc/toggleable';
/*********************************************************************
 * Switch
 *********************************************************************/
/** A Switch component. */
export interface SwitchProps extends RMWC.WithRippleProps, ToggleableProps<MDCSwitchFoundation> {
}
export declare type SwitchHTMLProps = ToggleHTMLProps;
/** A Switch component. */
export declare const Switch: RMWC.ComponentType<SwitchProps, SwitchHTMLProps, 'input'>;
