/** @jsx h */
import { h } from 'preact'

import './styles.js'

import {
  Ripple
} from './index.js'

export default {
  title: 'Ripple',
  component: Ripple
}

export const basic = () => (
  <section className='mdc-typography'>
    <Ripple>
      <p style={{ height: '4em' }}>Standard Ripple</p>
    </Ripple>

    <Ripple primary>
      <p style={{ height: '4em' }}>Primary Ripple</p>
    </Ripple>

    <Ripple accent>
      <p style={{ height: '4em' }}>Accent Ripple</p>
    </Ripple>
  </section>
)

export const unbounded = () => (
  <section className='mdc-typography'>
    <Ripple unbounded>
      <p style={{ height: '4em' }}>Unbounded</p>
    </Ripple>
  </section>
)
