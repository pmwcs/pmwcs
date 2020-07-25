import { CheckboxProps, CheckboxHTMLProps } from '.';
import { MDCCheckboxFoundation } from '@material/checkbox';
import { h } from 'preact';
export declare const useCheckboxFoundation: (props: CheckboxProps & CheckboxHTMLProps) => {
    rootEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    checkboxEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    foundation: MDCCheckboxFoundation;
    renderToggle: (toggle: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) => JSX.Element;
    toggleRootProps: React.HTMLProps<any>;
    id: string;
};
