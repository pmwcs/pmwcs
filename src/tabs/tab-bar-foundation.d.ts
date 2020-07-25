import { h } from 'preact';
import { TabBarProps } from './tab-bar';
import { TabScrollerApi } from './tab-scroller';
import { MDCTabInteractionEvent } from '@material/tab';
import { TabApi } from './tab';
export declare const useTabBarFoundation: (props: TabBarProps & React.HTMLProps<any>) => {
    setTabScrollerApi: (api: TabScrollerApi) => TabScrollerApi;
    handleTabInteraction: (evt: MDCTabInteractionEvent) => void;
    registerTab: (tab: TabApi) => void;
    unregisterTab: (tab: TabApi) => void;
    rootEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
};
