import { AnyComponent } from 'preact'

type IconOptions = any

type TooltipActivationT = 'hover' | 'click' | 'focus';

type TooltipAlignT =
  | 'left'
  | 'right'
  | 'top'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight';

type TooltipOptions = {
  /** How to align the tooltip. Defaults to `top`. */
  align?: TooltipAlignT;
  /** Activate the tooltip through one or more interactions. Defaults to `['hover', 'focus']`. */
  activateOn?: TooltipActivationT | TooltipActivationT[];
  /** Whether or not to show an arrow on the Tooltip. Defaults to `false`. */
  showArrow?: boolean;
  /** Delay in milliseconds before showing the tooltip when interacting via touch or mouse. */
  enterDelay?: number;
  /** Delay in milliseconds before hiding the tooltip when interacting via touch or mouse. */
  leaveDelay?: number;
};

type TypographyOptions = {
  defaultTag?: string | AnyComponent<any>;
  headline1?: string | AnyComponent<any>;
  headline2?: string | AnyComponent<any>;
  headline3?: string | AnyComponent<any>;
  headline4?: string | AnyComponent<any>;
  headline5?: string | AnyComponent<any>;
  headline6?: string | AnyComponent<any>;
  subtitle1?: string | AnyComponent<any>;
  subtitle2?: string | AnyComponent<any>;
  body1?: string | AnyComponent<any>;
  body2?: string | AnyComponent<any>;
  caption?: string | AnyComponent<any>;
  button?: string | AnyComponent<any>;
  overline?: string | AnyComponent<any>;
};

/** A provider for setting global options in RMWC. */
export interface PMWCProviderProps {
  /** Enable / Disable interaction ripples globally */
  ripple?: boolean;
  /**
   * Global options for icons
   * @see @pmwc/icons IconOptions
   */
  icon?: Partial<IconOptions>;
  /** Global tooltip options */
  tooltip?: Partial<TooltipOptions>;
  /** Global typography options */
  typography?: Partial<TypographyOptions>;
  /** Children to render */
  children?: React.ReactNode;
}

/** A provider for setting global options in RMWC. */
export declare const RMWCProvider : AnyComponent<PMWCProviderProps>
