import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { classNames, useClassNames, Tag, createComponent } from '@rmwc/base';
import { withRipple } from '@rmwc/ripple';
import { Icon } from '@rmwc/icon';
/** A ListItem component. */
export var ListItem = withRipple({ surface: false })(createComponent(function ListItem(props, ref) {
    var selected = props.selected, activated = props.activated, disabled = props.disabled, rest = __rest(props, ["selected", "activated", "disabled"]);
    var className = useClassNames(props, [
        'mdc-list-item',
        {
            'mdc-list-item--selected': props.selected,
            'mdc-list-item--activated': props.activated,
            'mdc-list-item--disabled': props.disabled
        }
    ]);
    return (React.createElement(Tag, __assign({ tag: "li", tabIndex: 0 }, rest, { className: className, ref: ref })));
}));
/** Text Wrapper for the ListItem */
export var ListItemText = createComponent(function ListItemText(props, ref) {
    var className = useClassNames(props, ['mdc-list-item__text']);
    return React.createElement(Tag, __assign({ tag: "span" }, props, { ref: ref, className: className }));
});
/** Primary Text for the ListItem */
export var ListItemPrimaryText = createComponent(function ListItemPrimaryText(props, ref) {
    var className = useClassNames(props, ['mdc-list-item__primary-text']);
    return React.createElement(Tag, __assign({ tag: "span" }, props, { ref: ref, className: className }));
});
/** Secondary text for the ListItem */
export var ListItemSecondaryText = createComponent(function ListItemSecondaryText(props, ref) {
    var className = useClassNames(props, ['mdc-list-item__secondary-text']);
    return React.createElement(Tag, __assign({ tag: "span" }, props, { ref: ref, className: className }));
});
/** A graphic / icon for the ListItem */
export var ListItemGraphic = createComponent(function ListItemGraphic(props, ref) {
    var className = useClassNames(props, ['mdc-list-item__graphic']);
    return (React.createElement(Icon, __assign({}, props, { "aria-hidden": "true", ref: ref, className: className })));
});
/** Meta content for the ListItem. This can either by an icon by setting the `icon` prop, or any other kind of content. */
export var ListItemMeta = createComponent(function ListItemMeta(props, ref) {
    var className = useClassNames(props, ['mdc-list-item__meta']);
    if (!!props.icon) {
        return (React.createElement(Icon, __assign({}, props, { "aria-hidden": "true", ref: ref, className: className })));
    }
    if (React.isValidElement(props.children)) {
        var children = props.children, rest = __rest(props, ["children"]);
        return React.cloneElement(props.children, __assign(__assign(__assign({}, rest), props.children.props), { className: classNames(className, props.children.props.className) }));
    }
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
/** A container to group ListItems */
export var ListGroup = createComponent(function ListGroup(props, ref) {
    var className = useClassNames(props, ['mdc-list-group']);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
/** A subheader for the ListGroup */
export var ListGroupSubheader = createComponent(function ListGroupSubheader(props, ref) {
    var className = useClassNames(props, ['mdc-list-group__subheader']);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
/** A divider for the List */
export var ListDivider = createComponent(function ListDivider(props, ref) {
    var className = useClassNames(props, ['mdc-list-divider']);
    return (React.createElement(Tag, __assign({ tag: "li", role: "separator" }, props, { ref: ref, className: className })));
});
/** A simple list item template. */
export var SimpleListItem = createComponent(function (_a, ref) {
    var text = _a.text, secondaryText = _a.secondaryText, graphic = _a.graphic, metaIcon = _a.metaIcon, meta = _a.meta, children = _a.children, rest = __rest(_a, ["text", "secondaryText", "graphic", "metaIcon", "meta", "children"]);
    var primaryTextToRender = text && secondaryText !== undefined ? (React.createElement(ListItemPrimaryText, null, text)) : (text);
    var secondaryTextToRender = secondaryText !== undefined ? (React.createElement(ListItemSecondaryText, null, secondaryText)) : null;
    return (React.createElement(ListItem, __assign({}, rest, { ref: ref }),
        graphic !== undefined && React.createElement(ListItemGraphic, { icon: graphic }),
        secondaryTextToRender !== null ? (React.createElement(ListItemText, null,
            primaryTextToRender,
            secondaryTextToRender)) : (primaryTextToRender),
        (!!meta || !!metaIcon) && (React.createElement(ListItemMeta, { icon: metaIcon }, meta)),
        children));
});
