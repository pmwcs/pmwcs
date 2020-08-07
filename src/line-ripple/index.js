import { h } from 'preact'

import { useLineRippleFoundation } from './foundation';
import { createComponent, Tag } from '@pmwc/base';

export const LineRipple = createComponent(function LineRipple(
  props,
  ref
) {
  const { active, center, ...rest } = props;
  const { rootEl } = useLineRippleFoundation(props);

  return (
    <Tag
      {...rest}
      tag="span"
      element={rootEl}
      className="mdc-line-ripple"
      ref={ref}
    />
  );
});
