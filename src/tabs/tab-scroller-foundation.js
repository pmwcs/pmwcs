import { useFoundation, emptyClientRect, matches } from '@pmwc/base'

import {
  MDCTabScrollerFoundation,
  util as scrollerUtil
} from '@material/tab-scroller'

export const useTabScrollerFoundation = (
  props
) => {
  const { foundation, ...elements } = useFoundation({
    props,
    api: ({ foundation, contentEl }) => {
      const f = foundation
      return {
        scrollTo: (scrollX) => f.scrollTo(scrollX),
        incrementScroll: (scrollXIncrement) =>
          f.incrementScroll(scrollXIncrement),
        getScrollPosition: () => f.getScrollPosition(),
        getScrollContentWidth: () => contentEl.ref?.offsetWidth || 0
      }
    },
    elements: { rootEl: true, areaEl: true, contentEl: true },
    foundation: ({ rootEl, areaEl, contentEl }) => {
      return new MDCTabScrollerFoundation({
        eventTargetMatchesSelector: (
          evtTarget,
          selector
        ) => matches(evtTarget, selector),
        addClass: (className) => rootEl.addClass(className),
        removeClass: (className) => rootEl.removeClass(className),
        addScrollAreaClass: (className) => areaEl.addClass(className),
        setScrollAreaStyleProperty: (prop, value) =>
          areaEl.setStyle(prop, value),
        setScrollContentStyleProperty: (prop, value) =>
          contentEl.setStyle(prop, value),
        getScrollContentStyleValue: (propName) => {
          const val =
            contentEl.ref &&
            window.getComputedStyle(contentEl.ref).getPropertyValue(propName)

          return val || 'none'
        },
        setScrollAreaScrollLeft: (scrollX) =>
          areaEl.ref && (areaEl.ref.scrollLeft = scrollX),
        getScrollAreaScrollLeft: () => (areaEl.ref ? areaEl.ref.scrollLeft : 0),
        getScrollContentOffsetWidth: () =>
          contentEl.ref ? contentEl.ref.offsetWidth : 0,
        getScrollAreaOffsetWidth: () =>
          areaEl.ref ? areaEl.ref.offsetWidth : 0,
        computeScrollAreaClientRect: () =>
          areaEl.ref ? areaEl.ref.getBoundingClientRect() : emptyClientRect,
        computeScrollContentClientRect: () =>
          contentEl.ref
            ? contentEl.ref.getBoundingClientRect()
            : emptyClientRect,
        computeHorizontalScrollbarHeight: () =>
          scrollerUtil.computeHorizontalScrollbarHeight(document)
      })
    }
  })

  const { areaEl, contentEl } = elements

  const handleInteraction = () => {
    foundation.handleInteraction()
  }

  const handleTransitionEnd = (
    evt
  ) => {
    foundation.handleTransitionEnd(evt)
  }

  areaEl.setProp('onWheel', handleInteraction, true)
  areaEl.setProp('onTouchStart', handleInteraction, true)
  areaEl.setProp('onPointerDown', handleInteraction, true)
  areaEl.setProp('onMouseDown', handleInteraction, true)
  areaEl.setProp('onKeyDown', handleInteraction, true)

  contentEl.setProp('onTransitionEnd', handleTransitionEnd, true)

  return { ...elements }
}
