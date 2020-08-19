import { AnyComponent, Ref } from 'preact';
import { MDCTopAppBarFoundation } from '@material/top-app-bar';
import { IconButtonProps } from '@pmwc/icon-button';

export type TopAppBarOnNavEventT = CustomEvent<{}>;

/**
 * TopAppBar
 */
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
  foundationRef?: Ref<MDCTopAppBarFoundation | null>;
}

/** A TopAppBar component */
export const TopAppBar : AnyComponent<TopAppBarProps>

/** A simplified syntax for creating an AppBar. */
export interface SimpleTopAppBarProps extends TopAppBarProps {
  /** The title for the App Bar. */
  title?: AnyComponent;
  /** An array of props that will be used to create TopAppBarActionItems. */
  actionItems?: Object[];
  /** Props for the NavigationIcon, which is an instance of the Icon component. You can also set this to `true` and use the `onNav` prop to handle interactions.*/
  navigationIcon?: Object | boolean;
  /** Additional content to place in the start section. */
  startContent?: AnyComponent;
  /** Additional content to place in the end section. */
  endContent?: AnyComponent;
}

/** A simplified syntax for creating an AppBar. */
export const SimpleTopAppBar : AnyComponent<SimpleTopAppBarProps>

/*********************************************************************
 * Bits
 *********************************************************************/

/** A row for the app bar. */
export interface TopAppBarRowProps {}

/** A row for the app bar. */
export const TopAppBarRow : AnyComponent<TopAppBarRowProps>

/** A section for the app bar. */
export interface TopAppBarSectionProps {
  /** Aligns the section to the start. */
  alignStart?: boolean;
  /** Aligns the section to the end. */
  alignEnd?: boolean;
}

/** A section for the app bar. */
export const TopAppBarSection : AnyComponent<TopAppBarSectionProps>;

/** A navigation icon for the top app bar. This is an instance of the Icon component. */
export interface TopAppBarNavigationIconProps extends IconButtonProps {}

/** A navigation icon for the top app bar. This is an instance of the IconButton component. */
export const TopAppBarNavigationIcon : AnyComponent<
  TopAppBarNavigationIconProps
>;

/** Action items for the top app bar. This is an instance of the Icon component.*/
export interface TopAppBarActionItemProps extends IconButtonProps {}

/** Action items for the top app bar. This is an instance of the IconButton component.*/
export const TopAppBarActionItem : AnyComponent<TopAppBarActionItemProps>;

/** A title for the top app bar. */
export interface TopAppBarTitleProps {}

/** A title for the top app bar. */
export const TopAppBarTitle : AnyComponent<TopAppBarTitleProps>;

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
export const TopAppBarFixedAdjust : AnyComponent<TopAppBarFixedAdjustProps>;
