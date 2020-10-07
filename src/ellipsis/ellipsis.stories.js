/** @jsx h */

import { h } from 'preact'

import './styles.js'
// import './stories.css'

import { Ellipsis } from './index.js'

export default {
  title: 'Ellipsis',
  component: Ellipsis
}

export const basic = () => (
  <section className='mdc-typography'>
    <div style={{ width: '10em' }}>
      <Ellipsis>This is a long long long long text</Ellipsis>
    </div>
  </section>
)
