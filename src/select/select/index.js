import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { useClassNames, useId, Tag, createComponent } from '@pmwc/base';
import { FloatingLabel } from '@pmwc/floating-label';
import { LineRipple } from '@pmwc/line-ripple';
import { NotchedOutline } from '@pmwc/notched-outline';
import { Menu, MenuItem, MenuItems } from '@pmwc/menu';
import { ListGroup, ListGroupSubheader, ListDivider } from '@pmwc/list';
import { withRipple } from '@pmwc/ripple';
import { useSelectFoundation } from './foundation';
import { SelectIcon } from '../select-icon';
/**
 * Takes multiple structures for options and returns [{label: 'label', value: 'value', ...rest}]
 */
var createSelectOptions = function (options) {
    // preformatted array
    if (Array.isArray(options) && options[0] && typeof options[0] === 'object') {
        return options.map(function (opt) {
            if (typeof opt !== 'object') {
                throw new Error("Encountered non object for Select " + opt);
            }
            return __assign(__assign({}, opt), { options: createSelectOptions(opt.options) });
        });
    }
    // simple array
    if (Array.isArray(options)) {
        return options.map(function (value) { return ({ value: value, label: value }); });
    }
    // value => label objects
    if (typeof options === 'object') {
        return Object.keys(options).map(function (value) { return ({
            value: value,
            label: options[value]
        }); });
    }
    // default, just return
    return options;
};
var SelectDropdownArrow = React.memo(function SelectDropdownArrow() {
    return React.createElement("i", { className: "mdc-select__dropdown-icon" });
});
function NativeMenu(props) {
    var selectOptions = props.selectOptions, _a = props.placeholder, placeholder = _a === void 0 ? '' : _a, children = props.children, elementRef = props.elementRef, rest = __rest(props, ["selectOptions", "placeholder", "children", "elementRef"]);
    var renderOption = function (_a) {
        var label = _a.label, option = _a.option, index = _a.index;
        return (React.createElement("option", __assign({ key: index }, option, { value: option.value }), label));
    };
    var isEmptyValue = !props.value && !props.defaultValue;
    return (React.createElement("select", __assign({ tabIndex: 0 }, rest, { ref: elementRef, className: "rmwc-select__native-control " + (rest.className || '') }),
        (props.placeholder !== undefined || isEmptyValue) && (React.createElement("option", { value: "", disabled: isEmptyValue }, placeholder)),
        !!selectOptions &&
            selectOptions.map(function (_a, index) {
                var label = _a.label, options = _a.options, option = __rest(_a, ["label", "options"]);
                if (options) {
                    return (React.createElement("optgroup", { label: label, key: index }, options.map(function (_a, index) {
                        var label = _a.label, option = __rest(_a, ["label"]);
                        return renderOption({
                            label: label,
                            option: option,
                            index: index
                        });
                    })));
                }
                return renderOption({
                    label: label,
                    option: option,
                    index: index
                });
            }),
        children));
}
var SelectedTextEl = withRipple({ surface: false })(function (props) {
    return React.createElement(Tag, __assign({}, props));
});
function EnhancedMenu(props) {
    var selectOptions = props.selectOptions, menuApiRef = props.menuApiRef, value = props.value, placeholder = props.placeholder, children = props.children, selectedIndex = props.selectedIndex, rest = __rest(props, ["selectOptions", "menuApiRef", "value", "placeholder", "children", "selectedIndex"]);
    var currentIndex = 0;
    var renderOption = function (_a) {
        var label = _a.label, option = _a.option;
        currentIndex += 1;
        return (React.createElement(MenuItem, __assign({ key: label + "-" + option.value, activated: value !== undefined
                ? option.value === value
                : currentIndex - 1 === selectedIndex }, option, { "data-value": option.value }), label));
    };
    return (React.createElement(Menu, __assign({}, rest, { apiRef: menuApiRef, className: "mdc-select__menu", focusOnOpen: true }),
        !!props.placeholder && (React.createElement(MenuItem, { selected: currentIndex - 1 === selectedIndex, "data-value": "", theme: "textDisabledOnBackground" }, placeholder)),
        selectOptions.map(function (_a, i) {
            var label = _a.label, options = _a.options, option = __rest(_a, ["label", "options"]);
            if (options) {
                return (React.createElement(ListGroup, { key: i },
                    label && (React.createElement(ListGroupSubheader, { theme: "textDisabledOnBackground" }, label)),
                    React.createElement(MenuItems, null, options.map(function (_a) {
                        var label = _a.label, option = __rest(_a, ["label"]);
                        return renderOption({ label: label, option: option });
                    })),
                    i < selectOptions.length - 1 && React.createElement(ListDivider, null)));
            }
            return renderOption({ label: label, option: option });
        }),
        children));
}
export var Select = createComponent(function Select(props, ref) {
    var placeholder = props.placeholder, children = props.children, value = props.value, outlined = props.outlined, _a = props.label, label = _a === void 0 ? '' : _a, _b = props.options, options = _b === void 0 ? [] : _b, _c = props.rootProps, rootProps = _c === void 0 ? {} : _c, enhanced = props.enhanced, icon = props.icon, onChange = props.onChange, onFocus = props.onFocus, onBlur = props.onBlur, onKeyDown = props.onKeyDown, invalid = props.invalid, inputRef = props.inputRef, helpText = props.helpText, foundationRef = props.foundationRef, rest = __rest(props, ["placeholder", "children", "value", "outlined", "label", "options", "rootProps", "enhanced", "icon", "onChange", "onFocus", "onBlur", "onKeyDown", "invalid", "inputRef", "helpText", "foundationRef"]);
    var selectOptions = createSelectOptions(options);
    var _d = useSelectFoundation(props), rootEl = _d.rootEl, selectedTextEl = _d.selectedTextEl, notchWidth = _d.notchWidth, menuOpen = _d.menuOpen, selectedTextContent = _d.selectedTextContent, lineRippleActive = _d.lineRippleActive, lineRippleCenter = _d.lineRippleCenter, floatLabel = _d.floatLabel, setFloatingLabel = _d.setFloatingLabel, setNativeControl = _d.setNativeControl, setLeadingIcon = _d.setLeadingIcon, selectedIndex = _d.selectedIndex, setMenu = _d.setMenu, handleFocus = _d.handleFocus, handleBlur = _d.handleBlur, handleClick = _d.handleClick, handleKeydown = _d.handleKeydown, handleMenuClosed = _d.handleMenuClosed, handleMenuOpened = _d.handleMenuOpened, handleMenuSelected = _d.handleMenuSelected;
    var id = useId('select', props);
    var className = useClassNames(props, [
        'mdc-select',
        {
            'mdc-select--outlined': !!outlined,
            'mdc-select--required': !!props.required,
            'mdc-select--invalid': !!invalid,
            'mdc-select--with-leading-icon': !!icon,
            'mdc-select--no-label': !label
        }
    ]);
    var enhancedMenuProps = typeof enhanced === 'object' ? enhanced : {};
    var defaultValue = value !== undefined ? undefined : props.defaultValue || '';
    var renderedLabel = (React.createElement(FloatingLabel, { float: floatLabel, apiRef: setFloatingLabel, htmlFor: id }, label));
    var renderHelpText = function () {
        var shouldRender = !!helpText;
        if (!shouldRender) {
            return null;
        }
        var shouldSpread = typeof helpText === 'object' && !React.isValidElement(helpText);
        return helpText && shouldSpread ? (React.createElement(SelectHelperText, __assign({}, helpText))) : (React.createElement(SelectHelperText, null, helpText));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Tag, __assign({ role: "listbox" }, rootProps, { element: rootEl, ref: ref, className: className }),
            React.createElement("div", { className: "mdc-select__anchor" },
                !!icon && React.createElement(SelectIcon, { apiRef: setLeadingIcon, icon: icon }),
                React.createElement(SelectDropdownArrow, null),
                React.createElement(SelectedTextEl, { className: "mdc-select__selected-text", role: "button", "aria-haspopup": "listbox", element: selectedTextEl, onFocus: handleFocus, onBlur: handleBlur, onClick: handleClick, onKeyDown: handleKeydown, 
                    /** In the case of native selects, we don't want this to be be focusable */
                    tabIndex: enhanced ? undefined : -1 }, selectedTextContent || React.createElement(React.Fragment, null, "\u00A0")),
                outlined ? (React.createElement(NotchedOutline, { notch: notchWidth }, renderedLabel)) : (React.createElement(React.Fragment, null,
                    renderedLabel,
                    React.createElement(LineRipple, { active: lineRippleActive, center: lineRippleCenter }))),
                !enhanced && (React.createElement(NativeMenu, __assign({}, rest, { value: value, children: children, defaultValue: defaultValue, placeholder: placeholder, selectOptions: selectOptions, elementRef: setNativeControl, onFocus: handleFocus, onBlur: handleBlur, onChange: function (evt) {
                        return handleMenuSelected(evt.currentTarget.selectedIndex);
                    } })))),
            enhanced && (React.createElement(EnhancedMenu, __assign({}, rest, enhancedMenuProps, { anchorCorner: "bottomStart", defaultValue: defaultValue, placeholder: placeholder, open: menuOpen, onClose: handleMenuClosed, onOpen: handleMenuOpened, onSelect: function (evt) {
                    handleMenuSelected(evt.detail.index);
                }, selectOptions: selectOptions, value: value, selectedIndex: selectedIndex, menuApiRef: setMenu, children: children })))),
        renderHelpText()));
});
/** A help text component */
export var SelectHelperText = createComponent(function SelectHelperText(props, ref) {
    var persistent = props.persistent, validationMsg = props.validationMsg, rest = __rest(props, ["persistent", "validationMsg"]);
    var className = useClassNames(props, [
        'mdc-select-helper-text',
        {
            'mdc-select-helper-text--persistent': persistent,
            'mdc-select-helper-text--validation-msg': validationMsg
        }
    ]);
    return React.createElement(Tag, __assign({ tag: "p" }, rest, { className: className, ref: ref }));
});
