import { useEffect, useCallback } from 'preact/hooks'

import { useId, emptyClientRect, useFoundation } from '@pmwcs/base'
import { MDCChipFoundation } from '@material/chips'

export const useChipFoundation = (props) => {
  const chipId = useId('chip', props)

  const foundationWithElements = useFoundation({
    props,
    elements: {
      rootEl: true,
      trailingIconEl: true,
      checkmarkEl: true
    },
    foundation: ({ rootEl, checkmarkEl, emit, getProps }) =>
      new MDCChipFoundation({
        addClass: (className) => {
          rootEl.addClass(className)
        },
        removeClass: (className) => rootEl.removeClass(className),
        hasClass: (className) => rootEl.hasClass(className),
        addClassToLeadingIcon: (className) => {
          // handled by props
        },
        removeClassFromLeadingIcon: (className) => {
          // handled by props
        },
        eventTargetHasClass: (target, className) => {
          return (
            rootEl.hasClass(className) || target.classList.contains(className)
          )
        },
        notifyInteraction: () =>
          emit('onInteraction', { chipId }, true /* shouldBubble */),
        notifySelection: (selected) =>
          emit(
            'onSelect',
            { chipId, selected: selected },
            true /* shouldBubble */
          ),
        notifyTrailingIconInteraction: () =>
          emit(
            'onTrailingIconInteraction',
            { chipId },
            true /* shouldBubble */
          ),
        notifyRemoval: () =>
          emit(
            'onRemove',
            { chipId, root: rootEl.ref },
            true /* shouldBubble */
          ),
        notifyNavigation: (key, source) => {
          // TODO, but probably not needed in case of React
        },
        getComputedStyleValue: (propertyName) =>
          rootEl.ref
            ? window.getComputedStyle(rootEl.ref).getPropertyValue(propertyName)
            : '',
        setStyleProperty: (propertyName, value) => {
          rootEl.setStyle(propertyName, value)
        },
        getAttribute: (attrName) => rootEl.ref?.getAttribute(attrName),
        hasLeadingIcon: () => !!props.icon,
        getRootBoundingClientRect: () =>
          rootEl.ref?.getBoundingClientRect() || emptyClientRect,
        getCheckmarkBoundingClientRect: () =>
          checkmarkEl.ref?.getBoundingClientRect() || emptyClientRect,
        setPrimaryActionAttr: (attr, value) => {
          // Not clear in documentation what this should be used for
        },
        focusPrimaryAction: () => {
          // Not clear in documentation what this should be used for
        },
        hasTrailingAction: () => {
          return !!getProps().trailingIcon
        },
        setTrailingActionAttr: (attr, value) => {
          const safeAttr = attr === 'tabindex' ? 'tabIndex' : attr
          trailingIconEl.setProp(safeAttr, value)
        },
        focusTrailingAction: () => {
          trailingIconEl.ref?.focus()
        },
        isRTL: () => {
          return rootEl.ref
            ? window
                .getComputedStyle(rootEl.ref)
                .getPropertyValue('direction') === 'rtl'
            : false
        }
      })
  })

  const { rootEl, trailingIconEl, foundation } = foundationWithElements

  const handleClick = useCallback(
    (evt) => {
      props.onClick?.(evt)
      return foundation.handleClick(evt)
    },
    [foundation]
  )

  const handleKeydown = useCallback(
    (evt) => {
      props.onKeyDown?.(evt)
      return foundation.handleKeydown(evt)
    },
    [foundation]
  )

  const handleTransitionEnd = useCallback(
    (evt) => {
      foundation.handleTransitionEnd(evt)
    },
    [foundation]
  )

  const handleTrailingIconInteraction = useCallback(
    (evt) => {
      return foundation.handleTrailingActionInteraction(evt)
    },
    [foundation]
  )

  // Allow customizing the behavior of the trailing icon
  useEffect(() => {
    foundation.setShouldRemoveOnTrailingIconClick(
      props.trailingIconRemovesChip ?? true
    )
  }, [foundation, props.trailingIconRemovesChip])

  rootEl.setProp('onClick', handleClick, true)
  rootEl.setProp('onKeyDown', handleKeydown, true)
  rootEl.setProp('onTransitionEnd', handleTransitionEnd, true)
  trailingIconEl.setProp('onClick', handleTrailingIconInteraction, true)
  trailingIconEl.setProp('onKeyDown', handleTrailingIconInteraction, true)

  return foundationWithElements
}
