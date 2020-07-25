import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { classNames } from '@rmwc/base';
import ReactTooltip from 'rc-tooltip';
import { useProviderContext } from '@rmwc/provider';
/** A Tooltip component for displaying informative popover information. */
export var Tooltip = function Tooltip(_a) {
    var children = _a.children, content = _a.content, className = _a.className, open = _a.open, rest = __rest(_a, ["children", "content", "className", "open"]);
    var providerContext = useProviderContext();
    // merge together provider options
    var _b = __assign(__assign({}, providerContext.tooltip), rest), _c = _b.showArrow, showArrow = _c === void 0 ? false : _c, _d = _b.enterDelay, enterDelay = _d === void 0 ? 0 : _d, _e = _b.leaveDelay, leaveDelay = _e === void 0 ? 0 : _e, _f = _b.align, align = _f === void 0 ? 'top' : _f, _g = _b.activateOn, activateOn = _g === void 0 ? ['hover', 'focus'] : _g;
    return (React.createElement(ReactTooltip, __assign({}, (open !== undefined ? { visible: open } : {}), { trigger: Array.isArray(activateOn) ? activateOn : [activateOn], prefixCls: "rmwc-tooltip", placement: align, transitionName: "rmwc-tooltip-zoom", mouseEnterDelay: enterDelay / 1000, mouseLeaveDelay: leaveDelay / 1000, overlay: content, overlayClassName: classNames(className, {
            'rmwc-tooltip--show-arrow': showArrow
        }), destroyTooltipOnHide: true }), children));
};
