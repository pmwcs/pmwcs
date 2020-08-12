import { h } from 'preact';

import { useToggleFoundation } from '@pmwc/toggleable';
import { useFoundation } from '@pmwc/base';
import { MDCRadioFoundation } from '@material/radio';

export const useRadioFoundation = (props) => {
  const { renderToggle, toggleRootProps, id } = useToggleFoundation(props);

  const { foundation, ...elements } = useFoundation({
    props,
    elements: {
      rootEl: true
    },
    foundation: ({ rootEl }) => {
      return new MDCRadioFoundation({
        addClass: (className) => rootEl.addClass(className),
        removeClass: (className) => rootEl.removeClass(className)
      });
    }
  });

  return { foundation, renderToggle, toggleRootProps, id, ...elements };
};
