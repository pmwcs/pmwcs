import { h } from 'preact'
import { useRef, useContext, useEffect, useMemo } from 'preact/hooks';

import { useFoundation, useId, emptyClientRect } from '@pmwc/base';
import { MDCTabFoundation } from '@material/tab';
import { TabBarContext } from './tab-bar-context';

export const useTabFoundation = (props) => {
  const tabIndicatorApi = useRef();
  const setTabIndicatorApi = (api) =>
    (tabIndicatorApi.current = api);

  const contextApi = useContext(TabBarContext);
  const id = useId('tab', props);

  const { foundation, ...elements } = useFoundation({
    props,
    elements: { rootEl: true, contentEl: true },
    foundation: ({ rootEl, contentEl, emit, getProps }) => {
      return new MDCTabFoundation(
        /** @type {!MDCTabAdapter} */ {
          setAttr: (attr, value) =>
            rootEl.setProp(attr, value),
          addClass: (className) => rootEl.addClass(className),
          removeClass: (className) => rootEl.removeClass(className),
          hasClass: (className) => rootEl.hasClass(className),
          activateIndicator: (previousIndicatorClientRect) =>
            tabIndicatorApi.current?.activate(previousIndicatorClientRect),
          deactivateIndicator: () => tabIndicatorApi.current?.deactivate(),
          notifyInteracted: () => {
            const evt = emit('onInteraction', { tabId: id }, true /* bubble */);

            contextApi.onTabInteraction(evt);
          },
          getOffsetLeft: () => rootEl.ref?.offsetLeft || 0,
          getOffsetWidth: () => rootEl.ref?.offsetWidth || 0,
          getContentOffsetLeft: () => contentEl.ref?.offsetLeft || 0,
          getContentOffsetWidth: () => contentEl.ref?.offsetWidth || 0,
          focus: () => rootEl.ref && rootEl.ref.focus && rootEl.ref.focus()
        }
      );
    }
  });

  const { rootEl } = elements;

  const handleClick = (evt) => {
    props.onClick?.(evt);
    foundation.handleClick();
  };

  rootEl.setProp('onClick', handleClick, true);

  const tabApi = useMemo(() => {
    return {
      getActive: () => foundation.isActive(),
      activate: (computeIndicatorClientRect) =>
        foundation.activate(computeIndicatorClientRect),
      deactivate: () => foundation.deactivate(),
      computeIndicatorClientRect: () =>
        tabIndicatorApi.current?.computeContentClientRect() || emptyClientRect,
      computeDimensions: () => foundation.computeDimensions(),
      focus: () => rootEl.ref && rootEl.ref.focus(),
      id,
      getIndex: () =>
        rootEl.ref?.parentElement
          ? Array.from(rootEl.ref.parentElement.children).indexOf(rootEl.ref)
          : -1
    };
  }, [foundation, rootEl.ref, id]);

  useEffect(() => {
    contextApi.registerTab(tabApi);

    return () => {
      contextApi.unregisterTab(tabApi);
    };
  }, [contextApi, tabApi]);

  return {
    ...elements,
    setTabIndicatorApi
  };
};
