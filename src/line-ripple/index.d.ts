import * as RMWC from '@rmwc/types';
import { h } from 'preact';
export interface LineRippleProps {
    active?: boolean;
    center?: number;
}
export declare const LineRipple: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<LineRippleProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
