import { h } from 'preact';
import { MDCLineRippleFoundation } from '@material/line-ripple';
import { LineRippleProps } from '.';
export declare const useLineRippleFoundation: (props: LineRippleProps & React.HTMLProps<any>) => {
    rootEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    foundation: MDCLineRippleFoundation;
};
