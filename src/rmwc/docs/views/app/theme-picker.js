import { __assign, __extends, __read } from "tslib";
import { h } from 'preact';
import { TabBar, Tab } from '@pmwc/tabs';
import { ListItem, ListGroupSubheader, ListItemGraphic, ListItemMeta } from '@pmwc/list';
import { MenuSurface, MenuSurfaceAnchor } from '@pmwc/menu';
import { Button } from '@pmwc/button';
import { toCamel, toDashCase } from '@pmwc/base';
import { getAutoColorsForTheme } from '@pmwc/theme/utils';
import { TopAppBarActionItem } from '@pmwc/top-app-bar';
var DEFAULT_THEME = {
    '--mdc-theme-primary': '#6200ee',
    '--mdc-theme-secondary': '#03dac4',
    '--mdc-theme-background': '#fff',
    '--mdc-theme-surface': '#fff',
    '--mdc-theme-error': '#b00020'
};
var TEXT_DEFAULTS = {
    '--mdc-theme-on-primary': '#fff',
    '--mdc-theme-on-secondary': '#fff',
    '--mdc-theme-on-surface': '#000',
    '--mdc-theme-on-error': '#fff',
    '--mdc-theme-text-primary-on-background': 'rgba(0, 0, 0, 0.87)',
    '--mdc-theme-text-secondary-on-background': 'rgba(0, 0, 0, 0.54)',
    '--mdc-theme-text-hint-on-background': 'rgba(0, 0, 0, 0.38)',
    '--mdc-theme-text-disabled-on-background': 'rgba(0, 0, 0, 0.38)',
    '--mdc-theme-text-icon-on-background': 'rgba(0, 0, 0, 0.38)',
    '--mdc-theme-text-primary-on-light': 'rgba(0, 0, 0, 0.87)',
    '--mdc-theme-text-secondary-on-light': 'rgba(0, 0, 0, 0.54)',
    '--mdc-theme-text-hint-on-light': 'rgba(0, 0, 0, 0.38)',
    '--mdc-theme-text-disabled-on-light': 'rgba(0, 0, 0, 0.38)',
    '--mdc-theme-text-icon-on-light': 'rgba(0, 0, 0, 0.38)',
    '--mdc-theme-text-primary-on-dark': 'white',
    '--mdc-theme-text-secondary-on-dark': 'rgba(255, 255, 255, 0.7)',
    '--mdc-theme-text-hint-on-dark': 'rgba(255, 255, 255, 0.5)',
    '--mdc-theme-text-disabled-on-dark': 'rgba(255, 255, 255, 0.5)',
    '--mdc-theme-text-icon-on-dark': 'rgba(255, 255, 255, 0.5)'
};
var THEMES = {
    Baseline: {
        '--mdc-theme-primary': '#6200ee',
        '--mdc-theme-secondary': '#03dac4' /** Any theme option pointing to a valid CSS value. */
    },
    Crane: {
        '--mdc-theme-primary': '#5d1049',
        '--mdc-theme-secondary': '#fa3336'
    },
    Fortnightly: {
        '--mdc-theme-primary': '#303030',
        '--mdc-theme-secondary': '#661fff'
    },
    Shrine: {
        '--mdc-theme-primary': '#ffdbcf',
        '--mdc-theme-secondary': '#feeae6'
    },
    Dark: {
        '--mdc-theme-background': '#212121',
        '--mdc-theme-surface': '#37474F',
        '--mdc-theme-on-surface': 'rgba(255,255,255,.87)',
        '--mdc-theme-primary': '#24aee9',
        '--mdc-theme-on-primary': 'rgba(255,255,255,.87)',
        '--mdc-theme-secondary': '#e539ff',
        '--mdc-theme-on-secondary': 'rgba(0,0,0,0.87)'
    }
};
var ThemePicker = /** @class */ (function (_super) {
    __extends(ThemePicker, _super);
    function ThemePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            open: false,
            activeTabIndex: 0
        };
        return _this;
    }
    ThemePicker.prototype.componentDidUpdate = function () {
        window.requestAnimationFrame(function () {
            return window.dispatchEvent(new Event('resize'));
        });
    };
    ThemePicker.prototype.render = function () {
        var _this = this;
        var _a = this.props, selectedThemeName = _a.selectedThemeName, onThemeClick = _a.onThemeClick;
        var selectedTheme = getTheme(selectedThemeName);
        return (React.createElement(MenuSurfaceAnchor, null,
            React.createElement(MenuSurface, { renderToPortal: true, style: { maxWidth: '100vw', width: '520px' }, open: this.state.open, onClose: function () {
                    _this.setState({ open: false });
                } },
                React.createElement(ListGroupSubheader, null, "Themes"),
                Object.keys(THEMES).map(function (themeName) {
                    var theme = getTheme(themeName);
                    return (React.createElement(ListItem, { style: { cursor: 'pointer' }, key: themeName, role: "menuitem", tabIndex: 0, onClick: function (evt) {
                            evt.stopPropagation();
                            onThemeClick(themeName);
                        } },
                        React.createElement("div", { style: {
                                width: '100%',
                                height: '100%',
                                position: 'absolute',
                                top: '0',
                                left: '0'
                            } }),
                        React.createElement(ListItemGraphic, { icon: themeName === selectedThemeName ? 'check' : '' }),
                        themeName,
                        React.createElement(ListItemMeta, null,
                            React.createElement(ColorBlock, { color: theme['--mdc-theme-primary'] }),
                            React.createElement(ColorBlock, { color: theme['--mdc-theme-secondary'] }),
                            React.createElement(ColorBlock, { color: theme['--mdc-theme-background'] }),
                            React.createElement(ColorBlock, { color: theme['--mdc-theme-surface'] }))));
                }),
                React.createElement(TabBar, { onClick: function (evt) { return _this.setState({ open: true }); }, style: { margin: '1rem auto -1rem auto' }, activeTabIndex: this.state.activeTabIndex, onActivate: function (evt) {
                        return _this.setState({ activeTabIndex: evt.detail.index });
                    } },
                    React.createElement(Tab, null, "ThemeProvider"),
                    React.createElement(Tab, null, "CSS")),
                React.createElement(ListItem, { onClick: function () { return _this.setState({ open: true }); }, ripple: false, style: {
                        backgroundColor: 'rgba(0,0,0,.05)',
                        padding: '1rem',
                        marginTop: '1rem',
                        display: 'block',
                        height: 'auto',
                        userSelect: 'initial',
                        cursor: 'text'
                    } }, this.state.activeTabIndex === 0 ? (React.createElement("div", null,
                    React.createElement("div", { style: { whiteSpace: 'normal' } },
                        React.createElement("b", null, "Theme your App!"),
                        React.createElement("br", null),
                        "Place this tag around the root of your App, or anywhere you want to apply a custom theme.",
                        React.createElement("br", null),
                        React.createElement("br", null)),
                    React.createElement("span", { className: "token keyword" }, "import"),
                    " ",
                    '{',
                    ' ',
                    "ThemeProvider ",
                    '}',
                    " ",
                    React.createElement("span", { className: "token keyword" }, "from"),
                    ' ',
                    React.createElement("span", { className: "token string" }, "'rmwc/Theme';"),
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("span", { className: "token punctuation" }, "<"),
                    React.createElement("span", { className: "token tag" }, "ThemeProvider "),
                    React.createElement("span", { className: "token attr-name" }, "options"),
                    "=",
                    '{{',
                    Object.entries(selectedTheme).map(function (_a, index, arr) {
                        var _b = __read(_a, 2), t = _b[0], val = _b[1];
                        return (React.createElement("div", { key: t, style: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            } },
                            React.createElement("span", null,
                                React.createElement("span", { style: { color: '#07a' } },
                                    "\u00A0\u00A0",
                                    toCamel(t.split('--mdc-theme-')[1]),
                                    ":"),
                                ' ',
                                "'",
                                val,
                                "'",
                                index < arr.length - 1 ? ',' : ''),
                            React.createElement(ColorBlock, { color: val, size: 1 })));
                    }),
                    '}}',
                    React.createElement("span", { className: "token punctuation" }, ">"),
                    React.createElement("br", null),
                    "\u00A0\u00A0",
                    React.createElement("span", { className: "token punctuation" }, "<"),
                    React.createElement("span", { className: "token tag" }, "App "),
                    React.createElement("span", { className: "token punctuation" }, "/>"),
                    React.createElement("br", null),
                    React.createElement("span", { className: "token punctuation" }, "</"),
                    React.createElement("span", { className: "token tag" }, "ThemeProvider "),
                    React.createElement("span", { className: "token punctuation" }, ">"))) : (React.createElement("div", null,
                    React.createElement("div", { style: { whiteSpace: 'normal' } },
                        React.createElement("b", null, "Theme your App!"),
                        React.createElement("br", null),
                        "Copy and paste these rules into your main css file, or a style tag in your app and customize to your liking.",
                        React.createElement("br", null),
                        React.createElement("br", null)),
                    React.createElement("span", { style: { color: '#690' } }, ":root"),
                    " ",
                    '{',
                    Object.entries(selectedTheme).map(function (_a) {
                        var _b = __read(_a, 2), t = _b[0], val = _b[1];
                        return (React.createElement("div", { key: t, style: {
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            } },
                            React.createElement("span", null,
                                React.createElement("span", { style: { color: '#07a' } },
                                    "\u00A0\u00A0",
                                    t,
                                    ":"),
                                ' ',
                                val,
                                ";"),
                            React.createElement(ColorBlock, { color: val, size: 1 })));
                    }),
                    '}'))),
                React.createElement("div", { style: { padding: '1rem' } },
                    React.createElement(Button, null, "Done"))),
            React.createElement(TopAppBarActionItem, { onClick: function () { return _this.setState({ open: !_this.state.open }); }, theme: "onPrimary", icon: "color_lens" })));
    };
    return ThemePicker;
}(React.Component));
export { ThemePicker };
export var getTheme = function (themeName) {
    var theme = __assign(__assign({}, DEFAULT_THEME), (THEMES[themeName] || {}));
    var colors = getAutoColorsForTheme(theme);
    var merged = __assign(__assign({}, TEXT_DEFAULTS), colors);
    var order = [
        'primary',
        'secondary',
        'error',
        'background',
        'surface',
        'onPrimary',
        'onSecondary',
        'onSurface',
        'onError',
        'textPrimaryOnBackground',
        'textSecondaryOnBackground',
        'textHintOnBackground',
        'textDisabledOnBackground',
        'textIconOnBackground',
        'textPrimaryOnLight',
        'textSecondaryOnLight',
        'textHintOnLight',
        'textDisabledOnLight',
        'textIconOnLight',
        'textPrimaryOnDark',
        'textSecondaryOnDark',
        'textHintOnDark',
        'textDisabledOnDark',
        'textIconOnDark'
    ];
    return order.reduce(function (acc, key) {
        var newKey = "--mdc-theme-" + toDashCase(key);
        acc[newKey] = merged[newKey];
        return acc;
    }, {});
};
var ColorBlock = function (_a) {
    var color = _a.color, _b = _a.size, size = _b === void 0 ? 1.5 : _b;
    return (React.createElement("div", { style: {
            display: 'inline-block',
            backgroundColor: color,
            border: '1px solid rgba(0,0,0,.25)',
            verticalAlign: 'middle',
            marginLeft: '0.5rem',
            height: size + "rem",
            width: size + "rem",
            borderRadius: '3px',
            boxSizing: 'border-box'
        } }));
};
