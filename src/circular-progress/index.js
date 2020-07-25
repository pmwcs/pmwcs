import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { useClassNames, Tag, createComponent } from '@rmwc/base';
var SIZE_MAP = {
    xsmall: 18,
    small: 20,
    medium: 24,
    large: 36,
    xlarge: 48
};
export var CircularProgress = createComponent(function CircularProgress(props, ref) {
    var _a;
    var _b = props.size, size = _b === void 0 ? 'medium' : _b, _c = props.max, max = _c === void 0 ? 1 : _c, _d = props.min, min = _d === void 0 ? 0 : _d, progress = props.progress, rest = __rest(props, ["size", "max", "min", "progress"]);
    var className = useClassNames(props, [
        'rmwc-circular-progress',
        (_a = {},
            _a["rmwc-circular-progress--size-" + props.size] = typeof props.size === 'string',
            _a['rmwc-circular-progress--indeterminate'] = progress === undefined,
            _a['rmwc-circular-progress--thickerstroke'] = !!props.size && (SIZE_MAP[size] || Number(size)) > 36,
            _a)
    ]);
    var style = !SIZE_MAP[size]
        ? __assign(__assign({}, rest.style), { fontSize: Number(size) }) : rest.style;
    var _size = SIZE_MAP[size] || Number(size);
    var calculateRatio = function (value) {
        if (value < min)
            return 0;
        if (value > max)
            return 1;
        return (value - min) / (max - min);
    };
    var circularStyle = function (size) {
        return progress !== undefined
            ? {
                strokeDasharray: 2 * Math.PI * (size / 2.4) * calculateRatio(progress) + ", 666.66%"
            }
            : undefined;
    };
    return (React.createElement(Tag, __assign({ "aria-valuenow": progress, "aria-valuemin": min, "aria-valuemax": max }, rest, { style: style, className: className, ref: ref }),
        React.createElement("svg", { className: "rmwc-circular-progress__circle", viewBox: "0 0 " + _size + " " + _size },
            React.createElement("circle", { className: "rmwc-circular-progress__path", style: circularStyle(_size), cx: _size / 2, cy: _size / 2, r: _size / 2.4 }))));
});
