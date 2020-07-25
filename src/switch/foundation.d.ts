import { h } from 'preact';
import { SwitchProps, SwitchHTMLProps } from '.';
import { MDCSwitchFoundation } from '@material/switch';
export declare const useSwitchFoundation: (props: SwitchProps & SwitchHTMLProps) => {
    rootEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    checkboxEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    foundation: MDCSwitchFoundation;
    renderToggle: (toggle: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) => JSX.Element;
    toggleRootProps: React.HTMLProps<any>;
    id: string;
};
