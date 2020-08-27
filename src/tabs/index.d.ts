import { AnyComponent, Ref } from 'preact'

import { MDCTabFoundation } from '@material/tab';
import { MDCTabBarFoundation } from '@material/tab-bar';
import { IconPropT } from '@pmwcs/icon';
import { HTMLProps } from '@pmwcs/base';

export type TabOnInteractionEventT = CustomEvent<{ tabId: string }>;

/** A Tab component */
export interface TabProps {
  /** A label for the tab. */
  label?: any;
  /** The label for the tab, passed as children. */
  children?: React.ReactNode;
  /** The icon to use for the tab. */
  icon?: IconPropT;
  /** Optionally use a custom icon for the active indicator, instead of the underline. */
  iconIndicator?: IconPropT;
  /** Stacks the icon on top of the text label */
  stacked?: boolean;
  /** Restricts the indicator to the content */
  restrictIndicator?: boolean;
  /** Indicates that the tab should shrink in size to be as narrow as possible without causing text to wrap. */
  minWidth?: boolean;
  /** Fires when a tab has been interacted with. This is captures both keyboard and click events. evt.detail = { tabId: string } */
  onInteraction?: (evt: TabOnInteractionEventT) => void;
  /** Advanced: A reference to the MDCFoundation. */
  foundationRef?: React.Ref<MDCTabFoundation | null>;
}

export type TabApi = {
  getActive: () => boolean;
  activate: (computeIndicatorClientRect: ClientRect) => void;
  deactivate: () => void;
  computeIndicatorClientRect: () => ClientRect;
  computeDimensions: MDCTabFoundation['computeDimensions'];
  focus: () => void;
  id: string;
  getIndex: () => number;
};

/** A Tab component */
export const Tab : AnyComponent<TabProps>

export type TabBarOnActivateEventT = CustomEvent<{index: number;}>;

/** The TabBar component */
export interface TabBarProps {
  /** Callback when the active tab changes. Receives event as an argument with event.target.value set to the activeTabIndex. evt.detail = { index: number; } */
  onActivate?: (evt: TabBarOnActivateEventT) => void;
  /** The index of the active tab. */
  activeTabIndex?: number;
  /** Specifies whether the indicator should slide or fade. Defaults to slide. */
  indicatorTransition?: 'slide' | 'fade';
  /** Advanced: A reference to the MDCFoundation. */
  foundationRef?: Ref<MDCTabBarFoundation | null>;
}

export const TabBar : AnyComponent<TabBarProps>

export interface TabIndicatorProps {
  /** Use an icon instead of an underline for the tab */
  icon?: IconPropT;
  /** The transition to use */
  transition?: 'slide' | 'fade';
}

export type TabIndicatorApi = {
  activate: (previousIndicatorClientRect?: ClientRect) => void;
  deactivate: () => void;
  computeContentClientRect: () => ClientRect;
};

export function TabIndicator(
  props: TabIndicatorProps &
    HTMLProps & { apiRef?: (api: TabIndicatorApi | null) => void }
) : AnyComponent

export interface TabScrollerProps {
  apiRef: (api: TabScrollerApi) => void;
}

export type TabScrollerApi = {
  scrollTo: (scrollX: number) => void;
  incrementScroll: (scrollXIncrement: number) => void;
  getScrollPosition: () => number;
  getScrollContentWidth: () => number;
};

export function TabScroller(props: TabScrollerProps & HTMLProps) : AnyComponent
