import { h, Fragment } from 'preact'
import { memo } from 'preact/compat'

import { useLinearProgressFoundation } from './foundation';
import { Tag, useClassNames, createComponent } from '@pmwc/base';

/** A component to display linear progress. */
export const LinearProgress = createComponent(
  function LinearProgress(props, ref) {
    const {
      reversed,
      closed,
      progress,
      buffer,
      foundationRef,
      ...rest
    } = props;
    const className = useClassNames(props, [
      'mdc-linear-progress',
      {
        'mdc-linear-progress--reversed': reversed,
        'mdc-linear-progress--closed': closed
      }
    ]);
    const { rootEl } = useLinearProgressFoundation(props);
console.log(rootEl)
    return (
      <Tag
        aria-label="Progress Bar"
        {...rest}
        aria-valuemin={0}
        aria-valuemax={1}
        aria-valuenow={progress}
        tag="nav"
        role="progressbar"
        element={rootEl}
        className={className}
        ref={ref}
      >
        <LinearProgressBody />
      </Tag>
    );
  }
);

const LinearProgressBody = memo(function LinearProgressBody() {
  return (
    <Fragment>
      <div class="mdc-linear-progress__buffer">
        <div class="mdc-linear-progress__buffer-bar"></div>
        <div class="mdc-linear-progress__buffer-dots"></div>
      </div>
      <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
        <span class="mdc-linear-progress__bar-inner"></span>
      </div>
      <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
        <span class="mdc-linear-progress__bar-inner"></span>
      </div>
    </Fragment>
  );
});
