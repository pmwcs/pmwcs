import { __assign } from "tslib";
import { h } from 'preact';
import { useId } from '@rmwc/base';
import { FormField } from '@rmwc/formfield';
export function useToggleFoundation(props) {
    var className = props.className, style = props.style, rootProps = props.rootProps, label = props.label, children = props.children, disabled = props.disabled;
    var hasLabel = props.label || props.children;
    var id = useId('toggle-', props);
    var renderToggle = function (toggle) {
        /**
         * We have to conditionally wrap our checkbox in a formfield
         * If we have a label
         */
        if (hasLabel) {
            return (React.createElement(FormField, __assign({}, rootProps, { className: className, style: style }),
                toggle,
                React.createElement("label", { id: id + 'label', htmlFor: id },
                    label,
                    children)));
        }
        else {
            return toggle;
        }
    };
    var toggleRootProps = hasLabel
        ? { disabled: disabled }
        : __assign({ className: className,
            style: style,
            disabled: disabled }, rootProps);
    return {
        id: id,
        renderToggle: renderToggle,
        toggleRootProps: toggleRootProps
    };
}
