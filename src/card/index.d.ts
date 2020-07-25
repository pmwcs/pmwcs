import * as RMWC from '@rmwc/types';
import { h } from 'preact';
import { ButtonProps } from '@rmwc/button';
import { IconButtonProps } from '@rmwc/icon-button';
/** A Card Component */
export interface CardProps {
    /** Removes the shadow and displays a hairline outline instead */
    outlined?: boolean;
}
/** A Card Component */
export declare const Card: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<CardProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** Media area that displays a custom background-image with background-size: cover */
export interface CardMediaProps {
    /** Automatically scales the media area’s height to equal its width */
    square?: boolean;
    /** Automatically scales the media area’s height according to its width, maintaining a 16:9 aspect ratio */
    sixteenByNine?: boolean;
}
/** Media area that displays a custom background-image with background-size: cover */
export declare const CardMedia: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<CardMediaProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** An absolutely-positioned box the same size as the media area, for displaying a title or icon on top of the background-image */
export interface CardMediaContentProps {
}
/** An absolutely-positioned box the same size as the media area, for displaying a title or icon on top of the background-image */
export declare const CardMediaContent: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<CardMediaContentProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** The main clickable area for the primary content of the card */
export interface CardPrimaryActionProps {
}
/** The main clickable area for the primary content of the card */
export declare const CardPrimaryAction: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<CardMediaContentProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** Row containing action buttons and/or icons */
export interface CardActionsProps {
    /** Removes the action area’s padding and causes its only child (an mdc-card__action element) to consume 100% of the action area’s width */
    fullBleed?: boolean;
}
/** Row containing action buttons and/or icons */
export declare const CardActions: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<CardActionsProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A group of action buttons, displayed on the left side of the card (in LTR), adjacent to CardActionIcons */
export interface CardActionButtonsProps {
}
/** A group of action buttons, displayed on the left side of the card (in LTR), adjacent to CardActionIcons */
export declare const CardActionButtons: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<CardActionButtonsProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A group of supplemental action icons, displayed on the right side of the card (in LTR), adjacent to CardActionButtons */
export interface CardActionIconsProps {
}
/** A group of supplemental action icons, displayed on the right side of the card (in LTR), adjacent to CardActionButtons */
export declare const CardActionIcons: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<CardActionIconsProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A card action Icon */
export interface CardActionIconProps extends IconButtonProps {
}
/** A card action Icon */
export declare const CardActionIcon: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<CardActionIconProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** A card action Button */
export interface CardActionButtonProps extends ButtonProps {
}
/** A card action Button */
export declare const CardActionButton: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<CardActionButtonProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
