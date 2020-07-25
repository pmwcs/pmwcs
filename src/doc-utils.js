import { __assign, __extends, __read, __rest } from "tslib";
/* istanbul ignore file */
import React, { useState, useContext, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { createPortal } from 'react-dom';
import { Typography } from './rmwc';
import * as rmwc from './rmwc';
var DocumentComponent = /** @class */ (function (_super) {
    __extends(DocumentComponent, _super);
    function DocumentComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.def = _this.getComponentDef(_this.props.displayName);
        return _this;
    }
    DocumentComponent.prototype.getComponentDef = function (displayName) {
        var _this = this;
        var propsDef = this.props.docs[displayName + 'Props'];
        var def = {
            name: displayName,
            description: (propsDef &&
                propsDef.documentation &&
                propsDef.documentation.contentsRaw) ||
                '',
            props: []
        };
        def.props = propsDef
            ? propsDef.properties
                .map(function (p) {
                var description = p.documentation
                    ? p.documentation.contentsRaw
                    : '';
                return description.includes('DEPRECATED')
                    ? null
                    : {
                        name: p.name,
                        description: description,
                        required: !p.flags.isOptional,
                        type: _this.getType(p.type)
                    };
            })
                .filter(Boolean)
            : [];
        return def;
    };
    DocumentComponent.prototype.getType = function (type) {
        // do some cleaning to add the type signature to the events
        // const eventMatches = type.match(/\S+?EventT/);
        // if (eventMatches) {
        //   const evtName = eventMatches[0];
        // }
        return type;
    };
    DocumentComponent.prototype.render = function () {
        return (React.createElement("div", { className: "document-component" },
            React.createElement("h2", null, this.def.name),
            React.createElement("p", null, this.def.description),
            !!this.def.props.length && (React.createElement("div", null,
                React.createElement("h3", null, "Props"),
                React.createElement("table", null,
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, "Name"),
                            React.createElement("th", null, "Type"),
                            React.createElement("th", null, "Description"))),
                    React.createElement("tbody", null, this.def.props.map(function (prop) { return (React.createElement("tr", { key: prop.name },
                        React.createElement("td", null,
                            React.createElement("code", null, prop.name)),
                        React.createElement("td", null,
                            React.createElement("code", null, prop.type)),
                        React.createElement("td", null, prop.description))); })))))));
    };
    return DocumentComponent;
}(React.Component));
var DocProps = /** @class */ (function (_super) {
    __extends(DocProps, _super);
    function DocProps() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.docs = _this.props.src.typescript;
        return _this;
    }
    DocProps.prototype.shouldComponentUpdate = function () {
        return false;
    };
    DocProps.prototype.render = function () {
        var _this = this;
        var components = this.props.components;
        return components.map(function (c) {
            var name = c.displayName || '';
            name = name.includes('(') ? name.replace(/.+?\((.+?)\)/g, '$1') : name;
            return (React.createElement(DocumentComponent, { key: name, displayName: name, docs: _this.docs }));
        });
    };
    return DocProps;
}(React.Component));
export { DocProps };
var DocsContext = React.createContext({
    scope: {},
    examples: []
});
export function Docs(_a) {
    var children = _a.children, title = _a.title, lead = _a.lead, module = _a.module, styles = _a.styles, docsLink = _a.docsLink, examples = _a.examples, addon = _a.addon;
    var index = -1;
    return (React.createElement(DocsContext.Provider, { value: { scope: rmwc, examples: examples } },
        React.createElement("div", null,
            React.createElement(DocsTitle, null,
                title,
                addon && React.createElement(DocsAddon, null)),
            React.createElement(DocsLead, null, lead),
            React.createElement(DocsSetup, { module: module, styles: styles, docsLink: docsLink }),
            React.Children.map(children, function (child) {
                if (React.isValidElement(child) &&
                    // @ts-ignore
                    child.type.displayName === 'DocsExample') {
                    index++;
                    return React.cloneElement(child, __assign(__assign({}, child.props), { index: index }));
                }
                return child;
            }))));
}
function DocsAddon() {
    return React.createElement("code", null, "RMWC ADDON");
}
function DocsSetup(_a) {
    var module = _a.module, styles = _a.styles, docsLink = _a.docsLink;
    return (React.createElement("ul", { className: "docs-setup" },
        React.createElement("li", null,
            "Module ",
            React.createElement("strong", null, module)),
        !!styles.length && (React.createElement("li", null,
            "Import styles:",
            React.createElement("ul", null,
                React.createElement("li", null,
                    "Using CSS Loader",
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            "import ",
                            React.createElement("strong", null,
                                "'",
                                module,
                                "/styles';")))),
                React.createElement("li", null,
                    "Or include stylesheets",
                    React.createElement("ul", null, styles.map(function (s) { return (React.createElement("li", { key: s },
                        React.createElement("strong", null,
                            "'",
                            s,
                            "'"),
                        ";")); })))))),
        !!docsLink && (React.createElement("li", null,
            "MDC Docs: ",
            React.createElement("a", { href: docsLink }, docsLink)))));
}
function DocsTitle(_a) {
    var children = _a.children;
    return React.createElement("h1", null, children);
}
export function DocsSubtitle(_a) {
    var children = _a.children;
    return React.createElement("h2", null, children);
}
function DocsLead(_a) {
    var children = _a.children;
    return React.createElement("blockquote", null, children);
}
var createTextLinks = function (text) {
    return (text || '').replace(/([^\S]|^)(((https?:\/\/)|(www\.))(\S+))/gi, function (match, space, url) {
        var hyperlink = url;
        if (!hyperlink.match('^https?://')) {
            hyperlink = 'http://' + hyperlink;
        }
        return space + '<a href="' + hyperlink + '">' + url + '</a>';
    });
};
var createTextCode = function (text) {
    return String(text).replace(/`(.+?)`/g, '<code>$1</code>');
};
export function DocsP(_a) {
    var children = _a.children;
    var __html = createTextLinks(createTextCode(children));
    return React.createElement("p", { className: "docs-p", dangerouslySetInnerHTML: { __html: __html } });
}
var IFrame = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var _b = __read(useState(null), 2), contentRef = _b[0], setContentRef = _b[1];
    var _c = __read(React.useState(false), 2), canMount = _c[0], setCanMount = _c[1];
    var mountNode = contentRef &&
        contentRef.contentWindow &&
        contentRef.contentWindow.document.body;
    var headNode = contentRef &&
        contentRef.contentWindow &&
        contentRef.contentWindow.document.head;
    useEffect(function () {
        if (headNode) {
            headNode.innerHTML = document.head.innerHTML;
            var nodes_1 = [];
            document.body
                .querySelectorAll('link[rel="stylesheet"]')
                .forEach(function (n) { return nodes_1.push(n); });
            document.body
                .querySelectorAll('script[src]')
                .forEach(function (n) { return nodes_1.push(n); });
            nodes_1.forEach(function (n) { return headNode.appendChild(n.cloneNode()); });
        }
        if (mountNode) {
            mountNode.classList.add('mdc-typography');
            window.requestAnimationFrame(function () {
                setTimeout(function () {
                    setCanMount(true);
                }, 100);
            });
        }
    }, [headNode, mountNode]);
    return (React.createElement("iframe", __assign({}, props, { ref: setContentRef, className: "docs-iframe", title: "RMWC Example" }), mountNode && canMount && createPortal(React.createElement(React.Fragment, null, children), mountNode)));
};
export function DocsExample(_a) {
    var _b = _a.index, index = _b === void 0 ? 0 : _b, rest = __rest(_a, ["index"]);
    var examples = useContext(DocsContext).examples;
    var _c = __read(useState(function () {
        var cleaned = examples[index].trim();
        if (cleaned.startsWith('`') && cleaned.endsWith('`')) {
            return cleaned.slice(1, cleaned.length - 1);
        }
        return cleaned;
    }), 1), code = _c[0];
    return React.createElement(DocsExampleBase, __assign({ code: code }, rest));
}
function DocsExampleBase(_a) {
    var code = _a.code, codeOnly = _a.codeOnly, iframe = _a.iframe, label = _a.label, children = _a.children, center = _a.center;
    return (React.createElement(LiveProvider, { code: code, scope: rmwc, noInline: !!codeOnly, disabled: !!codeOnly },
        React.createElement("div", { className: "live-example " + (codeOnly ? 'live-example-code-only' : '') + " " + (center ? 'live-example-center' : '') },
            !codeOnly && (React.createElement("div", { className: "live-preview" },
                React.createElement("div", null,
                    label && (React.createElement(Typography, { use: "caption", className: "live-preview-label", tag: "div" }, label)),
                    !!iframe ? (React.createElement(IFrame, null,
                        React.createElement(LivePreview, null, children))) : (React.createElement(LivePreview, null, children))))),
            React.createElement("div", { className: "live-editor" },
                React.createElement(LiveEditor, null),
                React.createElement(LiveError, { className: "live-error" })))));
}
export function DocsMarkdown(_a) {
    var fileSrc = _a.fileSrc;
    var _b = __read(useState(null), 2), src = _b[0], setSrc = _b[1];
    useEffect(function () {
        fetch(fileSrc)
            .then(function (src) { return src.text(); })
            .then(function (src) { return setSrc(src); });
    }, [fileSrc]);
    return src ? (React.createElement("div", null,
        React.createElement(ReactMarkdown, { source: src, renderers: {
                heading: function (_a) {
                    var level = _a.level, children = _a.children;
                    var Tag = 'h1';
                    switch (level) {
                        case 1:
                            Tag = 'h1';
                            break;
                        case 2:
                            Tag = 'h2';
                            break;
                        case 3:
                            Tag = 'h3';
                            break;
                        case 4:
                            Tag = 'h4';
                            break;
                        case 5:
                            Tag = 'h5';
                            break;
                        default:
                            break;
                    }
                    return (React.createElement(Tag, { id: children[0].props.children
                            .toLowerCase()
                            .split(' ')
                            .join('-') }, children));
                },
                paragraph: function (_a) {
                    var children = _a.children;
                    return (React.createElement("p", { className: "docs-p" }, children));
                },
                code: function (_a) {
                    var value = _a.value;
                    return (React.createElement(DocsExampleBase, { code: value, codeOnly: true }));
                }
            } }))) : (React.createElement(React.Fragment, null));
}
DocsExample.displayName = 'DocsExample';
