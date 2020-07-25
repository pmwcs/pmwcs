import { FloatingLabelProps } from '.';
import { MDCFloatingLabelFoundation } from '@material/floating-label';
import { h } from 'preact';
export declare const useFloatingLabelFoundation: (props: FloatingLabelProps & React.HTMLProps<any>) => {
    rootEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    foundation: MDCFloatingLabelFoundation;
};
