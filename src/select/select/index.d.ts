import * as RMWC from '@pmwc/types';
import { h } from 'preact';
import { MDCSelectFoundation } from '@material/select';
import { MenuProps } from '@pmwc/menu';
export interface FormattedOption extends Omit<React.AllHTMLAttributes<any>, 'label'> {
    label: React.ReactNode;
    value?: string;
    options?: FormattedOption[];
}
/** A Select Component */
export interface SelectProps {
    /** The value for a controlled select. */
    value?: string;
    /** Adds help text to the field */
    helpText?: React.ReactNode | SelectHelperTextProps;
    /** Options accepts flat arrays, value => label maps, and more. See examples for details. */
    options?: FormattedOption[] | string[] | {
        [value: string]: string;
    };
    /** A label for the form control. */
    label?: string;
    /** Placeholder text for the form control. Set to a blank string to create a non-floating placeholder label. */
    placeholder?: string;
    /** Makes the select outlined. */
    outlined?: boolean;
    /** Makes the Select visually invalid. This is sometimes automatically my material-components-web.  */
    invalid?: boolean;
    /** Makes the Select disabled.  */
    disabled?: boolean;
    /** Makes the Select required.  */
    required?: boolean;
    /** Renders a non native / enhanced dropdown */
    enhanced?: boolean | MenuProps;
    /** Props for the root element. By default, additional props spread to the native select element.  */
    rootProps?: Object;
    /** A reference to the native select element. Not applicable when `enhanced` is true. */
    inputRef?: (ref: HTMLSelectElement | null) => void;
    /** Add a leading icon. */
    icon?: RMWC.IconPropT;
    /** Advanced: A reference to the MDCFoundation. */
    foundationRef?: React.Ref<MDCSelectFoundation>;
}
export declare type SelectHTMLProps = RMWC.HTMLProps<HTMLSelectElement, Omit<React.AllHTMLAttributes<HTMLSelectElement>, 'onSelect'>>;
export declare const Select: RMWC.ComponentType<SelectProps, SelectHTMLProps, 'select'>;
/** A help text component */
export interface SelectHelperTextProps {
    /** Make the help text always visible */
    persistent?: boolean;
    /** Make the help a validation message style */
    validationMsg?: boolean;
}
/** A help text component */
export declare const SelectHelperText: RMWC.ComponentType<SelectHelperTextProps, RMWC.HTMLProps, 'div'>;
