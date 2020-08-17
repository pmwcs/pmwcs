/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import './styles.js'

import { Checkbox } from './index.js'

export default {
  title: 'Checkbox',
  component: Checkbox
}

export const basic = () => (
  <section>
    <Checkbox label='Pizza' />

    <Checkbox>Icecream</Checkbox>

    <Checkbox label='Broccoli' indeterminate />

    <Checkbox label='Always On' checked />
    <Checkbox label='Always Off' checked={false} />
  </section>
)

export const primary = () => (
  <section>
    <Checkbox primary label='Pizza' />

    <Checkbox primary>Icecream</Checkbox>

    <Checkbox primary label='Broccoli' indeterminate />

    <Checkbox primary label='Always On' checked />
    <Checkbox primary label='Always Off' checked={false} />
  </section>
)

export const withState = () => {
  function Example () {
    const [checked, setChecked] = useState(false)
    return (
      <Checkbox
        label='Cookies'
        checked={checked}
        onChange={evt => setChecked(!!evt.currentTarget.checked)}
      />
    )
  }
  return <Example />
}
