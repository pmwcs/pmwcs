import { cloneElement } from 'preact'
import { Children } from 'preact/compat'
import classNames from 'classnames'

export const wrapChild = (props) => {
  const child = Children.only(props.children)
  return cloneElement(child, {
    ...props,
    ...child.props,
    className: classNames(props.className, child.props.className),
    style: { ...child.props.style, ...props.style }
  })
}
