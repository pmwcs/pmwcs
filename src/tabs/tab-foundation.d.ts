import { h } from 'preact';
import { TabProps } from './tab';
import { TabIndicatorApi } from './tab-indicator';
export declare const useTabFoundation: (props: TabProps & React.HTMLProps<any>) => {
    setTabIndicatorApi: (api: TabIndicatorApi | null) => TabIndicatorApi | null;
    rootEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    contentEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
};
