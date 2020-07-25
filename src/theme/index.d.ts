import * as RMWC from '@rmwc/types';
import { h } from 'preact';
/** A Theme Component. */
export interface ThemeProps {
    /** A theme option as a string, a space separated string for multiple values, or an array of valid theme options. */
    use: RMWC.ThemePropT;
    /** Collapse the styles directly onto the child component. This eliminates the need for a wrapping `span` element and may be required for applying things like background-colors.  */
    wrap?: boolean;
}
/** A Theme Component. */
export declare const Theme: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ThemeProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A ThemeProvider. This sets theme colors for its child tree. */
export interface ThemeProviderProps {
    /** Any theme option pointing to a valid CSS value. */
    options: {
        [key: string]: string;
    };
    /** Additional standard inline styles that will be merged into the style tag. */
    style?: Object;
    /** Instead of injecting a div tag, wrap a child component by merging the theme styles directly onto it. Useful when you don't want to mess with layout. */
    wrap?: boolean;
    /** Children to render */
    children?: React.ReactNode;
}
/** A ThemeProvider. This sets theme colors for its child tree. */
export declare const ThemeProvider: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ThemeProviderProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
