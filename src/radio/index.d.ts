import { AnyComponent } from 'preact'
import { ToggleableProps } from '@pmwcs/toggleable';
import { WithRippleProps } from '@pmwcs/ripple';
import { MDCRadioFoundation } from '@material/radio'

/** A Checkbox component. */
export interface RadioProps
  extends WithRippleProps, ToggleableProps<MDCRadioFoundation> {
  /** use primary color - default is secondary. */
  primary?: boolean;
}

export const Radio : AnyComponent<RadioProps>;
