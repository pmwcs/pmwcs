import { h } from 'preact';
import { RadioProps, RadioHTMLProps } from '.';
import { MDCRadioFoundation } from '@material/radio';
export declare const useRadioFoundation: (props: RadioProps & RadioHTMLProps) => {
    rootEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    foundation: MDCRadioFoundation;
    renderToggle: (toggle: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) => JSX.Element;
    toggleRootProps: React.HTMLProps<any>;
    id: string;
};
