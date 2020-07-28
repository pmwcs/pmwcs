import {h} from 'preact';
import React from 'preact/compat'
import { MDCRadioFoundation } from '@material/radio';
import { Tag, useClassNames, mergeRefs, createComponent } from '@pmwc/base';
import { withRipple } from '@pmwc/ripple';
import { useRadioFoundation } from './foundation';

/*********************************************************************
 * Radio
 *********************************************************************/

/** A Radio button component. */
export const Radio = createComponent(function Radio(props, ref) {
  const { renderToggle, id, toggleRootProps, rootEl } = useRadioFoundation(
    props
  );

  const {
    children,
    className,
    label,
    style,
    inputRef,
    foundationRef,
    ...rest
  } = props;

  const radio = (
    <RadioRoot
      {...rootEl.props(toggleRootProps)}
      ref={mergeRefs(rootEl.setRef, ref)}
    >
      <input
        {...rest}
        className="mdc-radio__native-control"
        type="radio"
        id={id}
        ref={inputRef}
      />
      <RadioBackground />
      <RadioRipple />
    </RadioRoot>
  );

  return renderToggle(radio);
});

/*********************************************************************
 * Bits
 *********************************************************************/

const RadioRipple = React.memo(function RadioRipple() {
  return <div className="mdc-radio__ripple" />;
});

const RadioRoot = withRipple({
  surface: false,
  unbounded: true
})(
  React.forwardRef(function RadioRoot(
    props,
    ref
  ) {
    const { disabled, ...rest } = props;
    const className = useClassNames(props, [
      'mdc-radio',
      {
        'mdc-radio--disabled': disabled
      }
    ]);
    return <Tag {...rest} className={className} ref={ref} />;
  })
);

const RadioBackground = React.memo(function RadioBackground() {
  return (
    <div className="mdc-radio__background">
      <div className="mdc-radio__outer-circle" />
      <div className="mdc-radio__inner-circle" />
    </div>
  );
});
