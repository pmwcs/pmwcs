import { AnyComponent } from 'preact'
import { MDCSnackbarFoundation } from '@material/snackbar';
import { HTMLProps, ArrayEmitter } from '@pmwcs/base';
import { ButtonProps } from '@pmwcs/button';
import { IconPropT } from '@pmwcs/icon';

export type SnackbarOnOpenEventT = CustomEvent<{}>;
export type SnackbarOnCloseEventT = CustomEvent<{ reason?: string }>;

/** A Snackbar component for notifications. */
export interface SnackbarProps {
  /** Show the Snackbar. */
  open?: boolean;
  /** A callback thats fired when the Snackbar shows. */
  onOpen?: (evt: SnackbarOnOpenEventT) => void;
  /** A callback thats fired when the Snackbar hides. evt.detail = { reason?: string } */
  onClose?: (evt: SnackbarOnCloseEventT) => void;
  /** A string or other renderable JSX to be used as the message body. */
  message?: AnyComponent;
  /** One or more actions to add to the snackbar. */
  action?: AnyComponent | AnyComponent[];
  /** Milliseconds to show the Snackbar for. Set to -1 to show indefinitely. */
  timeout?: number;
  /** Places the action underneath the message text. */
  stacked?: boolean;
  /* Aligns the Snackbar to the start of the screen. */
  leading?: boolean;
  /* Shows a dismiss icon, */
  dismissIcon?: boolean | string;
  /** Whether or not your want clicking an action to close the Snackbar. */
  dismissesOnAction?: boolean;
  /** An icon for the snackbar */
  icon?: IconPropT;
  /** Advanced: A reference to the MDCFoundation. */
  foundationRef?: React.Ref<MDCSnackbarFoundation | null>;
}

export type SnackbarHTMLProps = HTMLProps;

/** A Snackbar component for notifications. */
export const Snackbar : AnyComponent<SnackbarProps, SnackbarHTMLProps>

/** A button for a snackbar action. */
export interface SnackbarActionProps extends ButtonProps {
  /** An action returned in evt.detail.reason to the onClose handler. */
  action?: string;
}

/** A button for a snackbar action. */
export const SnackbarAction: AnyComponent<SnackbarActionProps, SnackbarHTMLProps>;

interface SnackbarQueueMessageBase {
  title?: React.ReactNode;
  body?: React.ReactNode;
  icon?: IconPropT;
  actions?: Array<
    NotificationAction | (SnackbarActionProps & SnackbarHTMLProps)
  >;
}

export interface SnackbarQueueMessage
  extends SnackbarProps,
    SnackbarQueueMessageBase,
    Omit<NotificationOptions, keyof SnackbarQueueMessageBase> {}

/** A snackbar queue for rendering messages */
export interface SnackbarQueueProps extends SnackbarProps {
  messages: ArrayEmitter<SnackbarQueueMessage>;
}

/** A snackbar queue for rendering messages */
export const SnackbarQueue : AnyComponent<SnackbarQueueProps & HTMLProps>

/** Creates a snackbar queue */
export function createSnackbarQueue() : {
  messages: ArrayEmitter<SnackbarQueueMessage>;
  clearAll: () => void;
  notify: (message: SnackbarQueueMessage) => { close: () => void };
}
