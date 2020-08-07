import { __assign, __rest } from "tslib";
import { useRef, useContext, useEffect, useMemo } from 'react';
import { useFoundation, useId, emptyClientRect } from '@pmwc/base';
import { MDCTabFoundation } from '@material/tab';
import { TabBarContext } from './tab-bar-context';
export var useTabFoundation = function (props) {
    var tabIndicatorApi = useRef();
    var setTabIndicatorApi = function (api) {
        return (tabIndicatorApi.current = api);
    };
    var contextApi = useContext(TabBarContext);
    var id = useId('tab', props);
    var _a = useFoundation({
        props: props,
        elements: { rootEl: true, contentEl: true },
        foundation: function (_a) {
            var rootEl = _a.rootEl, contentEl = _a.contentEl, emit = _a.emit, getProps = _a.getProps;
            return new MDCTabFoundation(
            /** @type {!MDCTabAdapter} */ {
                setAttr: function (attr, value) {
                    return rootEl.setProp(attr, value);
                },
                addClass: function (className) { return rootEl.addClass(className); },
                removeClass: function (className) { return rootEl.removeClass(className); },
                hasClass: function (className) { return rootEl.hasClass(className); },
                activateIndicator: function (previousIndicatorClientRect) { var _a; return (_a = tabIndicatorApi.current) === null || _a === void 0 ? void 0 : _a.activate(previousIndicatorClientRect); },
                deactivateIndicator: function () { var _a; return (_a = tabIndicatorApi.current) === null || _a === void 0 ? void 0 : _a.deactivate(); },
                notifyInteracted: function () {
                    var evt = emit('onInteraction', { tabId: id }, true /* bubble */);
                    contextApi.onTabInteraction(evt);
                },
                getOffsetLeft: function () { var _a; return ((_a = rootEl.ref) === null || _a === void 0 ? void 0 : _a.offsetLeft) || 0; },
                getOffsetWidth: function () { var _a; return ((_a = rootEl.ref) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0; },
                getContentOffsetLeft: function () { var _a; return ((_a = contentEl.ref) === null || _a === void 0 ? void 0 : _a.offsetLeft) || 0; },
                getContentOffsetWidth: function () { var _a; return ((_a = contentEl.ref) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0; },
                focus: function () { return rootEl.ref && rootEl.ref.focus && rootEl.ref.focus(); }
            });
        }
    }), foundation = _a.foundation, elements = __rest(_a, ["foundation"]);
    var rootEl = elements.rootEl;
    var handleClick = function (evt) {
        var _a;
        (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, evt);
        foundation.handleClick();
    };
    rootEl.setProp('onClick', handleClick, true);
    var tabApi = useMemo(function () {
        return {
            getActive: function () { return foundation.isActive(); },
            activate: function (computeIndicatorClientRect) {
                return foundation.activate(computeIndicatorClientRect);
            },
            deactivate: function () { return foundation.deactivate(); },
            computeIndicatorClientRect: function () { var _a; return ((_a = tabIndicatorApi.current) === null || _a === void 0 ? void 0 : _a.computeContentClientRect()) || emptyClientRect; },
            computeDimensions: function () { return foundation.computeDimensions(); },
            focus: function () { return rootEl.ref && rootEl.ref.focus(); },
            id: id,
            getIndex: function () {
                var _a;
                return ((_a = rootEl.ref) === null || _a === void 0 ? void 0 : _a.parentElement) ? Array.from(rootEl.ref.parentElement.children).indexOf(rootEl.ref)
                    : -1;
            }
        };
    }, [foundation, rootEl.ref, id]);
    useEffect(function () {
        contextApi.registerTab(tabApi);
        return function () {
            contextApi.unregisterTab(tabApi);
        };
    }, [contextApi, tabApi]);
    return __assign(__assign({}, elements), { setTabIndicatorApi: setTabIndicatorApi });
};
