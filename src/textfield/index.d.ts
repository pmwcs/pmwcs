import * as RMWC from '@rmwc/types';
import { h } from 'preact';
import { IconProps } from '@rmwc/icon';
import { MDCTextFieldCharacterCounterFoundation, MDCTextFieldIconFoundation, MDCTextFieldFoundation } from '@material/textfield';
/*********************************************************************
 * TextField
 *********************************************************************/
/** A TextField component for accepting text input from a user. */
export interface TextFieldProps extends RMWC.WithRippleProps {
    /** Sets the value for controlled TextFields. */
    value?: string | number;
    /** Adds help text to the field */
    helpText?: React.ReactNode | TextFieldHelperTextProps;
    /** Shows the character count, must be used in conjunction with maxLength. */
    characterCount?: boolean;
    /** Makes the TextField visually invalid. This is sometimes automatically applied in cases where required or pattern is used.  */
    invalid?: boolean;
    /** Makes the Textfield disabled. */
    disabled?: boolean;
    /** Makes the Textfield required. */
    required?: boolean;
    /** Outline the TextField. */
    outlined?: boolean;
    /** How to align the text inside the TextField. Defaults to 'start'. */
    align?: 'start' | 'end';
    /** A label for the input. */
    label?: React.ReactNode;
    /** The label floats automatically based on value, but you can use this prop for manual control. */
    floatLabel?: boolean;
    /** Makes a multiline TextField. */
    textarea?: boolean;
    /** Makes the TextField fullwidth. */
    fullwidth?: boolean;
    /** Add a leading icon. */
    icon?: RMWC.IconPropT;
    /** Add a trailing icon. */
    trailingIcon?: RMWC.IconPropT;
    /** By default, props spread to the input. These props are for the component's root container. */
    rootProps?: Object;
    /** A reference to the native input or textarea. */
    inputRef?: React.Ref<HTMLInputElement | HTMLTextAreaElement | null>;
    /** The type of input field to render, search, number, etc */
    type?: string;
    /** Advanced: A reference to the MDCFoundation. */
    foundationRef?: React.Ref<MDCTextFieldFoundation | null>;
}
export declare type TextFieldHTMLProps = RMWC.HTMLProps<HTMLInputElement, Omit<React.AllHTMLAttributes<HTMLInputElement>, 'label'>>;
/** A TextField component for accepting text input from a user. */
export declare const TextField: RMWC.ComponentType<TextFieldProps, TextFieldHTMLProps, 'input'>;
/*********************************************************************
 * Character Count
 *********************************************************************/
export interface TextFieldCharacterCountApi {
    getFoundation: () => MDCTextFieldCharacterCounterFoundation;
}
export interface TextFieldCharacterCountProps extends IconProps {
    apiRef?: (api: TextFieldCharacterCountApi | null) => void;
}
/*********************************************************************
 * Helper Text
 *********************************************************************/
export interface TextFieldHelperTextProps {
    /** Make the help text always visible */
    persistent?: boolean;
    /** Make the help a validation message style */
    validationMsg?: boolean;
    /** Content for the help text */
    children: React.ReactNode;
}
/** A help text component */
export declare const TextFieldHelperText: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<TextFieldHelperTextProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string; /** The type of input field to render, search, number, etc */
};
/*********************************************************************
 * Icon
 *********************************************************************/
export interface TextFieldIconApi {
    getFoundation: () => MDCTextFieldIconFoundation;
}
/** An Icon in a TextField */
export interface TextFieldIconProps extends IconProps {
    apiRef?: (api: TextFieldIconApi | null) => void;
    position: 'leading' | 'trailing';
}
