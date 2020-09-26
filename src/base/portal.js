import { h, Fragment } from 'preact'
import { useEffect, useState, useRef } from 'preact/hooks'
import { createPortal } from 'preact/compat'

import { windowVar } from './index.js'

const PORTAL_ID = 'pmwcPortal'

export function Portal () {
  const el = useRef(windowVar?.document.createElement('div'))
  return <div ref={el} id={PORTAL_ID} />
}

export function PortalChild ({
  children,
  renderTo
}) {
  const [portalEl, setPortalEl] = useState()

  useEffect(() => {
    let element

    if (renderTo === true) {
      element = document.getElementById(PORTAL_ID) || undefined

      !element &&
        console.warn(
          'No default Portal found. Did you forget to include it in the root of your app? `import { Portal } from "@pmwcs/base";`'
        )
    } else if (typeof renderTo === 'string') {
      element = document.querySelector(renderTo) || undefined

      !element &&
        console.warn(
          `The selector you provided for renderToPortal "${renderTo}" didn't find any elements.`
        )
    } else if (renderTo instanceof Element) {
      element = renderTo
    }

    if (element !== portalEl) {
      setPortalEl(element)
    }
  }, [renderTo, portalEl])

  if (portalEl) {
    return createPortal(children, portalEl)
  }

  return <Fragment>{children}</Fragment>
}
