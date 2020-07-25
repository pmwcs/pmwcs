import * as RMWC from '@rmwc/types';
import { h } from 'preact';
/** A Circular Progress indicator. */
export interface CircularProgressProps {
    /** Max value for determinate progress bars. */
    max?: number;
    /** Min value for determinate progress bars. */
    min?: number;
    /** Value for determinate progress bars. */
    progress?: number;
    /** The size of the loader you would like to render. */
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | number;
}
export declare const CircularProgress: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<CircularProgressProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
