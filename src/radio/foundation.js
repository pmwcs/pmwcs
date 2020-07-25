import { __assign, __rest } from "tslib";
import { useToggleFoundation } from '@rmwc/toggleable';
import { useFoundation } from '@rmwc/base';
import { MDCRadioFoundation } from '@material/radio';
export var useRadioFoundation = function (props) {
    var _a = useToggleFoundation(props), renderToggle = _a.renderToggle, toggleRootProps = _a.toggleRootProps, id = _a.id;
    var _b = useFoundation({
        props: props,
        elements: {
            rootEl: true
        },
        foundation: function (_a) {
            var rootEl = _a.rootEl;
            return new MDCRadioFoundation({
                addClass: function (className) { return rootEl.addClass(className); },
                removeClass: function (className) { return rootEl.removeClass(className); }
            });
        }
    }), foundation = _b.foundation, elements = __rest(_b, ["foundation"]);
    return __assign({ foundation: foundation, renderToggle: renderToggle, toggleRootProps: toggleRootProps, id: id }, elements);
};
