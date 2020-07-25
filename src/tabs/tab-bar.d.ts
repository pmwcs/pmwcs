import * as RMWC from '@rmwc/types';
import { h } from 'preact';
import { MDCTabBarFoundation } from '@material/tab-bar';
/************************************************************
 * TabBar
 ************************************************************/
export declare type TabBarOnActivateEventT = RMWC.CustomEventT<{
    index: number;
}>;
/** The TabBar component */
export interface TabBarProps {
    /** Callback when the active tab changes. Receives event as an argument with event.target.value set to the activeTabIndex. evt.detail = { index: number; } */
    onActivate?: (evt: TabBarOnActivateEventT) => void;
    /** The index of the active tab. */
    activeTabIndex?: number;
    /** Specifies whether the indicator should slide or fade. Defaults to slide. */
    indicatorTransition?: 'slide' | 'fade';
    /** Advanced: A reference to the MDCFoundation. */
    foundationRef?: React.Ref<MDCTabBarFoundation | null>;
}
export declare const TabBar: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<TabBarProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
