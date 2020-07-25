import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { useClassNames, Tag, createComponent } from '@rmwc/base';
import { useMenuSurfaceFoundation } from './foundation';
import { PortalChild } from '@rmwc/base';
/****************************************************************
 * MenuSurface
 ****************************************************************/
/** A generic menu component for displaying any type of content. */
export var MenuSurface = createComponent(function MenuSurface(props, ref) {
    var children = props.children, open = props.open, anchorCorner = props.anchorCorner, onOpen = props.onOpen, onClose = props.onClose, renderToPortal = props.renderToPortal, fixed = props.fixed, apiRef = props.apiRef, foundationRef = props.foundationRef, rest = __rest(props, ["children", "open", "anchorCorner", "onOpen", "onClose", "renderToPortal", "fixed", "apiRef", "foundationRef"]);
    var rootEl = useMenuSurfaceFoundation(props).rootEl;
    var className = useClassNames(props, [
        'mdc-menu-surface',
        {
            'mdc-menu-surface--fixed': fixed
        }
    ]);
    return (React.createElement(PortalChild, { renderTo: renderToPortal },
        React.createElement(Tag, __assign({}, rest, { element: rootEl, className: className, ref: ref }), children)));
});
/** A Menu Anchor. When using the anchorCorner prop of Menu, you must set MenuSurfaceAnchors css style position to absolute. */
export var MenuSurfaceAnchor = createComponent(function MenuSurfaceAnchor(props, ref) {
    var className = useClassNames(props, ['mdc-menu-surface--anchor']);
    return React.createElement(Tag, __assign({}, props, { className: className, ref: ref }));
});
