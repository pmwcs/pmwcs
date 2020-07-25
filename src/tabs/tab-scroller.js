import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { Tag } from '@rmwc/base';
import { useTabScrollerFoundation } from './tab-scroller-foundation';
export function TabScroller(props) {
    var children = props.children, apiRef = props.apiRef, rest = __rest(props, ["children", "apiRef"]);
    var _a = useTabScrollerFoundation(props), rootEl = _a.rootEl, areaEl = _a.areaEl, contentEl = _a.contentEl;
    return (React.createElement(Tag, __assign({}, rest, { ref: null, element: rootEl, className: "mdc-tab-scroller" }),
        React.createElement(Tag, { element: areaEl, className: "mdc-tab-scroller__scroll-area" },
            React.createElement(Tag, { element: contentEl, className: "mdc-tab-scroller__scroll-content" }, children))));
}
