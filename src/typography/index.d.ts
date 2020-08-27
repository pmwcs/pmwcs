import { AnyComponent } from 'preact'
import { HTMLProps } from '@pmwcs/base'

export type TypographyT =
  | 'headline1'
  | 'headline2'
  | 'headline3'
  | 'headline4'
  | 'headline5'
  | 'headline6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button'
  | 'overline';

/** The Typography Component */
export interface TypographyProps {
  /** The typography style.*/
  use: TypographyT;
}

export type TypographyHTMLProps = HTMLProps;

/** The Typography Component */
export const Typography : AnyComponent<TypographyProps, TypographyHTMLProps>;
