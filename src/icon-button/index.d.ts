import { AnyComponent, Ref } from 'preact'
import { IconPropT, IconSizeT } from '@pmwc/icon'
import { WithRippleProps } from '@pmwc/ripple'
import { MDCIconButtonToggleFoundation } from '@material/icon-button'

/** An IconButton component that can also be used as a toggle. */
export interface IconButtonProps extends WithRippleProps {
  /** Controls the on / off state of the a toggleable button. */
  checked?: boolean;
  /** Apply an aria label. */
  label?: string;
  /** An onChange callback that receives a custom event. evt.detail = { isOn: boolean } */
  onChange?: (evt: Event) => void;
  /** Makes the button disabled */
  disabled?: boolean;
  /** Icon for the button */
  icon?: IconPropT;
  /** If specified, renders a toggle with this icon as the on state. */
  onIcon?: IconPropT;
  /** Advanced: A reference to the MDCFoundation. Only for Toggleable buttons. */
  foundationRef?: Ref<MDCIconButtonToggleFoundation>;
  /** A size to render the icon  */
  size?: IconSizeT;
}

/**
 * An IconButton component that can also be used as a toggle.
 */
export declare const IconButton : AnyComponent<IconButtonProps>;
