import { h } from 'preact';
import { SliderProps } from '.';
export declare const useSliderFoundation: (props: SliderProps & React.HTMLProps<any>) => {
    rootEl: import("@pmwc/base").FoundationElement<any, HTMLElement>;
    thumbContainerEl: import("@pmwc/base").FoundationElement<any, HTMLElement>;
    sliderPinEl: import("@pmwc/base").FoundationElement<any, HTMLElement>;
    setTrackRef: (element: HTMLElement) => HTMLElement;
    setTrackMarkerContainerRef: (element: HTMLElement) => HTMLElement;
};
