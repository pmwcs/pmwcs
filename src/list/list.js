import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { Tag, useClassNames, createComponent } from '@rmwc/base';
import { useListFoundation } from './foundation';
export var List = createComponent(function List(props, ref) {
    var dense = props.dense, twoLine = props.twoLine, avatarList = props.avatarList, apiRef = props.apiRef, nonInteractive = props.nonInteractive, onAction = props.onAction, foundationRef = props.foundationRef, rest = __rest(props, ["dense", "twoLine", "avatarList", "apiRef", "nonInteractive", "onAction", "foundationRef"]);
    var rootEl = useListFoundation(props).rootEl;
    var className = useClassNames(props, [
        'mdc-list',
        {
            'mdc-list--dense': dense,
            'mdc-list--two-line': twoLine,
            'mdc-list--avatar-list': avatarList,
            'mdc-list--non-interactive': nonInteractive
        }
    ]);
    return (React.createElement(Tag, __assign({ tag: "ul" }, rest, { element: rootEl, className: className, ref: ref })));
});
