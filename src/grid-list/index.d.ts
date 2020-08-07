import * as RMWC from '@pmwc/types';
import { h } from 'preact';
import { IconProps } from '@pmwc/icon';
/** Grid List Component */
export interface GridListProps {
    /** Use a 1px gutter. */
    tileGutter1?: boolean;
    /** Move the caption to the top of the card. */
    headerCaption?: boolean;
    /** Make the caption two lines. */
    twolineCaption?: boolean;
    /** Leaves space for a start aligned icon. */
    withIconAlignStart?: boolean;
    /** One of the following values: 1x1, 16x9, 2x3, 3x2, 4x3, 3x4. */
    tileAspect?: '1x1' | '16x9' | '2x3' | '3x2' | '4x3' | '3x4';
}
/** Grid List Component */
export declare const GridList: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<GridListProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** The primary content for a Grid tile */
export interface GridTilePrimaryProps {
}
/** The primary content for a Grid tile */
export declare const GridTilePrimary: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<GridTilePrimaryProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** The inner primary content for a Grid tile */
export interface GridTilePrimaryContentProps {
}
/** The inner primary content for a Grid tile */
export declare const GridTilePrimaryContent: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<GridTilePrimaryContentProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A grid tile */
export interface GridTileProps {
}
/** A grid tile */
export declare const GridTile: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<GridTileProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** The secondary content for a Grid tile */
export interface GridTileSecondaryProps {
}
/** The secondary content for a Grid tile */
export declare const GridTileSecondary: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<GridTileSecondaryProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** The icon for a Grid tile. This is an instance of Icon component. */
export interface GridTileIconProps extends IconProps {
}
/** The icon for a Grid tile. This is an instance of Icon component. */
export declare const GridTileIcon: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<GridTileIconProps, React.HTMLProps<HTMLDivElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** The title for a Grid tile */
export interface GridTileTitleProps {
}
/** The title for a Grid tile */
export declare const GridTileTitle: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<GridTileTitleProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** Supporting Text for the Grid Tile */
export interface GridTileTitleSupportTextProps {
}
/** Supporting Text for the Grid Tile */
export declare const GridTileTitleSupportText: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<GridTileTitleSupportTextProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
