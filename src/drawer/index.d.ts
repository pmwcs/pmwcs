import { AnyComponent, Ref } from 'preact'
import {
  MDCModalDrawerFoundation,
  MDCDismissibleDrawerFoundation
} from '@material/drawer';

/** A Drawer component. */
export interface DrawerProps {
  /** Opens or closes the Drawer. */
  open?: boolean;
  /** Callback that fires when the Drawer is closed. */
  onClose?: (evt: CustomEvent) => void;
  /** Callback that fires when the Drawer is opened. */
  onOpen?: (evt: CustomEvent) => void;
  /** Makes a dismissible drawer. */
  dismissible?: boolean;
  /** Makes a modal / temporary drawer. */
  modal?: boolean;
  /** Advanced: A reference to the MDCFoundation. */
  foundationRef?: Ref<
    MDCModalDrawerFoundation | MDCDismissibleDrawerFoundation
  >;
  /** aria id used for Drawer and DrawerControl */
  ariaId?: string;
  /** Drawer children */
  children: AnyComponent[]|AnyComponent;
}

export declare const Drawer : AnyComponent<DrawerProps>;

/** An optional header for the Drawer. */
export interface DrawerHeaderProps {}

export declare const DrawerHeader : AnyComponent<DrawerHeaderProps>;

/** An title for the DrawerHeader. */
export interface DrawerTitleProps {}

export declare const DrawerTitle : AnyComponent<DrawerTitleProps>;

/** A subtitle for the DrawerHeader. */
export interface DrawerSubtitleProps {}

export declare const DrawerSubtitle : AnyComponent<DrawerSubtitleProps>;

/** Content for Drawers. */
export interface DrawerContentProps {}

export declare const DrawerContent : AnyComponent<DrawerContentProps>;

/** For the Dismissible variant only. Sibling element that is resized when the drawer opens/closes. */
export interface DrawerAppContentProps {}

export declare const DrawerAppContent : AnyComponent<DrawerAppContentProps>;

/** */
export interface DrawerControlProps {
  /** aria id used for Drawer and DrawerControl */
  ariaId?: string;
  /** status of the Drawer. */
  open?: boolean;
  /** One children containg the drawer control element */
  children: AnyComponent;
}

export declare const DrawerControl : AnyComponent<DrawerControlProps>
