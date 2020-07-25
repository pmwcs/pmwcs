import { h } from 'preact';
export declare type TabBarContextT = {
    onTabInteraction: (evt: any) => void;
    registerTab: (tab: any) => void;
    unregisterTab: (tab: any) => void;
    indicatorTransition: 'slide' | 'fade';
};
export declare const TabBarContext: React.Context<TabBarContextT>;
