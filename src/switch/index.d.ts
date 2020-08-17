import { WithRippleProps } from '@pmwc/ripple'
import { ToggleableProps } from '@pmwc/toggleable'
import { MDCSwitchFoundation } from '@material/switch'

/** A Switch component. */
export interface SwitchProps
  extends WithRippleProps, ToggleableProps<MDCSwitchFoundation> {
  /** use primary color - default is secondary. */
  primary?: boolean;
}
