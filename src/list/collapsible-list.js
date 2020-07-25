import { __assign, __extends, __rest } from "tslib";
import { h } from 'preact';
import { classNames, Tag } from '@rmwc/base';
var possiblyFocusElement = function (el) {
    if (!el)
        return false;
    var tabIndex = el.getAttribute('tabindex');
    if (tabIndex && Number(tabIndex) >= 0) {
        el.focus();
        return true;
    }
    return false;
};
var getNextSibling = function (el, isBack) {
    if (!el)
        return null;
    var next = isBack ? el.previousElementSibling : el.nextElementSibling;
    if (next === null) {
        return getNextSibling(el.parentElement, isBack);
    }
    return next;
};
/** A collapsible list component. */
var CollapsibleList = /** @class */ (function (_super) {
    __extends(CollapsibleList, _super);
    function CollapsibleList(props) {
        var _this = _super.call(this, props) || this;
        _this.childContainer = null;
        _this.root = null;
        _this.rafId = null;
        _this.timerId = null;
        _this.state = {
            open: !!_this.props.defaultOpen || !!_this.props.open,
            childrenStyle: {}
        };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleKeydown = _this.handleKeydown.bind(_this);
        _this.handleFocus = _this.handleFocus.bind(_this);
        return _this;
    }
    CollapsibleList.getDerivedStateFromProps = function (props, state) {
        if (props.open !== undefined && props.open !== state.open) {
            return __assign(__assign({}, state), { open: props.open });
        }
        return state;
    };
    CollapsibleList.prototype.componentDidMount = function () {
        this.syncOpenState();
    };
    CollapsibleList.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (prevState.open !== this.state.open) {
            this.syncOpenState();
        }
    };
    CollapsibleList.prototype.componentWillUnmount = function () {
        this.rafId && window.cancelAnimationFrame(this.rafId);
        this.timerId && window.clearTimeout(this.timerId);
    };
    CollapsibleList.prototype.syncOpenState = function () {
        var _this = this;
        var _a = this.props, onOpen = _a.onOpen, onClose = _a.onClose;
        var childrenStyle = {
            maxHeight: this.childContainer
                ? this.childContainer.offsetHeight + "px"
                : '0px'
        };
        this.setState({ childrenStyle: childrenStyle }, function () {
            if (_this.state.open) {
                onOpen && onOpen();
                _this.timerId = window.setTimeout(function () {
                    if (_this.state.open) {
                        _this.setState({
                            childrenStyle: {
                                maxHeight: 'none'
                            }
                        });
                    }
                }, 300);
            }
            else {
                onClose && onClose();
                _this.rafId = window.requestAnimationFrame(function () {
                    _this.setState({
                        childrenStyle: {}
                    });
                });
            }
        });
    };
    CollapsibleList.prototype.correctFocus = function (back) {
        var _this = this;
        this.rafId = window.requestAnimationFrame(function () {
            if (!_this.state.open &&
                _this.root &&
                _this.root.contains(document.activeElement)) {
                var sibling = getNextSibling(_this.root, back);
                if (possiblyFocusElement(sibling)) {
                    return;
                }
                if (sibling) {
                    var els = sibling.querySelectorAll('[tabindex]');
                    for (var i = 0; i < els.length; i++) {
                        if (possiblyFocusElement(els[i])) {
                            break;
                        }
                    }
                }
            }
        });
    };
    CollapsibleList.prototype.toggleOpen = function (isOpen) {
        this.setState({ open: isOpen });
    };
    CollapsibleList.prototype.handleClick = function (evt) {
        // call events that might have been on the handle
        var handle = this.props.handle;
        handle.props.onClick && handle.props.onClick(evt);
        this.toggleOpen(!this.state.open);
    };
    CollapsibleList.prototype.handleKeydown = function (evt) {
        // call events that might have been on the handle
        var handle = this.props.handle;
        handle.props.onKeyDown && handle.props.onKeyDown(evt);
        switch (evt.which) {
            case 13:
                this.toggleOpen(!this.state.open);
                return;
            case 39:
                this.toggleOpen(true);
                return;
            case 38:
            case 40:
            case 9:
                var isBack = evt.shiftKey || evt.which === 38;
                this.correctFocus(isBack);
                return;
            case 37:
                this.toggleOpen(false);
                return;
            default:
                break;
        }
    };
    CollapsibleList.prototype.handleFocus = function (evt) {
        if (!this.state.open &&
            this.root &&
            this.childContainer &&
            this.childContainer.contains(document.activeElement)) {
            var el = this.root.querySelector('.rmwc-collapsible-list__handle .mdc-list-item');
            el && el.focus();
        }
    };
    CollapsibleList.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, handle = _a.handle, onOpen = _a.onOpen, onClose = _a.onClose, openProp = _a.open, defaultOpen = _a.defaultOpen, className = _a.className, rest = __rest(_a, ["children", "handle", "onOpen", "onClose", "open", "defaultOpen", "className"]);
        var _b = this.state, open = _b.open, childrenStyle = _b.childrenStyle;
        return (React.createElement(Tag, __assign({}, rest, { onFocus: this.handleFocus, ref: function (el) { return (_this.root = el); }, className: classNames('rmwc-collapsible-list', className, {
                'rmwc-collapsible-list--open': open
            }) }),
            React.createElement("div", { className: "rmwc-collapsible-list__handle" }, React.cloneElement(handle, __assign(__assign({}, handle.props), { onClick: this.handleClick, onKeyDown: this.handleKeydown }))),
            React.createElement("div", { className: "rmwc-collapsible-list__children", style: childrenStyle },
                React.createElement("div", { className: "rmwc-collapsible-list__children-inner", ref: function (el) { return (_this.childContainer = el); } }, children))));
    };
    CollapsibleList.displayName = 'CollapsibleList';
    return CollapsibleList;
}(React.Component));
export { CollapsibleList };
