import { Ref, AnyComponent } from 'preact'

import { MDCMenuFoundation } from '@material/menu';
import { ListItemProps, ListProps, ListApi } from '@pmwcs/list';
import { HTMLProps, PortalPropT } from '@pmwcs/base';
import { Corner, MDCMenuSurfaceFoundation } from '@material/menu-surface';

/****************************************************************
 * Menu
 ****************************************************************/
export type MenuOnSelectEventT = CustomEvent<{
  index: number;
  item: HTMLElement;
}>;

export interface MenuApi extends ListApi, MenuSurfaceApi {
  items: () => HTMLLIElement[];
}

/** A menu component for displaying lists items. */
export interface MenuProps
  extends Omit<MenuSurfaceProps, 'apiRef' | 'foundationRef'> {
  /** Callback that fires when a Menu item is selected. evt.detail = { index: number; item: HTMLElement; } */
  onSelect?: (evt: MenuOnSelectEventT) => void;
  /** Whether or not to focus the first list item on open. Defaults to true. */
  focusOnOpen?: boolean;
  /** Internal api reference for cross component communication. */
  apiRef?: (api: MenuApi | null) => void;
  /** Advanced: A reference to the MDCFoundation. */
  foundationRef?: Ref<MDCMenuFoundation>;
}

export type MenuHTMLProps = HTMLProps;

/** A wrapper for menu items */
export interface MenuItemsProps extends ListProps {}

/** A wrapper for menu items */
export const MenuItems : AnyComponent<MenuItemsProps>

/** This is just the ListItem component exported from the Menu module for convenience. You can use `ListItem` or `SimpleListItem` components from the List section as long as you add `role="menuitem"` and `tabIndex="0"` to the components for accessibility. */
export interface MenuItemProps extends ListItemProps {}

/** This is just the ListItem component exported from the Menu module for convenience. You can use `ListItem` or `SimpleListItem` components from the List section as long as you add `role="menuitem"` and `tabIndex="0"` to the components for accessibility. */
export const MenuItem : AnyComponent<MenuItemProps>

/** A menu component for displaying lists items. */
export const Menu : AnyComponent<MenuProps, MenuHTMLProps>

/****************************************************************
 * Simple Menu
 ****************************************************************/

/** A Simplified menu component that allows you to pass a handle element and will automatically control the open state and add a MenuSurfaceAnchor */
export interface SimpleMenuProps extends MenuProps {
  /** An element that will open the menu when clicked  */
  handle: AnyComponent<any>;
  /** By default, props spread to the Menu component. These will spread to the MenuSurfaceAnchor which is useful for things like overall positioning of the anchor.   */
  rootProps?: Object;
  /** Children to render */
  children?: AnyComponent;
}

/** The same as SimpleMenu, but a generic surface. */
export interface SimpleMenuSurfaceProps extends MenuSurfaceProps {
  /** An element that will open the menu when clicked  */
  handle: AnyComponent<any>;
  /** By default, props spread to the Menu component. These will spread to the MenuSurfaceAnchor which is useful for things like overall positioning of the anchor.   */
  rootProps?: Object;
  /** Children to render */
  children?: AnyComponent;
}

export interface SimpleMenuState {
  open: boolean;
}

/** A Simplified menu component that allows you to pass a handle element and will automatically control the open state and add a MenuSurfaceAnchor */
export const SimpleMenu : AnyComponent<SimpleMenuProps>;

/** The same as SimpleMenu, but a generic surface. */
export const SimpleMenuSurface : AnyComponent<SimpleMenuSurfaceProps>;

export type AnchorT =
  | 'bottomEnd'
  | 'bottomLeft'
  | 'bottomRight'
  | 'bottomStart'
  | 'topEnd'
  | 'topLeft'
  | 'topRight'
  | 'topStart';

export type MenuSurfaceOnOpenEventT = CustomEvent<{}>;
export type MenuSurfaceOnCloseEventT = CustomEvent<{}>;

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
  children?: AnyComponent;
  /** An internal api for cross component communication. */
  apiRef?: (api: MenuSurfaceApi | null) => void;
  /** Advanced: A reference to the MDCFoundation. */
  foundationRef?: Ref<MDCMenuSurfaceFoundation>;
}

/** A generic menu component for displaying any type of content. */
export const MenuSurface : AnyComponent<MenuSurfaceProps>

/**
 * MenuSurfaceAnchor
 */
export interface MenuSurfaceAnchorProps {}

/** A Menu Anchor. When using the anchorCorner prop of Menu, you must set MenuSurfaceAnchors css style position to absolute. */
export const MenuSurfaceAnchor : AnyComponent<MenuSurfaceAnchorProps>
