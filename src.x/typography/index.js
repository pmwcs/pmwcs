/** @jsx h */
import { h } from 'preact'
import { classNames } from '../base'

const el = {
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
  button: 'span',
  caption: 'span',
  overlay: 'span'
}

export function Typography ({use, ref, children}) {
  const tag = el[use]
  const className = classNames({[`mdc-typography--${use}`]: !!tag})
  return h(tag || 'span', { ref, class: className }, children)
}
