import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { useClassNames, Tag, createComponent } from '@rmwc/base';
import { IconButton } from '@rmwc/icon-button';
import { useTopAppBarFoundation } from './foundation';
/** A TopAppBar component */
export var TopAppBar = createComponent(function TopAppBar(props, ref) {
    return (React.createElement(TopAppBarBase, __assign({ key: props.short ? 'short' : props.fixed ? 'fixed' : 'top-app-bar' }, props, { ref: ref })));
});
var TopAppBarBase = createComponent(function TopAppBarBase(props, ref) {
    var rootEl = useTopAppBarFoundation(props).rootEl;
    var onNav = props.onNav, scrollTarget = props.scrollTarget, fixed = props.fixed, prominent = props.prominent, short = props.short, shortCollapsed = props.shortCollapsed, dense = props.dense, foundationRef = props.foundationRef, rest = __rest(props, ["onNav", "scrollTarget", "fixed", "prominent", "short", "shortCollapsed", "dense", "foundationRef"]);
    var className = useClassNames(props, [
        'mdc-top-app-bar',
        {
            'mdc-top-app-bar--fixed': fixed,
            'mdc-top-app-bar--prominent': prominent,
            'mdc-top-app-bar--short': short || shortCollapsed,
            'mdc-top-app-bar--short-collapsed': shortCollapsed,
            'mdc-top-app-bar--dense': dense
        }
    ]);
    return (React.createElement(Tag, __assign({ tag: "header" }, rest, { element: rootEl, className: className, ref: ref })));
});
/** A simplified syntax for creating an AppBar. */
export var SimpleTopAppBar = createComponent(function SimpleTopAppBar(props, ref) {
    var title = props.title, actionItems = props.actionItems, navigationIcon = props.navigationIcon, startContent = props.startContent, endContent = props.endContent, rest = __rest(props, ["title", "actionItems", "navigationIcon", "startContent", "endContent"]);
    return (React.createElement(TopAppBar, __assign({}, rest, { ref: ref }),
        React.createElement(TopAppBarRow, null,
            React.createElement(TopAppBarSection, { alignStart: true },
                !!navigationIcon && (React.createElement(TopAppBarNavigationIcon, __assign({ icon: "menu" }, (typeof navigationIcon === 'boolean' ? {} : navigationIcon)))),
                !!title && React.createElement(TopAppBarTitle, null, title),
                startContent),
            (!!actionItems || endContent) && (React.createElement(TopAppBarSection, { alignEnd: true },
                endContent,
                !!actionItems &&
                    actionItems.map(function (actionItemProps, index) { return (React.createElement(TopAppBarActionItem, __assign({}, actionItemProps, { key: index }))); }))))));
});
/** A row for the app bar. */
export var TopAppBarRow = createComponent(function TopAppBarRow(props, ref) {
    var className = useClassNames(props, ['mdc-top-app-bar__row']);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
/** A section for the app bar. */
export var TopAppBarSection = createComponent(function TopAppBarSection(props, ref) {
    var alignStart = props.alignStart, alignEnd = props.alignEnd, rest = __rest(props, ["alignStart", "alignEnd"]);
    var className = useClassNames(props, [
        'mdc-top-app-bar__section',
        {
            'mdc-top-app-bar__section--align-start': alignStart,
            'mdc-top-app-bar__section--align-end': alignEnd
        }
    ]);
    return React.createElement(Tag, __assign({ tag: "section" }, rest, { ref: ref, className: className }));
});
/** A navigation icon for the top app bar. This is an instance of the IconButton component. */
export var TopAppBarNavigationIcon = createComponent(function TopAppBarNavigationIcon(props, ref) {
    var className = useClassNames(props, ['mdc-top-app-bar__navigation-icon']);
    return React.createElement(IconButton, __assign({}, props, { className: className, ref: ref }));
});
/** Action items for the top app bar. This is an instance of the IconButton component.*/
export var TopAppBarActionItem = createComponent(function TopAppBarActionItem(props, ref) {
    var className = useClassNames(props, ['mdc-top-app-bar__action-item']);
    return React.createElement(IconButton, __assign({}, props, { className: className, ref: ref }));
});
/** A title for the top app bar. */
export var TopAppBarTitle = createComponent(function TopAppBarTitle(props, ref) {
    var className = useClassNames(props, ['mdc-top-app-bar__title']);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
/** An optional component to fill the space when the TopAppBar is fixed. Place it directly after the TopAppBar. */
export var TopAppBarFixedAdjust = createComponent(function TopAppBarFixedAdjust(props, ref) {
    var dense = props.dense, denseProminent = props.denseProminent, prominent = props.prominent, short = props.short, rest = __rest(props, ["dense", "denseProminent", "prominent", "short"]);
    var className = useClassNames(props, [
        {
            'mdc-top-app-bar--fixed-adjust': !props.dense && !props.denseProminent && !props.prominent && !props.short,
            'mdc-top-app-bar--dense-fixed-adjust': props.dense,
            'mdc-top-app-bar--prominent-fixed-adjust': props.prominent,
            'mdc-top-app-bar--dense-prominent-fixed-adjust': props.denseProminent,
            'mdc-top-app-bar--short-fixed-adjust': props.short
        }
    ]);
    return React.createElement(Tag, __assign({}, rest, { ref: ref, className: className }));
});
