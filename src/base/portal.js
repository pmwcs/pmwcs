import { __read } from "tslib";
import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
var PORTAL_ID = 'rmwcPortal';
export function Portal() {
    var el = useRef(document.createElement('div'));
    return React.createElement("div", { ref: el, id: PORTAL_ID });
}
export function PortalChild(_a) {
    var children = _a.children, renderTo = _a.renderTo;
    var _b = __read(useState(), 2), portalEl = _b[0], setPortalEl = _b[1];
    useEffect(function () {
        var element = undefined;
        if (renderTo === true) {
            element = document.getElementById(PORTAL_ID) || undefined;
            !element &&
                console.warn('No default Portal found. Did you forget to include it in the root of your app? `import { Portal } from "@rmwc/base";`');
        }
        else if (typeof renderTo === 'string') {
            element = document.querySelector(renderTo) || undefined;
            !element &&
                console.warn("The selector you provided for renderToPortal \"" + renderTo + "\" didn't find any elements.");
        }
        else if (renderTo instanceof Element) {
            element = renderTo;
        }
        if (element !== portalEl) {
            setPortalEl(element);
        }
    }, [renderTo, portalEl]);
    if (portalEl) {
        return ReactDOM.createPortal(children, portalEl);
    }
    return React.createElement(React.Fragment, null, children);
}
