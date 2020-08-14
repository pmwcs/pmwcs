/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import './styles.js'

import {
  Slider
} from './index.js'

export default {
  title: 'Slider',
  component: Slider
}

export const basic = () => {
  function Example () {
    const [value, setValue] = useState(50)
    // onInput is required and will fire continuously.
    // onChange is optional and fires at the end of the interaction
    return (
      <Slider
        value={value}
        onChange={evt => setValue(evt.detail.value)}
        onInput={evt => setValue(evt.detail.value)}
        discrete
        step={1}
      />
    )
  }

  return (
    <section>
      <Slider
        onInput={evt => console.log(evt)}
        onChange={evt => console.log(evt)}
      />

      <Example />

      <Slider discrete displayMarkers min={100} max={200} step={5} />

    </section>
  )
}
