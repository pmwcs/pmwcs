import { h } from 'preact'
import { useCallback, useRef, useEffect } from 'preact/hooks';

import { MDCMenuFoundation } from '@material/menu';
import { useFoundation, closest } from '@rmwc/base';
import { ListApi } from '@rmwc/list';
import { MenuSurfaceOnOpenEventT, MenuSurfaceApi } from '../menu-surface';
import { MenuProps } from './';

export const useMenuFoundation = (props) => {
  const menuSurfaceApi = useRef();
  const listApi = useRef();

  const setListApi = (api) => {
    listApi.current = api;
  };

  const setMenuSurfaceApi = (api) => {
    menuSurfaceApi.current = api;
  };

  const items = useCallback(() => {
    return listApi.current?.listElements() || [];
  }, []);

  const { foundation, ...elements } = useFoundation({
    props: {
      ...props,
      // we don't want to pass the apiRef all the way through
      apiRef: undefined
    },
    elements: {
      rootEl: true
    },
    foundation: ({ emit }) => {
      return new MDCMenuFoundation({
        addClassToElementAtIndex: (...args) =>
          listApi.current?.addClassToElementIndex(...args),
        removeClassFromElementAtIndex: (...args) =>
          listApi.current?.removeClassFromElementAtIndex(...args),
        addAttributeToElementAtIndex: (...args) =>
          listApi.current?.setAttributeForElementIndex(...args),
        removeAttributeFromElementAtIndex: (index, attr) => {
          const list = items();
          list[index].removeAttribute(attr);
        },
        elementContainsClass: (element, className) =>
          element.classList.contains(className),
        closeSurface: () => {
          menuSurfaceApi.current?.setOpen(false);
        },
        getElementIndex: (element) =>
          items().indexOf(element),

        notifySelected: (evtData) =>
          emit('onSelect', {
            index: evtData.index,
            item: items()[evtData.index]
          }),
        getMenuItemCount: () => listApi.current?.getListItemCount() || 0,
        focusItemAtIndex: (...args) =>
          listApi.current?.focusItemAtIndex(...args),
        focusListRoot: () => listApi.current?.focusRoot()
      });
    }
  });

  const { rootEl } = elements;

  const handleClick = useCallback(
    (evt) => {
      props.onClick?.(evt);
      // fixes an issue with nested span element on list items
      const el = closest(evt.target, '.mdc-list-item');
      el && foundation.handleItemAction(el);
    },
    [foundation, props.onClick]
  );

  const handleKeydown = useCallback(
    (evt) => {
      props.onKeyDown?.(evt);
      foundation.handleKeydown(evt);

      // Jump through some hoops to find out
      // that we are selecting the list item
      // This is instead of trying to listen to an event on the list item
      // which is what MDC does
      if (
        evt.which === 13 &&
        evt.target instanceof Element &&
        listApi.current &&
        evt.target.classList.contains(listApi.current.getClasses())
      ) {
        foundation.handleItemAction(evt.target);
      }
    },
    [foundation, props.onKeyDown]
  );

  const handleOpen = useCallback(
    (evt) => {
      const list = items();

      if (
        (props.focusOnOpen || props.focusOnOpen === undefined) &&
        list.length > 0 &&
        !list.some((el) => el === document.activeElement)
      ) {
        list[0].focus();
      }
      props.onOpen?.(evt);
    },
    [props.onOpen, props.focusOnOpen, items]
  );

  rootEl.setProp('onKeyDown', handleKeydown, true);
  rootEl.setProp('onClick', handleClick, true);
  rootEl.setProp('onOpen', handleOpen, true);

  const canSetApi = listApi.current && menuSurfaceApi.current && props.apiRef;
  useEffect(() => {
    if (listApi.current && menuSurfaceApi.current && props.apiRef) {
      props.apiRef({ ...listApi.current, ...menuSurfaceApi.current, items });
    }
    // eslint-disable-next-line
  }, [canSetApi, items]);

  return { setListApi, setMenuSurfaceApi, ...elements };
};
