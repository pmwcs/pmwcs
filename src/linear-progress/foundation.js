import { useEffect, useState } from 'preact/hooks'
import { MDCLinearProgressFoundation } from '@material/linear-progress'
import { useFoundation } from '@pmwcs/base'

export const useLinearProgressFoundation = (props) => {
  const { foundation, ...elements } = useFoundation({
    props,
    elements: { rootEl: true },
    foundation: ({ rootEl }) => {
      return new MDCLinearProgressFoundation({
        addClass: (className) => rootEl.addClass(className),
        forceLayout: () => rootEl.ref?.offsetWidth,
        hasClass: (className) => rootEl.hasClass(className),
        removeClass: (className) => rootEl.removeClass(className),
        setPrimaryBarStyle: (styleProperty, value) => {
          const el = rootEl.ref?.querySelector(
            MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR
          ) || null
          el && (el.style[styleProperty] = value)
        },
        setBufferBarStyle: (styleProperty, value) => {
          const el = rootEl.ref?.querySelector(
            MDCLinearProgressFoundation.strings.BUFFER_BAR_SELECTOR
          ) || null
          el && (el.style[styleProperty] = value)
        }
      })
    }
  })

  const [determinate, setDeterminate] = useState(undefined)

  // progress and determinate
  useEffect(() => {
    foundation.setProgress(props.progress || 0)

    const isDeterminate = props.progress !== undefined
    if (isDeterminate !== determinate) {
      foundation.setDeterminate(isDeterminate)
      setDeterminate(isDeterminate)
    }
  }, [props.progress, determinate, foundation])

  // buffer
  useEffect(() => {
    foundation.setBuffer(props.buffer || 0)
  }, [props.buffer, foundation])

  // reversed
  useEffect(() => {
    foundation.setReverse(!!props.reversed)
  }, [props.reversed, foundation])

  // closed
  useEffect(() => {
    props.closed ? foundation.close() : foundation.open()
  }, [props.closed, foundation])
  return { foundation, ...elements }
}
