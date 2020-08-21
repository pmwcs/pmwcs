import { AnyComponent } from 'preact'

/** Ripples */
export type RipplePropT =
  | boolean
  | {
      /** use primary theme */
      primary?: boolean;
      /** use secondary theme - same as `accent` */
      secondary?: boolean;
      /** use secondary theme */
      accent?: boolean;
      /** For internal use */
      surface?: boolean;
      /** unbounded ripple effect */
      unbounded?: boolean;
      /** makes the ripple disabled */
      disabled?: boolean;
      /** Advanced: A reference to the MDCFoundation. */
      foundationRef?: React.Ref<MDCRippleFoundation>;
    };

export const Ripple : AnyComponent<RipplePropT>

export interface WithRippleProps {
  /** Adds a ripple effect to the component */
  ripple?: RipplePropT;
}

/**
 * HOC that adds ripples to any component
 */
export declare const withRipple: ({
  unbounded: defaultUnbounded,
  accent: defaultAccent,
  surface: defaultSurface
}?: WithRippleOpts) => <P extends unknown, C extends ComponentType<P>>(Component: C) => C;
