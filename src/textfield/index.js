import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { useClassNames, Tag, useId, createComponent } from '@rmwc/base';
import { Icon } from '@rmwc/icon';
import { LineRipple } from '@rmwc/line-ripple';
import { FloatingLabel } from '@rmwc/floating-label';
import { NotchedOutline } from '@rmwc/notched-outline';
import { withRipple } from '@rmwc/ripple';
import { useTextFieldIconFoundation } from './textfield-icon-foundation';
import { useTextFieldCharacterCountFoundation } from './textfield-character-count-foundation';
import { useTextFieldFoundation } from './textfield-foundation';
/** A TextField component for accepting text input from a user. */
export var TextField = createComponent(function TextField(props, ref) {
    var label = props.label, style = props.style, outlined = props.outlined, align = props.align, fullwidth = props.fullwidth, invalid = props.invalid, disabled = props.disabled, helpText = props.helpText, children = props.children, textarea = props.textarea, inputRef = props.inputRef, characterCount = props.characterCount, icon = props.icon, trailingIcon = props.trailingIcon, _a = props.rootProps, rootProps = _a === void 0 ? {} : _a, foundationRef = props.foundationRef, ripple = props.ripple, userFloatLabel = props.floatLabel, rest = __rest(props, ["label", "style", "outlined", "align", "fullwidth", "invalid", "disabled", "helpText", "children", "textarea", "inputRef", "characterCount", "icon", "trailingIcon", "rootProps", "foundationRef", "ripple", "floatLabel"]);
    var _b = useTextFieldFoundation(props), rootEl = _b.rootEl, inputEl = _b.inputEl, shakeLabel = _b.shakeLabel, floatLabel = _b.floatLabel, notchWidth = _b.notchWidth, lineRippleActive = _b.lineRippleActive, lineRippleCenter = _b.lineRippleCenter, setLeadingIcon = _b.setLeadingIcon, setTrailingIcon = _b.setTrailingIcon, setFloatingLabel = _b.setFloatingLabel, setCharacterCounter = _b.setCharacterCounter;
    var id = useId('textfield', props);
    var labelId = id + '-label';
    var className = useClassNames(props, [
        'mdc-text-field',
        'mdc-text-field--upgraded',
        {
            'mdc-text-field--textarea': textarea,
            'mdc-text-field--fullwidth': fullwidth,
            'mdc-text-field--outlined': outlined,
            'mdc-text-field--invalid': invalid,
            'mdc-text-field--disabled': disabled,
            'mdc-text-field--with-leading-icon': !!icon,
            'mdc-text-field--with-trailing-icon': !!trailingIcon,
            'mdc-text-field--no-label': !label,
            'mdc-text-field--end-aligned': align === 'end'
        }
    ]);
    // handle leading and trailing icons
    var renderIcon = function (icon, position) {
        return (React.createElement(TextFieldIcon, { apiRef: function (api) {
                position === 'leading' ? setLeadingIcon(api) : setTrailingIcon(api);
            }, position: position, tabIndex: position === 'trailing' ? 0 : undefined, icon: icon }));
    };
    var renderHelpText = function (renderedCharacterCounter) {
        var shouldRender = !!helpText || (characterCount && !textarea);
        if (!shouldRender) {
            return null;
        }
        var shouldSpread = typeof helpText === 'object' && !React.isValidElement(helpText);
        return (React.createElement("div", { className: "mdc-text-field-helper-line" },
            helpText && shouldSpread ? (React.createElement(TextFieldHelperText, __assign({}, helpText))) : (React.createElement(TextFieldHelperText, null, helpText)),
            !textarea && renderedCharacterCounter));
    };
    var renderedLabel = label ? (React.createElement(FloatingLabel, { shake: shakeLabel, float: floatLabel, apiRef: setFloatingLabel, id: labelId }, label)) : null;
    var renderedCharacterCounter = characterCount ? (React.createElement(TextFieldCharacterCount, { apiRef: setCharacterCounter })) : null;
    return (React.createElement(React.Fragment, null,
        React.createElement(TextFieldRoot, __assign({}, rootProps, { element: rootEl, style: style, className: className, ref: ref, "aria-labelledby": labelId }),
            !!icon && renderIcon(icon, 'leading'),
            children,
            !!textarea && renderedCharacterCounter,
            React.createElement(TextFieldRipple, null),
            React.createElement(Tag, __assign({}, rest, { element: inputEl, className: "mdc-text-field__input", disabled: disabled, tag: textarea ? 'textarea' : 'input', ref: inputRef })),
            !!outlined ? (React.createElement(React.Fragment, null,
                React.createElement(NotchedOutline, { notch: notchWidth }, renderedLabel),
                !!trailingIcon && renderIcon(trailingIcon, 'trailing'))) : (React.createElement(React.Fragment, null,
                renderedLabel,
                !!trailingIcon && renderIcon(trailingIcon, 'trailing'),
                React.createElement(LineRipple, { active: lineRippleActive, center: lineRippleCenter })))),
        renderHelpText(renderedCharacterCounter)));
});
var TextFieldRipple = React.memo(function TextFieldRipple() {
    return React.createElement("span", { className: "mdc-text-field__ripple" });
});
var TextFieldRoot = withRipple({ surface: false })(React.forwardRef(function TextFieldRoot(props, ref) {
    return React.createElement(Tag, __assign({}, props, { tag: "label", ref: ref }));
}));
var TextFieldCharacterCount = React.memo(function TextFieldCharacterCount(props) {
    var content = useTextFieldCharacterCountFoundation(props).content;
    return React.createElement("div", { className: "mdc-text-field-character-counter" }, content);
});
/** A help text component */
export var TextFieldHelperText = createComponent(function TextFieldHelperText(props, ref) {
    var persistent = props.persistent, validationMsg = props.validationMsg, rest = __rest(props, ["persistent", "validationMsg"]);
    var className = useClassNames(props, [
        'mdc-text-field-helper-text',
        {
            'mdc-text-field-helper-text--persistent': persistent,
            'mdc-text-field-helper-text--validation-msg': validationMsg
        }
    ]);
    return React.createElement(Tag, __assign({ tag: "p" }, rest, { className: className, ref: ref }));
});
/** An Icon in a TextField */
var TextFieldIcon = function TextFieldIcon(props) {
    var apiRef = props.apiRef, position = props.position, rest = __rest(props, ["apiRef", "position"]);
    var rootEl = useTextFieldIconFoundation(props).rootEl;
    var className = useClassNames(props, [
        'mdc-text-field__icon',
        {
            'mdc-text-field__icon--trailing': position === 'trailing',
            'mdc-text-field__icon--leading': position === 'leading'
        }
    ]);
    return (React.createElement(Icon, __assign({}, rootEl.props(__assign(__assign({}, rest), { className: className })))));
};
TextFieldIcon.displayName = 'TextFieldIcon';
