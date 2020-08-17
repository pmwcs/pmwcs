import { Ref } from 'preact'
import { MDCSliderFoundation } from '@material/slider'

/** A Slider component. */
export interface SliderProps {
  /** A callback that fires when the Slider stops sliding which takes an event with event.detail.value set to the Slider's value. evt.detail = { value: number;} */
  onChange?: (evt: Event) => void;
  /** A callback that fires continuously while the Slider is sliding that takes an event with event.detail.value set to the Slider's value. evt.detail = { value: number;} */
  onInput?: (evt: Event) => void;
  /** The value of the Slider. default=0 */
  value?: number | string;
  /** The minimum value of the Slider. default=0 */
  min?: number | string;
  /** The maximum value of the Slider. default=100 */
  max?: number | string;
  /** A step to quantize values by. */
  step?: number | string;
  /** Displays the exact value of the Slider on the knob. */
  discrete?: boolean;
  /** Displays the individual step markers on the Slider track. */
  displayMarkers?: boolean;
  /** Disables the control. */
  disabled?: boolean;
  /** use primary color - default is secondary. */
  primary?: boolean;
  /** Advanced: A reference to the MDCFoundation. */
  foundationRef?: Ref<MDCSliderFoundation>;
}
