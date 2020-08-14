import { h } from 'preact'

import './styles.js'

import {
  Fab
} from './index.js'

export default {
  title: 'Fab',
  component: Fab
}

export const basic = () => (
  <section>
    <Fab icon='favorite' />

    <p />
    <Fab icon='favorite' mini />

    <p />
    <div>
      <Fab icon='add' label='Create' />
      <Fab trailingIcon='add' label='Create' />
      <Fab label='Label only' />
    </div>

    <p />
    <div>
      <Fab icon='favorite_outline' theme={['primaryBg', 'onPrimary']} />
      <Fab
        icon='delete'
        style={{ backgroundColor: 'var(--mdc-theme-error)' }}
        theme={['onError']}
      />
    </div>
  </section>
)
