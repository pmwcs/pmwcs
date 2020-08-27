import { createElement } from 'preact'
import { useProviderContext } from '@pmwcs/provider'
import { Tag, useClassNames } from '@pmwcs/base'

const SPAN = 'span'

const use2tag = {
  headline1: 'h1',
  headline2: 'h2',
  headline3: 'h3',
  headline4: 'h4',
  headline5: 'h5',
  headline6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  button: SPAN,
  caption: SPAN,
  overlay: SPAN
}

/** The Typography Component */
export function Typography (props) {
  const { use, ...rest } = props
  const providerContext = useProviderContext()
  const typographyOptions = providerContext.typography
  const tag = (typographyOptions === null || typographyOptions === undefined
    ? use2tag[use] || SPAN
    : typographyOptions[use] || typographyOptions.defaultTag || SPAN
  )

  const className = useClassNames(props, [{
    [`mdc-typography--${props.use}`]: props.use
  }])

  return createElement(Tag, { tag, ...rest, className })
}
