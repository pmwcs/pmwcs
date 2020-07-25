import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { useClassNames, Tag, createComponent } from '@rmwc/base';
/** A Badge component for indicating alerts or counts. */
export var Badge = createComponent(function Badge(props, ref) {
    var _a = props.align, align = _a === void 0 ? 'end' : _a, label = props.label, style = props.style, exited = props.exited, inset = props.inset, rest = __rest(props, ["align", "label", "style", "exited", "inset"]);
    var className = useClassNames(props, [
        'rmwc-badge',
        "rmwc-badge--align-" + align,
        {
            'rmwc-badge--no-content': !(label !== null && label !== void 0 ? label : false),
            'rmwc-badge--exited': exited
        }
    ]);
    var finalStyle = inset !== undefined
        ? __assign(__assign({}, style), { '--rmwc-badge-inset': inset }) : style;
    return (React.createElement(Tag, __assign({}, rest, { style: finalStyle, className: className, ref: ref }), label !== null && label !== void 0 ? label : React.createElement(React.Fragment, null, "\u00A0")));
});
/** An anchor component for badges. */
export var BadgeAnchor = createComponent(function BadgeAnchor(props, ref) {
    var children = props.children, rest = __rest(props, ["children"]);
    var className = useClassNames(props, ['rmwc-badge-anchor']);
    return (React.createElement(Tag, __assign({}, rest, { className: className, ref: ref }), children));
});
