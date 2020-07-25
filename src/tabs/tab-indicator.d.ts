/// <reference types="react" />
import * as RMWC from '@rmwc/types';
export interface TabIndicatorProps {
    /** Use an icon instead of an underline for the tab */
    icon?: RMWC.IconPropT;
    /** The transition to use */
    transition?: 'slide' | 'fade';
}
export declare type TabIndicatorApi = {
    activate: (previousIndicatorClientRect?: ClientRect) => void;
    deactivate: () => void;
    computeContentClientRect: () => ClientRect;
};
export declare function TabIndicator(props: TabIndicatorProps & RMWC.HTMLProps & {
    apiRef?: (api: TabIndicatorApi | null) => void;
}): JSX.Element;
