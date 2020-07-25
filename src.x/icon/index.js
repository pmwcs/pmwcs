/** @jsx h */
import { h, cloneElement, isValidElement } from 'preact'
import { classNames } from '../base'

const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge']

const defaults = {
  basename: 'material-icons'
}

const getStrategy = ({icon, prefix, children}) => {
  if (typeof icon === 'object' || typeof children === 'object') {
    return 'component'
  }

  const content = icon || children
  if (content.indexOf('/') !== -1) {
    return 'url'
  }

  if (prefix && content) {
    return 'className'
  }

  return 'ligature'
}

const getClassNames = (
  {size, className, basename},
  ...other
) => classNames(
    'pmwc-icon',
    {
      [`pmwc-icon--size-${size}`]: size && sizes.includes(size)
    },
    className,
    basename,
    ...other
  )

function iconComponent ({icon, children, size, className, basename, ...rest}) {
  const content = icon || children
  const classN = getClassNames({size, className, basename})
  return isValidElement(content)
    ? cloneElement(content, {...rest, className: classN})
    : (
      <i {...rest} className={classN}>{content}</i>
    )
}

function iconUrl ({icon, children, size, className, basename, ...rest}) {
  const classN = getClassNames({size, className, basename}, `pmwc-icon--url`)
  rest.style = {
    ...rest.style,
    backgroundImage: `url(${icon || children})`
  }
  return (
    <i {...rest} className={classN}></i>
  )
}

function iconPrefix ({prefix, icon, children, size, className, basename, ...rest}) {
  const classN = getClassNames({size, className, basename}, `${prefix}${icon || children}`)
  return (
    <i {...rest} className={classN} />
  )
}

function iconLigature ({icon, children, size, className, basename, ...rest}) {
  const classN = getClassNames({size, className, basename})
  const content = icon || children
  return (
    <i {...rest} className={classN}>{content}</i>
  )
}

export function Icon (
  {
    icon, // icon text
    children, // svg or img
    prefix, // prefix for fontawesome or similar...
    // size,
    // className,
    // basename,
    strategy,
    ...rest
  }
) {
  switch(strategy || getStrategy({icon, prefix, children})) {
    case 'component':
      return iconComponent ({icon, children, ...rest})
    case 'url':
      return iconUrl ({icon, children, ...rest})
    case 'className':
      return iconPrefix ({prefix, icon, ...rest})
    default:
      return iconLigature ({icon, children, ...rest})
  }
}
