import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { useClassNames, Tag, createComponent } from '@rmwc/base';
import { Icon } from '@rmwc/icon';
import { withRipple, RippleSurface } from '@rmwc/ripple';
import { TabBarContext } from './tab-bar-context';
import { TabIndicator } from './tab-indicator';
import { useTabFoundation } from './tab-foundation';
var TabRoot = withRipple({ surface: false })(createComponent(function TabRoot(props, ref) {
    var stacked = props.stacked, minWidth = props.minWidth, rest = __rest(props, ["stacked", "minWidth"]);
    var className = useClassNames(props, [
        'mdc-tab',
        {
            'mdc-tab--stacked': stacked,
            'mdc-tab--min-width': minWidth
        }
    ]);
    return React.createElement(Tag, __assign({ tag: "button" }, rest, { className: className, ref: ref }));
}));
/** A Tab icon. This is an instance of the Icon component. */
var TabIcon = React.memo(function TabIcon(props) {
    return React.createElement(Icon, __assign({}, props, { className: "mdc-tab__icon" }));
});
/** A Tab component */
export var Tab = createComponent(function Tab(props, ref) {
    var children = props.children, label = props.label, icon = props.icon, stacked = props.stacked, restrictIndicator = props.restrictIndicator, onInteraction = props.onInteraction, iconIndicator = props.iconIndicator, foundationRef = props.foundationRef, rest = __rest(props, ["children", "label", "icon", "stacked", "restrictIndicator", "onInteraction", "iconIndicator", "foundationRef"]);
    var _a = useTabFoundation(props), rootEl = _a.rootEl, contentEl = _a.contentEl, setTabIndicatorApi = _a.setTabIndicatorApi;
    var contextApi = React.useContext(TabBarContext);
    var tabIndicator = (React.createElement(TabIndicator, { apiRef: setTabIndicatorApi, transition: contextApi.indicatorTransition, icon: iconIndicator }));
    return (React.createElement(TabRoot, __assign({ element: rootEl, stacked: stacked }, rest, { ref: ref }),
        React.createElement("div", { className: "mdc-tab__content", ref: contentEl.setRef },
            !!icon && React.createElement(TabIcon, { icon: icon }),
            (children !== undefined || label !== undefined) && (React.createElement("span", { className: "mdc-tab__text-label" },
                label,
                children)),
            !!restrictIndicator && tabIndicator),
        !restrictIndicator && tabIndicator,
        React.createElement(RippleSurface, { className: "mdc-tab__ripple" })));
});
