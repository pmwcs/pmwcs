import { AnyComponent, Ref } from 'preact'
import { MDCFormFieldFoundation } from '@material/form-field';

/** A FormField component. */
export interface FormFieldProps {
  /** Position the input after the label. */
  alignEnd?: boolean;
  /** Advanced: A reference to the MDCFoundation. */
  foundationRef?: Ref<MDCFormFieldFoundation>;
}

/** A FormField component. */
export declare const FormField : AnyComponent<FormFieldProps>;
