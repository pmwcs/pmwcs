import { AnyComponent } from 'preact'

/** A Grid component */
export interface GridProps {
  /** Specifies the grid should have fixed column width. */
  fixedColumnWidth?: boolean;
  /** Specifies the alignment of the whole grid. */
  align?: 'left' | 'right';
  /** Children for the Grid */
  children?: AnyComponent[] |  AnyComponent;
}

/** A Grid component */
export declare const Grid : AnyComponent<GridProps>

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
export const GridCell : AnyComponent<GridCellProps>

/** By default, an inner grid component is included inside of <Grid>. Use GridRow when doing nested Grids. */
export interface GridRowProps {}

/** By default, an inner grid component is included inside of <Grid>. Use GridRow when doing nested Grids. */
export const GridRow : AnyComponent<GridRowProps>
