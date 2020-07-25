import { __assign, __rest } from "tslib";
import { useEffect, useCallback } from 'react';
import { MDCListFoundation } from '@material/list';
import { matches } from '@rmwc/base';
import { useFoundation } from '@rmwc/base';
export var useListFoundation = function (props) {
    var listElements = useCallback(function (el) {
        if (el) {
            return [].slice.call(el.querySelectorAll("." + MDCListFoundation.cssClasses.LIST_ITEM_CLASS));
        }
        return [];
    }, []);
    var _a = useFoundation({
        props: props,
        api: function (_a) {
            var rootEl = _a.rootEl, foundation = _a.foundation;
            var adapter = foundation.adapter_;
            return {
                listElements: function () { return listElements(rootEl.ref); },
                focusRoot: function () { return rootEl.ref && rootEl.ref.focus(); },
                getClasses: function () { return MDCListFoundation.cssClasses.LIST_ITEM_CLASS; },
                addClassToElementIndex: adapter.addClassForElementIndex,
                removeClassFromElementAtIndex: adapter.removeClassForElementIndex,
                setAttributeForElementIndex: adapter.setAttributeForElementIndex,
                getListItemCount: adapter.getListItemCount,
                focusItemAtIndex: adapter.focusItemAtIndex
            };
        },
        elements: { rootEl: true },
        foundation: function (_a) {
            var rootEl = _a.rootEl, emit = _a.emit;
            return new MDCListFoundation({
                getListItemCount: function () { return listElements(rootEl.ref).length; },
                getFocusedElementIndex: function () {
                    return listElements(rootEl.ref).indexOf(document.activeElement);
                },
                listItemAtIndexHasClass: function (index, className) {
                    var element = listElements(rootEl.ref)[index];
                    return !!(element === null || element === void 0 ? void 0 : element.classList.contains(className));
                },
                setAttributeForElementIndex: function (index, attr, value) {
                    // This value is getting set and never getting set back
                    // This is causing list items to be un-tabbable
                    // if (attr === 'tabindex' && value === -1) {
                    //   return;
                    // }
                    if (attr === 'tabindex') {
                        attr = 'tabIndex';
                    }
                    var element = listElements(rootEl.ref)[index];
                    if (element) {
                        element.setAttribute(attr, String(value));
                    }
                },
                addClassForElementIndex: function (index, className) {
                    var element = listElements(rootEl.ref)[index];
                    if (element) {
                        element.classList.add(className);
                    }
                },
                removeClassForElementIndex: function (index, className) {
                    var element = listElements(rootEl.ref)[index];
                    if (element) {
                        element.classList.remove(className);
                    }
                },
                focusItemAtIndex: function (index) {
                    var element = listElements(rootEl.ref)[index];
                    if (element) {
                        element.focus();
                    }
                },
                setTabIndexForListItemChildren: function (listItemIndex, tabIndexValue) {
                    var element = listElements(rootEl.ref)[listItemIndex];
                    var listItemChildren = [].slice.call(element.querySelectorAll(MDCListFoundation.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
                    listItemChildren.forEach(function (ele) {
                        return ele.setAttribute('tabindex', String(tabIndexValue));
                    });
                },
                hasCheckboxAtIndex: function (index) {
                    var listItem = listElements(rootEl.ref)[index];
                    return !!listItem.querySelector(MDCListFoundation.strings.CHECKBOX_SELECTOR);
                },
                hasRadioAtIndex: function (index) {
                    var listItem = listElements(rootEl.ref)[index];
                    return !!listItem.querySelector(MDCListFoundation.strings.RADIO_SELECTOR);
                },
                isCheckboxCheckedAtIndex: function (index) {
                    var listItem = listElements(rootEl.ref)[index];
                    var toggleEl = listItem.querySelector(MDCListFoundation.strings.CHECKBOX_SELECTOR);
                    return toggleEl ? toggleEl.checked : false;
                },
                setCheckedCheckboxOrRadioAtIndex: function (index, isChecked) {
                    var listItem = listElements(rootEl.ref)[index];
                    var toggleEl = listItem.querySelector(MDCListFoundation.strings.CHECKBOX_RADIO_SELECTOR);
                    if (toggleEl) {
                        toggleEl.checked = isChecked;
                        var event_1 = document.createEvent('Event');
                        event_1.initEvent('change', true, true);
                        toggleEl.dispatchEvent(event_1);
                    }
                },
                notifyAction: function (index) {
                    emit('onAction', { index: index });
                },
                isFocusInsideList: function () {
                    var _a;
                    return !!((_a = rootEl.ref) === null || _a === void 0 ? void 0 : _a.contains(document.activeElement));
                },
                isRootFocused: function () { return document.activeElement === rootEl.ref; }
            });
        }
    }), foundation = _a.foundation, elements = __rest(_a, ["foundation"]);
    var rootEl = elements.rootEl;
    /**
     * Used to figure out which list item this event is targetting. Or returns -1 if
     * there is no list item
     */
    var getListItemIndex = useCallback(function (evt) {
        var eventTarget = evt.target;
        var index = -1;
        // Find the first ancestor that is a list item or the list.
        while (eventTarget &&
            !eventTarget.classList.contains(MDCListFoundation.cssClasses.LIST_ITEM_CLASS) &&
            !eventTarget.classList.contains(MDCListFoundation.cssClasses.ROOT)) {
            eventTarget = eventTarget.parentElement;
        }
        // Get the index of the element if it is a list item.
        if (eventTarget &&
            eventTarget.classList.contains(MDCListFoundation.cssClasses.LIST_ITEM_CLASS)) {
            index = listElements(rootEl.ref).indexOf(eventTarget);
        }
        return index;
    }, [listElements, rootEl.ref]);
    var handleClick = useCallback(function (evt) {
        var _a;
        (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, evt);
        var index = getListItemIndex(evt);
        // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
        var toggleCheckbox = !matches(evt.target, MDCListFoundation.strings.CHECKBOX_RADIO_SELECTOR);
        foundation.handleClick(index, toggleCheckbox);
    }, [getListItemIndex, foundation, props.onClick]);
    var handleKeydown = useCallback(function (evt) {
        var _a;
        (_a = props.onKeyDown) === null || _a === void 0 ? void 0 : _a.call(props, evt);
        var index = getListItemIndex(evt);
        if (index >= 0) {
            foundation.handleKeydown(evt, evt.target instanceof Element &&
                evt.target.classList.contains(MDCListFoundation.cssClasses.LIST_ITEM_CLASS), index);
        }
    }, [getListItemIndex, foundation, props.onKeyDown]);
    var handleFocusIn = useCallback(function (evt) {
        var _a;
        (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, evt);
        foundation.handleFocusIn(evt, getListItemIndex(evt));
    }, [getListItemIndex, foundation, props.onFocus]);
    var handleFocusOut = useCallback(function (evt) {
        var _a;
        (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, evt);
        foundation.handleFocusOut(evt, getListItemIndex(evt));
    }, [getListItemIndex, foundation, props.onBlur]);
    rootEl.setProp('onClick', handleClick, true);
    rootEl.setProp('onKeyDown', handleKeydown, true);
    rootEl.setProp('onFocus', handleFocusIn, true);
    rootEl.setProp('onBlur', handleFocusOut, true);
    // layout on mount
    useEffect(function () {
        foundation.layout();
    }, [foundation]);
    useEffect(function () {
        foundation.setWrapFocus(props.wrapFocus || props.wrapFocus === undefined);
    }, [foundation, props.wrapFocus]);
    useEffect(function () {
        foundation.setVerticalOrientation(props.vertical || props.vertical === undefined);
    }, [foundation, props.vertical]);
    return __assign({}, elements);
};
