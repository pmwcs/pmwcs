import { __assign, __rest } from "tslib";
import { useFoundation, emptyClientRect } from '@rmwc/base';
import { matches } from '@rmwc/base';
import { MDCTabScrollerFoundation, util as scrollerUtil } from '@material/tab-scroller';
export var useTabScrollerFoundation = function (props) {
    var _a = useFoundation({
        props: props,
        api: function (_a) {
            var foundation = _a.foundation, contentEl = _a.contentEl;
            var f = foundation;
            return {
                scrollTo: function (scrollX) { return f.scrollTo(scrollX); },
                incrementScroll: function (scrollXIncrement) {
                    return f.incrementScroll(scrollXIncrement);
                },
                getScrollPosition: function () { return f.getScrollPosition(); },
                getScrollContentWidth: function () { var _a; return ((_a = contentEl.ref) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 0; }
            };
        },
        elements: { rootEl: true, areaEl: true, contentEl: true },
        foundation: function (_a) {
            var rootEl = _a.rootEl, areaEl = _a.areaEl, contentEl = _a.contentEl;
            return new MDCTabScrollerFoundation({
                eventTargetMatchesSelector: function (evtTarget, selector) { return matches(evtTarget, selector); },
                addClass: function (className) { return rootEl.addClass(className); },
                removeClass: function (className) { return rootEl.removeClass(className); },
                addScrollAreaClass: function (className) { return areaEl.addClass(className); },
                setScrollAreaStyleProperty: function (prop, value) {
                    return areaEl.setStyle(prop, value);
                },
                setScrollContentStyleProperty: function (prop, value) {
                    return contentEl.setStyle(prop, value);
                },
                getScrollContentStyleValue: function (propName) {
                    var val = contentEl.ref &&
                        window.getComputedStyle(contentEl.ref).getPropertyValue(propName);
                    return val || 'none';
                },
                setScrollAreaScrollLeft: function (scrollX) {
                    return areaEl.ref && (areaEl.ref.scrollLeft = scrollX);
                },
                getScrollAreaScrollLeft: function () { return (areaEl.ref ? areaEl.ref.scrollLeft : 0); },
                getScrollContentOffsetWidth: function () {
                    return contentEl.ref ? contentEl.ref.offsetWidth : 0;
                },
                getScrollAreaOffsetWidth: function () {
                    return areaEl.ref ? areaEl.ref.offsetWidth : 0;
                },
                computeScrollAreaClientRect: function () {
                    return areaEl.ref ? areaEl.ref.getBoundingClientRect() : emptyClientRect;
                },
                computeScrollContentClientRect: function () {
                    return contentEl.ref
                        ? contentEl.ref.getBoundingClientRect()
                        : emptyClientRect;
                },
                computeHorizontalScrollbarHeight: function () {
                    return scrollerUtil.computeHorizontalScrollbarHeight(document);
                }
            });
        }
    }), foundation = _a.foundation, elements = __rest(_a, ["foundation"]);
    var areaEl = elements.areaEl, contentEl = elements.contentEl;
    var handleInteraction = function () {
        foundation.handleInteraction();
    };
    var handleTransitionEnd = function (evt) {
        foundation.handleTransitionEnd(evt);
    };
    areaEl.setProp('onWheel', handleInteraction, true);
    areaEl.setProp('onTouchStart', handleInteraction, true);
    areaEl.setProp('onPointerDown', handleInteraction, true);
    areaEl.setProp('onMouseDown', handleInteraction, true);
    areaEl.setProp('onKeyDown', handleInteraction, true);
    contentEl.setProp('onTransitionEnd', handleTransitionEnd, true);
    return __assign({}, elements);
};
