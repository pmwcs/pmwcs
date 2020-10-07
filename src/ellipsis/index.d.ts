import { AnyComponent } from 'preact'

/**
 * Ellipsis Component props
 */
export interface EllipsisProps {
  /** additional style */
  style?: object
  /** additional classnames */
  className?: string
  /** children */
  children?: AnyComponent;
}

/**
 * Ellipsis Component
 */
export declare const Ellipsis : AnyComponent<EllipsisProps>
