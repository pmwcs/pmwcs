import { ChipProps, ChipHTMLProps } from './';
import { MDCChipFoundation } from '@material/chips';
export declare const useChipFoundation: (props: ChipProps & ChipHTMLProps) => {
    foundation: MDCChipFoundation;
} & {
    rootEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    trailingIconEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    checkmarkEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
};
