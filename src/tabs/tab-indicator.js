import { h } from 'preact';
import { classNames, Tag } from '@pmwc/base';
import { Icon } from '@pmwc/icon';
import { useTabIndicatorFoundation } from './tab-indicator-foundation';
export function TabIndicator(props) {
    var _a = useTabIndicatorFoundation(props), rootEl = _a.rootEl, contentEl = _a.contentEl;
    var icon = props.icon, transition = props.transition;
    return (React.createElement(Tag, { tag: "span", element: rootEl, className: classNames('mdc-tab-indicator', {
            'mdc-tab-indicator--fade': transition === 'fade'
        }) },
        React.createElement(Tag, { tag: !!icon ? Icon : 'span', "aria-hidden": "true", 
            // @ts-ignore icon prop not always present, this is ok
            icon: icon, element: contentEl, className: "mdc-tab-indicator__content mdc-tab-indicator__content--" + (icon ? 'icon' : 'underline') })));
}
