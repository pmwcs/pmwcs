import { AnyComponent } from 'preact';

/**
 * A Circular Progress indicator.
 */
export interface CircularProgressProps {
  /** Max value for determinate progress bars. */
  max?: number;
  /** Min value for determinate progress bars. */
  min?: number;
  /** Value for determinate progress bars. */
  progress?: number;
  /** The size of the loader you would like to render. */
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | number;
  /** Choose secondary theme. */
  secondary?: boolean;
  /** Choose standard theme. */
  standard?: boolean;
}

export declare const CircularProgress : AnyComponent<CircularProgressProps>;
