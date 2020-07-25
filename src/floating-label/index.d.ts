import * as RMWC from '@rmwc/types';
import { h } from 'preact';
export interface FloatingLabelProps {
    shake?: boolean;
    float?: boolean;
}
export interface FloatingLabelApi {
    getWidth: () => number;
}
export declare const FloatingLabel: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<FloatingLabelProps & {
        apiRef?: ((api: FloatingLabelApi | null) => void) | undefined;
    }, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
