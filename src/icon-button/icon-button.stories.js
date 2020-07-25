/** @jsx h */
import { h } from 'preact'

import './stories.css'
import './styles.js'

import { IconButton } from './index.js'
import { Typography } from '../typography'

export default {
  title: 'IconButton',
  component: IconButton,
};

export const all = () => (
  <section className='mdc-typography'>
  <ul>
    <li>No Toggle:{' '}
      <IconButton
        icon="star"
        label="Rate this!"
        foundationRef={console.log}
      />
    </li>
    <li>Toggle:{' '}
      <IconButton
        icon="star"
        onIcon="star_border"
        label="Rate this!"
        foundationRef={console.log}
      />
    </li>
  </ul>
  </section>
)
