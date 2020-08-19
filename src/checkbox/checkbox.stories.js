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

    <Checkbox checked>Icecream</Checkbox>

    <Checkbox label='Broccoli' indeterminate />

    <Checkbox label='Disabled On' checked disabled />

    <Checkbox label='Disabled Off' disabled />

    <p>(primary)</p>

    <Checkbox primary label='Pizza' />

    <Checkbox primary checked>Icecream</Checkbox>

    <Checkbox primary label='Broccoli' indeterminate />

    <Checkbox primary label='Disabled On' checked disabled />

    <Checkbox primary label='Disabled Off' disabled />

    <p>(neutral)</p>

    <Checkbox neutral label='Pizza' />

    <Checkbox neutral checked>Icecream</Checkbox>

    <Checkbox neutral label='Broccoli' indeterminate />

    <Checkbox neutral label='Disabled On' checked disabled />

    <Checkbox neutral label='Disabled Off' disabled />
  </section>
)

export const withState = () => {
  function Example () {
    const [checked, setChecked] = useState(false)
    const [indeterminate, setIndeterminate] = useState(false)
    const [pos, setPos] = useState(0)

    const arr = [
      () => setChecked(!checked),
      () => setIndeterminate(!indeterminate)
    ]

    // const onChange = evt => setChecked(!!evt.currentTarget.checked)
    const onChange = () => {
      arr[pos]()
      setPos((pos + 1) % 2)
    }

    return (
      <section className='mdc-typography'>
        <Checkbox
          label='Cookies'
          checked={checked}
          indeterminate={indeterminate}
          onChange={onChange}
        />
        {checked ? ' checked' : ''}
        {indeterminate ? ' indeterminate' : ''}
      </section>
    )
  }
  return <Example />
}
