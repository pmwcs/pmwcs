import * as RMWC from '@pmwc/types';
import { h } from 'preact';
import { MDCModalDrawerFoundation, MDCDismissibleDrawerFoundation } from '@material/drawer';
/***************************************************************************************
 * Events
 ***************************************************************************************/
export declare type DrawerOnCloseEventT = RMWC.CustomEventT<{}>;
export declare type DrawerOnOpenEventT = RMWC.CustomEventT<{}>;
/***************************************************************************************
 * Drawers
 ***************************************************************************************/
/** A Drawer component. */
export interface DrawerProps {
    /** Opens or closes the Drawer. */
    open?: boolean;
    /** Callback that fires when the Drawer is closed. */
    onClose?: (evt: DrawerOnOpenEventT) => void;
    /** Callback that fires when the Drawer is opened. */
    onOpen?: (evt: DrawerOnCloseEventT) => void;
    /** Makes a dismissible drawer. */
    dismissible?: boolean;
    /** Makes a modal / temporary drawer. */
    modal?: boolean;
    /** Advanced: A reference to the MDCFoundation. */
    foundationRef?: React.Ref<MDCModalDrawerFoundation | MDCDismissibleDrawerFoundation>;
}
/** A Drawer component. */
export declare const Drawer: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<DrawerProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/***************************************************************************************
 * Bits
 ***************************************************************************************/
/** An optional header for the Drawer. */
export interface DrawerHeaderProps {
}
/** An optional header for the Drawer. */
export declare const DrawerHeader: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<DrawerHeaderProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** An title for the DrawerHeader. */
export interface DrawerTitleProps {
}
/** An title for the DrawerHeader. */
export declare const DrawerTitle: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<DrawerTitleProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A subtitle for the DrawerHeader. */
export interface DrawerSubtitleProps {
}
/** A subtitle for the DrawerHeader. */
export declare const DrawerSubtitle: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<DrawerSubtitleProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** Content for Drawers. */
export interface DrawerContentProps {
}
/** Content for Drawers. */
export declare const DrawerContent: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<DrawerContentProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** For the Dismissible variant only. Sibling element that is resized when the drawer opens/closes. */
export interface DrawerAppContentProps {
}
/** For the Dismissible variant only. Sibling element that is resized when the drawer opens/closes. */
export declare const DrawerAppContent: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<DrawerAppContentProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
