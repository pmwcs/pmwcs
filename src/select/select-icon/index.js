import { h } from 'preact'

import { Icon } from '@pmwcs/icon'
import { useClassNames } from '@pmwcs/base'
import { useSelectIconFoundation } from './foundation'

export const SelectIcon = function SelectIcon (props) {
  const { apiRef, ...rest } = props
  const { rootEl } = useSelectIconFoundation(props)
  const className = useClassNames(props, ['mdc-select__icon'])

  return (
    <Icon
      {...rootEl.props({
        ...rest,
        className
      })}
    />
  )
}
