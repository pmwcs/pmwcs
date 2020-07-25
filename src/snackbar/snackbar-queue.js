import { __assign, __read, __rest } from "tslib";
import React, { useState, useEffect, useCallback } from 'react';
import { Snackbar, SnackbarAction } from './snackbar';
import { ArrayEmitter } from '@rmwc/base';
/** A snackbar queue for rendering messages */
export function SnackbarQueue(_a) {
    var messages = _a.messages, defaultSnackbarProps = __rest(_a, ["messages"]);
    var currentMessage = messages.array[0];
    var _b = __read(useState(0), 2), setIteration = _b[1];
    var _c = __read(useState(messages.array[0]), 2), message = _c[0], setMessage = _c[1];
    var removeMessage = useCallback(function (message) {
        message && messages.remove(message);
    }, [messages]);
    useEffect(function () {
        var timerId;
        var doChange = function () {
            if (messages.array[0] !== message) {
                setIteration(function (val) { return val + 1; });
                timerId = window.setTimeout(function () { return setMessage(messages.array[0]); }, 150);
            }
        };
        messages.on('change', doChange);
        return function () {
            timerId && clearTimeout(timerId);
            messages.off('change', doChange);
        };
    }, [messages, message]);
    var _d = message || {}, _e = _d.body, body = _e === void 0 ? '' : _e, image = _d.image, _f = _d.title, title = _f === void 0 ? '' : _f, onClose = _d.onClose, actions = _d.actions, messageSnackbarProps = __rest(_d, ["body", "image", "title", "onClose", "actions"]);
    var actionProp = actions
        ? actions.map(function (_a) {
            var title = _a.title, label = _a.label, rest = __rest(_a, ["title", "label"]);
            return (React.createElement(SnackbarAction, __assign({}, rest, { label: label || title })));
        })
        : null;
    // We are open if we have a message
    // and the current one is the one in state
    var open = message && message === currentMessage;
    return (React.createElement(Snackbar, __assign({}, defaultSnackbarProps, messageSnackbarProps, { open: open, message: React.createElement(React.Fragment, null,
            title,
            !!title && !!body && React.createElement("br", null),
            body,
            !!image && (React.createElement("div", { className: "rmwc-snackbar__image", style: {
                    margin: '1rem auto',
                    textAlign: 'center'
                } },
                React.createElement("img", { src: image, alt: "" + image, style: { maxWidth: '100%', maxHeight: '18rem' } })))), onClose: function (evt) {
            onClose === null || onClose === void 0 ? void 0 : onClose(evt);
            removeMessage(message);
        }, action: actionProp })));
}
/** Creates a snackbar queue */
export var createSnackbarQueue = function () {
    var messages = new ArrayEmitter();
    return {
        messages: messages,
        clearAll: function () { return messages.empty(); },
        notify: function (message) {
            messages.push(message);
            return {
                close: function () {
                    messages.remove(message);
                }
            };
        }
    };
};
