import * as RMWC from '@rmwc/types';
import { h } from 'preact';
import { IconProps } from '@rmwc/icon';
/** A ListItem component. */
export interface ListItemProps extends RMWC.WithRippleProps {
    /** A modifier for a selected state. */
    selected?: boolean;
    /** A modifier for an active state. */
    activated?: boolean;
    /** A modifier for a disabled state. */
    disabled?: boolean;
}
/** A ListItem component. */
export declare const ListItem: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ListItemProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** Text Wrapper for the ListItem */
export interface ListItemTextProps {
}
/** Text Wrapper for the ListItem */
export declare const ListItemText: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ListItemTextProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** Primary Text for the ListItem */
export interface ListItemPrimaryTextProps {
}
/** Primary Text for the ListItem */
export declare const ListItemPrimaryText: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ListItemPrimaryTextProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** Secondary text for the ListItem */
export interface ListItemSecondaryTextProps {
}
/** Secondary text for the ListItem */
export declare const ListItemSecondaryText: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ListItemSecondaryTextProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A graphic / icon for the ListItem */
export interface ListItemGraphicProps extends IconProps {
}
/** A graphic / icon for the ListItem */
export declare const ListItemGraphic: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ListItemGraphicProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** Meta content for the ListItem. This can either by an icon by setting the `icon` prop, or any other kind of content. */
export interface ListItemMetaProps extends IconProps {
}
/** Meta content for the ListItem. This can either by an icon by setting the `icon` prop, or any other kind of content. */
export declare const ListItemMeta: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ListItemMetaProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A container to group ListItems */
export interface ListGroupProps {
}
/** A container to group ListItems */
export declare const ListGroup: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ListGroupProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A subheader for the ListGroup */
export interface ListGroupSubheaderProps {
}
/** A subheader for the ListGroup */
export declare const ListGroupSubheader: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ListGroupSubheaderProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A divider for the List */
export interface ListDividerProps {
}
/** A divider for the List */
export declare const ListDivider: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ListDividerProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A simple list item template. */
export interface SimpleListItemProps extends ListItemProps {
    /** Text for the ListItem. */
    text?: React.ReactNode;
    /** Secondary Text for the ListItem. */
    secondaryText?: React.ReactNode;
    /** A graphic icon for the ListItem. */
    graphic?: RMWC.IconPropT;
    /** A meta icon for the ListItem */
    metaIcon?: RMWC.IconPropT;
    /** Meta content for the ListItem instead of an icon. */
    meta?: React.ReactNode;
    /** Children to render */
    children?: React.ReactNode;
}
/** A simple list item template. */
export declare const SimpleListItem: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<SimpleListItemProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
