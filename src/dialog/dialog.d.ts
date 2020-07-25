import * as RMWC from '@rmwc/types';
import { h } from 'preact';
import { MDCDialogFoundation } from '@material/dialog';
import { PortalPropT } from '@rmwc/base';
import { ButtonProps } from '@rmwc/button';
/*********************************************************************
 * Events
 *********************************************************************/
export declare type DialogOnOpenEventT = RMWC.CustomEventT<{}>;
export declare type DialogOnOpenedEventT = RMWC.CustomEventT<{}>;
export declare type DialogOnCloseEventT = RMWC.CustomEventT<{
    action?: string;
}>;
export declare type DialogOnClosedEventT = RMWC.CustomEventT<{
    action?: string;
}>;
/*********************************************************************
 * Dialogs
 *********************************************************************/
/** A Dialog component. */
export interface DialogProps {
    /** Whether or not the Dialog is showing. */
    open?: boolean;
    /** Callback for when the Dialog opens. */
    onOpen?: (evt: DialogOnOpenEventT) => void;
    /** Callback for when the Dialog finishes opening */
    onOpened?: (evt: DialogOnOpenedEventT) => void;
    /** Callback for when the Dialog beings to close. evt.detail = { action?: string }*/
    onClose?: (evt: DialogOnCloseEventT) => void;
    /** Callback for when the Dialog finishes closing. evt.detail = { action?: string }*/
    onClosed?: (evt: DialogOnCloseEventT) => void;
    /** Prevent the dialog from closing when the scrim is clicked or escape key is pressed. */
    preventOutsideDismiss?: boolean;
    /** Renders the dialog to a portal. Useful for situations where the dialog might be cutoff by an overflow: hidden container. You can pass "true" to render to the default RMWC portal. */
    renderToPortal?: PortalPropT;
    /** Advanced: A reference to the MDCFoundation. */
    foundationRef?: React.Ref<MDCDialogFoundation>;
}
/** A Dialog component. */
export declare const Dialog: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<DialogProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A SimpleDialog component for ease of use. */
export interface SimpleDialogProps extends DialogProps {
    /** A title for the default Dialog template. */
    title?: React.ReactNode;
    /** Additional Dialog header content for the default Dialog template. */
    header?: React.ReactNode;
    /** Body content for the default Dialog template, rendered before children. */
    body?: React.ReactNode;
    /** Additional footer content for the default Dialog template, rendered before any buttons. */
    footer?: React.ReactNode;
    /** Creates an accept button for the default Dialog template with a given label. You can pass `null` to remove the button.*/
    acceptLabel?: React.ReactNode;
    /** Creates an cancel button for the default Dialog with a given label. You can pass `null` to remove the button.*/
    cancelLabel?: React.ReactNode;
    /** Any children will be rendered in the body of the default Dialog template. */
    children?: React.ReactNode;
}
export declare type SimpleDialogHTMLProps = RMWC.HTMLProps<HTMLDivElement, Omit<React.AllHTMLAttributes<HTMLDivElement>, 'title'>>;
/** A SimpleDialog component for ease of use. */
export declare const SimpleDialog: RMWC.ComponentType<SimpleDialogProps, SimpleDialogHTMLProps, 'div'>;
/** The Dialog title. */
export interface DialogTitleProps {
}
/** The Dialog title. */
export declare const DialogTitle: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<DialogTitleProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** The Dialog content. */
export interface DialogContentProps {
}
/** The Dialog content. */
export declare const DialogContent: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<DialogContentProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** Actions container for the Dialog. */
export interface DialogActionsProps {
}
/** Actions container for the Dialog. */
export declare const DialogActions: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<DialogActionsProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** Action buttons for the Dialog. */
export interface DialogButtonProps extends ButtonProps {
    /** An action returned in evt.detail.action to the onClose handler. */
    action?: string;
    /** Indicates this is the default selected action when pressing enter */
    isDefaultAction?: boolean;
}
/** Action buttons for the Dialog. */
export declare const DialogButton: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<DialogButtonProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
