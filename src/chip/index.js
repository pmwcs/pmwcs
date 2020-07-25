import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { withRipple } from '@rmwc/ripple';
import { Icon } from '@rmwc/icon';
import { useChipFoundation } from './foundation';
import { Tag, useClassNames, createComponent } from '@rmwc/base';
/** A Chip component. */
export var Chip = withRipple()(createComponent(function Chip(props, ref) {
    var onInteraction = props.onInteraction, onTrailingIconInteraction = props.onTrailingIconInteraction, onRemove = props.onRemove, onSelect = props.onSelect, icon = props.icon, trailingIcon = props.trailingIcon, trailingIconRemovesChip = props.trailingIconRemovesChip, checkmark = props.checkmark, label = props.label, children = props.children, selected = props.selected, foundationRef = props.foundationRef, rest = __rest(props, ["onInteraction", "onTrailingIconInteraction", "onRemove", "onSelect", "icon", "trailingIcon", "trailingIconRemovesChip", "checkmark", "label", "children", "selected", "foundationRef"]);
    var _a = useChipFoundation(props), rootEl = _a.rootEl, checkmarkEl = _a.checkmarkEl, trailingIconEl = _a.trailingIconEl;
    var className = useClassNames(props, [
        'mdc-chip',
        {
            'mdc-chip--selected': selected
        }
    ]);
    return (React.createElement(Tag, __assign({ role: "row" }, rest, { element: rootEl, className: className, ref: ref }),
        React.createElement(ChipRipple, null),
        !!icon && (React.createElement(ChipIcon, { icon: icon, leading: true, hidden: selected && checkmark })),
        !!checkmark && React.createElement(ChipCheckmark, { ref: checkmarkEl.setRef }),
        React.createElement("span", { role: "gridcell" },
            React.createElement("span", { role: "button", className: "mdc-chip__text__primary-action", tabIndex: 0 },
                React.createElement("span", { className: "mdc-chip__text" },
                    label,
                    children))),
        !!trailingIcon && (React.createElement(ChipIcon, __assign({ icon: trailingIcon, trailing: true }, trailingIconEl.props({}))))));
}));
/*********************************************************************
 * Bits
 *********************************************************************/
var ChipRipple = React.memo(function ChipRipple() {
    return React.createElement("div", { className: "mdc-chip__ripple" });
});
/** A checkmark for chip selection and filtering. */
var ChipCheckmark = React.memo(React.forwardRef(function ChipCheckmark(props, ref) {
    return (React.createElement("div", { ref: ref, className: "mdc-chip__checkmark" },
        React.createElement("svg", { className: "mdc-chip__checkmark-svg", viewBox: "-2 -3 30 30" },
            React.createElement("path", { className: "mdc-chip__checkmark-path", fill: "none", stroke: "black", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }))));
}));
/** Icons inside of a chip. This is an instance of the Icon component. To make the icons interactive, add props tabIndex="0" and role="button". */
var ChipIcon = React.memo(function ChipIcon(props) {
    var leading = props.leading, trailing = props.trailing, hidden = props.hidden, rest = __rest(props, ["leading", "trailing", "hidden"]);
    var className = useClassNames(props, [
        'mdc-chip__icon',
        {
            'mdc-chip__icon--leading': leading,
            'mdc-chip__icon--leading-hidden': hidden,
            'mdc-chip__icon--trailing': trailing
        }
    ]);
    var hasInteractionHandler = Object.keys(props).some(function (p) {
        return p.startsWith('on');
    });
    var trailingProps = props.trailing || hasInteractionHandler
        ? { role: 'button', tabIndex: 0 }
        : {};
    return React.createElement(Icon, __assign({}, trailingProps, rest, { className: className }));
});
/** A container for multiple chips. */
export var ChipSet = createComponent(function ChipSet(props, ref) {
    var choice = props.choice, filter = props.filter, rest = __rest(props, ["choice", "filter"]);
    var className = useClassNames(props, [
        'mdc-chip-set',
        {
            'mdc-chip-set--choice': choice,
            'mdc-chip-set--filter': filter
        }
    ]);
    return React.createElement(Tag, __assign({}, rest, { ref: ref, className: className }));
});
