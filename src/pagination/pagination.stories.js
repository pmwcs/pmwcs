/** @jsx h */

import { h } from 'preact'
import { action } from '@storybook/addon-actions'

import './stories.css'
import './styles.js'

import { Pagination } from './index.js'

export default {
  title: 'Pagination',
  component: Pagination
}

const Br = () => (
  <p> </p>
)

export const basic = () => (
  <section className='mdc-typography'>
    <Pagination />
    <Br />

    <Pagination count={3} defaultPage={1} />
    <Br />

    <Pagination count={3} onChange={action('count3')} defaultPage={1} />
    <Br />

    <Pagination count={5} defaultPage={3} showFirstButton showLastButton />
    <Br />

    <Pagination count={999} />
    <Br />

    <Pagination count={10} primary defaultPage={2} />
    <Br />

    <Pagination count={10} secondary defaultPage={5} />
    <Br />

    <Pagination count={10} disabled />
    <Br />

  </section>
)
