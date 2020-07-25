import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { useNotchedOutlineFoundation } from './foundation';
import { createComponent, Tag } from '@rmwc/base';
/*********************************************************************
 * Notched Outline
 *********************************************************************/
export var NotchedOutline = createComponent(function NotchedOutline(props, ref) {
    var children = props.children, rest = __rest(props, ["children"]);
    var _a = useNotchedOutlineFoundation(props), rootEl = _a.rootEl, notchedEl = _a.notchedEl;
    return (React.createElement(Tag, __assign({}, rest, { element: rootEl, className: 'mdc-notched-outline', ref: ref }),
        React.createElement(NotchedOutlineLeading, null),
        React.createElement("div", __assign({}, notchedEl.props({
            className: 'mdc-notched-outline__notch'
        }), { ref: notchedEl.setRef }), children),
        React.createElement(NotchedOutlineTrailing, null)));
});
/*********************************************************************
 * Bits
 *********************************************************************/
var NotchedOutlineLeading = React.memo(function NotchedOutlineLeading() {
    return React.createElement("div", { className: "mdc-notched-outline__leading" });
});
var NotchedOutlineTrailing = React.memo(function NotchedOutlineTrailing() {
    return React.createElement("div", { className: "mdc-notched-outline__trailing" });
});
