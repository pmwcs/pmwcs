/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import './styles.js'

import {
  Select
} from './index.js'

export default {
  title: 'Select',
  component: Select
}

export const basic = () => (
  <section>
    <Select label='Standard' options={['Cookies', 'Pizza', 'Icecream']} />

    <br />

    <Select
      label='Outlined'
      outlined
      options={['Cookies', 'Pizza', 'Icecream']}
    />

    <br />

    <Select
      label='Enhanced'
      enhanced
      options={['Cookies', 'Pizza', 'Icecream']}
    />

    <br />

    <Select
      label='With Icon'
      defaultValue='Pizza'
      helpText='Choose your favorite snack...'
      icon='favorite'
      options={['Cookies', 'Pizza', 'Icecream']}
    />
  </section>
)

export const validation = () => (
  <section>
    <Select
      label='Required'
      required
      options={['Cookies', 'Pizza', 'Icecream']}
    />

    <Select
      label='Invalid'
      invalid
      options={['Cookies', 'Pizza', 'Icecream']}
    />

    <Select
      label='Disabled'
      disabled
      options={['Cookies', 'Pizza', 'Icecream']}
    />
  </section>
)

export const controlled = () => {
  function Controlled (props) {
    const [value, setValue] = useState(props.options[0])
    console.log(value, setValue)
    return (
      <Select
        {...props}
        value={value}
        onChange={(evt) => setValue(evt.currentTarget.value)}
      />
    )
  }

  return (
    <section>
      <Controlled
        label='Controlled'
        options={['Cookies', 'Pizza', 'Icecream']}
      />
      <Select
        label='Uncontrolled'
        options={['Cookies', 'Pizza', 'Icecream']}
        defaultValue='Cookies'
        onChange={(evt) => console.log(evt.currentTarget.value)}
      />
    </section>
  )
}
