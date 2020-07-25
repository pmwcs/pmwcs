import { TextFieldProps, TextFieldCharacterCountApi, TextFieldIconApi } from '.';
import { FloatingLabelApi } from '@rmwc/floating-label';
export declare const useTextFieldFoundation: (props: TextFieldProps) => {
    rootEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    inputEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    shakeLabel: boolean;
    floatLabel: boolean;
    notchWidth: number | undefined;
    lineRippleActive: boolean;
    lineRippleCenter: number;
    setCharacterCounter: (api: TextFieldCharacterCountApi | null) => TextFieldCharacterCountApi | null;
    setLeadingIcon: (api: TextFieldIconApi | null) => TextFieldIconApi | null;
    setTrailingIcon: (api: TextFieldIconApi | null) => TextFieldIconApi | null;
    setFloatingLabel: (api: FloatingLabelApi | null) => FloatingLabelApi | null;
};
