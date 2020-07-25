import { __assign, __extends, __read, __rest } from "tslib";
/* istanbul ignore file */
import React, { useState, useContext } from 'react';
import * as rmwc from './rmwc';
var DocumentComponent = /** @class */ (function (_super) {
    __extends(DocumentComponent, _super);
    function DocumentComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentComponent.prototype.getComponentDef = function (displayName) {
        var componentDef = this.props.docs[displayName];
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
                        type: p.type
                    };
            })
                .filter(Boolean)
            : [];
        return def;
    };
    DocumentComponent.prototype.render = function () {
        var displayName = this.props.displayName;
        var def = this.getComponentDef(displayName);
        return (React.createElement(React.Fragment, null,
            "## ",
            def.name,
            React.createElement(Br, null),
            !!def.description && (React.createElement(React.Fragment, null,
                def.description,
                React.createElement(Br, null),
                React.createElement(Br, null))),
            !!def.props.length && (React.createElement(React.Fragment, null,
                "### Props",
                React.createElement(Br, null),
                React.createElement(Br, null),
                React.createElement(React.Fragment, null,
                    React.createElement(React.Fragment, null, "| Name | Type | Description |"),
                    React.createElement(Br, null),
                    React.createElement(React.Fragment, null, "|------|------|-------------|"),
                    React.createElement(Br, null),
                    def.props.map(function (prop) { return (React.createElement(React.Fragment, null,
                        "| `",
                        prop.name,
                        "` | `",
                        prop.type.replace(/\|/g, '\\|'),
                        "` |",
                        ' ',
                        prop.description,
                        " |",
                        React.createElement(Br, null))); })))),
            React.createElement(Br, null),
            React.createElement(Br, null)));
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
        })));
}
function DocsAddon() {
    return React.createElement(React.Fragment, null, " `RMWC ADDON`");
}
function DocsSetup(_a) {
    var module = _a.module, styles = _a.styles, docsLink = _a.docsLink;
    return (React.createElement(React.Fragment, null,
        "- Module **",
        module,
        "**",
        React.createElement(Br, null),
        !!styles.length && (React.createElement(React.Fragment, null,
            "- Import styles:",
            React.createElement(Br, null),
            '  ',
            "- Using CSS Loader",
            React.createElement(Br, null),
            '    ',
            "- import '",
            module,
            "/styles';",
            React.createElement(Br, null),
            '  ',
            "- Or include stylesheets",
            React.createElement(Br, null),
            styles.map(function (s) { return (React.createElement(React.Fragment, { key: s },
                '    ',
                "- **'",
                s,
                "'**",
                React.createElement(Br, null))); }))),
        !!docsLink && (React.createElement(React.Fragment, null,
            "- MDC Docs: [",
            docsLink,
            "](",
            docsLink,
            ")")),
        React.createElement(Br, null),
        React.createElement(Br, null)));
}
function DocsTitle(_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        "# ",
        children,
        React.createElement(Br, null),
        React.createElement(Br, null)));
}
function Br() {
    return React.createElement(React.Fragment, null, '\n');
}
export function DocsSubtitle(_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        "## ",
        children,
        React.createElement(Br, null),
        React.createElement(Br, null)));
}
function DocsLead(_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        children,
        React.createElement(Br, null),
        React.createElement(Br, null)));
}
export function DocsP(_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        children,
        React.createElement(Br, null),
        React.createElement(Br, null)));
}
export function DocsExample(_a) {
    var _b = _a.index, index = _b === void 0 ? 0 : _b, rest = __rest(_a, ["index"]);
    var examples = useContext(DocsContext).examples;
    var _c = __read(useState(examples[index]), 1), code = _c[0];
    return React.createElement(DocsExampleBase, __assign({ code: code }, rest));
}
function DocsExampleBase(_a) {
    var code = _a.code;
    return (React.createElement(React.Fragment, null,
        "```jsx",
        React.createElement(Br, null),
        code,
        React.createElement(Br, null),
        "```",
        React.createElement(Br, null),
        React.createElement(Br, null)));
}
DocsExample.displayName = 'DocsExample';
