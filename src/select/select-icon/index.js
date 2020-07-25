import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { Icon } from '@rmwc/icon';
import { useClassNames } from '@rmwc/base';
import { useSelectIconFoundation } from './foundation';
export var SelectIcon = function SelectIcon(props) {
    var apiRef = props.apiRef, rest = __rest(props, ["apiRef"]);
    var rootEl = useSelectIconFoundation(props).rootEl;
    var className = useClassNames(props, ['mdc-select__icon']);
    return (React.createElement(Icon, __assign({}, rootEl.props(__assign(__assign({}, rest), { className: className })))));
};
