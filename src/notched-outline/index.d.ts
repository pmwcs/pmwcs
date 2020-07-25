import * as RMWC from '@rmwc/types';
import { h } from 'preact';
export interface NotchedOutlineProps {
    notch?: number;
}
/*********************************************************************
 * Notched Outline
 *********************************************************************/
export declare const NotchedOutline: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<NotchedOutlineProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
