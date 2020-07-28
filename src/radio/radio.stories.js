/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import './styles.js'

import {
  Radio
} from './index.js'

export default {
  title: 'Radio',
  component: Radio,
};

export const all = () => (
  <section>
  <Radio
    label="Cookies"
    value="cookies"
    name="myRadioGroup"
    onChange={evt => console.log(evt.currentTarget.value)}
  />

  <Radio
    label="Pizza"
    value="pizza"
    name="myRadioGroup"
    onChange={evt => console.log(evt.currentTarget.value)}
  />

  <Radio
    label="Icecream"
    value="icecream"
    name="myRadioGroup"
    onChange={evt => console.log(evt.currentTarget.value)}
  />
  </section>
)

export const withState = () => {
  function Example() {
    const [value, setValue] = useState('cookies');

    return (
      <section>
        <Radio
          value="cookies"
          checked={value === 'cookies'}
          onChange={evt => setValue(String(evt.currentTarget.value))}
        >
          Cookies
        </Radio>

        <Radio
          value="pizza"
          checked={value === 'pizza'}
          onChange={evt => setValue(String(evt.currentTarget.value))}
        >
          Pizza
        </Radio>

        <Radio
          value="icecream"
          checked={value === 'icecream'}
          onChange={evt => setValue(String(evt.currentTarget.value))}
        >
          Icecream
        </Radio>
      </section>
    )
  }
  return <Example />
}
