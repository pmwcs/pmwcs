import { h } from 'preact'
import { memo, forwardRef } from 'preact/compat'

import { useClassNames, Tag, createComponent } from '@pmwc/base';
import { useSliderFoundation } from './foundation';

const SliderTrack = memo(
  forwardRef(function SliderTrack(props, ref) {
    return <div ref={ref} className="mdc-slider__track" />;
  })
);

const SliderTrackMarkerContainer = memo(
  forwardRef(function SliderTrackMarkerContainer(
    props,
    ref
  ) {
    return <div ref={ref} className="mdc-slider__track-marker-container"></div>;
  })
);

const SliderPin = memo(function SliderPin({ value }) {
  return (
    <div className="mdc-slider__pin">
      <span className="mdc-slider__pin-value-marker">{value}</span>
    </div>
  );
});

const SliderThumb = memo(function SliderThumb() {
  return (
    <svg className="mdc-slider__thumb" width="21" height="21">
      <circle cx="10.5" cy="10.5" r="7.875" />
    </svg>
  );
});

const SliderFocusRing = memo(function SliderFocusRing() {
  return <div className="mdc-slider__focus-ring" />;
});

export const Slider = createComponent(function Slider(props, ref) {
  const {
    rootEl,
    thumbContainerEl,
    sliderPinEl,
    setTrackRef,
    setTrackMarkerContainerRef
  } = useSliderFoundation(props);

  const {
    value,
    min,
    max,
    discrete,
    displayMarkers,
    step,
    disabled,
    onChange,
    onInput,
    children,
    foundationRef,
    ...rest
  } = props;

  const className = useClassNames(props, [
    'mdc-slider',
    {
      'mdc-slider--discrete': discrete,
      'mdc-slider--display-markers': displayMarkers && discrete
    }
  ]);

  const dataStep = step ? { 'data-step': step } : {};

  if (displayMarkers && !discrete) {
    console.warn(
      `The 'displayMarkers' prop on rmwc Slider will
        only work in conjunction with the 'discrete' prop`
    );
  }

  return (
    <Tag
      tabIndex={0}
      //eslint-disable-next-line jsx-a11y/role-has-required-aria-props
      role="slider"
      aria-valuemax={max}
      aria-valuenow={value}
      aria-label="Select Value"
      {...(disabled ? { 'aria-disabled': disabled } : {})}
      {...dataStep}
      {...rest}
      ref={ref}
      element={rootEl}
      className={className}
    >
      <div className="mdc-slider__track-container">
        <SliderTrack ref={setTrackRef} />
        {displayMarkers && (
          <SliderTrackMarkerContainer ref={setTrackMarkerContainerRef} />
        )}
      </div>
      <Tag element={thumbContainerEl} className="mdc-slider__thumb-container">
        {discrete && <SliderPin value={sliderPinEl.getProp('value')} />}
        <SliderThumb />
        <SliderFocusRing />
      </Tag>
      {children}
    </Tag>
  );
});
