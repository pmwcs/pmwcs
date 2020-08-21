import { AnyComponent } from 'preact'
import { WithRippleProps } from '@pmwc/ripple'

export interface PaginationItemProps extends WithRippleProps {
    /**
     * Additional className
     */
    className?: string;
    /**
     * Disabled component if `true`
     * @default false
     */
    disabled?: boolean;
    /**
     * page number on click
     */
    page?: number;
    /**
     * item is selected
     * @default false
     */
    selected?: boolean;
    /**
     * item has rounded corners. If `false` then item is displayed with circle.
     */
    rounded?: boolean;
    /**
     * different sizes of component
     * @default 'medium'
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * type of item
     */
    type: 'page'
      | 'start-ellipsis'
      | 'end-ellipsis'
      | 'previous'
      | 'next'
      | 'first'
      | 'last'
}

export declare const PaginationItem : AnyComponent<PaginationItemProps>;
