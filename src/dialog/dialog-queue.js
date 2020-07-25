import { __assign, __read, __rest } from "tslib";
import React, { useState, useEffect } from 'react';
import { SimpleDialog } from './dialog';
import { ArrayEmitter, randomId } from '@rmwc/base';
import { TextField } from '@rmwc/textfield';
/** A snackbar queue for rendering messages */
export function DialogQueue(_a) {
    var dialogs = _a.dialogs, defaultDialogProps = __rest(_a, ["dialogs"]);
    var _b = __read(useState(0), 2), setIteration = _b[1];
    var _c = __read(useState({}), 2), closingDialogs = _c[0], setClosingDialogs = _c[1];
    useEffect(function () {
        var forceUpdate = function () { return setIteration(function (val) { return val + 1; }); };
        dialogs.on('change', forceUpdate);
        return function () {
            dialogs.off('change', forceUpdate);
        };
    }, [dialogs]);
    var removeDialog = function (evt, dialog) {
        var _a;
        setClosingDialogs(__assign(__assign({}, closingDialogs), (_a = {}, _a[dialog.id] = true, _a)));
        dialog.resolve(evt);
        setTimeout(function () {
            // remove the dialog from our array
            var index = dialogs.array.indexOf(dialog);
            !!~index && dialogs.array.splice(index, 1);
            // remove it from the closing state
            var newClosingDialogs = __assign({}, closingDialogs);
            delete newClosingDialogs[dialog.id];
            setClosingDialogs(newClosingDialogs);
        }, 150);
    };
    // A simple way to show only one at a time
    // We loop through until we find a dialog thats not closing
    // When one is closing, we flip this flag and render all of the other ones in a closed state
    // This ensures we get the proper animations for closing dialogs
    var foundOpen = false;
    return (React.createElement(React.Fragment, null, dialogs.array.map(function (dialog) {
        var resolve = dialog.resolve, reject = dialog.reject, id = dialog.id, inputProps = dialog.inputProps, rest = __rest(dialog, ["resolve", "reject", "id", "inputProps"]);
        var rendered = (React.createElement(SimpleDialog, __assign({}, defaultDialogProps, rest, { key: id, open: !closingDialogs[id] && !foundOpen, onClose: function (evt) {
                removeDialog(evt, dialog);
                dialog.onClose && dialog.onClose(evt);
            } })));
        if (!closingDialogs[id]) {
            foundOpen = true;
        }
        return rendered;
    })));
}
/**
 * A base dialog factory that handle setting up the promise
 * With some consistent behavior
 */
var dialogFactory = function (factory, queue) { return function (dialog) {
    return new Promise(function (resolve, reject) {
        var d = factory(__assign(__assign({ id: randomId() }, dialog), { resolve: resolve, reject: reject }));
        queue.push(d);
    });
}; };
/**
 * Handle prompt dialogs
 * We have to jump through a few hoops to get the value back out
 */
function PromptBody(_a) {
    var body = _a.body, inputProps = _a.inputProps, apiRef = _a.apiRef;
    var _b = __read(useState(''), 2), value = _b[0], setValue = _b[1];
    useEffect(function () {
        apiRef(function () { return value; });
    }, [apiRef, value]);
    return (React.createElement("div", null,
        !!body && React.createElement("div", { style: { marginBottom: '1rem' } }, body),
        React.createElement(TextField, __assign({ style: { width: '100%' }, autoFocus: true }, inputProps, { value: value, onChange: function (evt) {
                setValue(evt.currentTarget.value);
            } }))));
}
var promptFactory = function (dialog) {
    var getValue = function () { return ''; };
    var body = (React.createElement(PromptBody, { body: dialog.body, inputProps: dialog.inputProps, apiRef: function (_getValue) { return (getValue = _getValue); } }));
    return __assign(__assign({ title: 'Prompt' }, dialog), { body: body, resolve: function (evt) {
            dialog.resolve(evt.detail.action === 'accept' ? getValue() : null);
            getValue = undefined;
        } });
};
/** Alerts */
var alertFactory = function (dialog) { return (__assign(__assign({ title: 'Alert', body: 'You have been alerted!', acceptLabel: 'OK', cancelLabel: null }, dialog), { resolve: function (evt) { return dialog.resolve(evt.detail.action); } })); };
/** Confirm */
var confirmFactory = function (dialog) { return (__assign(__assign({ title: 'Confirm', body: 'Are you sure you want do that?', acceptLabel: 'OK', cancelLabel: 'Cancel' }, dialog), { resolve: function (evt) {
        return dialog.resolve(evt.detail.action === 'accept');
    } })); };
/** Creates a snackbar queue */
export var createDialogQueue = function () {
    var dialogs = new ArrayEmitter();
    return {
        dialogs: dialogs,
        alert: dialogFactory(alertFactory, dialogs),
        confirm: dialogFactory(confirmFactory, dialogs),
        prompt: dialogFactory(promptFactory, dialogs)
    };
};
