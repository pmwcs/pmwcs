import { AnyComponent } from 'preact'

export type Severity = 'success' | 'info' | 'warning' | 'error';

export interface AlertProps {
  /** Makes the alert outlined. */
  outlined?: boolean;
  /** Makes the alert filled. */
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
