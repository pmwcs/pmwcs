/** @jsx h */
import { h } from 'preact'

import './styles.js'

import {
  Ripple
} from './index.js'

export default {
  title: 'Ripple',
  component: Ripple,
};

export const standard = () => (
  <Ripple>
    <p>Standard Ripple</p>
  </Ripple>
)

export const primary = () => (
  <Ripple primary>
    <p>Primary</p>
  </Ripple>
)

export const accent = () => (
  <Ripple accent>
    <p>Accent</p>
  </Ripple>
)

export const unbounded = () => (
  <Ripple unbounded>
    <p>Unbounded</p>
  </Ripple>
)
