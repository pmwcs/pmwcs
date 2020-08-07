import * as RMWC from '@pmwc/types';
import { h } from 'preact';
import { MDCSnackbarFoundation } from '@material/snackbar';
import { ButtonProps } from '@pmwc/button';
/*********************************************************************
 * Events
 *********************************************************************/
export declare type SnackbarOnOpenEventT = RMWC.CustomEventT<{}>;
export declare type SnackbarOnCloseEventT = RMWC.CustomEventT<{
    reason?: string;
}>;
/*********************************************************************
 * Snackbar
 *********************************************************************/
/** A Snackbar component for notifications. */
export interface SnackbarProps {
    /** Show the Snackbar. */
    open?: boolean;
    /** A callback thats fired when the Snackbar shows. */
    onOpen?: (evt: SnackbarOnOpenEventT) => void;
    /** A callback thats fired when the Snackbar hides. evt.detail = { reason?: string } */
    onClose?: (evt: SnackbarOnCloseEventT) => void;
    /** A string or other renderable JSX to be used as the message body. */
    message?: React.ReactNode;
    /** One or more actions to add to the snackbar. */
    action?: React.ReactNode | React.ReactNode[];
    /** Milliseconds to show the Snackbar for. Set to -1 to show indefinitely. */
    timeout?: number;
    /** Places the action underneath the message text. */
    stacked?: boolean;
    leading?: boolean;
    dismissIcon?: boolean | string;
    /** Whether or not your want clicking an action to close the Snackbar. */
    dismissesOnAction?: boolean;
    /** An icon for the snackbar */
    icon?: RMWC.IconPropT;
    /** Advanced: A reference to the MDCFoundation. */
    foundationRef?: React.Ref<MDCSnackbarFoundation | null>;
}
export declare type SnackbarHTMLProps = RMWC.HTMLProps<HTMLDivElement, Omit<React.AllHTMLAttributes<HTMLDivElement>, 'action'>>;
/** A Snackbar component for notifications. */
export declare const Snackbar: RMWC.ComponentType<SnackbarProps, SnackbarHTMLProps, 'div'>;
/** A button for a snackbar action. */
export interface SnackbarActionProps extends ButtonProps {
    /** An action returned in evt.detail.reason to the onClose handler. */
    action?: string;
}
/** A button for a snackbar action. */
export declare const SnackbarAction: RMWC.ComponentType<SnackbarActionProps, SnackbarHTMLProps, 'button'>;
