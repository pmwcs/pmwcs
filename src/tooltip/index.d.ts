import { AnyComponent } from 'preact';

// export type TooltipActivationT = 'hover' | 'click' | 'focus';
//
// export type TooltipAlignT =
//   | 'left'
//   | 'right'
//   | 'top'
//   | 'bottom'
//   | 'topLeft'
//   | 'topRight'
//   | 'bottomLeft'
//   | 'bottomRight';

/** A Tooltip component for displaying informative popover information. */
export interface TooltipProps {
  /** The overlay content for the tooltip. */
  content: string;
  /** The children that the tooltip belongs to. Must be a single React.child. */
  children: AnyComponent;
  // /** Activate the tooltip through one or more interactions. Defaults to `['hover', 'focus']`. */
  // activateOn?: TooltipActivationT | TooltipActivationT[];
  // /** Whether or not to show an arrow on the Tooltip. Defaults to `false`. */
  // showArrow?: boolean;
  /** Custom className to add to the tooltip overlay container. */
  className?: string;
  // /** Delay in milliseconds before showing the tooltip when interacting via touch or mouse. */
  // enterDelay?: number;
  // /** Delay in milliseconds before hiding the tooltip when interacting via touch or mouse. */
  // leaveDelay?: number;
  // /** How to align the tooltip. Defaults to `top`. */
  // align?: TooltipAlignT;
  // /** Manually control the open state */
  // open?: boolean;
}

/** A Tooltip component for displaying informative popover information. */
export const Tooltip : AnyComponent<TooltipProps>
