import * as RMWC from '@pmwc/types';
import { h } from 'preact';
import { MDCTabFoundation } from '@material/tab';
export declare type TabOnInteractionEventT = RMWC.CustomEventT<{
    tabId: string;
}>;
/** A Tab component */
export interface TabProps {
    /** A label for the tab. */
    label?: any;
    /** The label for the tab, passed as children. */
    children?: React.ReactNode;
    /** The icon to use for the tab. */
    icon?: RMWC.IconPropT;
    /** Optionally use a custom icon for the active indicator, instead of the underline. */
    iconIndicator?: RMWC.IconPropT;
    /** Stacks the icon on top of the text label */
    stacked?: boolean;
    /** Restricts the indicator to the content */
    restrictIndicator?: boolean;
    /** Indicates that the tab should shrink in size to be as narrow as possible without causing text to wrap. */
    minWidth?: boolean;
    /** Fires when a tab has been interacted with. This is captures both keyboard and click events. evt.detail = { tabId: string } */
    onInteraction?: (evt: TabOnInteractionEventT) => void;
    /** Advanced: A reference to the MDCFoundation. */
    foundationRef?: React.Ref<MDCTabFoundation | null>;
}
export declare type TabApi = {
    getActive: () => boolean;
    activate: (computeIndicatorClientRect: ClientRect) => void;
    deactivate: () => void;
    computeIndicatorClientRect: () => ClientRect;
    computeDimensions: MDCTabFoundation['computeDimensions'];
    focus: () => void;
    id: string;
    getIndex: () => number;
};
/** A Tab component */
export declare const Tab: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<TabProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
