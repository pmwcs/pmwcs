/// <reference types="@emotion/core" />
import * as RMWC from '@rmwc/types';
import { h } from 'preact';
export interface ToggleableProps<Foundation> {
    /** A DOM ID for the toggle. */
    id?: string;
    /** Disables the control. */
    disabled?: boolean;
    /** Toggle the control on and off. */
    checked?: boolean;
    /** The value of the control. */
    value?: string | number | string[];
    /** A label for the control. */
    label?: React.ReactNode;
    /** By default, all props except className and style spread to the input. These are additional props for the root of the checkbox. */
    rootProps?: React.HTMLProps<any>;
    /** A reference to the native input. */
    inputRef?: React.Ref<HTMLInputElement>;
    /** Advanced: A reference to the MDCFoundation. */
    foundationRef?: React.Ref<Foundation>;
}
export declare type ToggleHTMLProps = RMWC.HTMLProps<HTMLInputElement, Omit<React.AllHTMLAttributes<HTMLInputElement>, 'label'>>;
export declare function useToggleFoundation<Foundation>(props: ToggleableProps<Foundation> & ToggleHTMLProps): {
    id: string;
    renderToggle: (toggle: React.ReactElement) => JSX.Element;
    toggleRootProps: React.HTMLProps<any>;
};
