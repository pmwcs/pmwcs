import { h } from 'preact'
import { useState } from 'preact/hooks'

import './styles.js'

import {
  Switch
} from './index.js'

export default {
  title: 'Switch',
  component: Switch
}

export const basic = () => (
  <section>
    <Switch defaultChecked label='Pizza' />

    <br />

    <Switch>Icecream</Switch>

    <br />

    <Switch disabled label='Disabled' />

    <br />

    <Switch disabled defaultChecked label='Disabled' />
  </section>
)

export const withState = () => {
  function Example () {
    const [checked, setChecked] = useState(false)

    return (
      <Switch
        checked={checked}
        onChange={evt => setChecked(!!evt.currentTarget.checked)}
        label='Cookies'
      />
    )
  }
  return <Example />
}
