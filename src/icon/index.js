import { h, createElement, cloneElement, isValidElement } from 'preact'

import { useProviderContext } from '@pmwc/provider'
import { Tag, classNames, getDisplayName } from '@pmwc/base'
/**
 * Given content, tries to figure out an appropriate strategy for it
 */
const processAutoStrategy = function (content, prefix) {
  // check for URLS
  if (typeof content === 'string' && content.includes('/')) {
    return 'url'
  }
  // handle prefixed
  if (typeof content === 'string' && prefix) {
    return 'className'
  }
  // handle JSX components
  if (isValidElement(content)) {
    return 'component'
  }
  // we don't know what it is, default to ligature for compat with material icons
  return 'ligature'
}
/**
 * Get the actual icon strategy to use
 */
export const getIconStrategy = function (content, strategy, providerStrategy, prefix) {
  strategy = strategy || providerStrategy || 'auto'
  if (strategy === 'auto') {
    return processAutoStrategy(content, prefix)
  }
  return strategy
}

const renderLigature = ({ content, ...rest }) => (
  <Tag tag='i' {...rest}>{content}</Tag>
)

const renderClassName = ({ content, ...rest }) => (
  <Tag tag='i' {...rest} />
)

const renderUrl = ({ content, ...rest }) => (
  <Tag
    tag='i'
    {...rest}
    style={{
      ...rest.style,
      backgroundImage: `url(${content})`
    }}
  />
)

const renderComponent = ({ content, ...rest }) => {
  return <Tag tag='i' {...rest}>{content}</Tag>
}

const iconRenderMap = {
  ligature: renderLigature,
  className: renderClassName,
  url: renderUrl,
  component: renderComponent,
  auto: undefined
}

const buildIconOptions = (icon) =>
  (isValidElement(icon) || (icon && typeof icon !== 'object'))
    ? { icon }
    : icon

/** An Icon component. Most of these options can be set once globally, read the documentation on Provider for more info. */
export function Icon (
  {
    icon,
    size: _size,
    prefix: _prefix,
    basename: _basename,
    children,
    outlined, rounded, twoTone, sharp,
    ...rest
  }
) {
  const providerContext = useProviderContext()

  // Build icon options object
  const {
    ref,
    icon: content,
    strategy,
    prefix = _prefix,
    basename = _basename,
    size = _size,
    render,
    ...optionsRest
  } = { ...buildIconOptions(icon || children) }

  // Get provider options
  const {
    basename: providerBasename = null,
    prefix: providerPrefix = null,
    strategy: providerStrategy = null,
    render: providerRender = null
  } = providerContext.icon || {}

  const contentToUse = content

  const strategyToUse = getIconStrategy(
    contentToUse,
    strategy || null,
    providerStrategy || null,
    prefix
  )

  const prefixToUse = prefix || providerPrefix
  const basenameToUse = basename === undefined ? providerBasename : basename
  const iconClassName =
    strategyToUse === 'className' && typeof content === 'string'
      ? `${String(prefixToUse)}${content}`
      : null

  const rendererFromMap = !!strategyToUse && iconRenderMap[strategyToUse]

  // For some reason TS thinks the render method will return undefined...
  const renderToUse =
    strategyToUse === 'custom'
      ? render || providerRender
      : rendererFromMap || null

  if (!renderToUse) {
    console.error(
      `Icon: rendering not implemented for ${String(strategyToUse)}.`
    )
    return null
  }

  const rendered = renderToUse({
    ...rest,
    ...optionsRest,
    ref,
    content: contentToUse,
    className: classNames(
      'pmwc-icon',
      `pmwc-icon--${strategyToUse}`,
      basenameToUse,
      rest.className,
      optionsRest.className,
      iconClassName,
      {
        [`pmwc-icon--size-${size || ''}`]: !!size
      },
      basenameToUse === 'material-icons' ? {
        'material-icons-outlined': outlined,
        'material-icons-round': rounded,
        'material-icons-two-tone': twoTone,
        'material-icons-sharp': sharp
      } : {}
    )
  })

  const childDisplayName = getDisplayName(rendered.props.children)

  if (
    childDisplayName.includes('Avatar') ||
    childDisplayName.includes('Icon')
  ) {
    return cloneElement(rendered.props.children, {
      ...rendered.props.children.props,
      ...rendered.props,
      ref,
      // prevents an infinite loop
      children: rendered.props.children.props.children,
      className: classNames(
        rendered.props.className,
        rendered.props.children.props.className
      )
    })
  }

  return rendered
}
