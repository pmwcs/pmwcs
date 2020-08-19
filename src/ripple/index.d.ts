import { AnyComponent } from 'preact'

/** Ripples */
export type RipplePropT =
  | boolean
  | {
      accent?: boolean;
      surface?: boolean;
      unbounded?: boolean;
    };

export const Ripple : AnyComponent<RipplePropT>

export interface WithRippleProps {
  /** Adds a ripple effect to the component */
  ripple?: RipplePropT;
}
