import { AnyComponent } from 'preact'
import { WithRippleProps } from '@pmwcs/ripple'
import { IconPropT } from '@pmwcs/icon'

/** A floating action button component */
export interface FabProps extends WithRippleProps {
  /** Make the Fab smaller. */
  mini?: boolean;
  /** The icon for the FAB */
  icon?: IconPropT;
  /** A trialing icon for the FAB */
  trailingIcon?: IconPropT;
  /** Make the Fab extended with a label. */
  label?: React.ReactNode & any;
  /** Content specified as children. */
  children?: AnyComponent;
  /** Animates the FAB out of view. When this class is removed, the FAB will return to view. */
  exited?: boolean;
}

export declare const Fab : AnyComponent<FabProps>; 
