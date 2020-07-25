import { __assign, __rest } from "tslib";
import { useFoundation } from '@rmwc/base';
import { MDCSelectIconFoundation } from '@material/select';
export var useSelectIconFoundation = function (props) {
    var _a = useFoundation({
        props: props,
        elements: { rootEl: true },
        api: function (_a) {
            var foundation = _a.foundation;
            return {
                getFoundation: function () { return foundation; }
            };
        },
        foundation: function (_a) {
            var rootEl = _a.rootEl, emit = _a.emit;
            return new MDCSelectIconFoundation({
                getAttr: function (attr) { return rootEl.getProp(attr); },
                setAttr: function (attr, value) {
                    return rootEl.setProp(attr, value);
                },
                removeAttr: function (attr) { return rootEl.removeProp(attr); },
                setContent: function (content) {
                    rootEl.ref && (rootEl.ref.textContent = content);
                },
                registerInteractionHandler: function (evtType, handler) { return rootEl.addEventListener(evtType, handler); },
                deregisterInteractionHandler: function (evtType, handler) { return rootEl.removeEventListener(evtType, handler); },
                notifyIconAction: function () { return emit('onClick', {}, true); }
            });
        }
    }), foundation = _a.foundation, elements = __rest(_a, ["foundation"]);
    return __assign({}, elements);
};
