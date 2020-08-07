import { useFoundation } from '@pmwc/base';

import {
  MDCFloatingLabelFoundation,
} from '@material/floating-label';
import { useEffect } from 'preact/hooks';

export const useFloatingLabelFoundation = (props) => {
  const { foundation, ...elements } = useFoundation({
    props,
    elements: {
      rootEl: true
    },
    api: ({
      foundation
    }) => {
      return {
        getWidth() {
          return foundation.getWidth();
        }
      };
    },
    foundation: ({ rootEl }) => {
      return new MDCFloatingLabelFoundation({
        addClass: (className) => rootEl.addClass(className),
        removeClass: (className) => rootEl.removeClass(className),
        getWidth: () => rootEl.ref?.scrollWidth || 0,
        registerInteractionHandler: (
          evtType,
          handler
        ) => rootEl.addEventListener(evtType, handler),
        deregisterInteractionHandler: (
          evtType,
          handler
        ) => rootEl.removeEventListener(evtType, handler)
      });
    }
  });

  // Shake
  useEffect(() => {
    foundation.shake(!!props.shake);
  }, [props.shake, foundation]);

  // Float
  useEffect(() => {
    foundation.float(!!props.float);
  }, [props.float, foundation]);

  return { foundation, ...elements };
};
