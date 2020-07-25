import * as RMWC from '@rmwc/types';
import { h } from 'preact';
import { SnackbarProps, SnackbarActionProps, SnackbarHTMLProps } from './snackbar';
import { IconPropT } from '@rmwc/types';
import { ArrayEmitter } from '@rmwc/base';
interface SnackbarQueueMessageBase {
    title?: React.ReactNode;
    body?: React.ReactNode;
    icon?: IconPropT;
    actions?: Array<NotificationAction | (SnackbarActionProps & SnackbarHTMLProps)>;
}
export interface SnackbarQueueMessage extends SnackbarProps, SnackbarQueueMessageBase, Omit<NotificationOptions, keyof SnackbarQueueMessageBase> {
}
/** A snackbar queue for rendering messages */
export interface SnackbarQueueProps extends SnackbarProps {
    messages: ArrayEmitter<SnackbarQueueMessage>;
}
/** A snackbar queue for rendering messages */
export declare function SnackbarQueue({ messages, ...defaultSnackbarProps }: SnackbarQueueProps & RMWC.HTMLProps): JSX.Element;
/** Creates a snackbar queue */
export declare const createSnackbarQueue: () => {
    messages: ArrayEmitter<SnackbarQueueMessage>;
    clearAll: () => void;
    notify: (message: SnackbarQueueMessage) => {
        close: () => void;
    };
};
export {};
