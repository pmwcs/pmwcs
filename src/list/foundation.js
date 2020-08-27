import { useEffect, useCallback } from 'preact/hooks'

import { MDCListFoundation } from '@material/list'
import { matches, useFoundation } from '@pmwcs/base'

export const useListFoundation = (props) => {
  const listElements = useCallback((el) => {
    if (el) {
      return [].slice.call(
        el.querySelectorAll(`.${MDCListFoundation.cssClasses.LIST_ITEM_CLASS}`)
      )
    }
    return []
  }, [])

  const { foundation, ...elements } = useFoundation({
    props,
    api: ({
      rootEl,
      foundation
    }) => {
      const { adapter } = foundation
      return {
        listElements: () => listElements(rootEl.ref),
        focusRoot: () => rootEl.ref && rootEl.ref.focus(),
        getClasses: () => MDCListFoundation.cssClasses.LIST_ITEM_CLASS,
        addClassToElementIndex: adapter.addClassForElementIndex,
        removeClassFromElementAtIndex: adapter.removeClassForElementIndex,
        setAttributeForElementIndex: adapter.setAttributeForElementIndex,
        getListItemCount: adapter.getListItemCount,
        focusItemAtIndex: adapter.focusItemAtIndex
      }
    },
    elements: { rootEl: true },
    foundation: ({ rootEl, emit }) => {
      return new MDCListFoundation({
        getListItemCount: () => listElements(rootEl.ref).length,
        getFocusedElementIndex: () =>
          listElements(rootEl.ref).indexOf(
            document.activeElement
          ),
        listItemAtIndexHasClass: (index, className) => {
          const element = listElements(rootEl.ref)[index]
          return !!element?.classList.contains(className)
        },
        setAttributeForElementIndex: (
          index,
          attr,
          value
        ) => {
          // This value is getting set and never getting set back
          // This is causing list items to be un-tabbable
          // if (attr === 'tabindex' && value === -1) {
          //   return;
          // }

          if (attr === 'tabindex') {
            attr = 'tabIndex'
          }

          const element = listElements(rootEl.ref)[index]
          if (element) {
            element.setAttribute(attr, String(value))
          }
        },
        addClassForElementIndex: (index, className) => {
          const element = listElements(rootEl.ref)[index]
          if (element) {
            element.classList.add(className)
          }
        },
        removeClassForElementIndex: (index, className) => {
          const element = listElements(rootEl.ref)[index]
          if (element) {
            element.classList.remove(className)
          }
        },
        focusItemAtIndex: (index) => {
          const element = listElements(rootEl.ref)[index]
          if (element) {
            element.focus()
          }
        },
        setTabIndexForListItemChildren: (
          listItemIndex,
          tabIndexValue
        ) => {
          const element = listElements(rootEl.ref)[listItemIndex]
          const listItemChildren = [].slice.call(
            element.querySelectorAll(
              MDCListFoundation.strings.CHILD_ELEMENTS_TO_TOGGLE_TABINDEX
            )
          )
          listItemChildren.forEach((ele) =>
            ele.setAttribute('tabindex', String(tabIndexValue))
          )
        },
        hasCheckboxAtIndex: (index) => {
          const listItem = listElements(rootEl.ref)[index]
          return !!listItem.querySelector(
            MDCListFoundation.strings.CHECKBOX_SELECTOR
          )
        },
        hasRadioAtIndex: (index) => {
          const listItem = listElements(rootEl.ref)[index]
          return !!listItem.querySelector(
            MDCListFoundation.strings.RADIO_SELECTOR
          )
        },
        isCheckboxCheckedAtIndex: (index) => {
          const listItem = listElements(rootEl.ref)[index]
          const toggleEl = listItem.querySelector(
            MDCListFoundation.strings.CHECKBOX_SELECTOR
          )

          return toggleEl ? toggleEl.checked : false
        },
        setCheckedCheckboxOrRadioAtIndex: (
          index,
          isChecked
        ) => {
          const listItem = listElements(rootEl.ref)[index]
          const toggleEl = listItem.querySelector(
            MDCListFoundation.strings.CHECKBOX_RADIO_SELECTOR
          )

          if (toggleEl) {
            toggleEl.checked = isChecked

            const event = document.createEvent('Event')
            event.initEvent('change', true, true)
            toggleEl.dispatchEvent(event)
          }
        },
        notifyAction: (index) => {
          emit('onAction', { index })
        },
        isFocusInsideList: () => {
          return !!rootEl.ref?.contains(document.activeElement)
        },
        isRootFocused: () => document.activeElement === rootEl.ref
      })
    }
  })

  const { rootEl } = elements

  /**
   * Used to figure out which list item this event is targetting. Or returns -1 if
   * there is no list item
   */
  const getListItemIndex = useCallback(
    (evt) => {
      let eventTarget = evt.target
      let index = -1

      // Find the first ancestor that is a list item or the list.
      while (
        eventTarget &&
        !eventTarget.classList.contains(
          MDCListFoundation.cssClasses.LIST_ITEM_CLASS
        ) &&
        !eventTarget.classList.contains(MDCListFoundation.cssClasses.ROOT)
      ) {
        eventTarget = eventTarget.parentElement
      }

      // Get the index of the element if it is a list item.
      if (
        eventTarget &&
        eventTarget.classList.contains(
          MDCListFoundation.cssClasses.LIST_ITEM_CLASS
        )
      ) {
        index = listElements(rootEl.ref).indexOf(eventTarget)
      }

      return index
    },
    [listElements, rootEl.ref]
  )

  const handleClick = useCallback(
    (evt) => {
      props.onClick?.(evt)

      const index = getListItemIndex(evt)

      // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
      const toggleCheckbox = !matches(
        evt.target,
        MDCListFoundation.strings.CHECKBOX_RADIO_SELECTOR
      )

      foundation.handleClick(index, toggleCheckbox)
    },
    [getListItemIndex, foundation, props.onClick]
  )

  const handleKeydown = useCallback(
    (evt) => {
      props.onKeyDown?.(evt)

      const index = getListItemIndex(evt)

      if (index >= 0) {
        foundation.handleKeydown(
          evt,
          evt.target instanceof Element &&
            evt.target.classList.contains(
              MDCListFoundation.cssClasses.LIST_ITEM_CLASS
            ),
          index
        )
      }
    },
    [getListItemIndex, foundation, props.onKeyDown]
  )

  const handleFocusIn = useCallback(
    (evt) => {
      props.onFocus?.(evt)
      foundation.handleFocusIn(evt, getListItemIndex(evt))
    },
    [getListItemIndex, foundation, props.onFocus]
  )

  const handleFocusOut = useCallback(
    (evt) => {
      props.onBlur?.(evt)
      foundation.handleFocusOut(evt, getListItemIndex(evt))
    },
    [getListItemIndex, foundation, props.onBlur]
  )

  rootEl.setProp('onClick', handleClick, true)
  rootEl.setProp('onKeyDown', handleKeydown, true)
  rootEl.setProp('onFocus', handleFocusIn, true)
  rootEl.setProp('onBlur', handleFocusOut, true)

  // layout on mount
  useEffect(() => {
    foundation.layout()
  }, [foundation])

  useEffect(() => {
    foundation.setWrapFocus(props.wrapFocus || props.wrapFocus === undefined)
  }, [foundation, props.wrapFocus])

  useEffect(() => {
    foundation.setVerticalOrientation(
      props.vertical || props.vertical === undefined
    )
  }, [foundation, props.vertical])

  return { ...elements }
}
