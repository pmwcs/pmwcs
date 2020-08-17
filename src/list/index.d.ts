import { Ref, AnyComponent } from 'preact'
import { WithRippleProps } from '@pmwc/ripple'
import { IconProps, IconPropT } from '@pmwc/icon'
import { MDCListFoundation } from '@material/list'

export interface ListApi {
  listElements: () => HTMLLIElement[];
  focusRoot: () => void;
  getClasses: () => string;
  addClassToElementIndex: (index: number, className: string) => void;
  removeClassFromElementAtIndex: (index: number, className: string) => void;
  setAttributeForElementIndex: (
    index: number,
    attr: string,
    value: any
  ) => void;
  getListItemCount: () => number;
  focusItemAtIndex: (index: number) => void;
}

/** A List Component */
export interface ListProps {
  /** Reduces the padding on List items. */
  dense?: boolean;
  /** Gives more space for dual lined list items. */
  twoLine?: boolean;
  /** Makes the list start detail circular for avatars. */
  avatarList?: boolean;
  /** Makes the list non interactive. In addition, you'll have to set `ripple={false}` on the individual ListItems. */
  nonInteractive?: boolean;
  /** A callback for when a list item is interacted with. evt.detail = number */
  onAction?: (evt: Event) => void;
  /** An internal api used for cross component communication */
  apiRef?: (api: ListApi | null) => void;
  /** Advanced: A reference to the MDCFoundation. */
  foundationRef?: Ref<MDCListFoundation | null>;
  /** Sets the list to allow the up arrow on the first element to focus the
   * last element of the list and vice versa. Defaults to true */
  wrapFocus?: boolean;
  /** Sets the lists vertical orientation. Defaults to true */
  vertical?: boolean;
}

/** A ListItem component. */
export interface ListItemProps extends WithRippleProps {
  /** A modifier for a selected state. */
  selected?: boolean;
  /** A modifier for an active state. */
  activated?: boolean;
  /** A modifier for a disabled state. */
  disabled?: boolean;
  /** Use secondary theme - shortcut for `theme='secondary'` */
  secondary?: boolean;
}

/** Text Wrapper for the ListItem */
export interface ListItemTextProps {}

/** Primary Text for the ListItem */
export interface ListItemPrimaryTextProps {}

/** Secondary text for the ListItem */
export interface ListItemSecondaryTextProps {}

/** A graphic / icon for the ListItem */
export interface ListItemGraphicProps extends IconProps {
  /** Use secondary theme - shortcut for `theme='secondary'` */
  secondary?: boolean;
}

/** Meta content for the ListItem. This can either by an icon by setting the `icon` prop, or any other kind of content. */
export interface ListItemMetaProps extends IconProps {}

/** A container to group ListItems */
export interface ListGroupProps {}

/** A subheader for the ListGroup */
export interface ListGroupSubheaderProps {}

/** A divider for the List */
export interface ListDividerProps {}

/** A simple list item template. */
export interface SimpleListItemProps extends ListItemProps {
  /** Text for the ListItem. */
  text?: AnyComponent;
  /** Secondary Text for the ListItem. */
  secondaryText?: AnyComponent;
  /** A graphic icon for the ListItem. */
  graphic?: IconPropT;
  /** A meta icon for the ListItem */
  metaIcon?: IconPropT;
  /** Meta content for the ListItem instead of an icon. */
  meta?: AnyComponent;
  /** Children to render */
  children?: AnyComponent;
  /** Use secondary theme */
  secondary?: boolean;
}

/** A collapsible list component. */
export interface CollapsibleListProps {
  /** The handle that opens and closes the collapsible section. Usually a ListItem. */
  handle: AnyComponent<any>;
  /** Show the collapsible list as open. */
  open?: boolean;
  /** Starts the collapsible list as open. */
  defaultOpen?: boolean;
  /** Callback for when the collapsible list opens. */
  onOpen?: () => void;
  /** Callback for when the collapsible list closes. */
  onClose?: () => void;
}
