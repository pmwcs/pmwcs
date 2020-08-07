import { h } from 'preact';
import { SnackbarProps } from '.';
import { MDCSnackbarFoundation } from '@material/snackbar';
export declare function useSnackbarFoundation(props: SnackbarProps & Omit<React.HTMLProps<any>, 'action'>): {
    rootEl: import("@pmwc/base").FoundationElement<any, HTMLElement>;
    surfaceEl: import("@pmwc/base").FoundationElement<any, HTMLElement>;
    labelEl: import("@pmwc/base").FoundationElement<any, HTMLElement>;
    foundation: MDCSnackbarFoundation;
};
