import { AnyComponent, Ref } from 'preact'
import { HTMLProps } from '@pmwc/base'

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
  label?: AnyComponent;
  /**
   * By default, all HTML props except className and style spread to the input.
   * These are additional props for the root of the checkbox.
   */
  rootProps?: HTMLProps;
  /** A reference to the native input. */
  inputRef?: Ref<HTMLInputElement>;
  /** Advanced: A reference to the MDCFoundation. */
  foundationRef?: Ref<Foundation>;
}
