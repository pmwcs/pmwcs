import { __awaiter, __generator, __read, __spread } from "tslib";
import React, { useState, useRef } from 'react';
import { menuContent } from '../../common/menu-content';
import { Menu, MenuItems, MenuSurfaceAnchor } from '@rmwc/menu';
import { SimpleListItem } from '@rmwc/list';
import { TextField } from '@rmwc/textfield';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@rmwc/circular-progress';
import { history } from '../../common/history';
import styles from './site-search.module.css';
var componentsList = (function () {
    var walkOptions = function (options) {
        return options.reduce(function (acc, val) {
            if (val.options) {
                acc.push.apply(acc, __spread(walkOptions(val.options)));
            }
            else {
                acc.push(val);
            }
            return acc;
        }, []);
    };
    return walkOptions(menuContent);
})();
var searchComponents = function (val) {
    return componentsList
        .filter(function (c) {
        return c.label.toLowerCase().includes(val.toLowerCase());
    })
        .map(function (c) { return ({
        id: c.label,
        icon: {
            icon: 'code',
            theme: 'primary'
        },
        sectionName: c.label,
        snippet: "View docs for " + c.label,
        url: c.url
    }); });
};
var searchGoogle = function (val, abortController) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, items;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, fetch("https://www.googleapis.com/customsearch/v1/siterestrict?key=" + process.env.REACT_APP_CUSTOM_SEARCH_KEY + "&cx=" + process.env.REACT_APP_CUSTOM_SEARCH_ID + "&q=" + val, { signal: abortController.signal }).then(function (res) { return res.json(); })];
            case 1:
                _a = (_b.sent()).items, items = _a === void 0 ? [] : _a;
                return [2 /*return*/, (items
                        // shitty hack to ignore things in the index that just reference them homepage
                        .filter(function (r) { return !r.snippet.startsWith('RMWC is a React wrapper'); })
                        .map(function (r) { return ({
                        id: r.cacheId,
                        icon: {
                            icon: 'notes',
                            theme: 'primary'
                        },
                        sectionName: (r.title.split('|').pop() || '').trim(),
                        snippet: r.snippet,
                        // resolve from the full url into the page
                        url: ((r.formattedUrl.split('?').pop() || '')
                            .split('&')
                            .find(function (p) { return p.startsWith('p='); }) || '').slice(2)
                    }); }))];
        }
    });
}); };
export function SiteSearch() {
    var _this = this;
    var _a = __read(useState(''), 2), searchVal = _a[0], _setSearchVal = _a[1];
    var _b = __read(useState(false), 2), isSearching = _b[0], setIsSearching = _b[1];
    var timerIdRef = useRef();
    var abortControllerRef = useRef();
    var _c = __read(useState([]), 2), results = _c[0], setResults = _c[1];
    var doSearch = function (val) {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = undefined;
        }
        if (timerIdRef.current) {
            clearTimeout(timerIdRef.current);
        }
        var abortController = new AbortController();
        abortControllerRef.current = abortController;
        timerIdRef.current = window.setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var components, searchResults, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        components = searchComponents(val);
                        setResults(components);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, searchGoogle(val, abortController)];
                    case 2:
                        searchResults = _a.sent();
                        abortControllerRef.current = undefined;
                        setResults(__spread(components, searchResults));
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        console.warn(err_1);
                        abortControllerRef.current = undefined;
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); }, 200);
    };
    var setSearchVal = function (val) {
        if (val.length > 2) {
            !isSearching && setIsSearching(true);
            doSearch(val);
        }
        else {
            setResults([]);
        }
        _setSearchVal(val);
    };
    return (React.createElement(MenuSurfaceAnchor, { className: styles.siteSearchWrapper },
        React.createElement(TextField, { placeholder: "Search", icon: "search", trailingIcon: {
                icon: searchVal ? 'close' : '',
                onClick: function () { return setSearchVal(''); }
            }, outlined: true, className: styles.siteSearch, value: searchVal, onChange: function (evt) { return setSearchVal(evt.currentTarget.value); }, onFocus: function () { return setIsSearching(true); }, onKeyDown: function (evt) {
                if (evt.which === 40) {
                    var listItem = document.querySelector("." + styles.siteSearchMenu + " a");
                    if (isSearching && listItem) {
                        listItem.focus();
                    }
                }
            } }),
        React.createElement(Menu, { className: styles.siteSearchMenu, open: isSearching && searchVal.length > 2, anchorCorner: "bottomStart", focusOnOpen: false, onFocus: function () { return setIsSearching(true); }, onClose: function () {
                setIsSearching(false);
            }, onSelect: function (evt) {
                window.scrollTo(0, 0);
                history.replace(evt.detail.item.href.split('/').pop() || '/');
                document.activeElement &&
                    document.activeElement.blur();
            } },
            React.createElement(MenuItems, { twoLine: true },
                results.map(function (r) { return (React.createElement(SimpleListItem, { tag: Link, to: r.url, graphic: r.icon, key: r.id, text: r.sectionName, secondaryText: r.snippet })); }),
                !!abortControllerRef.current && (React.createElement("div", { className: styles.loading },
                    React.createElement(CircularProgress, { size: "large" }))),
                !abortControllerRef.current && !results.length && (React.createElement(SimpleListItem, { text: "No results found" }))))));
}
