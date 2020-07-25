import { useId, emptyClientRect } from '@rmwc/base';
import { useFoundation } from '@rmwc/base';
import { MDCChipFoundation } from '@material/chips';
import { useEffect, useCallback } from 'react';
export var useChipFoundation = function (props) {
    var chipId = useId('chip', props);
    var foundationWithElements = useFoundation({
        props: props,
        elements: {
            rootEl: true,
            trailingIconEl: true,
            checkmarkEl: true
        },
        foundation: function (_a) {
            var rootEl = _a.rootEl, checkmarkEl = _a.checkmarkEl, emit = _a.emit, getProps = _a.getProps;
            return new MDCChipFoundation({
                addClass: function (className) {
                    rootEl.addClass(className);
                },
                removeClass: function (className) { return rootEl.removeClass(className); },
                hasClass: function (className) { return rootEl.hasClass(className); },
                addClassToLeadingIcon: function (className) {
                    // handled by props
                },
                removeClassFromLeadingIcon: function (className) {
                    // handled by props
                },
                eventTargetHasClass: function (target, className) {
                    return (rootEl.hasClass(className) || target.classList.contains(className));
                },
                notifyInteraction: function () {
                    return emit('onInteraction', { chipId: chipId }, true /* shouldBubble */);
                },
                notifySelection: function (selected) {
                    return emit('onSelect', { chipId: chipId, selected: selected }, true /* shouldBubble */);
                },
                notifyTrailingIconInteraction: function () {
                    return emit('onTrailingIconInteraction', { chipId: chipId }, true /* shouldBubble */);
                },
                notifyRemoval: function () {
                    return emit('onRemove', { chipId: chipId, root: rootEl.ref }, true /* shouldBubble */);
                },
                notifyNavigation: function (key, source) {
                    //TODO, but probably not needed in case of React
                },
                getComputedStyleValue: function (propertyName) {
                    return rootEl.ref
                        ? window.getComputedStyle(rootEl.ref).getPropertyValue(propertyName)
                        : '';
                },
                setStyleProperty: function (propertyName, value) {
                    rootEl.setStyle(propertyName, value);
                },
                getAttribute: function (attrName) { var _a; return (_a = rootEl.ref) === null || _a === void 0 ? void 0 : _a.getAttribute(attrName); },
                hasLeadingIcon: function () { return !!props.icon; },
                getRootBoundingClientRect: function () { var _a; return ((_a = rootEl.ref) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) || emptyClientRect; },
                getCheckmarkBoundingClientRect: function () { var _a; return ((_a = checkmarkEl.ref) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) || emptyClientRect; },
                setPrimaryActionAttr: function (attr, value) {
                    // Not clear in documentation what this should be used for
                },
                focusPrimaryAction: function () {
                    // Not clear in documentation what this should be used for
                },
                hasTrailingAction: function () {
                    return !!getProps().trailingIcon;
                },
                setTrailingActionAttr: function (attr, value) {
                    var safeAttr = attr === 'tabindex' ? 'tabIndex' : attr;
                    trailingIconEl.setProp(safeAttr, value);
                },
                focusTrailingAction: function () {
                    var _a;
                    (_a = trailingIconEl.ref) === null || _a === void 0 ? void 0 : _a.focus();
                },
                isRTL: function () {
                    return rootEl.ref
                        ? window
                            .getComputedStyle(rootEl.ref)
                            .getPropertyValue('direction') === 'rtl'
                        : false;
                }
            });
        }
    });
    var rootEl = foundationWithElements.rootEl, trailingIconEl = foundationWithElements.trailingIconEl, foundation = foundationWithElements.foundation;
    var handleInteraction = useCallback(function (evt) {
        var _a, _b;
        evt.type === 'click' && ((_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, evt));
        evt.type === 'keydown' && ((_b = props.onKeyDown) === null || _b === void 0 ? void 0 : _b.call(props, evt));
        return foundation.handleInteraction(evt);
    }, [foundation, props.onClick, props.onKeyDown]);
    var handleTransitionEnd = useCallback(function (evt) {
        foundation.handleTransitionEnd(evt);
    }, [foundation]);
    var handleTrailingIconInteraction = useCallback(function (evt) {
        return foundation.handleTrailingIconInteraction(evt);
    }, [foundation]);
    // Allow customizing the behavior of the trailing icon
    useEffect(function () {
        var _a;
        foundation.setShouldRemoveOnTrailingIconClick((_a = props.trailingIconRemovesChip) !== null && _a !== void 0 ? _a : true);
    }, [foundation, props.trailingIconRemovesChip]);
    rootEl.setProp('onClick', handleInteraction, true);
    rootEl.setProp('onKeyDown', handleInteraction, true);
    rootEl.setProp('onTransitionEnd', handleTransitionEnd, true);
    trailingIconEl.setProp('onClick', handleTrailingIconInteraction, true);
    trailingIconEl.setProp('onKeyDown', handleTrailingIconInteraction, true);
    return foundationWithElements;
};
