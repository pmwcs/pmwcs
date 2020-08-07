/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import './styles.js'

import {
  Elevation
} from './index.js'

export default {
  title: 'Elevation',
  component: Elevation,
};

export const basic = () => (
  <section>
    <Elevation z={21} wrap>
      <span>Wrapped!</span>
    </Elevation>

    <p><br/></p>

    {Array(25)
      .fill(undefined)
      .map((val, i) => (
        <Elevation z={i} key={i}>
          {i}dp
        </Elevation>
      ))}
  </section>
)

export const mouse = () => {
  function Example() {
    const [elevation, setElevation] = useState(0);

    return (
      <Elevation
        z={elevation}
        transition
        onMouseOver={() => setElevation(24)}
        onMouseOut={() => setElevation(0)}
      >
        Hover Me {elevation}dp
      </Elevation>
    );
  }
  return <Example/>
}
