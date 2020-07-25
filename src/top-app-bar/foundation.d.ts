import { h } from 'preact';
import { TopAppBarProps } from '.';
import { MDCTopAppBarFoundation, MDCShortTopAppBarFoundation } from '@material/top-app-bar';
export declare const useTopAppBarFoundation: (props: TopAppBarProps & React.HTMLProps<any>) => {
    rootEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    foundation: MDCTopAppBarFoundation | MDCShortTopAppBarFoundation;
};
