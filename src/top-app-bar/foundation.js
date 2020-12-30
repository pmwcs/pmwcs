import { useEffect, useRef } from 'preact/hooks'
import { useFoundation } from '@pmwcs/base'

import {
  MDCTopAppBarFoundation,
  MDCFixedTopAppBarFoundation,
  MDCShortTopAppBarFoundation
} from '@material/top-app-bar'

export const useTopAppBarFoundation = (
  props
) => {
  const scrollTargetRef = useRef(null)
  const navIconRef = useRef(null)

  const { foundation, ...elements } = useFoundation({
    props,
    elements: {
      rootEl: true
    },
    foundation: ({ rootEl, emit }) => {
      const adapter = {
        hasClass: (className) => rootEl.hasClass(className),
        addClass: (className) => rootEl.addClass(className),
        removeClass: (className) => rootEl.removeClass(className),
        setStyle: (property, value) =>
          rootEl.setStyle(property, value),

        getTopAppBarHeight: () => rootEl.ref?.clientHeight || 0,
        notifyNavigationIconClicked: () => emit('onNav', {}),
        getViewportScrollY: () => {
          const target = scrollTargetRef.current
          return target
            ? target['pageYOffset' in target ? 'pageYOffset' : 'scrollTop']
            : 0
        },
        getTotalActionItems: () => {
          return rootEl.ref
            ? rootEl.ref.querySelectorAll(
                MDCTopAppBarFoundation.strings.ACTION_ITEM_SELECTOR
              ).length
            : 0
        }
      }

      let foundation
      if (props.short) {
        foundation = new MDCShortTopAppBarFoundation(adapter)
      } else if (props.fixed) {
        foundation = new MDCFixedTopAppBarFoundation(adapter)
      } else {
        foundation = new MDCTopAppBarFoundation(adapter)
      }

      return foundation
    }
  })

  const { rootEl } = elements

  useEffect(() => {
    const target =
      props.scrollTarget || rootEl.ref?.ownerDocument?.defaultView || window
    const handleTargetScroll = foundation.handleTargetScroll.bind(foundation)
    target.addEventListener('scroll', handleTargetScroll)
    scrollTargetRef.current = target

    return () => {
      target.removeEventListener('scroll', handleTargetScroll)
    }
  }, [props.scrollTarget, scrollTargetRef, foundation, rootEl.ref])

  useEffect(() => {
    navIconRef.current =
      rootEl.ref?.querySelector(
        MDCTopAppBarFoundation.strings.NAVIGATION_ICON_SELECTOR
      ) || null

    const handler = foundation.handleNavigationClick.bind(foundation)
    navIconRef.current?.addEventListener('click', handler)

    return () => {
      navIconRef.current?.removeEventListener('click', handler)
    }
  }, [rootEl.ref, foundation])

  // The Top App Bar sets these values in its constructor...
  // Reinit them after mount
  useEffect(() => {
    // @ts-ignore
    foundation.lastScrollPosition_ = foundation.adapter.getViewportScrollY()
    // @ts-ignore
    foundation.topAppBarHeight_ = foundation.adapter.getTopAppBarHeight()
  }, [foundation])

  return { foundation, ...elements }
}
