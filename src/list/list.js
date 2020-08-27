import { h } from 'preact'
import { Tag, useClassNames, createComponent } from '@pmwcs/base'
import { useListFoundation } from './foundation'

export const List = createComponent(function List (props, ref) {
  const {
    dense,
    twoLine,
    avatarList,
    apiRef,
    nonInteractive,
    onAction,
    foundationRef,
    ...rest
  } = props
  const { rootEl } = useListFoundation(props)
  const className = useClassNames(props, [
    'mdc-list',
    {
      'mdc-list--dense': dense,
      'mdc-list--two-line': twoLine,
      'mdc-list--avatar-list': avatarList,
      'mdc-list--non-interactive': nonInteractive
    }
  ])
  return (
    <Tag tag='ul' {...rest} element={rootEl} className={className} ref={ref} />
  )
})
