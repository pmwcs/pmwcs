import { h, Fragment } from 'preact'

import { mergeRefs, Tag, useClassNames, createComponent } from '@pmwc/base'
import {
  useDismissableDrawerFoundation,
  useModalDrawerFoundation
} from './foundation'

/***************************************************************************************
 * Drawers
 ***************************************************************************************/

/** A Drawer component. */
export const Drawer = createComponent(function Drawer (props, ref) {
  if (props.dismissible) {
    return <DismissibleDrawer {...props} ref={ref} />
  }

  if (props.modal) {
    return <ModalDrawer {...props} ref={ref} />
  }

  return <DrawerRoot {...props} ref={ref} />
})

const slidableDrawerFactory = (
  useDrawerFoundation
) => {
  const DrawerInner = createComponent(function DrawerInner (
    props,
    ref
  ) {
    const { rootEl, scrimEl } = useDrawerFoundation(props)
    const { onOpen, onClose, open, foundationRef, ...rest } = props
    return (
      <Fragment>
        <DrawerRoot
          ref={mergeRefs(rootEl.setRef, ref)}
          {...rootEl.props(rest)}
        />
        {rest.modal && <DrawerScrim {...scrimEl.props({})} />}
      </Fragment>
    )
  })

  return DrawerInner
}

const ModalDrawer = slidableDrawerFactory(useModalDrawerFoundation)
const DismissibleDrawer = slidableDrawerFactory(useDismissableDrawerFoundation)

const DrawerRoot = createComponent(function DrawerRoot (
  props,
  ref
) {
  const { dismissible, modal, foundationRef, ...rest } = props
  const className = useClassNames(props, [
    'mdc-drawer',
    {
      'mdc-drawer--dismissible': dismissible,
      'mdc-drawer--modal': modal
    }
  ])

  return <Tag tag='aside' {...rest} ref={ref} className={className} />
})

/***************************************************************************************
 * Bits
 ***************************************************************************************/

/** An optional header for the Drawer. */
export const DrawerHeader = createComponent(
  function DrawerHeader (props, ref) {
    const className = useClassNames(props, ['mdc-drawer__header'])
    return <Tag {...props} ref={ref} className={className} />
  }
)

/** An title for the DrawerHeader. */
export const DrawerTitle = createComponent(
  function DrawerTitle (props, ref) {
    const className = useClassNames(props, ['mdc-drawer__title'])
    return <Tag {...props} ref={ref} className={className} />
  }
)

/** A subtitle for the DrawerHeader. */
export const DrawerSubtitle = createComponent(
  function DrawerSubtitle (props, ref) {
    const className = useClassNames(props, ['mdc-drawer__subtitle'])
    return <Tag {...props} ref={ref} className={className} />
  }
)

/** Content for Drawers. */
export const DrawerContent = createComponent(
  function DrawerContent (props, ref) {
    const className = useClassNames(props, ['mdc-drawer__content'])
    return <Tag {...props} ref={ref} className={className} />
  }
)

/** Protects the app's UI from interactions while a modal drawer is open. */
const DrawerScrim = ({
  onClick
}) => (
  <div
    className='mdc-drawer-scrim'
    onClick={onClick}
  />
)

/** For the Dismissible variant only. Sibling element that is resized when the drawer opens/closes. */
export const DrawerAppContent = createComponent(
  function DrawerAppContent (props, ref) {
    const className = useClassNames(props, ['mdc-drawer-app-content'])
    return <Tag {...props} ref={ref} className={className} />
  }
)
