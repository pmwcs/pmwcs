import * as RMWC from '@rmwc/types';
import { h } from 'preact';
import { MDCSliderFoundation } from '@material/slider';
export declare type SliderOnChangeEventT = RMWC.CustomEventT<{
    value: number;
}>;
export declare type SliderOnInputEventT = RMWC.CustomEventT<{
    value: number;
}>;
/** A Slider component. */
export interface SliderProps {
    /** A callback that fires when the Slider stops sliding which takes an event with event.detail.value set to the Slider's value. evt.detail = { value: number;} */
    onChange?: (evt: SliderOnChangeEventT) => void;
    /** A callback that fires continuously while the Slider is sliding that takes an event with event.detail.value set to the Slider's value. evt.detail = { value: number;} */
    onInput?: (evt: SliderOnInputEventT) => void;
    /** The value of the Slider. */
    value?: number | string;
    /** The minimum value of the Slider. */
    min?: number | string;
    /** The maximum value of the Slider. */
    max?: number | string;
    /** A step to quantize values by. */
    step?: number | string;
    /** Displays the exact value of the Slider on the knob. */
    discrete?: boolean;
    /** Displays the individual step markers on the Slider track. */
    displayMarkers?: boolean;
    /** Disables the control. */
    disabled?: boolean;
    /** Advanced: A reference to the MDCFoundation. */
    foundationRef?: React.Ref<MDCSliderFoundation>;
}
export declare type SliderHTMLProps = RMWC.HTMLProps<HTMLDivElement, Omit<React.AllHTMLAttributes<HTMLInputElement>, 'onChange' | 'onInput'>>;
export declare const Slider: RMWC.ComponentType<SliderProps, SliderHTMLProps, 'input'>;
