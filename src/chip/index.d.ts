import { AnyComponent, Ref } from 'preact';
import { IconPropT } from '@pmwcs/icon';
import { MDCChipFoundation } from '@material/chips'

/** A Chip component. */
export interface ChipProps {
  /** Text for your Chip. */
  label?: AnyComponent;
  /** makes the Chip appear selected. */
  selected?: boolean;
  /** Instance of an Icon Component. */
  icon?: IconPropT;
  /** Instance of an Icon Component. */
  trailingIcon?: IconPropT;
  /** Defaults to true. Set this to false if your trailing icon is something other than a remove button. */
  trailingIconRemovesChip?: boolean;
  /** An optional chip ID that will be included in callback evt.detail. If this is not passed, RMWC will attempt to use the "key" prop if present.  */
  id?: string;
  /** Includes an optional checkmark for the chips selected state. */
  checkmark?: boolean;
  /** Additional children will be rendered in the text area. */
  children?: AnyComponent;
  /** A callback for click or enter key. This should be used over onClick for accessibility reasons. evt.detail = { chipId: string }  */
  onInteraction?: (evt: Event) => void;
  /** A callback for click or enter key for the trailing icon. material-components-web always treats this as an intent to remove the chip. evt.detail = { chipId: string } */
  onTrailingIconInteraction?: (
    evt: Event
  ) => void;
  /** A callback that is fired once the chip is in an exited state from removing it. evt.detail = { chipId: string } */
  onRemove?: (evt: Event) => void;
  /** Advanced: A reference to the MDCFoundation. */
  foundationRef?: Ref<MDCChipFoundation>;
}

/**
 * A Checkbox component.
 */
export declare const Chip : AnyComponent<ChipProps>

/**
 * A container for multiple chips.
 */
export interface ChipSetProps {
  /** Creates a choice chipset */
  choice?: boolean;
  /** Creates a filter chipset */
  filter?: boolean;
}

/**
 * A container for multiple chips.
 */
export declare const ChipSet : AnyComponent<ChipSetProps>
