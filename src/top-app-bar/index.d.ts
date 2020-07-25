import * as RMWC from '@rmwc/types';
import { h } from 'preact';
import { MDCTopAppBarFoundation } from '@material/top-app-bar';
import { IconButtonProps } from '@rmwc/icon-button';
/*********************************************************************
 * Events
 *********************************************************************/
export declare type TopAppBarOnNavEventT = RMWC.CustomEventT<{}>;
/*********************************************************************
 * TopAppBar
 *********************************************************************/
export interface TopAppBarProps {
    /** Emits when the navigation icon is clicked. */
    onNav?: (evt: TopAppBarOnNavEventT) => void;
    /** Styles the top app bar as a fixed top app bar. */
    fixed?: boolean;
    /** Styles the top app bar as a prominent top app bar. */
    prominent?: boolean;
    /** Styles the top app bar as a short top app bar. */
    short?: boolean;
    /** Styles the top app bar to always be collapsed. */
    shortCollapsed?: boolean;
    /** Styles the top app bar to be dense. */
    dense?: boolean;
    /** Set a scrollTarget other than the window when you are using the TopAppBar inside of a nested scrolling DOM Element. Please note that you should store your scrollTarget in a stateful variable. See example https://codesandbox.io/s/reverent-austin-16zzi.*/
    scrollTarget?: Element | null;
    /** Advanced: A reference to the MDCFoundation. */
    foundationRef?: React.Ref<MDCTopAppBarFoundation | null>;
}
/** A TopAppBar component */
export declare const TopAppBar: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<TopAppBarProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A simplified syntax for creating an AppBar. */
export interface SimpleTopAppBarProps extends TopAppBarProps {
    /** The title for the App Bar. */
    title?: React.ReactNode;
    /** An array of props that will be used to create TopAppBarActionItems. */
    actionItems?: Object[];
    /** Props for the NavigationIcon, which is an instance of the Icon component. You can also set this to `true` and use the `onNav` prop to handle interactions.*/
    navigationIcon?: Object | boolean;
    /** Additional content to place in the start section. */
    startContent?: React.ReactNode;
    /** Additional content to place in the end section. */
    endContent?: React.ReactNode;
}
/** A simplified syntax for creating an AppBar. */
export declare const SimpleTopAppBar: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<SimpleTopAppBarProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/*********************************************************************
 * Bits
 *********************************************************************/
/** A row for the app bar. */
export interface TopAppBarRowProps {
}
/** A row for the app bar. */
export declare const TopAppBarRow: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<TopAppBarRowProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A section for the app bar. */
export interface TopAppBarSectionProps {
    /** Aligns the section to the start. */
    alignStart?: boolean;
    /** Aligns the section to the end. */
    alignEnd?: boolean;
}
/** A section for the app bar. */
export declare const TopAppBarSection: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<TopAppBarSectionProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A navigation icon for the top app bar. This is an instance of the Icon component. */
export interface TopAppBarNavigationIconProps extends IconButtonProps {
}
/** A navigation icon for the top app bar. This is an instance of the IconButton component. */
export declare const TopAppBarNavigationIcon: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<TopAppBarNavigationIconProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** Action items for the top app bar. This is an instance of the Icon component.*/
export interface TopAppBarActionItemProps extends IconButtonProps {
}
/** Action items for the top app bar. This is an instance of the IconButton component.*/
export declare const TopAppBarActionItem: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<TopAppBarActionItemProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A title for the top app bar. */
export interface TopAppBarTitleProps {
}
/** A title for the top app bar. */
export declare const TopAppBarTitle: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<TopAppBarTitleProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** An optional component to fill the space when the TopAppBar is fixed. Place it directly after the TopAppBar. */
export interface TopAppBarFixedAdjustProps {
    /** Class used to style the content below the dense top app bar to prevent the top app bar from covering it. */
    dense?: boolean;
    /** Class used to style the content below the prominent top app bar to prevent the top app bar from covering it. */
    prominent?: boolean;
    /** Class used to style the content below the top app bar when styled as both prominent and dense, to prevent the top app bar from covering it. */
    denseProminent?: boolean;
    /** Class used to style the content below the short top app bar to prevent the top app bar from covering it. */
    short?: boolean;
}
/** An optional component to fill the space when the TopAppBar is fixed. Place it directly after the TopAppBar. */
export declare const TopAppBarFixedAdjust: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<TopAppBarFixedAdjustProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
