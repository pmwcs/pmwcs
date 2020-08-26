import { AnyComponent } from 'preact'
import { HTMLProps } from '@pmwc/base'
import { MenuProps } from '@pmwc/menu'
import { IconPropT, IconProps } from '@pmwc/icon'
import { MDCSelectFoundation, MDCSelectIconFoundation } from '@material/select';

export interface FormattedOption
  extends Omit<React.AllHTMLAttributes<any>, 'label'> {
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
  options?: FormattedOption[] | string[] | { [value: string]: string };
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
  icon?: IconPropT;
  /** Advanced: A reference to the MDCFoundation. */
  foundationRef?: React.Ref<MDCSelectFoundation>;
  /** Use a smaller version. `label` will not be displayed. */
  size?: 'small';
  /** Do not display the bottom border. Has no effect if used with `outlined` */
  noBorder?: boolean;
}

export type SelectHTMLProps = HTMLProps;

export const Select: AnyComponent<SelectProps, SelectHTMLProps>

/** A help text component */
export interface SelectHelperTextProps {
  /** Make the help text always visible */
  persistent?: boolean;
  /** Make the help a validation message style */
  validationMsg?: boolean;
}

/** A help text component */
export const SelectHelperText : AnyComponent<SelectHelperTextProps>

export interface SelectIconApi {
  getFoundation: () => MDCSelectIconFoundation;
}

/** An Icon in a Select */
export interface SelectIconProps extends IconProps {
  apiRef?: (api: SelectIconApi | null) => void;
}

export const SelectIcon : AnyComponent<SelectIconProps>
