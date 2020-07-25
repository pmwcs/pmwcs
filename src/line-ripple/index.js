import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { useLineRippleFoundation } from './foundation';
import { createComponent, Tag } from '@rmwc/base';
export var LineRipple = createComponent(function LineRipple(props, ref) {
    var active = props.active, center = props.center, rest = __rest(props, ["active", "center"]);
    var rootEl = useLineRippleFoundation(props).rootEl;
    return (React.createElement(Tag, __assign({}, rest, { tag: "span", element: rootEl, className: "mdc-line-ripple", ref: ref })));
});
