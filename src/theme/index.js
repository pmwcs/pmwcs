import { __assign, __rest } from "tslib";
import React, { useMemo } from 'react';
import { toDashCase, parseThemeOptions, wrapChild, createComponent, Tag, useClassNames } from '@rmwc/base';
import { getAutoColorsForTheme } from './utils';
/** A Theme Component. */
export var Theme = createComponent(function Theme(props, ref) {
    var use = props.use, wrap = props.wrap, rest = __rest(props, ["use", "wrap"]);
    var className = useClassNames(props, [parseThemeOptions(use).join(' ')]);
    if (wrap) {
        return wrapChild(__assign(__assign({}, rest), { ref: ref,
            className: className }));
    }
    return (React.createElement(Tag, __assign({ tag: "span", theme: use }, rest, { ref: ref, className: className })));
});
/** A ThemeProvider. This sets theme colors for its child tree. */
export var ThemeProvider = createComponent(function ThemeProvider(props, ref) {
    var _a, _b;
    var parsed = JSON.stringify(props.options);
    var colors = useMemo(function () {
        var processedColors = Object.keys(props.options).reduce(function (acc, key) {
            var val = props.options[key];
            key = key.startsWith('--') ? key : "--mdc-theme-" + toDashCase(key);
            acc[key] = val;
            return acc;
        }, {});
        return getAutoColorsForTheme(processedColors);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [parsed]);
    var options = props.options, _c = props.style, style = _c === void 0 ? {} : _c, wrap = props.wrap, rest = __rest(props, ["options", "style", "wrap"]);
    var className = useClassNames(props, [
        wrap &&
            typeof rest.children === 'object' && ((_b = (_a = 
        // @ts-ignore
        rest.children) === null || _a === void 0 ? void 0 : _a.props) === null || _b === void 0 ? void 0 : _b.className)
    ]);
    var themeStyles = __assign(__assign({}, style), colors);
    if (wrap && rest.children) {
        return wrapChild(__assign(__assign({}, rest), { style: themeStyles, ref: ref }));
    }
    return (React.createElement(Tag, __assign({}, rest, { style: themeStyles, className: className, ref: ref })));
});
