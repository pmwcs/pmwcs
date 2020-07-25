import { __assign, __rest } from "tslib";
import { useFoundation, emptyClientRect } from '@rmwc/base';
import { MDCFadingTabIndicatorFoundation, MDCSlidingTabIndicatorFoundation } from '@material/tab-indicator';
export var useTabIndicatorFoundation = function (props) {
    var _a = useFoundation({
        props: props,
        elements: { rootEl: true, contentEl: true },
        foundation: function (_a) {
            var rootEl = _a.rootEl, contentEl = _a.contentEl;
            var adapter = {
                addClass: function (className) {
                    rootEl.addClass(className);
                },
                removeClass: function (className) {
                    rootEl.removeClass(className);
                },
                computeContentClientRect: function () {
                    return contentEl.ref
                        ? contentEl.ref.getBoundingClientRect()
                        : emptyClientRect;
                },
                setContentStyleProperty: function (prop, value) {
                    contentEl.setStyle(prop, value);
                }
            };
            if (props.transition === 'fade') {
                return new MDCFadingTabIndicatorFoundation(adapter);
            }
            return new MDCSlidingTabIndicatorFoundation(adapter);
        },
        api: function (_a) {
            var foundation = _a.foundation;
            return {
                activate: function (previousIndicatorClientRect) {
                    foundation.activate(previousIndicatorClientRect);
                },
                deactivate: function () {
                    foundation.deactivate();
                },
                computeContentClientRect: function () {
                    return foundation.computeContentClientRect();
                }
            };
        }
    }), foundation = _a.foundation, elements = __rest(_a, ["foundation"]);
    return __assign({}, elements);
};
