import { h } from 'preact'

import { Tag, useClassNames, wrapChild, createComponent } from '@pmwc/base'

/** The Elevation Component */
export const Elevation = createComponent(function Elevation (
  props,
  ref
) {
  const { z = 0, transition = false, wrap, ...rest } = props

  const className = useClassNames(props, [
    `mdc-elevation--z${z}`,
    { 'mdc-elevation-transition': transition }
  ])

  if (wrap) {
    return wrapChild({ ...rest, className, ref })
  }

  return <Tag {...rest} ref={ref} className={className} />
})
