import { h } from 'preact'
import { useMemo } from 'preact/compat'

import {
  toDashCase,
  parseThemeOptions,
  wrapChild,
  createComponent,
  Tag,
  useClassNames
} from '@pmwcs/base'

import { getAutoColorsForTheme } from './utils'

/** A Theme Component. */
export const Theme = createComponent(function Theme (props, ref) {
  const { use, wrap, ...rest } = props

  const className = useClassNames(props, [parseThemeOptions(use).join(' ')])

  if (wrap) {
    return wrapChild({
      ...rest,
      ref,
      className
    })
  }

  return (
    <Tag tag='span' theme={use} {...rest} ref={ref} className={className} />
  )
})

/** A ThemeProvider. This sets theme colors for its child tree. */
export const ThemeProvider = createComponent(
  function ThemeProvider (props, ref) {
    const parsed = JSON.stringify(props.options)

    const colors = useMemo(() => {
      const processedColors = Object.keys(props.options).reduce(
        (acc, key) => {
          const val = props.options[key]
          key = key.startsWith('--') ? key : `--mdc-theme-${toDashCase(key)}`
          acc[key] = val
          return acc
        },
        {}
      )

      return getAutoColorsForTheme(processedColors)
    }, [parsed])

    const { options, style = {}, wrap, ...rest } = props
    const className = useClassNames(props, [
      wrap &&
        typeof rest.children === 'object' &&
        // @ts-ignore
        rest.children?.props?.className
    ])

    const themeStyles = {
      ...style,
      ...colors
    }

    if (wrap && rest.children) {
      return wrapChild({ ...rest, style: themeStyles, ref })
    }

    return (
      <Tag {...rest} style={themeStyles} className={className} ref={ref} />
    )
  }
)
