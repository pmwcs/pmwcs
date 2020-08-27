import { h, cloneElement, isValidElement } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { Children } from 'preact/compat'

import { List, ListItem } from '@pmwcs/list'
import {
  getDisplayName,
  classNames,
  useClassNames,
  createComponent
} from '@pmwcs/base'

import {
  MenuSurface,
  MenuSurfaceAnchor
} from '../menu-surface'

import { useMenuFoundation } from './foundation'

/****************************************************************
 * Menu
 ****************************************************************/

/** A wrapper for menu items */
export const MenuItems = createComponent(function MenuItems (
  props,
  ref
) {
  const className = useClassNames(props, ['mdc-list mdc-menu__items'])
  return <List role='menu' {...props} className={className} ref={ref} />
})
MenuItems.displayName = 'MenuItems'

/** This is just the ListItem component exported from the Menu module for convenience. You can use `ListItem` or `SimpleListItem` components from the List section as long as you add `role="menuitem"` and `tabIndex="0"` to the components for accessibility. */
export const MenuItem = createComponent(function MenuItem (
  props,
  ref
) {
  return <ListItem role='menuitem' tabIndex={0} {...props} ref={ref} />
})

const isMenuItems = (child) =>
  getDisplayName(child) === 'MenuItems'

/** A menu component for displaying lists items. */
export const Menu = createComponent(function Menu (props, ref) {
  const { children, focusOnOpen, onSelect, foundationRef, fullwidth, style, ...rest } = props
  const { rootEl, setListApi, setMenuSurfaceApi } = useMenuFoundation(props)

  const needsMenuItemsWrapper = (
    Children.map(children, isMenuItems) || []
  ).every((val) => val === false)

  const menuItemsProps = {
    apiRef: setListApi
  }

  return (
    <MenuSurface
      {...rootEl.props(rest)}
      aria-hidden={!rest.open}
      className={classNames('mdc-menu', rest.className)}
      apiRef={setMenuSurfaceApi}
      ref={ref}
      fullwidth={fullwidth}
      style={style}
    >
      {needsMenuItemsWrapper ? (
        <MenuItems {...menuItemsProps}>{children}</MenuItems>
      ) : (
        Children.map(children, (child) => {
          if (isMenuItems(child)) {
            return cloneElement(child, {
              ...(isValidElement(child) ? (child.props) : {}),
              ...menuItemsProps
            })
          }
          return child
        })
      )}
    </MenuSurface>
  )
})

/****************************************************************
 * Simple Menu
 ****************************************************************/

const simpleMenuFactory = (MenuComponent) =>
  function (props) {
    const [stateOpen, setStateOpen] = useState(!!props.open)

    useEffect(() => {
      if (props.open !== undefined && props.open !== stateOpen) {
        setStateOpen(!!props.open)
      }
    }, [props.open, stateOpen])

    const {
      handle,
      onClose,
      children,
      rootProps = {},
      open,
      foundationRef,
      ...rest
    } = props

    const wrappedHandle = cloneElement(handle, {
      ...handle.props,
      onClick: (evt) => {
        setStateOpen(!stateOpen)
        if (handle.props.onClick) {
          handle.props.onClick(evt)
        }
      }
    })

    const wrappedOnClose = (evt) => {
      setStateOpen(!!open || false)
      onClose?.(evt)
    }

    return (
      <MenuSurfaceAnchor {...rootProps}>
        <MenuComponent
          {...rest}
          onClose={wrappedOnClose}
          open={stateOpen}
        >
          {children}
        </MenuComponent>
        {wrappedHandle}
      </MenuSurfaceAnchor>
    )
  }

/** A Simplified menu component that allows you to pass a handle element and will automatically control the open state and add a MenuSurfaceAnchor */
export const SimpleMenu = simpleMenuFactory(Menu)

/** The same as SimpleMenu, but a generic surface. */
export const SimpleMenuSurface = simpleMenuFactory(
  MenuSurface
)
