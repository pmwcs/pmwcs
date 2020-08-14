import { h } from 'preact'
import { Tag, useClassNames, createComponent } from '@pmwc/base'
import { useFormfieldFoundation } from './foundation'

/** A FormField component. */
export const FormField = createComponent(function FormField (
  props,
  ref
) {
  useFormfieldFoundation(props)

  const { alignEnd, foundationRef, ...rest } = props
  const className = useClassNames(props, [
    'mdc-form-field',
    {
      'mdc-form-field--align-end': props.alignEnd
    }
  ])
  return <Tag {...rest} ref={ref} className={className} />
})
