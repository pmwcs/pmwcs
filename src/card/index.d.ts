import { AnyComponent } from 'preact'
import { ButtonProps } from '@pmwc/button'

/**
  * A Card Component
  */
export interface CardProps {
   /** Removes the shadow and displays a hairline outline instead */
   outlined?: boolean;
 }

/**
  * A Card Component
  */
export declare const Card: AnyComponent<CardProps>

/**
 * Media area that displays a custom background-image with background-size: cover
 */
export interface CardMediaProps {
  /** Automatically scales the media area’s height to equal its width */
  square?: boolean;
  /** Automatically scales the media area’s height according to its width, maintaining a 16:9 aspect ratio */
  sixteenByNine?: boolean;
}

/**
 * Media area that displays a custom background-image with background-size: cover
 */
export declare const CardMedia: AnyComponent<CardMediaProps>

/**
 * An absolutely-positioned box the same size as the media area, for displaying a title or icon on top of the background-image
 */
export interface CardMediaContentProps {}

/**
 * An absolutely-positioned box the same size as the media area, for displaying a title or icon on top of the background-image
 */
export declare const CardMediaContent: AnyComponent<CardMediaContentProps>

/**
 * The main clickable area for the primary content of the card
 */
export interface CardPrimaryActionProps {}

/**
 * The main clickable area for the primary content of the card
 */
export declare const CardPrimaryAction: AnyComponent<CardPrimaryActionProps>

/**
 * Row containing action buttons and/or icons
 */
export interface CardActionsProps {
  /** Removes the action area’s padding and causes its only child (an mdc-card__action element) to consume 100% of the action area’s width */
  fullBleed?: boolean;
}

/**
 * Row containing action buttons and/or icons
 */
export declare const CardActions: AnyComponent<CardActionsProps>

/**
 * A group of action buttons, displayed on the left side of the card (in LTR), adjacent to CardActionIcons
 */
export interface CardActionButtonsProps {}

/**
 * A group of action buttons, displayed on the left side of the card (in LTR), adjacent to CardActionIcons
 */
export declare const CardActionButtons: AnyComponent<CardActionButtonsProps>

/**
 * A group of supplemental action icons, displayed on the right side of the card (in LTR), adjacent to CardActionButtons
 */
export interface CardActionIconsProps {}

/**
 * A group of supplemental action icons, displayed on the right side of the card (in LTR), adjacent to CardActionButtons
 */
export declare const CardActionIcons: AnyComponent<CardActionIconsProps>

/**
 * A card action Button
 */
export interface CardActionButtonProps extends ButtonProps {}

/**
 * A card action Button
 */
export declare const CardActionButton: AnyComponent<CardActionButtonProps>
