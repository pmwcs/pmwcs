import { useFoundation, emptyClientRect } from '@pmwc/base'
import {
  MDCFadingTabIndicatorFoundation,
  MDCSlidingTabIndicatorFoundation
} from '@material/tab-indicator'

export const useTabIndicatorFoundation = (props) => {
  const { foundation, ...elements } = useFoundation({
    props,
    elements: { rootEl: true, contentEl: true },
    foundation: ({ rootEl, contentEl }) => {
      const adapter = {
        addClass: (className) => {
          rootEl.addClass(className)
        },
        removeClass: (className) => {
          rootEl.removeClass(className)
        },
        computeContentClientRect: () => {
          return contentEl.ref?.getBoundingClientRect
            ? contentEl.ref?.getBoundingClientRect()
            : emptyClientRect
        },
        setContentStyleProperty: (prop, value) => {
          contentEl.setStyle(prop, value)
        }
      }

      if (props.transition === 'fade') {
        return new MDCFadingTabIndicatorFoundation(adapter)
      }

      return new MDCSlidingTabIndicatorFoundation(adapter)
    },
    api: ({
      foundation
    }) => {
      return {
        activate: (previousIndicatorClientRect) => {
          foundation.activate(previousIndicatorClientRect)
        },
        deactivate: () => {
          foundation.deactivate()
        },
        computeContentClientRect: () => {
          return foundation.computeContentClientRect()
        }
      }
    }
  })

  return { ...elements }
}
