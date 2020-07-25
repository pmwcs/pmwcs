import * as RMWC from '@rmwc/types';
import { h } from 'preact';
/** A floating action button component */
export interface FabProps extends RMWC.WithRippleProps {
    /** Make the Fab smaller. */
    mini?: boolean;
    /** The icon for the FAB */
    icon?: RMWC.IconPropT;
    /** A trialing icon for the FAB */
    trailingIcon?: RMWC.IconPropT;
    /** Make the Fab extended with a label. */
    label?: React.ReactNode & any;
    /** Content specified as children. */
    children?: React.ReactNode;
    /** Animates the FAB out of view. When this class is removed, the FAB will return to view. */
    exited?: boolean;
}
/** A floating action button component */
export declare const Fab: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<FabProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
