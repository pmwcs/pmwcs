import { createElement, Fragment } from 'preact'
import { memo, forwardRef } from 'preact/compat'

import classNamesFunc from 'classnames'
import { parseThemeOptions } from './with-theme'

export const Tag = forwardRef(function Tag (props, ref) {
  const { tag, theme, element, ...rest } = props
  const TagEl = tag === undefined ? 'div' : tag

  const finalProps = element ? element.props(rest) : rest
  const finalRef = element ? mergeRefs(ref, element.setRef) : ref
  return createElement(TagEl, { ...finalProps, ref: finalRef })
})

export const useClassNames = (props, classNames) => classNamesFunc(
  props.className,
  ...(props.theme ? parseThemeOptions(props.theme) : []),
  ...(typeof classNames === 'function' ? classNames(props) : classNames)
)

export const mergeRefs = (
  ...refs
) => (el) => {
  for (const ref of refs) {
    if (typeof ref === 'function') {
      ref(el)
    } else if (ref && 'current' in ref) {
      // @ts-ignore
      ref.current = el
    }
  }
}

export const handleRef = (
  ref,
  value
) => {
  if (typeof ref === 'function') {
    ref(value)
  } else if (ref && 'current' in ref) {
    // @ts-ignore
    ref.current = value
  }
}

export function createComponent (Component) {
  const ForwardComponent = forwardRef(Component)
  // Interestingly enough, we only need this declaration
  // for a generic placeholder for typescript inference,
  // we don't actually have to pay the penalty for using it at runtime :)
  const WrappedComponent = () => createElement(Fragment, null)
  WrappedComponent.displayName = Component.constructor.name || 'PMWCComponent'
  ForwardComponent.displayName = WrappedComponent.displayName
  return ForwardComponent
}
export function createMemoComponent (Component) {
  const Comp = createComponent(Component)
  return memo(Comp)
}
