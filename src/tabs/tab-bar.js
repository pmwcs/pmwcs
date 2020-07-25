import { __assign, __rest } from "tslib";
import React, { useRef } from 'react';
import { Tag, useClassNames, createComponent } from '@rmwc/base';
import { TabScroller } from './tab-scroller';
import { TabBarContext } from './tab-bar-context';
import { useTabBarFoundation } from './tab-bar-foundation';
export var TabBar = createComponent(function TabBar(props, ref) {
    var children = props.children, activeTabIndex = props.activeTabIndex, onActivate = props.onActivate, foundationRef = props.foundationRef, rest = __rest(props, ["children", "activeTabIndex", "onActivate", "foundationRef"]);
    var _a = useTabBarFoundation(props), rootEl = _a.rootEl, handleTabInteraction = _a.handleTabInteraction, setTabScrollerApi = _a.setTabScrollerApi, registerTab = _a.registerTab, unregisterTab = _a.unregisterTab;
    var contextApi = useRef({
        onTabInteraction: function (evt) {
            return handleTabInteraction(evt);
        },
        registerTab: registerTab,
        unregisterTab: unregisterTab,
        indicatorTransition: props.indicatorTransition || 'slide'
    });
    var className = useClassNames(props, ['mdc-tab-bar']);
    return (React.createElement(TabBarContext.Provider, { value: contextApi.current },
        React.createElement(Tag, __assign({ tag: "nav", element: rootEl }, rest, { className: className, ref: ref }),
            React.createElement(TabScroller, { apiRef: setTabScrollerApi }, children))));
});
