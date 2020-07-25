import * as RMWC from '@rmwc/types';
import { h } from 'preact';
/** A Badge component for indicating alerts or counts. */
export interface BadgeProps {
    /** How to align the badge. */
    align?: 'end' | 'start' | 'inline';
    /** A label or count for the badge. */
    label?: React.ReactNode | number;
    /** A value to inset the badge alignment by, useful for positioning the badge on different shaped components. */
    inset?: string | number;
    /** Animates the badge out of view. When this class is removed, the badge will return to view. */
    exited?: boolean;
}
/** A Badge component for indicating alerts or counts. */
export declare const Badge: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<BadgeProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** An anchor component for badges. */
export interface BadgeAnchorProps {
}
/** An anchor component for badges. */
export declare const BadgeAnchor: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<BadgeAnchorProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
