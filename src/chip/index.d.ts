import * as RMWC from '@rmwc/types';
import { h } from 'preact';
import { MDCChipFoundation } from '@material/chips';
/*********************************************************************
 * Events
 *********************************************************************/
export declare type ChipOnInteractionEventT = RMWC.CustomEventT<{
    chipId: string;
}>;
export declare type ChipOnTrailingIconInteractionEventT = RMWC.CustomEventT<{
    chipId: string;
}>;
export declare type ChipOnRemoveEventT = RMWC.CustomEventT<{
    chipId: string;
}>;
/*********************************************************************
 * Chips
 *********************************************************************/
/** A Chip component. */
export interface ChipProps {
    /** Text for your Chip. */
    label?: React.ReactNode;
    /** makes the Chip appear selected. */
    selected?: boolean;
    /** Instance of an Icon Component. */
    icon?: RMWC.IconPropT;
    /** Instance of an Icon Component. */
    trailingIcon?: RMWC.IconPropT;
    /** Defaults to true. Set this to false if your trailing icon is something other than a remove button. */
    trailingIconRemovesChip?: boolean;
    /** An optional chip ID that will be included in callback evt.detail. If this is not passed, RMWC will attempt to use the "key" prop if present.  */
    id?: string;
    /** Includes an optional checkmark for the chips selected state. */
    checkmark?: boolean;
    /** Additional children will be rendered in the text area. */
    children?: React.ReactNode;
    /** A callback for click or enter key. This should be used over onClick for accessibility reasons. evt.detail = { chipId: string }  */
    onInteraction?: (evt: ChipOnInteractionEventT) => void;
    /** A callback for click or enter key for the trailing icon. material-components-web always treats this as an intent to remove the chip. evt.detail = { chipId: string } */
    onTrailingIconInteraction?: (evt: ChipOnTrailingIconInteractionEventT) => void;
    /** A callback that is fired once the chip is in an exited state from removing it. evt.detail = { chipId: string } */
    onRemove?: (evt: ChipOnRemoveEventT) => void;
    /** Advanced: A reference to the MDCFoundation. */
    foundationRef?: React.Ref<MDCChipFoundation>;
}
export declare type ChipHTMLProps = RMWC.HTMLProps<HTMLDivElement, Omit<React.AllHTMLAttributes<HTMLDivElement>, 'label'>>;
/** A Chip component. */
export declare const Chip: RMWC.ComponentType<ChipProps, ChipHTMLProps, 'div'>;
/*********************************************************************
 * Chip Set
 *********************************************************************/
/** A container for multiple chips. */
export interface ChipSetProps {
    /** Creates a choice chipset */
    choice?: boolean;
    /** Creates a filter chipset */
    filter?: boolean;
}
/** A container for multiple chips. */
export declare const ChipSet: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ChipSetProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
