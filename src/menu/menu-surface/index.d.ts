import * as RMWC from '@pmwc/types';
import { h } from 'preact';
import { Corner, MDCMenuSurfaceFoundation } from '@material/menu-surface';
import { PortalPropT } from '@pmwc/base';
export declare type AnchorT = 'bottomEnd' | 'bottomLeft' | 'bottomRight' | 'bottomStart' | 'topEnd' | 'topLeft' | 'topRight' | 'topStart';
export declare type MenuSurfaceOnOpenEventT = RMWC.CustomEventT<{}>;
export declare type MenuSurfaceOnCloseEventT = RMWC.CustomEventT<{}>;
export interface MenuSurfaceApi {
    hoistMenuToBody: () => void;
    setAnchorCorner: (corner: Corner) => void;
    setAnchorElement: (element: HTMLElement) => void;
    setOpen: (open: boolean) => void;
    getSurfaceElement: () => HTMLElement | null;
}
export interface MenuSurfaceProps {
    /** Opens the menu. */
    open?: boolean;
    /** Make the menu position fixed. */
    fixed?: boolean;
    /** Renders the menu to a portal. Useful for situations where the content might be cutoff by an overflow: hidden container. You can pass "true" to render to the default RMWC portal. */
    renderToPortal?: PortalPropT;
    /** Manually position the menu to one of the corners. */
    anchorCorner?: AnchorT;
    /** Callback for when the menu is opened. */
    onOpen?: (evt: MenuSurfaceOnOpenEventT) => void;
    /** Callback for when the menu is closed. */
    onClose?: (evt: MenuSurfaceOnCloseEventT) => void;
    /** Children to render. */
    children?: React.ReactNode;
    /** An internal api for cross component communication. */
    apiRef?: (api: MenuSurfaceApi | null) => void;
    /** Advanced: A reference to the MDCFoundation. */
    foundationRef?: React.Ref<MDCMenuSurfaceFoundation>;
}
/****************************************************************
 * MenuSurface
 ****************************************************************/
/** A generic menu component for displaying any type of content. */
export declare const MenuSurface: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<MenuSurfaceProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/****************************************************************
 * MenuSurfaceAnchor
 ****************************************************************/
export interface MenuSurfaceAnchorProps {
}
/** A Menu Anchor. When using the anchorCorner prop of Menu, you must set MenuSurfaceAnchors css style position to absolute. */
export declare const MenuSurfaceAnchor: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<MenuSurfaceAnchorProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
