import { h, Component, cloneElement, isValidElement, createContext } from 'preact'
import { findDOMNode, forwardRef, Children } from 'preact/compat'

import { classNames } from '@pmwcs/base'
import { useProviderContext } from '@pmwcs/provider'
import { useRippleFoundation } from './foundation'

const RippleSurfaceContext = createContext({})

/** A component for adding Ripples to other components. */
const withDomNode = () => (WrapComponent) => {
  return class extends Component {
    constructor () {
      super()
      this.state = { domNode: null }
    }

    componentDidMount () {
      this.setState({ domNode: findDOMNode(this) })
    }

    componentDidUpdate () {
      const rootRippleElement = findDOMNode(this)

      if (rootRippleElement !== this.state.domNode) {
        this.setState({ rootRippleElement })
      }
    }

    render () {
      return <WrapComponent {...this.props} domNode={this.state.domNode} />
    }
  }
}

export const Ripple = withDomNode()(function Ripple (props) {
  const {
    children,
    className,
    primary,
    secondary,
    accent,
    unbounded,
    surface,
    domNode,
    foundationRef,
    ...rest
  } = props

  const { rootEl, surfaceEl } = useRippleFoundation(props)

  const child = Children.only(children)

  if (!isValidElement(child)) {
    return null
  }

  // This flag really determines a lot
  // is surfaceIsRoot is true, then the surface props are spread
  // to the underlying component, otherwise the only place they
  // can be picked up is by the context consumer
  const surfaceIsRoot = !surface || !unbounded

  const unboundedProp = unbounded
    ? { 'data-mdc-ripple-is-unbounded': true }
    : {}

  const rippleSurfaceProps = surfaceIsRoot
    ? surfaceEl.props({ style: child.props.style })
    : {}

  let finalClassNames = classNames(
    className !== child.props.className && className,
    rippleSurfaceProps.className,
    child.props.className,
    {
      'mdc-ripple-surface': typeof surface === 'boolean' ? surface : surface === undefined,
      'mdc-ripple-surface--primary': primary,
      'mdc-ripple-surface--accent': accent || secondary
    }
  )

  // Fixes a ripple artifact issue
  // that is caused when clicking a button disables it
  // https://codesandbox.io/s/842vo56019
  if (rest.disabled) {
    finalClassNames = finalClassNames.replace(
      'mdc-ripple-upgraded--background-focused',
      ''
    )
  }

  // do some crazy props merging...
  const content = cloneElement(child, {
    ...child.props,
    ...unboundedProp,
    ...rootEl.props({
      ...rest,
      style: child.props.style,
      ...rippleSurfaceProps,
      className: finalClassNames
    })
  })

  return (
    <RippleSurfaceContext.Provider
      value={surfaceEl.props({ style: child.props.style })}
    >
      {content}
    </RippleSurfaceContext.Provider>
  )
})

export const RippleSurface = ({
  className,
  ...rest
}) => (
  <RippleSurfaceContext.Consumer>
    {(rippleSurfaceProps) => (
      <div
        {...rest}
        {...rippleSurfaceProps}
        className={`${className} ${rippleSurfaceProps.className || ''}`}
      />
    )}
  </RippleSurfaceContext.Consumer>
)

/**
 * HOC that adds ripples to any component
 */
export const withRipple = ({
  unbounded: defaultUnbounded,
  accent: defaultAccent,
  surface: defaultSurface
}) => (WrapComponent) => {
  const WithRippleComponent = forwardRef(
    ({ ripple, ...rest }, ref) => {
      const providerContext = useProviderContext()
      ripple = ripple ?? providerContext.ripple
      const rippleOptions = typeof ripple !== 'object' ? {} : ripple

      if (ripple) {
        return (
          <Ripple
            {...rest}
            accent={rippleOptions.accent || defaultAccent}
            unbounded={rippleOptions.unbounded || defaultUnbounded}
            surface={rippleOptions.surface || defaultSurface}
          >
            <WrapComponent {...rest} ref={ref} />
          </Ripple>
        )
      }

      return <WrapComponent {...rest} ref={ref} />
    }
  )

  WithRippleComponent.displayName = `withRipple(${
    WrapComponent.displayName || WrapComponent.constructor.name || 'Unknown'
  })`

  return WithRippleComponent
}
