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
  <section className='mdc-typography'>
    <p>Default (secondary)</p>

    <Checkbox label='Pizza' />

    <Checkbox>Icecream</Checkbox>

    <Checkbox label='Broccoli' indeterminate />

    <Checkbox label='Always On' checked />

    <Checkbox label='Always Off' checked={false} />

    <Checkbox label='Disabled On' checked disabled />

    <Checkbox label='Disabled Off' disabled />

    <p>(primary)</p>

    <Checkbox primary label='Pizza' />

    <Checkbox primary>Icecream</Checkbox>

    <Checkbox primary label='Broccoli' indeterminate />

    <Checkbox primary label='Always On' checked />

    <Checkbox primary label='Always Off' checked={false} />

    <Checkbox primary label='Disabled On' checked disabled />

    <Checkbox primary label='Disabled Off' disabled />

    <p>(neutral)</p>

    <Checkbox neutral label='Pizza' />

    <Checkbox neutral>Icecream</Checkbox>

    <Checkbox neutral label='Broccoli' indeterminate />

    <Checkbox neutral label='Always On' checked />

    <Checkbox neutral label='Always Off' checked={false} />

    <Checkbox neutral label='Disabled On' checked disabled />

    <Checkbox neutral label='Disabled Off' disabled />
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
