/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { action } from '@storybook/addon-actions'

import './styles.js'

import {
  Chip,
  ChipSet
} from './index.js'

export default {
  title: 'Chip',
  component: Chip,
};

export const all = () => (
  <section>
    <ChipSet>
      <Chip selected label="Cookies" />
      <Chip label="Pizza" />
      <Chip label="Icecream" />
    </ChipSet>

    <ChipSet>
      <Chip icon="favorite" label="Cookies" trailingIcon="close" />
    </ChipSet>

    <ChipSet>
      <Chip outlined icon="favorite" label="Outlined" trailingIcon="close" />
    </ChipSet>
  </section>
)

export const withState = () => {
  function Example() {
    const [selected, setSelected] = useState(false);

    return (
      <ChipSet>
        <Chip
          key="my-chip"
          label="Click Me"
          checkmark
          selected={selected}
          onRemove={evt => action('onRemove')(evt.detail)}
          onInteraction={evt => {
            action('onInteraction')(evt.detail);
            setSelected(!selected);
          }}
          onTrailingIconInteraction={evt =>
            action('onTrailingIconIteraction')(evt.detail)
          }
          trailingIcon="close"
        />
      </ChipSet>
    )
  }
  return <Example />
}
