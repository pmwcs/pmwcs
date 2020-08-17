import { ToggleableProps } from '@pmwc/toggleable';
import { WithRippleProps } from '@pmwc/ripple';
import { MDCRadioFoundation } from '@material/radio'

/** A Checkbox component. */
export interface RadioProps
  extends WithRippleProps, ToggleableProps<MDCRadioFoundation> {
  /** use primary color - default is secondary. */
  primary?: boolean;
}
