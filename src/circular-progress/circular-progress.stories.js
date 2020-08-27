import { h } from 'preact'
import './styles.js'

import {
  CircularProgress
} from './index.js'

import { Button } from '@pmwcs/button'
import { List, SimpleListItem } from '@pmwcs/list'
import { Chip } from '@pmwcs/chip'

export default {
  title: 'CircularProgress',
  component: CircularProgress
}

export const basic = () => (
  <section className='mdc-typography'>
    <p />
    <CircularProgress />

    <p>secondary</p>
    <CircularProgress secondary />

    <p>progress={0.3} </p>
    <CircularProgress progress={0.3} />

    <p>progress={0.6}</p>
    <CircularProgress progress={0.6} />

    <p>progress={0.9} secondary</p>
    <CircularProgress progress={0.9} secondary />
  </section>
)

export const sizing = () => (
  <section className='mdc-typography'>
    <CircularProgress size='xsmall' />
    <CircularProgress size='small' />
    <CircularProgress size='medium' />
    <CircularProgress size='large' />
    <CircularProgress size='xlarge' />
    <CircularProgress size={72} />
  </section>
)

export const useWithOthers = () => (
  <section className='mdc-typography'>
    <Button
      icon={<CircularProgress theme='secondary' />}
      label='Cookies'
    />

    <List>
      <SimpleListItem graphic={<CircularProgress />} text='Pizza' />
      <SimpleListItem graphic='favorite' text='Icecream' />
    </List>

    <Chip icon={<CircularProgress />} label='Donuts' />

  </section>
)
