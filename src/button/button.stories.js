/** @jsx h */

import { h } from 'preact'

import './styles.js'
import './stories.css'

import { Button } from './index.js'
import { CircularProgress } from '../circular-progress/index.js'

export default {
  title: 'Button',
  component: Button
}

export const basic = () => (
  <section className='mdc-typography button-stories'>
    <p>Primary Text Button</p>

    <Button label='Raised' raised />
    <Button label='Unelevated' unelevated />
    <Button label='Outlined' outlined />
    <Button label='Dense' dense />
    <Button label='No Ripple' ripple={false} />
    <Button label='Disabled' disabled />

    <p>Secondary Text Button (secondary)</p>

    <Button label='Raised' raised secondary />
    <Button label='Unelevated' unelevated secondary />
    <Button label='Outlined' outlined secondary />
    <Button label='Dense' dense secondary />
    <Button label='No Ripple' ripple={false} secondary />
    <Button label='Disabled' secondary disabled />

    <p>Text Button (neutral)</p>

    <Button label='Raised' raised neutral />
    <Button label='Unelevated' unelevated neutral />
    <Button label='Outlined' outlined neutral />
    <Button label='Dense' dense neutral />
    <Button label='No Ripple' ripple={false} neutral />
    <Button label='Disabled' neutral disabled />

    <p>Danger Button (danger)</p>

    <Button label='Danger' danger raised />
    <Button label='Danger' danger outlined />
    <Button label='Danger' danger />
    <Button label='Disabled' danger disabled />

    <p>Text Button (disabled)</p>

    <Button disabled label='Raised' raised />
    <Button disabled label='Unelevated' unelevated />
    <Button disabled label='Outlined' outlined />
    <Button disabled label='Dense' dense />
    <Button disabled label='No Ripple' ripple={false} />
  </section>
)

export const withIcons = () => (
  <section className='mdc-typography button-stories'>
    <p>Icon Buttons</p>

    <Button label='Icon' icon='favorite' />
    <Button label='Trailing' trailingIcon='keyboard_arrow_right' />
    <Button label='Loading' icon={<CircularProgress />} />
    <Button label='Rate it!' icon='star' raised />

    <p> </p>
    <Button secondary label='Icon' icon='favorite' />
    <Button secondary label='Trailing' trailingIcon='keyboard_arrow_right' />
    <Button secondary label='Loading' icon={<CircularProgress secondary />} />
    <Button secondary label='Rate it!' icon='star' raised />

    <p> </p>
    <Button neutral label='Icon' icon='favorite' />
    <Button neutral label='Trailing' trailingIcon='keyboard_arrow_right' />
    <Button neutral label='Loading' icon={<CircularProgress neutral />} />
    <Button neutral label='Rate it!' icon='star' raised />

  </section>
)

export const themed = () => (
  <section className='mdc-typography button-stories'>
    <p>Themed Button</p>

    <Button
      label='With Theme'
      raised
      theme={['secondaryBg', 'onSecondary']}
    />
    {/**
      This example uses "accent" to control the color of the Ripple.
      See the documentation on Ripples.
    */}
    <Button label='With Theme' theme='secondary' />

  </section>
)
