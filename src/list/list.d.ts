import * as RMWC from '@rmwc/types';
import { h } from 'preact';
import { MDCListFoundation } from '@material/list';
export declare type ListOnActionEventT = RMWC.CustomEventT<{
    index: number;
}>;
/** A List Component */
export interface ListProps {
    /** Reduces the padding on List items. */
    dense?: boolean;
    /** Gives more space for dual lined list items. */
    twoLine?: boolean;
    /** Makes the list start detail circular for avatars. */
    avatarList?: boolean;
    /** Makes the list non interactive. In addition, you'll have to set `ripple={false}` on the individual ListItems. */
    nonInteractive?: boolean;
    /** A callback for when a list item is interacted with. evt.detail = number */
    onAction?: (evt: ListOnActionEventT) => void;
    /** An internal api used for cross component communication */
    apiRef?: (api: ListApi | null) => void;
    /** Advanced: A reference to the MDCFoundation. */
    foundationRef?: React.Ref<MDCListFoundation | null>;
    /** Sets the list to allow the up arrow on the first element to focus the
     * last element of the list and vice versa. Defaults to true */
    wrapFocus?: boolean;
    /** Sets the lists vertical orientation. Defaults to true */
    vertical?: boolean;
}
export interface ListApi {
    listElements: () => HTMLLIElement[];
    focusRoot: () => void;
    getClasses: () => string;
    addClassToElementIndex: (index: number, className: string) => void;
    removeClassFromElementAtIndex: (index: number, className: string) => void;
    setAttributeForElementIndex: (index: number, attr: string, value: any) => void;
    getListItemCount: () => number;
    focusItemAtIndex: (index: number) => void;
}
export declare const List: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ListProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
