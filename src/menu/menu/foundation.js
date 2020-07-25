import { __assign, __read, __rest, __spread } from "tslib";
import { useCallback, useRef, useEffect } from 'react';
import { MDCMenuFoundation } from '@material/menu';
import { useFoundation, closest } from '@rmwc/base';
export var useMenuFoundation = function (props) {
    var menuSurfaceApi = useRef();
    var listApi = useRef();
    var setListApi = function (api) {
        listApi.current = api;
    };
    var setMenuSurfaceApi = function (api) {
        menuSurfaceApi.current = api;
    };
    var items = useCallback(function () {
        var _a;
        return ((_a = listApi.current) === null || _a === void 0 ? void 0 : _a.listElements()) || [];
    }, []);
    var _a = useFoundation({
        props: __assign(__assign({}, props), { 
            // we don't want to pass the apiRef all the way through
            apiRef: undefined }),
        elements: {
            rootEl: true
        },
        foundation: function (_a) {
            var emit = _a.emit;
            return new MDCMenuFoundation({
                addClassToElementAtIndex: function () {
                    var _a;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return (_a = listApi.current) === null || _a === void 0 ? void 0 : _a.addClassToElementIndex.apply(_a, __spread(args));
                },
                removeClassFromElementAtIndex: function () {
                    var _a;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return (_a = listApi.current) === null || _a === void 0 ? void 0 : _a.removeClassFromElementAtIndex.apply(_a, __spread(args));
                },
                addAttributeToElementAtIndex: function () {
                    var _a;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return (_a = listApi.current) === null || _a === void 0 ? void 0 : _a.setAttributeForElementIndex.apply(_a, __spread(args));
                },
                removeAttributeFromElementAtIndex: function (index, attr) {
                    var list = items();
                    list[index].removeAttribute(attr);
                },
                elementContainsClass: function (element, className) {
                    return element.classList.contains(className);
                },
                closeSurface: function () {
                    var _a;
                    (_a = menuSurfaceApi.current) === null || _a === void 0 ? void 0 : _a.setOpen(false);
                },
                getElementIndex: function (element) {
                    return items().indexOf(element);
                },
                notifySelected: function (evtData) {
                    return emit('onSelect', {
                        index: evtData.index,
                        item: items()[evtData.index]
                    });
                },
                getMenuItemCount: function () { var _a; return ((_a = listApi.current) === null || _a === void 0 ? void 0 : _a.getListItemCount()) || 0; },
                focusItemAtIndex: function () {
                    var _a;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return (_a = listApi.current) === null || _a === void 0 ? void 0 : _a.focusItemAtIndex.apply(_a, __spread(args));
                },
                focusListRoot: function () { var _a; return (_a = listApi.current) === null || _a === void 0 ? void 0 : _a.focusRoot(); }
            });
        }
    }), foundation = _a.foundation, elements = __rest(_a, ["foundation"]);
    var rootEl = elements.rootEl;
    var handleClick = useCallback(function (evt) {
        var _a;
        (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, evt);
        // fixes an issue with nested span element on list items
        var el = closest(evt.target, '.mdc-list-item');
        el && foundation.handleItemAction(el);
    }, [foundation, props.onClick]);
    var handleKeydown = useCallback(function (evt) {
        var _a;
        (_a = props.onKeyDown) === null || _a === void 0 ? void 0 : _a.call(props, evt);
        foundation.handleKeydown(evt);
        // Jump through some hoops to find out
        // that we are selecting the list item
        // This is instead of trying to listen to an event on the list item
        // which is what MDC does
        if (evt.which === 13 &&
            evt.target instanceof Element &&
            listApi.current &&
            evt.target.classList.contains(listApi.current.getClasses())) {
            foundation.handleItemAction(evt.target);
        }
    }, [foundation, props.onKeyDown]);
    var handleOpen = useCallback(function (evt) {
        var _a;
        var list = items();
        if ((props.focusOnOpen || props.focusOnOpen === undefined) &&
            list.length > 0 &&
            !list.some(function (el) { return el === document.activeElement; })) {
            list[0].focus();
        }
        (_a = props.onOpen) === null || _a === void 0 ? void 0 : _a.call(props, evt);
    }, [props.onOpen, props.focusOnOpen, items]);
    rootEl.setProp('onKeyDown', handleKeydown, true);
    rootEl.setProp('onClick', handleClick, true);
    rootEl.setProp('onOpen', handleOpen, true);
    var canSetApi = listApi.current && menuSurfaceApi.current && props.apiRef;
    useEffect(function () {
        if (listApi.current && menuSurfaceApi.current && props.apiRef) {
            props.apiRef(__assign(__assign(__assign({}, listApi.current), menuSurfaceApi.current), { items: items }));
        }
        // eslint-disable-next-line
    }, [canSetApi, items]);
    return __assign({ setListApi: setListApi, setMenuSurfaceApi: setMenuSurfaceApi }, elements);
};
