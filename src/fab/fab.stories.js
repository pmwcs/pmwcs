/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import './styles.js'

import {
  Fab
} from './index.js'

export default {
  title: 'Fab',
  component: Fab,
};

export const basic = () => (
  <section>
    <Fab icon="favorite" />

    <p></p>
    <Fab icon="favorite" mini />

    <p></p>
    <div>
      <Fab icon="add" label="Create" />
      <Fab trailingIcon="add" label="Create" />
      <Fab label="Label only" />
    </div>

    <p></p>
    <div>
      <Fab icon="favorite_outline" theme={['primaryBg', 'onPrimary']} />
      <Fab
        icon="delete"
        style={{ backgroundColor: 'var(--mdc-theme-error)' }}
        theme={['onError']}
      />
    </div>
  </section>
)
