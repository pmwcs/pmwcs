import { AnyComponent, Ref } from 'preact'

import { HTMLProps } from '@pmwcs/base';
import { IconProps, IconPropT } from '@pmwcs/icon';
import { WithRippleProps } from '@pmwcs/ripple';
import {
  MDCTextFieldCharacterCounterFoundation,
  MDCTextFieldFoundation
} from '@material/textfield';

/** A TextField component for accepting text input from a user. */
export interface TextFieldProps extends WithRippleProps {
  /** Sets the value for controlled TextFields. */
  value?: string | number;
  /** Adds help text to the field */
  helpText?: AnyComponent | TextFieldHelperTextProps;
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
  label?: AnyComponent;
  /** The label floats automatically based on value, but you can use this prop for manual control. */
  floatLabel?: boolean;
  /** Makes a multiline TextField. */
  textarea?: boolean;
  /** Makes the TextField fullwidth. */
  fullwidth?: boolean;
  /** Add a leading icon. */
  icon?: IconPropT;
  /** Add a trailing icon. */
  trailingIcon?: IconPropT;
  /** By default, props spread to the input. These props are for the component's root container. */
  rootProps?: Object;
  /** A reference to the native input or textarea. */
  inputRef?: Ref<HTMLInputElement | HTMLTextAreaElement | null>;
  /** The type of input field to render, search, number, etc */
  type?: string;
  /** Advanced: A reference to the MDCFoundation. */
  foundationRef?: Ref<MDCTextFieldFoundation | null>;
}

export type TextFieldHTMLProps = HTMLProps;

/** A TextField component for accepting text input from a user. */
export const TextField: AnyComponent<TextFieldProps, TextFieldHTMLProps>

export interface TextFieldCharacterCountApi {
  getFoundation: () => MDCTextFieldCharacterCounterFoundation;
}

export interface TextFieldCharacterCountProps extends IconProps {
  apiRef?: (api: TextFieldCharacterCountApi | null) => void;
}

export interface TextFieldHelperTextProps {
  /** Make the help text always visible */
  persistent?: boolean;
  /** Make the help a validation message style */
  validationMsg?: boolean;
  /** Content for the help text */
  children: AnyComponent;
}

/** A help text component */
export const TextFieldHelperText : AnyComponent<TextFieldHelperTextProps>
