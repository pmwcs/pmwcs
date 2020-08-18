import { AnyComponent } from 'preact'

/** A Badge component for indicating alerts or counts. */
export interface BadgeProps {
  /** How to align the badge. */
  align?: 'end' | 'start' | 'inline';
  /** A label or count for the badge. */
  label?: AnyComponent | number;
  /** A value to inset the badge alignment by, useful for positioning the badge on different shaped components. */
  inset?: string | number;
  /** Animates the badge out of view. When this class is removed, the badge will return to view. */
  exited?: boolean;
}
