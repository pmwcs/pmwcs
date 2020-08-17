/** @jsx h */
import { h } from 'preact'
import './styles.js'

import {
  LinearProgress
} from './index.js'

export default {
  title: 'LinearProgress',
  component: LinearProgress
}

export const basic = () => (
  <section>
    <p>basic</p>
    <LinearProgress />

    <p>secondary</p>
    <LinearProgress secondary />

    <p>progress=0.5</p>
    <LinearProgress progress={0.5} />

    <p>progress=0.5 secondary</p>
    <LinearProgress progress={0.5} secondary />

    <p>progress=0.6 buffer=0.8</p>
    <LinearProgress progress={0.6} buffer={0.8} />

    <p>progress=0.3 reversed</p>
    <LinearProgress progress={0.2} reversed />

    <p>reversed</p>
    <LinearProgress reversed />
  </section>
)
