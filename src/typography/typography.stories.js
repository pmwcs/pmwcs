/** @jsx h */
import { h } from 'preact'
import './styles.js'

import { Typography } from './index.js'

export default {
  title: 'Typography',
  component: Typography,
};

export const all = () => (
  <section className='mdc-typography'>
    <Typography use='headline1'>Headline 1</Typography>
    <Typography use='headline2'>Headline 2</Typography>
    <Typography use='headline3'>Headline 3</Typography>
    <Typography use='headline4'>Headline 4</Typography>
    <Typography use='headline5'>Headline 5</Typography>
    <Typography use='headline6'>Headline 6</Typography>
    <Typography use='subtitle1'>Subtitile 1</Typography>
    <Typography use='subtitle'>Subtitile 2</Typography>
    <Typography use='body1'>Body 1</Typography>
    <Typography use='body2'>Body 2</Typography>
    <div>
      <Typography use='button'>Button</Typography>
    </div>
    <div>
      <Typography use='caption'>Caption</Typography>
    </div>
    <div>
      <Typography use='overlay'>Overlay</Typography>
    </div >
  </section>
)
