import { AnyComponent } from 'preact'
import { WithRippleProps } from '@pmwcs/ripple'
import { IconSizeT } from '@pmwcs/icon'

/** An Avatar component for displaying users in a system. */
export interface AvatarProps extends WithRippleProps {
  /** The url for the image. This gets passed to the Icon component. */
  src?: string;
  /** The size of the avatar */
  size?: IconSizeT;
  /** The name of the user. This will get converted to initials and set the hover title. */
  name?: string;
  /** Make the avatar square. */
  square?: boolean;
  /** Make the avatar interactive. */
  interactive?: boolean;
  /** Contain the avatar image instead of covering. */
  contain?: boolean;
}

export declare const Avatar : AnyComponent<AvatarProps>
