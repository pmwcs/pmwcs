import { AnyComponent } from 'preact'
import { WithRippleProps } from '@pmwcs/ripple'
import { ToggleableProps } from '@pmwcs/toggleable'
import { MDCSwitchFoundation } from '@material/switch'

/** A Switch component. */
export interface SwitchProps
  extends WithRippleProps, ToggleableProps<MDCSwitchFoundation> {
  /** use primary color - default is secondary. */
  primary?: boolean;
}

export const Switch : AnyComponent<SwitchProps>;
