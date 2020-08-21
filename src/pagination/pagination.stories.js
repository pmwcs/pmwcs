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
    <Pagination onChange={action('default')} />
    <Br />

    <Pagination count={3} onChange={action('count3')} defaultPage={1} />
    <Br />

    <Pagination count={5} onChange={action('count5')} defaultPage={3} showFirstButton showLastButton />
    <Br />

    <Pagination count={999} onChange={action('count999')} />
    <Br />

    <Pagination count={10} onChange={action('primary')} primary defaultPage={2} />
    <Br />

    <Pagination count={10} onChange={action('secondary')} secondary defaultPage={5} />
    <Br />

    <Pagination count={10} onChange={action('disabled')} disabled />
    <Br />

  </section>
)

export const rounded = () => (
  <section className='mdc-typography'>
    <Pagination rounded />
    <Br />

    <Pagination rounded count={3} defaultPage={1} />
    <Br />

    <Pagination rounded count={5} defaultPage={3} showFirstButton showLastButton />
    <Br />

    <Pagination rounded count={99} primary defaultPage={2} />
    <Br />

    <Pagination rounded count={999} secondary defaultPage={5} />
    <Br />

    <Pagination rounded count={10} disabled />
    <Br />

  </section>
)

export const sizes = () => (
  <section className='mdc-typography'>
    <Br />
    <Pagination size='small' count={99} />

    <Br />
    <Pagination size='small' count={999} />

    <Br />
    <Pagination size='medium' count={99} />

    <Br />
    <Pagination count={999} />

    <Br />
    <Pagination size='large' count={99} />

    <Br />
    <Pagination size='large' count={999} />
  </section>
)
