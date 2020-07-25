import * as RMWC from '@rmwc/types';
import { h } from 'preact';
import { MDCFormFieldFoundation } from '@material/form-field';
/** A FormField component. */
export interface FormFieldProps {
    /** Position the input after the label. */
    alignEnd?: boolean;
    /** Advanced: A reference to the MDCFoundation. */
    foundationRef?: React.Ref<MDCFormFieldFoundation>;
}
/** A FormField component. */
export declare const FormField: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<FormFieldProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
