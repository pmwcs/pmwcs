import { __assign, __read } from "tslib";
import React, { useEffect, useState } from 'react';
import { Route, Link, Switch as RouterSwitch } from 'react-router-dom';
import { menuContent } from '../../common/menu-content';
import { version } from '../../../package.json';
import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle, TopAppBarNavigationIcon, TopAppBarActionItem, TopAppBarFixedAdjust } from '@rmwc/top-app-bar';
import { Icon } from '@rmwc/icon';
import { ThemeProvider } from '@rmwc/theme';
import { Typography } from '@rmwc/typography';
import { Ripple } from '@rmwc/ripple';
import { Drawer, DrawerContent, DrawerAppContent } from '@rmwc/drawer';
import { ListItem, CollapsibleList, SimpleListItem, List } from '@rmwc/list';
import { SimpleMenu, MenuItem } from '@rmwc/menu';
import { Portal } from '@rmwc/base';
import Home from '../home';
import { SiteSearch } from '../site-search';
import { DOC_VERSIONS } from '../../common/doc-versions';
import { ThemePicker, getTheme } from './theme-picker';
import { history } from '../../common/history';
var MainMenuItem = function (_a) {
    var url = _a.url, label = _a.label;
    return (React.createElement(ListItem, { tag: Link, to: url, onClick: function () { return window.scrollTo(0, 0); }, activated: window.location.pathname.split('/').pop() === (url === null || url === void 0 ? void 0 : url.split('/').pop()) },
        React.createElement("span", null, label)));
};
var GithubSvg = function () { return (React.createElement("svg", { viewBox: "0 0 24 24", width: "24", height: "24" },
    React.createElement("path", { fill: "currentColor", d: "M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" }))); };
function AppBar(_a) {
    var onNavClick = _a.onNavClick, children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(TopAppBar, { fixed: true, className: "app__top-app-bar" },
            React.createElement(TopAppBarRow, null,
                React.createElement(TopAppBarSection, { alignStart: true },
                    React.createElement(TopAppBarNavigationIcon, { onClick: onNavClick, icon: "menu" }),
                    React.createElement(TopAppBarTitle, { tag: Link, to: "/" }, "RMWC"),
                    React.createElement(SimpleMenu, { handle: React.createElement("span", { className: "app__version" },
                            React.createElement("span", null, version),
                            " ",
                            React.createElement(Icon, { icon: "arrow_drop_down" })) },
                        React.createElement(MenuItem, null, version),
                        DOC_VERSIONS.map(function (v) { return (React.createElement(MenuItem, { key: v, tag: "a", href: "/version/" + v }, v)); })),
                    React.createElement(SiteSearch, null)),
                React.createElement(TopAppBarSection, { alignEnd: true },
                    children,
                    React.createElement(TopAppBarActionItem, { tag: "a", href: "https://github.com/jamesmfriedman/rmwc", icon: React.createElement(GithubSvg, null) })))),
        React.createElement(TopAppBarFixedAdjust, null)));
}
function Nav(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Drawer, __assign({ id: "main-nav" }, props),
            React.createElement(DrawerContent, null,
                React.createElement(List, null,
                    React.createElement(NavItems, { options: menuContent }))),
            React.createElement(Ripple, { tag: "a", href: "https://opencollective.com/rmwc", className: "made-by" },
                React.createElement(Typography, { use: "caption" },
                    React.createElement(Icon, { icon: "https://s.gravatar.com/avatar/0b38f1a5ae97a182822f4bca53a2368f?s=80" }),
                    React.createElement("div", null,
                        React.createElement("div", null,
                            "Made with",
                            ' ',
                            React.createElement("span", { role: "img", "aria-label": "heart" }, "\u2764\uFE0F"),
                            ' ',
                            "in Sunny FL."),
                        React.createElement("div", { className: "made-by__link" }, "Donate on Open Collective")))))));
}
export function App() {
    var isMobile = window.innerWidth < 640;
    var _a = __read(useState(!isMobile), 2), menuIsOpen = _a[0], setMenuIsOpen = _a[1];
    var _b = __read(useState("page-" + (window.location.pathname.split('/').pop() || 'home')), 2), pageId = _b[0], setPageId = _b[1];
    var _c = __read(useState(window.localStorage.getItem('rmwcTheme') || 'Baseline'), 2), theme = _c[0], setTheme = _c[1];
    useEffect(function () {
        isMobile && setMenuIsOpen(false);
        var listener = function (evt) {
            var _isMobile = window.innerWidth < 640;
            if (_isMobile !== isMobile) {
                setMenuIsOpen(!_isMobile);
            }
        };
        window.addEventListener('resize', listener);
        return function () { return window.removeEventListener('resize', listener); };
    }, [isMobile]);
    useEffect(function () {
        history.listen(function () {
            setPageId("page-" + (window.location.pathname.split('/').pop() || 'home'));
        });
    }, []);
    return (React.createElement(ThemeProvider, { options: getTheme(theme), className: "app__root", tag: "div", id: pageId },
        React.createElement(AppBar, { onNavClick: function (evt) {
                setMenuIsOpen(!menuIsOpen);
            } }, !isMobile && (React.createElement(ThemePicker, { selectedThemeName: theme, onThemeClick: function (themeName) {
                window.localStorage.setItem('rmwcTheme', themeName);
                setTheme(themeName);
            } }))),
        React.createElement("div", { className: "demo-content" },
            React.createElement(Nav, { open: menuIsOpen, dismissible: !isMobile, modal: isMobile, onClose: function () { return setMenuIsOpen(false); } }),
            React.createElement(DrawerAppContent, { tag: "main", className: "app__content" },
                React.createElement(RouterSwitch, null,
                    React.createElement(Route, { path: "/", exact: true, component: Home }),
                    React.createElement(DocRoutes, { options: menuContent })))),
        React.createElement(Portal, null)));
}
function NavItems(_a) {
    var options = _a.options;
    return (React.createElement(React.Fragment, null, options.map(function (m) {
        var _a;
        if (m.options) {
            return (React.createElement(CollapsibleList, { key: m.label, defaultOpen: m.label === 'Components' || ((_a = m.options) === null || _a === void 0 ? void 0 : _a.some(function (o) {
                    var _a;
                    return o.url &&
                        window.location.pathname.split('/').pop() === ((_a = o.url) === null || _a === void 0 ? void 0 : _a.split('/').pop());
                })), handle: React.createElement(SimpleListItem, { text: m.label, metaIcon: "chevron_right" }) },
                React.createElement(NavItems, { options: m.options })));
        }
        return React.createElement(MainMenuItem, { label: m.label, url: m.url, key: m.label });
    })));
}
function DocRoutes(_a) {
    var options = _a.options;
    return (React.createElement(React.Fragment, null, options.map(function (m, index) {
        if (m.options) {
            return React.createElement(DocRoutes, { key: index, options: m.options });
        }
        return (React.createElement(Route, { path: m.url, exact: true, key: index, render: function () {
                document.title = "RMWC | React Material Web Components | " + m.label;
                var Component = m.component || React.createElement(React.Fragment, null);
                // @ts-ignore
                return React.createElement(Component, null);
            } }));
    })));
}
export default App;
