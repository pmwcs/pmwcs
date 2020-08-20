export interface UseControlledProps<T = unknown> {
  /**
   * This prop contains the component value when it's controlled.
   */
  controlled: T | undefined;
  /**
   * The default value when uncontrolled.
   */
  default: T | undefined;
  /**
   * The component name displayed in warnings.
   */
  name: string;
  /**
   * The name of the state variable displayed in warnings.
   */
  state?: string;
}

export function useControlled<T = unknown>(
  props: UseControlledProps<T>
): [T, (newValue: T) => void];
