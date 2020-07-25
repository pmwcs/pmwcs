/// <reference types="react" />
import * as RMWC from '@rmwc/types';
export interface TabScrollerProps {
    apiRef: (api: TabScrollerApi) => void;
}
export declare type TabScrollerApi = {
    scrollTo: (scrollX: number) => void;
    incrementScroll: (scrollXIncrement: number) => void;
    getScrollPosition: () => number;
    getScrollContentWidth: () => number;
};
export declare function TabScroller(props: TabScrollerProps & RMWC.HTMLProps): JSX.Element;
