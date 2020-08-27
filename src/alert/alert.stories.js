/** @jsx h */

import { h } from 'preact'
import { action } from '@storybook/addon-actions'

import './styles.js'
// import './stories.css'

import { Alert, AlertTitle } from './index.js'
import { Button } from '@pmwcs/button'

export default {
  title: 'Alert',
  component: Alert
}

const Br = () => (
  <p> </p>
)

export const basic = () => (
  <section className='mdc-typography'>
    <Alert severity='error'>This is an error alert — check it out!</Alert>
    <Br />
    <Alert severity='warning'>This is a warning alert — check it out!</Alert>
    <Br />
    <Alert severity='info'>This is an info alert — check it out!</Alert>
    <Br />
    <Alert severity='success'>This is a success alert — check it out!</Alert>

    <p>defaults to a warning alert</p>
    <Alert>This is a warning alert — check it out!</Alert>

    <p>custom icon</p>
    <Alert icon='check' severity='success'>This is a success alert — check it out!</Alert>

    <p>no icon</p>
    <Alert icon={false} severity='success'>This is a success alert — check it out!</Alert>

  </section>
)

export const outlined = () => (
  <section className='mdc-typography'>
    <Alert outlined severity='error'>This is an error alert — check it out!</Alert>
    <Br />
    <Alert outlined severity='warning'>This is a warning alert — check it out!</Alert>
    <Br />
    <Alert outlined severity='info'>This is an info alert — check it out!</Alert>
    <Br />
    <Alert outlined severity='success'>This is a success alert — check it out!</Alert>
  </section>
)

export const filled = () => (
  <section className='mdc-typography'>
    <Alert filled severity='error'>This is an error alert — check it out!</Alert>
    <Br />
    <Alert filled severity='warning'>This is a warning alert — check it out!</Alert>
    <Br />
    <Alert filled severity='info'>This is an info alert — check it out!</Alert>
    <Br />
    <Alert filled severity='success'>This is a success alert — check it out!</Alert>
  </section>
)

export const alertTitle = () => (
  <section className='mdc-typography'>
    <Alert severity='error'>
      <AlertTitle>Error</AlertTitle>
      This is an error alert — <strong>check it out!</strong>
    </Alert>
    <Br />

    <Alert severity='warning'>
      <AlertTitle>Warning</AlertTitle>
      This is a warning alert — <strong>check it out!</strong>
    </Alert>
    <Br />

    <Alert severity='info'>
      <AlertTitle>Info</AlertTitle>
      This is an info alert — <strong>check it out!</strong>
    </Alert>
    <Br />

    <Alert severity='success'>
      <AlertTitle>Success</AlertTitle>
      This is a success alert — <strong>check it out!</strong>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </Alert>
    <Br />

    <Alert severity='success' filled onClose={() => {}}>
      <AlertTitle>Success</AlertTitle>
      This is a success alert — <strong>check it out!</strong>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </Alert>
    <Br />

    <Alert severity='info' outlined action={<Button standard onClick={() => {}}>OK</Button>}>
      <AlertTitle>Info</AlertTitle>
      This is a success alert — <strong>check it out!</strong>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </Alert>
  </section>
)

export const actions = () => (
  <section className='mdc-typography'>
    <Alert onClose={() => {}}>
      This is a warning alert — check it out!
    </Alert>
    <Br />

    <Alert action={<Button standard onClick={() => {}}>UNDO</Button>}>
      This is a warning alert — check it out!
    </Alert>
    <Br />

    <Alert severity='success' onClose={action('onClose')}>
      This is a success alert — check it out!
    </Alert>
    <Br />

    <Alert severity='info' action={<Button standard onClick={action('undo')}>UNDO</Button>}>
      This is a success alert — check it out!
    </Alert>
    <Br />

    <Alert outlined severity='error' action={<Button standard onClick={() => {}}>UNDO</Button>}>
      This is a outlined error alert — check it out!
    </Alert>
    <Br />

    <Alert filled severity='error' onClose={() => {}}>
      This is a filled error alert — check it out!
    </Alert>
    <Br />

    <Alert filled severity='info' action={<Button standard onClick={() => {}}>UNDO</Button>}>
      This is a filled info alert — check it out!
    </Alert>
    <Br />
  </section>
)
