import { AnyComponent, Ref } from 'preact'
import { MDCLinearProgressFoundation } from '@material/linear-progress';

/** A component to display linear progress. */
export interface LinearProgressProps {
  /** Progress float percentage between 0 and 1. */
  progress?: number;
  /** A Progress buffer float percentage between 0 and 1. */
  buffer?: number;
  /** Progress goes from right to left. */
  reversed?: boolean;
  /** Hides the progress bar. Adding / removing this prop will trigger an animation in or out.  */
  closed?: boolean;
  /** Choose secondary theme. */
  secondary?: boolean;
  /** Advanced: A reference to the MDCFoundation. */
  foundationRef?: Ref<MDCLinearProgressFoundation>;
}

export const LinearProgress : AnyComponent<LinearProgressProps>;
