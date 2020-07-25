import { h } from 'preact';
export var TabBarContext = React.createContext({
    onTabInteraction: function (evt) { },
    registerTab: function (tab) { },
    unregisterTab: function (tab) { },
    indicatorTransition: 'slide'
});
