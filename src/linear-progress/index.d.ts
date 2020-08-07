import * as RMWC from '@pmwc/types';
import { h } from 'preact';
import { MDCLinearProgressFoundation } from '@material/linear-progress';
/** A component to display linear progress. */
export interface LinearProgressProps {
    /** Progress float percentage between 0 and 1. */
    progress?: number;
    /** A Progress buffer float percentage between 0 and 1. */
    buffer?: number;
    /** Progress goes from right to left. */
    reversed?: boolean;
    /** Hides the progress bar. Adding / removing this prop will trigger an animation in or out.  */
    closed?: boolean;
    /** Advanced: A reference to the MDCFoundation. */
    foundationRef?: React.Ref<MDCLinearProgressFoundation>;
}
/** A component to display linear progress. */
export declare const LinearProgress: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<LinearProgressProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
