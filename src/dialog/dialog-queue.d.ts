/// <reference types="react" />
import { SimpleDialogProps, SimpleDialogHTMLProps } from './dialog';
import { ArrayEmitter } from '@rmwc/base';
import { TextFieldProps, TextFieldHTMLProps } from '@rmwc/textfield';
export interface DialogQueueInput extends SimpleDialogProps, SimpleDialogHTMLProps {
    id?: string;
    /** Props for the input when using the prompt dialog. Only applies to prompt. */
    inputProps?: TextFieldProps & TextFieldHTMLProps;
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
/** A snackbar queue for rendering messages */
export declare function DialogQueue({ dialogs, ...defaultDialogProps }: DialogQueueProps): JSX.Element;
/** Creates a snackbar queue */
export declare const createDialogQueue: () => {
    dialogs: ArrayEmitter<DialogQueueSpec>;
    alert: (dialog: DialogQueueInput) => Promise<any>;
    confirm: (dialog: DialogQueueInput) => Promise<any>;
    prompt: (dialog: DialogQueueInput) => Promise<any>;
};
