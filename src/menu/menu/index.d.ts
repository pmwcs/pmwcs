import * as RMWC from '@pmwc/types';
import { h } from 'preact';
import { MDCMenuFoundation } from '@material/menu';
import { ListItemProps, ListProps, ListApi } from '@pmwc/list';
import { MenuSurfaceProps, MenuSurfaceApi } from '../menu-surface';
/****************************************************************
 * Menu
 ****************************************************************/
export declare type MenuOnSelectEventT = RMWC.CustomEventT<{
    index: number;
    item: HTMLElement;
}>;
export interface MenuApi extends ListApi, MenuSurfaceApi {
    items: () => HTMLLIElement[];
}
/** A menu component for displaying lists items. */
export interface MenuProps extends Omit<MenuSurfaceProps, 'apiRef' | 'foundationRef'> {
    /** Callback that fires when a Menu item is selected. evt.detail = { index: number; item: HTMLElement; } */
    onSelect?: (evt: MenuOnSelectEventT) => void;
    /** Whether or not to focus the first list item on open. Defaults to true. */
    focusOnOpen?: boolean;
    /** Internal api reference for cross component communication. */
    apiRef?: (api: MenuApi | null) => void;
    /** Advanced: A reference to the MDCFoundation. */
    foundationRef?: React.Ref<MDCMenuFoundation>;
}
export declare type MenuHTMLProps = RMWC.HTMLProps<HTMLInputElement, Omit<React.AllHTMLAttributes<HTMLInputElement>, 'onSelect'>>;
/** A wrapper for menu items */
export interface MenuItemsProps extends ListProps {
}
/** A wrapper for menu items */
export declare const MenuItems: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<MenuItemsProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** This is just the ListItem component exported from the Menu module for convenience. You can use `ListItem` or `SimpleListItem` components from the List section as long as you add `role="menuitem"` and `tabIndex="0"` to the components for accessibility. */
export interface MenuItemProps extends ListItemProps {
}
/** This is just the ListItem component exported from the Menu module for convenience. You can use `ListItem` or `SimpleListItem` components from the List section as long as you add `role="menuitem"` and `tabIndex="0"` to the components for accessibility. */
export declare const MenuItem: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<MenuItemProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A menu component for displaying lists items. */
export declare const Menu: RMWC.ComponentType<MenuProps, MenuHTMLProps, 'div'>;
/****************************************************************
 * Simple Menu
 ****************************************************************/
/** A Simplified menu component that allows you to pass a handle element and will automatically control the open state and add a MenuSurfaceAnchor */
export interface SimpleMenuProps extends MenuProps {
    /** An element that will open the menu when clicked  */
    handle: React.ReactElement<any>;
    /** By default, props spread to the Menu component. These will spread to the MenuSurfaceAnchor which is useful for things like overall positioning of the anchor.   */
    rootProps?: Object;
    /** Children to render */
    children?: React.ReactNode;
}
/** The same as SimpleMenu, but a generic surface. */
export interface SimpleMenuSurfaceProps extends MenuSurfaceProps {
    /** An element that will open the menu when clicked  */
    handle: React.ReactElement<any>;
    /** By default, props spread to the Menu component. These will spread to the MenuSurfaceAnchor which is useful for things like overall positioning of the anchor.   */
    rootProps?: Object;
    /** Children to render */
    children?: React.ReactNode;
}
export interface SimpleMenuState {
    open: boolean;
}
/** A Simplified menu component that allows you to pass a handle element and will automatically control the open state and add a MenuSurfaceAnchor */
export declare const SimpleMenu: React.ComponentType<SimpleMenuProps>;
/** The same as SimpleMenu, but a generic surface. */
export declare const SimpleMenuSurface: React.ComponentType<SimpleMenuSurfaceProps>;
