import { useRef, useEffect } from 'preact/hooks'

import { useFoundation, emptyClientRect, debounce } from '@pmwcs/base'

import { MDCSliderFoundation } from '@material/slider'

export const useSliderFoundation = (
  props
) => {
  const trackRef = useRef()
  const setTrackRef = (element) => (trackRef.current = element)

  const trackmarkerContainerRef = useRef()
  const setTrackMarkerContainerRef = (element) =>
    (trackmarkerContainerRef.current = element)

  const { foundation, ...elements } = useFoundation({
    props,
    elements: {
      rootEl: true,
      thumbContainerEl: true,
      sliderPinEl: true
    },
    foundation: ({ rootEl, thumbContainerEl, sliderPinEl, emit }) => {
      return new MDCSliderFoundation({
        hasClass: (className) => rootEl.hasClass(className),
        addClass: (className) => rootEl.addClass(className),
        removeClass: (className) => rootEl.removeClass(className),
        getAttribute: (name) =>
          rootEl.getProp(name),
        setAttribute: debounce(
          (name, value) => rootEl.setProp(name, value),
          300
        ),
        removeAttribute: (name) => rootEl.removeProp(name),
        computeBoundingRect: () =>
          rootEl.ref ? rootEl.ref.getBoundingClientRect() : emptyClientRect,
        getTabIndex: () => (rootEl.ref ? rootEl.ref.tabIndex : 0),
        registerInteractionHandler: (
          evtType,
          handler
        ) => {
          rootEl.addEventListener(evtType, handler)
        },
        deregisterInteractionHandler: (
          evtType,
          handler
        ) => {
          rootEl.removeEventListener(evtType, handler)
        },
        registerThumbContainerInteractionHandler: (
          evtType,
          handler
        ) => {
          thumbContainerEl.addEventListener(evtType, handler)
        },
        deregisterThumbContainerInteractionHandler: (
          evtType,
          handler
        ) => {
          thumbContainerEl.removeEventListener(evtType, handler)
        },
        registerBodyInteractionHandler: (
          evtType,
          handler
        ) => {
          document.body && document.body.addEventListener(evtType, handler)
        },
        deregisterBodyInteractionHandler: (
          evtType,
          handler
        ) => {
          document.body && document.body.removeEventListener(evtType, handler)
        },
        registerResizeHandler: (
          handler
        ) => {
          window.addEventListener('resize', handler)
        },
        deregisterResizeHandler: (
          handler
        ) => {
          window.removeEventListener('resize', handler)
        },
        notifyInput: () => {
          emit('onInput', { value: foundation.getValue() })
        },
        notifyChange: () => {
          emit('onChange', { value: foundation.getValue() })
        },
        setThumbContainerStyleProperty: (propertyName, value) => {
          thumbContainerEl.setStyle(propertyName, value)
        },
        setTrackStyleProperty: (propertyName, value) => {
          trackRef.current?.style.setProperty(propertyName, value)
        },
        setMarkerValue: (value) => {
          sliderPinEl.setProp('value', value)
        },

        setTrackMarkers: (step, max, min) => {
          const stepStr = step.toLocaleString()
          const maxStr = max.toLocaleString()
          const minStr = min.toLocaleString()
          // keep calculation in css for better rounding/subpixel behavior
          const markerAmount = `((${maxStr} - ${minStr}) / ${stepStr})`
          const markerWidth = '2px'
          const markerBkgdImage = `linear-gradient(to right, currentColor ${markerWidth}, transparent 0)`
          const markerBkgdLayout = `0 center / calc((100% - ${markerWidth}) / ${markerAmount}) 100% repeat-x`
          const markerBkgdShorthand = `${markerBkgdImage} ${markerBkgdLayout}`
          trackmarkerContainerRef.current?.style.setProperty(
            'background',
            markerBkgdShorthand
          )
        },
        isRTL: () =>
          !!rootEl.ref && getComputedStyle(rootEl.ref).direction === 'rtl'
      })
    }
  })

  // max
  useEffect(() => {
    props.max !== undefined && foundation.setMax(+props.max)
  }, [props.max, foundation])

  // min
  useEffect(() => {
    props.min !== undefined && foundation.setMin(+props.min)
  }, [props.min, foundation])

  // value
  useEffect(() => {
    let value =
      props.value !== undefined ? Number(props.value) : foundation.getValue()

    const min = foundation.getMin()
    const max = foundation.getMax()
    // make value in bounds
    if (value < min) {
      console.warn(
        `Attempted to set slider to ${value} which is less than min: ${min}`
      )
      value = min
    }

    if (value > max) {
      console.warn(
        `Attempted to set slider to ${value} which is greater than max: ${max}`
      )
      value = max
    }

    foundation.setValue(value)
  }, [props.value, foundation])

  // step
  useEffect(() => {
    props.step !== undefined && foundation.setStep(+props.step)
  }, [props.step, foundation])

  // disabled
  useEffect(() => {
    props.disabled !== undefined && foundation.setDisabled(props.disabled)
  }, [props.disabled, foundation])

  // discrete
  useEffect(() => {
    if (props.discrete !== undefined) {
      // @ts-ignore unsafe private variable access
      foundation.isDiscrete_ = props.discrete
    }

    if (props.discrete && foundation.getStep() === 0) {
      foundation.setStep(1)
    }
  }, [props.discrete, foundation])

  // displayMarkers
  useEffect(() => {
    // @ts-ignore unsafe private variable access
    const hasTrackMarker = foundation.hasTrackMarker_
    if (
      props.displayMarkers !== undefined &&
      props.displayMarkers !== hasTrackMarker
    ) {
      // @ts-ignore unsafe private variable access
      foundation.hasTrackMarker_ = props.displayMarkers
      window.requestAnimationFrame(() => foundation.setupTrackMarker())
    }
  }, [props.displayMarkers, foundation])

  // bugfix
  useEffect(() => {
    // Fixes an issue where synthetic events were being
    // accessed in the Foundation and causing an error
    // @ts-ignore unsafe private access
    const existinghandleDown_ = foundation.handleDown_.bind(foundation)

    // @ts-ignore unsafe private access
    foundation.handleDown_ = (evt) => {
      evt.persist()
      existinghandleDown_(evt)
    }
  }, [foundation])

  return {
    setTrackRef,
    setTrackMarkerContainerRef,
    ...elements
  }
}
