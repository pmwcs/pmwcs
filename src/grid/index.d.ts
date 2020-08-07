import * as RMWC from '@pmwc/types';
import { h } from 'preact';
/** A Grid component */
export interface GridProps {
    /** Specifies the grid should have fixed column width. */
    fixedColumnWidth?: boolean;
    /** Specifies the alignment of the whole grid. */
    align?: 'left' | 'right';
    /** Children for the Grid */
    children?: React.ReactNode;
}
/** A Grid component */
export declare const Grid: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<GridProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A Grid cell */
export interface GridCellProps {
    /** Default number of columns to span. */
    span?: number;
    /** Number of columns to span on a phone. */
    phone?: number;
    /** Number of columns to span on a tablet. */
    tablet?: number;
    /** Number of columns to span on a desktop. */
    desktop?: number;
    /** Specifies the order of the cell. */
    order?: number;
    /** Specifies the alignment of cell */
    align?: 'top' | 'middle' | 'bottom';
}
/** A Grid cell */
export declare const GridCell: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<GridCellProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** By default, an inner grid component is included inside of <Grid>. Use GridRow when doing nested Grids. */
export interface GridRowProps {
}
/** By default, an inner grid component is included inside of <Grid>. Use GridRow when doing nested Grids. */
export declare const GridRow: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<GridRowProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
