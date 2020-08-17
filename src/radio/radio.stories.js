/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { action } from '@storybook/addon-actions'

import './styles.js'
import './stories.css'

import {
  Radio
} from './index.js'

export default {
  title: 'Radio',
  component: Radio
}

export const basic = () => (
  <section>
    <Radio
      checked
      label='Cookies'
      value='cookies'
      name='myRadioGroup'
      onChange={evt => action('myRadioGroup')(evt.currentTarget.value)}
    />

    <Radio
      label='Pizza'
      value='pizza'
      name='myRadioGroup'
      onChange={evt => action('myRadioGroup')(evt.currentTarget.value)}
    />

    <Radio
      label='Icecream'
      value='icecream'
      name='myRadioGroup'
      onChange={evt => action('myRadioGroup')(evt.currentTarget.value)}
    />
  </section>
)

export const primary = () => (
  <section>
    <Radio
      primary
      label='Cookies'
      value='cookies'
      name='myRadioGroup'
      onChange={evt => action('myRadioGroup')(evt.currentTarget.value)}
    />

    <Radio
      primary
      checked
      label='Pizza'
      value='pizza'
      name='myRadioGroup'
      onChange={evt => action('myRadioGroup')(evt.currentTarget.value)}
    />

    <Radio
      primary
      label='Icecream'
      value='icecream'
      name='myRadioGroup'
      onChange={evt => action('myRadioGroup')(evt.currentTarget.value)}
    />
  </section>
)

export const withState = () => {
  function Example () {
    const [value, setValue] = useState('cookies')

    return (
      <section className='radio-stories__with-state'>
        <Radio
          value='cookies'
          checked={value === 'cookies'}
          onChange={evt => setValue(String(evt.currentTarget.value))}
        >
          Cookies
        </Radio>

        <Radio
          value='pizza'
          checked={value === 'pizza'}
          onChange={evt => setValue(String(evt.currentTarget.value))}
        >
          Pizza
        </Radio>

        <Radio
          value='icecream'
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
