import { h } from 'preact'

import {
  Tag,
  useClassNames
} from '@pmwcs/base'

export function Ellipsis (props) {
  const {
    tag = 'div',
    children,
    ...rest
  } = props

  const className = useClassNames(props, [
    'pmwc-ellipsis'
  ])

  return (
    <Tag tag={tag} className={className} {...rest}>
      {children}
    </Tag>
  )
}
