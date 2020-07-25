import { __assign, __read, __rest } from "tslib";
import { useRef, useEffect, useCallback, useState } from 'react';
import { useFoundation } from '@rmwc/base';
import { MDCTabBarFoundation } from '@material/tab-bar';
export var useTabBarFoundation = function (props) {
    var _a = __read(useState(props.activeTabIndex || 0), 2), activeTabIndex = _a[0], setActiveTabIndex = _a[1];
    var tabScrollerApi = useRef();
    var setTabScrollerApi = function (api) {
        return (tabScrollerApi.current = api);
    };
    var tabListRef = useRef([]);
    var _b = useFoundation({
        props: props,
        elements: { rootEl: true },
        foundation: function (_a) {
            var rootEl = _a.rootEl, emit = _a.emit, getProps = _a.getProps;
            return new MDCTabBarFoundation({
                scrollTo: function (scrollX) {
                    tabScrollerApi.current && tabScrollerApi.current.scrollTo(scrollX);
                },
                incrementScroll: function (scrollXIncrement) {
                    var _a;
                    (_a = tabScrollerApi.current) === null || _a === void 0 ? void 0 : _a.incrementScroll(scrollXIncrement);
                },
                getScrollPosition: function () { var _a; return ((_a = tabScrollerApi.current) === null || _a === void 0 ? void 0 : _a.getScrollPosition()) || 0; },
                getScrollContentWidth: function () { var _a; return ((_a = tabScrollerApi.current) === null || _a === void 0 ? void 0 : _a.getScrollContentWidth()) || 0; },
                getOffsetWidth: function () { return (rootEl.ref ? rootEl.ref.offsetWidth : 0); },
                isRTL: function () {
                    return !!rootEl.ref &&
                        window.getComputedStyle(rootEl.ref).getPropertyValue('direction') ===
                            'rtl';
                },
                setActiveTab: function (index) {
                    if (props.activeTabIndex === index ||
                        props.activeTabIndex === undefined) {
                        setActiveTabIndex(index);
                    }
                    else {
                        // ignore clicks when using controlled tabs, but we still need to notify
                        // to trigger the callback
                        // @ts-ignore ignoring unsafe protected access
                        foundation.adapter_.notifyTabActivated(index);
                    }
                },
                activateTabAtIndex: function (index, clientRect) {
                    tabListRef.current[index] &&
                        tabListRef.current[index].activate(clientRect);
                },
                deactivateTabAtIndex: function (index) {
                    return tabListRef.current[index] && tabListRef.current[index].deactivate();
                },
                focusTabAtIndex: function (index) { return tabListRef.current[index].focus(); },
                getTabIndicatorClientRectAtIndex: function (index) {
                    return tabListRef.current[index] &&
                        tabListRef.current[index].computeIndicatorClientRect();
                },
                getTabDimensionsAtIndex: function (index) {
                    return tabListRef.current[index] &&
                        tabListRef.current[index].computeDimensions();
                },
                getPreviousActiveTabIndex: function () {
                    for (var i = 0; i < tabListRef.current.length; i++) {
                        if (tabListRef.current[i].getActive()) {
                            return i;
                        }
                    }
                    return -1;
                },
                getFocusedTabIndex: function () {
                    var _a;
                    var tabElements = [].slice.call((_a = rootEl.ref) === null || _a === void 0 ? void 0 : _a.querySelectorAll(MDCTabBarFoundation.strings.TAB_SELECTOR));
                    var activeElement = document.activeElement;
                    return tabElements ? tabElements.indexOf(activeElement) : -1;
                },
                getIndexOfTabById: function (id) {
                    for (var i = 0; i < tabListRef.current.length; i++) {
                        if (tabListRef.current[i].id === id) {
                            return i;
                        }
                    }
                    return -1;
                },
                getTabListLength: function () { return tabListRef.current.length; },
                notifyTabActivated: function (index) {
                    return emit('onActivate', { index: index }, true);
                }
            });
        }
    }), foundation = _b.foundation, elements = __rest(_b, ["foundation"]);
    var rootEl = elements.rootEl;
    var registerTab = function (tab) {
        tabListRef.current.push(tab);
        tabListRef.current.sort(function (a, b) { return a.getIndex() - b.getIndex(); });
    };
    var unregisterTab = function (tab) {
        tabListRef.current.splice(tabListRef.current.indexOf(tab), 1);
        tabListRef.current.sort(function (a, b) { return a.getIndex() - b.getIndex(); });
    };
    var handleTabInteraction = useCallback(function (evt) {
        foundation.handleTabInteraction(evt);
    }, [foundation]);
    var handleKeyDown = function (evt) {
        var _a;
        (_a = props.onKeyDown) === null || _a === void 0 ? void 0 : _a.call(props, evt);
        foundation.handleKeyDown(evt);
    };
    rootEl.setProp('onKeyDown', handleKeyDown, true);
    // sync active tab index
    useEffect(function () {
        props.activeTabIndex !== undefined &&
            setActiveTabIndex(props.activeTabIndex);
    }, [props.activeTabIndex]);
    // activate tabs
    useEffect(function () {
        var index = activeTabIndex;
        // @ts-ignore ignoring unsafe protected access
        var adapter = foundation.adapter_;
        var previousActiveIndex = adapter.getPreviousActiveTabIndex();
        // @ts-ignore private method access
        if (!foundation.indexIsInRange_(index) || index === previousActiveIndex) {
            return;
        }
        adapter.notifyTabActivated(index);
        window.requestAnimationFrame(function () {
            adapter.activateTabAtIndex(index, adapter.getTabIndicatorClientRectAtIndex(previousActiveIndex));
            foundation.scrollIntoView(index);
        });
        return function () {
            window.requestAnimationFrame(function () {
                adapter.deactivateTabAtIndex(index);
            });
        };
    }, [activeTabIndex, foundation]);
    // on mount
    useEffect(function () {
        // This corrects an issue where passing in 0 or no activeTabIndex
        // causes the first tab of the set to not be active
        // to make this even more annoying, Tabs focus by default
        // restore the focus and scroll position after we activate the tab
        var activeElement = window.document.activeElement;
        var _a = __read([window.scrollX, window.scrollY], 2), scrollX = _a[0], scrollY = _a[1];
        // restore focus and scroll
        window.requestAnimationFrame(function () {
            activeElement && activeElement.focus();
            window.scrollTo(scrollX, scrollY);
        });
    }, []);
    return __assign(__assign({}, elements), { setTabScrollerApi: setTabScrollerApi,
        handleTabInteraction: handleTabInteraction,
        registerTab: registerTab,
        unregisterTab: unregisterTab });
};
