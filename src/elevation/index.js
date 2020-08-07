import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { wrapChild, createComponent } from '@pmwc/base';
import { Tag, useClassNames } from '@pmwc/base';
/** The Elevation Component */
export var Elevation = createComponent(function Elevation(props, ref) {
    var _a = props.z, z = _a === void 0 ? 0 : _a, _b = props.transition, transition = _b === void 0 ? false : _b, wrap = props.wrap, rest = __rest(props, ["z", "transition", "wrap"]);
    var className = useClassNames(props, [
        "mdc-elevation--z" + z,
        { 'mdc-elevation-transition': transition }
    ]);
    if (wrap) {
        return wrapChild(__assign(__assign({}, rest), { className: className, ref: ref }));
    }
    return React.createElement(Tag, __assign({}, rest, { ref: ref, className: className }));
});
