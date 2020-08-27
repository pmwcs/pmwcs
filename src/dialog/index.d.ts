import { AnyComponent, Ref } from 'preact';
import { PortalPropT, HTMLProps, ArrayEmitter } from '@pmwcs/base'
import { ButtonProps } from '@pmwcs/button'
import { MDCDialogFoundation } from '@material/dialog'

/** A Dialog component. */
export interface DialogProps {
  /** Whether or not the Dialog is showing. */
  open?: boolean;
  /** Callback for when the Dialog opens. */
  onOpen?: (evt: CustomEvent) => void;
  /** Callback for when the Dialog finishes opening */
  onOpened?: (evt: CustomEvent) => void;
  /** Callback for when the Dialog beings to close. evt.detail = { action?: string }*/
  onClose?: (evt: CustomEvent) => void;
  /** Callback for when the Dialog finishes closing. evt.detail = { action?: string }*/
  onClosed?: (evt: CustomEvent) => void;
  /** Prevent the dialog from closing when the scrim is clicked or escape key is pressed. */
  preventOutsideDismiss?: boolean;
  /** Renders the dialog to a portal. Useful for situations where the dialog might be cutoff by an overflow: hidden container. You can pass "true" to render to the default RMWC portal. */
  renderToPortal?: PortalPropT;
  /** Advanced: A reference to the MDCFoundation. */
  foundationRef?: Ref<MDCDialogFoundation>;
}

export declare const Dialog : AnyComponent<DialogProps>;

/** A SimpleDialog component for ease of use. */
export interface SimpleDialogProps extends DialogProps {
  /** A title for the default Dialog template. */
  title?: AnyComponent;
  /** Additional Dialog header content for the default Dialog template. */
  header?: AnyComponent;
  /** Body content for the default Dialog template, rendered before children. */
  body?: AnyComponent;
  /** Additional footer content for the default Dialog template, rendered before any buttons. */
  footer?: AnyComponent;
  /** Creates an accept button for the default Dialog template with a given label. You can pass `null` to remove the button.*/
  acceptLabel?: AnyComponent;
  /** Creates an cancel button for the default Dialog with a given label. You can pass `null` to remove the button.*/
  cancelLabel?: AnyComponent;
  /** Any children will be rendered in the body of the default Dialog template. */
  children?: AnyComponent;
}

export declare const SimpleDialog : AnyComponent<SimpleDialogProps>;

/** The Dialog title. */
export interface DialogTitleProps {}

export declare const DialogTitle : AnyComponent<DialogTitleProps>;

/** The Dialog content. */
export interface DialogContentProps {}

export declare const DialogContent : AnyComponent<DialogContentProps>;

/** Actions container for the Dialog. */
export interface DialogActionsProps {}

export declare const DialogActions : AnyComponent<DialogActionsProps>;

/** Action buttons for the Dialog. */
export interface DialogButtonProps extends ButtonProps {
  /** An action returned in evt.detail.action to the onClose handler. */
  action?: string;
  /** Indicates this is the default selected action when pressing enter */
  isDefaultAction?: boolean;
}

export declare const DialogButton : AnyComponent<DialogButtonProps>;

export type SimpleDialogHTMLProps = HTMLProps;

export interface DialogQueueInput
  extends SimpleDialogProps,
    SimpleDialogHTMLProps {
  id?: string;
  /** Props for the input when using the prompt dialog. Only applies to prompt. */
  inputProps?: HTMLProps;
}

export interface DialogQueueSpec extends DialogQueueInput {
  id: string;
  resolve: (response: any) => void;
  reject: (reason: any) => void;
}

/** A snackbar queue for rendering messages */
export interface DialogQueueProps extends SimpleDialogProps {
  dialogs: ArrayEmitter<DialogQueueSpec>;
}
