import { __assign, __read, __rest } from "tslib";
import { useCallback, useEffect, useState, useRef } from 'react';
import { useFoundation, closest, emptyClientRect, raf } from '@rmwc/base';
import { MDCMenuSurfaceFoundation, util } from '@material/menu-surface';
var ANCHOR_CORNER_MAP = {
    bottomEnd: 'BOTTOM_END',
    bottomLeft: 'BOTTOM_LEFT',
    bottomRight: 'BOTTOM_RIGHT',
    bottomStart: 'BOTTOM_START',
    topEnd: 'TOP_END',
    topLeft: 'TOP_LEFT',
    topRight: 'TOP_RIGHT',
    topStart: 'TOP_START'
};
var getAnchorCornerFromProp = function (anchorCorner) { return MDCMenuSurfaceFoundation.Corner[ANCHOR_CORNER_MAP[anchorCorner]]; };
export var useMenuSurfaceFoundation = function (props) {
    var _a = __read(useState(props.open), 2), open = _a[0], setOpen = _a[1];
    var firstFocusableElementRef = useRef(null);
    var previousFocusRef = useRef(null);
    var anchorElementRef = useRef(null);
    var timerIdRef = useRef(null);
    var _b = useFoundation({
        props: props,
        elements: { rootEl: true },
        api: function (_a) {
            var foundation = _a.foundation, rootEl = _a.rootEl;
            return {
                hoistMenuToBody: function () {
                    // this is controlled by the renderToPortal prop
                },
                setAnchorCorner: function (corner) { return foundation.setAnchorCorner(corner); },
                setAnchorElement: function (element) {
                    return (anchorElementRef.current = element);
                },
                setOpen: function (open) { return setOpen(open); },
                getSurfaceElement: function () { return rootEl.ref; }
            };
        },
        foundation: function (_a) {
            var rootEl = _a.rootEl, getProps = _a.getProps, emit = _a.emit;
            var handleBodyClick = function (evt) {
                foundation.handleBodyClick(evt);
            };
            var registerBodyClickListener = function () {
                /**
                 * Corrects issue on mobile devices that don't support fast click
                 * Causing the menu to close as soon as its open
                 **/
                setTimeout(function () {
                    document.body.addEventListener('click', handleBodyClick);
                    document.body.addEventListener('touchstart', handleBodyClick);
                }, 150);
            };
            var deregisterBodyClickListener = function () {
                document.body.removeEventListener('click', handleBodyClick);
                document.body.removeEventListener('touchstart', handleBodyClick);
            };
            var getFocusAdapterMethods = function () {
                return {
                    isFocused: function () { return document.activeElement === rootEl.ref; },
                    saveFocus: function () {
                        previousFocusRef.current = document.activeElement;
                    },
                    restoreFocus: function () {
                        if (rootEl.ref && rootEl.ref.contains(document.activeElement)) {
                            if (previousFocusRef.current && previousFocusRef.current.focus) {
                                previousFocusRef.current.focus();
                            }
                        }
                    },
                    isFirstElementFocused: function () {
                        return !!firstFocusableElementRef.current &&
                            firstFocusableElementRef.current === document.activeElement;
                    },
                    isLastElementFocused: function () {
                        return !!firstFocusableElementRef.current &&
                            firstFocusableElementRef.current === document.activeElement;
                    },
                    focusFirstElement: function () {
                        return !!firstFocusableElementRef.current &&
                            firstFocusableElementRef.current.focus &&
                            firstFocusableElementRef.current.focus();
                    },
                    focusLastElement: function () {
                        return !!firstFocusableElementRef.current &&
                            firstFocusableElementRef.current.focus &&
                            firstFocusableElementRef.current.focus();
                    }
                };
            };
            var getDimensionAdapterMethods = function () {
                return {
                    getInnerDimensions: function () {
                        return {
                            width: rootEl.ref ? rootEl.ref.offsetWidth : 0,
                            height: rootEl.ref ? rootEl.ref.offsetHeight : 0
                        };
                    },
                    getAnchorDimensions: function () {
                        var _a;
                        return (((_a = anchorElementRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect()) ||
                            emptyClientRect);
                    },
                    getWindowDimensions: function () {
                        return {
                            width: window.innerWidth,
                            height: window.innerHeight
                        };
                    },
                    getBodyDimensions: function () {
                        return {
                            width: document.body.clientWidth,
                            height: document.body.clientHeight
                        };
                    },
                    getWindowScroll: function () {
                        return { x: window.pageXOffset, y: window.pageYOffset };
                    },
                    setPosition: function (position) {
                        rootEl.setStyle('left', position.left !== undefined ? position.left : null);
                        rootEl.setStyle('right', position.right !== undefined ? position.right : null);
                        rootEl.setStyle('top', position.top !== undefined ? position.top : null);
                        rootEl.setStyle('bottom', position.bottom !== undefined ? position.bottom : null);
                    },
                    setMaxHeight: function (height) {
                        rootEl.setStyle('maxHeight', height);
                    }
                };
            };
            var f = new MDCMenuSurfaceFoundation(__assign(__assign({ addClass: function (className) {
                    rootEl.addClass(className);
                }, removeClass: function (className) {
                    rootEl.removeClass(className);
                }, hasClass: function (className) {
                    return className === 'mdc-menu-surface' ? true : rootEl.hasClass(className);
                }, hasAnchor: function () { return !!anchorElementRef.current; }, notifyClose: function () {
                    deregisterBodyClickListener();
                    setOpen(false);
                }, notifyOpen: function () {
                    emit('onOpen', {});
                    registerBodyClickListener();
                }, isElementInContainer: function (el) {
                    return rootEl.ref === el || (!!rootEl.ref && rootEl.ref.contains(el));
                }, isRtl: function () {
                    return !!rootEl.ref &&
                        getComputedStyle(rootEl.ref).getPropertyValue('direction') === 'rtl';
                }, setTransformOrigin: function (origin) {
                    rootEl.setStyle(util.getTransformPropertyName(window) + "-origin", origin);
                } }, getFocusAdapterMethods()), getDimensionAdapterMethods()));
            // Fixes a very annoying issue where the menu isn't stateful
            // this allows us to keep the menu open based on its controlled prop.
            var existingClose = f.close.bind(f);
            var newClose = function (skipRestoreFocus) {
                if (skipRestoreFocus === void 0) { skipRestoreFocus = false; }
                emit('onClose', {});
                timerIdRef.current = window.setTimeout(function () {
                    if (!getProps().open) {
                        existingClose(skipRestoreFocus);
                    }
                });
            };
            f.close = newClose;
            // Didn't have another way to hook into the destroy function...
            var existingDestroy = f.destroy.bind(f);
            f.destroy = function () {
                deregisterBodyClickListener();
                existingDestroy();
            };
            return f;
        }
    }), foundation = _b.foundation, elements = __rest(_b, ["foundation"]);
    var rootEl = elements.rootEl;
    var handleKeydown = useCallback(function (evt) {
        var _a;
        (_a = props.onKeyDown) === null || _a === void 0 ? void 0 : _a.call(props, evt);
        foundation.handleKeydown(evt);
    }, [props.onKeyDown, foundation]);
    rootEl.setProp('onKeyDown', handleKeydown, true);
    // fixed
    useEffect(function () {
        foundation.setFixedPosition(!!props.fixed);
    }, [props.fixed, foundation]);
    // on mount
    useEffect(function () {
        var el = rootEl.ref;
        if (el) {
            var anchor = closest(el, "." + MDCMenuSurfaceFoundation.cssClasses.ANCHOR);
            anchor && (anchorElementRef.current = anchor);
        }
    }, [rootEl.ref]);
    // renderToPortal
    useEffect(function () {
        props.renderToPortal
            ? foundation.setIsHoisted(true)
            : foundation.setIsHoisted(false);
        var autoPosition = function () {
            try {
                // silence this, it blows up loudly occasionally
                // @ts-ignore unsafe private variable access
                foundation.autoPosition_();
            }
            catch (err) { }
        };
        // wait an extra frame so that the element is actually
        // done being hoisted and painting. Fixes Issue #453
        var handler = props.renderToPortal ? autoPosition : function () { };
        raf(function () {
            foundation.isOpen() && autoPosition();
        });
        // fix positioning on window resize when renderToPortal is true
        window.addEventListener('resize', handler);
        return function () {
            window.removeEventListener('resize', handler);
        };
    }, [props.renderToPortal, foundation]);
    // anchorCorner
    useEffect(function () {
        var anchorCorner = props.anchorCorner && getAnchorCornerFromProp(props.anchorCorner);
        if (anchorCorner !== undefined) {
            foundation.setAnchorCorner(anchorCorner);
            // @ts-ignore unsafe private variable reference
            foundation.dimensions_ = foundation.adapter_.getInnerDimensions();
            // @ts-ignore unsafe private variable reference
            foundation.autoPosition_();
        }
    }, [props.anchorCorner, foundation]);
    // open
    useEffect(function () {
        if (open) {
            var focusableElements = rootEl.ref
                ? rootEl.ref.querySelectorAll(MDCMenuSurfaceFoundation.strings.FOCUSABLE_ELEMENTS)
                : [];
            firstFocusableElementRef.current =
                focusableElements.length > 0 ? focusableElements[0] : null;
            foundation.open();
        }
        else if (foundation.isOpen()) {
            foundation.close();
        }
    }, [open, foundation, rootEl.ref]);
    useEffect(function () {
        setOpen(!!props.open);
    }, [props.open]);
    // cleanup
    useEffect(function () {
        return function () {
            timerIdRef.current && window.clearTimeout(timerIdRef.current);
        };
    }, []);
    return __assign({}, elements);
};
