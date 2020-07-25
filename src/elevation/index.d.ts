import * as RMWC from '@rmwc/types';
import { h } from 'preact';
/** The Elevation Component */
export interface ElevationProps {
    /** A number from 0 - 24 for different levels of elevation */
    z?: number | string;
    /** Allows for smooth transitions between elevations when the z value changes. */
    transition?: boolean;
    /** Allows the elevation classes to be merged onto the child component instead of creating an new DOM node. */
    wrap?: boolean;
}
/** The Elevation Component */
export declare const Elevation: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ElevationProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
