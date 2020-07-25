import { h } from 'preact';
import { SliderProps } from '.';
export declare const useSliderFoundation: (props: SliderProps & React.HTMLProps<any>) => {
    rootEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    thumbContainerEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    sliderPinEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    setTrackRef: (element: HTMLElement) => HTMLElement;
    setTrackMarkerContainerRef: (element: HTMLElement) => HTMLElement;
};
