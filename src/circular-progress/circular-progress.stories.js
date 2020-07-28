/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import './styles.js'

import {
  CircularProgress
} from './index.js'

import { Button } from '@pmwc/button'

export default {
  title: 'CircularProgress',
  component: CircularProgress,
};

export const all = () => (
  <section>
    <CircularProgress />

    <CircularProgress progress={0.3} />
    <CircularProgress progress={0.6} />
    <CircularProgress progress={0.9} />
  </section>
)

export const sizing = () => (
  <section>
    <CircularProgress size="xsmall" />
    <CircularProgress size="small" />
    <CircularProgress size="medium" />
    <CircularProgress size="large" />
    <CircularProgress size="xlarge" />
    <CircularProgress size={72} />
  </section>
)

export const useWithOthers = () => (
  <section>
    <Button
      icon={<CircularProgress theme="secondary" />}
      label="Cookies"
    />
    {/*
    <List>
      <SimpleListItem graphic={<CircularProgress />} text="Pizza" />
      <SimpleListItem graphic="favorite" text="Icecream" />
    </List>

    <Chip icon={<CircularProgress />} label="Donuts" />
    */}
  </section>
)
