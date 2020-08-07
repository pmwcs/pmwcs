import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { withRipple } from '@pmwc/ripple';
import { Icon } from '@pmwc/icon';
import { Tag, useClassNames, createComponent } from '@pmwc/base';
/** A floating action button component */
export var Fab = withRipple({ surface: false })(createComponent(function Fab(props, ref) {
    var children = props.children, label = props.label, icon = props.icon, trailingIcon = props.trailingIcon, mini = props.mini, exited = props.exited, rest = __rest(props, ["children", "label", "icon", "trailingIcon", "mini", "exited"]);
    var className = useClassNames(props, [
        'mdc-fab',
        {
            'mdc-fab--mini': mini,
            'mdc-fab--exited': exited,
            'mdc-fab--extended': label
        }
    ]);
    if (trailingIcon && !label) {
        console.warn("FAB 'trailingIcon' prop should only be used in conjunction with 'label'");
    }
    return (React.createElement(Tag, __assign({ tag: "button", label: label }, rest, { ref: ref, className: className }),
        React.createElement(FabRipple, null),
        !!icon && React.createElement(FabIcon, { icon: icon }),
        !!label && React.createElement("div", { className: "mdc-fab__label" }, label),
        children,
        !!trailingIcon && React.createElement(FabIcon, { icon: trailingIcon })));
}));
/*********************************************************************
 * Bits
 *********************************************************************/
var FabRipple = React.memo(function FabRipple() {
    return React.createElement("div", { className: "mdc-fab__ripple" });
});
var FabIcon = React.memo(function FabIcon(props) {
    return React.createElement(Icon, __assign({ className: "mdc-fab__icon" }, props));
});
