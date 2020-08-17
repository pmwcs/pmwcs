/** @jsx h */

import { h } from 'preact'

import './styles.js'
import './stories.css'

import { Button } from './index.js'
import { Typography } from '../typography'

export default {
  title: 'Button',
  component: Button
}

export const basic = () => (
  <section className='mdc-typography button-stories'>
    <Typography use='body1'>Icon Buttons</Typography>

    <Button label='Icon' icon='favorite' />
    <Button label='Trailing' trailingIcon='keyboard_arrow_right' />
    {/* <Button label="Loading" icon={<CircularProgress />} /> */}
    <Button label='Rate it!' icon='star' raised />

    <Typography use='body1'>Text Button</Typography>

    <Button label='Raised' raised />
    <Button label='Unelevated' unelevated />
    <Button label='Outlined' outlined />
    <Button label='Dense' dense />
    <Button label='No Ripple' ripple={false} />

    <Typography use='body1'>Text Button (secondary)</Typography>

    <Button label='Raised' raised secondary />
    <Button label='Unelevated' unelevated secondary />
    <Button label='Outlined' outlined secondary />
    <Button label='Dense' dense secondary />
    <Button label='No Ripple' ripple={false} secondary />

    <Typography use='body1'>Danger Button</Typography>

    <Button label='Danger' danger raised />
    <Button label='Danger' danger outlined />
    <Button label='Danger' danger />

    <Typography use='body1'>Themed Button</Typography>

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
