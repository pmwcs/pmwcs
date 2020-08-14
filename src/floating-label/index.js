import { h } from 'preact'
import { createComponent, mergeRefs } from '@pmwc/base'
import { useFloatingLabelFoundation } from './foundation'

export const FloatingLabel = createComponent(function FloatingLabel (props, ref) {
  const { rootEl } = useFloatingLabelFoundation(props)
  const { shake, float, apiRef, ...rest } = props
  return (
    <span
      {...rootEl.props({ ...rest, className: 'mdc-floating-label' })}
      ref={mergeRefs(rootEl.setRef, ref)}
    />
  )
})
