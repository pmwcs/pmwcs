import { MDCDialogFoundation } from '@material/dialog';
import { DialogProps } from '.';
import { h } from 'preact';
export declare const useDialogFoundation: (props: DialogProps & React.HTMLProps<any>) => {
    rootEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    foundation: MDCDialogFoundation;
};
