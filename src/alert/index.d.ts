import { AnyComponent } from 'preact'

export type Severity = 'success' | 'info' | 'warn' | 'error';

export interface AlertProps {
  /** Make the alert outlined. */
  outlined?: boolean;
  /** Make the alert outlined. */
  filled?: boolean;
  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action?: AnyComponent;
  /**
   * The severity of the alert. This defines the color and icon used.
   */
  severity?: Severity;
  /**
   * The main color for the alert. Unless provided, the value is taken from the `severity` prop.
   */
  color?: Color;
  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   */
  icon?: AnyComponent | false;
  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   */
  onClose?: (event: Event) => void;
}
