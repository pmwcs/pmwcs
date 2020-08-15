import { h } from 'preact'

import { useClassNames, Tag, createComponent, PortalChild } from '@pmwc/base'
import { useMenuSurfaceFoundation } from './foundation'

/****************************************************************
 * MenuSurface
 ****************************************************************/

/** A generic menu component for displaying any type of content. */
export const MenuSurface = createComponent(
  function MenuSurface (props, ref) {
    const {
      children,
      open,
      anchorCorner,
      onOpen,
      onClose,
      renderToPortal,
      fixed,
      fullwidth,
      apiRef,
      foundationRef,
      ...rest
    } = props

    const { rootEl } = useMenuSurfaceFoundation(props)

    const className = useClassNames(props, [
      'mdc-menu-surface',
      {
        'mdc-menu-surface--fixed': fixed,
        'mdc-menu-surface--fullwidth': fullwidth
      }
    ])

    return (
      <PortalChild renderTo={renderToPortal}>
        <Tag {...rest} element={rootEl} className={className} ref={ref}>
          {children}
        </Tag>
      </PortalChild>
    )
  }
)

/****************************************************************
 * MenuSurfaceAnchor
 ****************************************************************/

/** A Menu Anchor. When using the anchorCorner prop of Menu, you must set MenuSurfaceAnchors css style position to absolute. */
export const MenuSurfaceAnchor = createComponent(
  function MenuSurfaceAnchor (props, ref) {
    const className = useClassNames(props, ['mdc-menu-surface--anchor'])
    return <Tag {...props} className={className} ref={ref} />
  }
)
