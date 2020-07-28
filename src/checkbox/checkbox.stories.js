/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import './styles.js'

import {
  Checkbox
} from './index.js'

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const all = () => (
  <section>
    <Checkbox label="Pizza" />

    <Checkbox>Icecream</Checkbox>

    <Checkbox label="Broccoli" indeterminate />

    <Checkbox label="Always On" checked />
    <Checkbox label="Always Off" checked={false} />
  </section>
)

export const withState = () => {
  function Example() {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        label="Cookies"
        checked={checked}
        onChange={evt => setChecked(!!evt.currentTarget.checked)}
      />
    );
  }
  return <Example />
}
