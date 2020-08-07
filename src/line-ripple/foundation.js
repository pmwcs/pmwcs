import { useEffect } from 'preact/hooks';
import { useFoundation } from '@pmwc/base';
import { MDCLineRippleFoundation } from '@material/line-ripple';
import { EventType, SpecificEventListener } from '@material/base/types';
import { LineRippleProps } from '.';

export const useLineRippleFoundation = (props) => {
  const { foundation, ...elements } = useFoundation({
    props,
    elements: {
      rootEl: true
    },
    foundation: ({ rootEl }) => {
      return new MDCLineRippleFoundation({
        addClass: (className) => rootEl.addClass(className),
        removeClass: (className) => rootEl.removeClass(className),
        hasClass: (className) => rootEl.hasClass(className),
        setStyle: (propertyName, value) =>
          rootEl.setStyle(propertyName, value),
        registerEventHandler: (
          evtType,
          handler
        ) => rootEl.addEventListener(evtType, handler),
        deregisterEventHandler: (
          evtType,
          handler
        ) => rootEl.removeEventListener(evtType, handler)
      });
    }
  });

  const { rootEl } = elements;

  // Active
  useEffect(() => {
    props.active ? foundation.activate() : foundation.deactivate();
  }, [props.active, foundation]);

  // Center
  useEffect(() => {
    typeof props.center === 'number' &&
      foundation.setRippleCenter(props.center);
  }, [props.center, foundation]);

  // Transition end
  rootEl.setProp(
    'onTransitionEnd',
    (evt) => foundation.handleTransitionEnd(evt),
    true
  );

  return { foundation, ...elements };
};
