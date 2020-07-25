import { __assign, __rest } from "tslib";
import { useEffect } from 'react';
import { MDCSnackbarFoundation, util } from '@material/snackbar';
import { closest, triggerWindowResize } from '@rmwc/base';
import { useFoundation } from '@rmwc/base';
/** Monkey patch the foundation to accept dynamic reasons rather than just "action" */
// @ts-ignore
MDCSnackbarFoundation.prototype.handleActionButtonClick = function (evt, reason) {
    this.close(reason);
};
export function useSnackbarFoundation(props) {
    var _a = useFoundation({
        props: props,
        elements: {
            rootEl: true,
            surfaceEl: true,
            labelEl: true
        },
        foundation: function (_a) {
            var rootEl = _a.rootEl, labelEl = _a.labelEl, emit = _a.emit;
            return new MDCSnackbarFoundation({
                addClass: function (className) { return rootEl.addClass(className); },
                removeClass: function (className) { return rootEl.removeClass(className); },
                announce: function () { return labelEl.ref && util.announce(labelEl.ref); },
                notifyOpening: function () { return emit('onOpen', {}); },
                notifyOpened: function () {
                    triggerWindowResize();
                    emit('onOpened', {});
                },
                notifyClosing: function (reason) {
                    emit('onClose', reason ? { reason: reason } : {});
                },
                notifyClosed: function (reason) {
                    return emit('onClosed', reason ? { reason: reason } : {});
                }
            });
        }
    }), foundation = _a.foundation, elements = __rest(_a, ["foundation"]);
    var rootEl = elements.rootEl, surfaceEl = elements.surfaceEl;
    var handleKeyDown = function (evt) {
        props.onKeyDown && props.onKeyDown(evt);
        foundation.handleKeyDown(evt);
    };
    var handleSurfaceClick = function (evt) {
        if (evt.target instanceof Element) {
            var el = evt.target;
            var button = closest(el, '.mdc-button');
            if (button) {
                el = button;
            }
            if (props.dismissesOnAction &&
                el.classList.contains('mdc-snackbar__action')) {
                foundation.handleActionButtonClick(evt, 
                // @ts-ignore
                el.dataset.mdcSnackbarAction);
            }
            else if (el.classList.contains('mdc-snackbar__dismiss')) {
                foundation.handleActionIconClick(evt);
            }
        }
    };
    rootEl.setProp('onKeyDown', handleKeyDown, true);
    surfaceEl.setProp('onClick', handleSurfaceClick, true);
    // open
    useEffect(function () {
        props.open ? foundation.open() : foundation.close();
    }, [props.open, foundation]);
    // timeout
    useEffect(function () {
        if (props.timeout) {
            if (props.timeout === -1) {
                foundation.setTimeoutMs(props.timeout);
            }
            else {
                // don't tell me what I can cant set my timeout too...
                // directly patch over using setTimeoutMs
                foundation.autoDismissTimeoutMs_ = props.timeout;
            }
        }
    }, [props.timeout, foundation]);
    return __assign({ foundation: foundation }, elements);
}
