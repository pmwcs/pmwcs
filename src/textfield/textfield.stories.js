/** @jsx h */

import { h } from 'preact'

import './styles.js'
// import './stories.css'

import { TextField } from './index.js'

export default {
  title: 'TextField',
  component: TextField
}

function Br () {
  return (
    <div style={{ height: '2em', width: '100%' }}>
      {' '}
    </div>
  )
}

export const variants = () => (
  <section>
    <TextField type='text' label='standard...' />
    <Br />

    <TextField outlined label='outlined...' />
    <Br />

    <TextField fullwidth placeholder='fullWidth...' />
    <Br />

    <TextField placeholder='No label' />
    <Br />

    {/* Leading and trailing icons can be used. */}
    <TextField icon='search' trailingIcon='close' label='icon...' />
    <Br />

    {/* If you need full control over the icon, you can pass the icon as options with your own props. Dont forget the TabIndex to make it clickable */}
    <TextField
      label='trailingIcon...'
      trailingIcon={{
        icon: 'close',
        tabIndex: 0,
        onClick: () => console.log('Clear')
      }}
    />
    <Br />

  </section>
)

export const textarea = () => (

  <TextField
    textarea
    outlined
    fullwidth
    label='textarea...'
    rows={8}
    maxLength={20}
    characterCount
    helpText={{
      persistent: true,
      validationMsg: true,
      children: 'The field is required'
    }}
  />

)

export const validation = () => (
  <section>

    <TextField disabled label='Disabled...' />
    <Br />

    <TextField required label='Required...' value='' />
    <Br />

    <TextField
      invalid
      label='Invalid...'
      value='#@!$'
      onChange={() => {}}
    />
    <Br />

    <TextField
      label='Validate Pattern'
      maxLength={3}
      pattern='[A-Za-z]{3}'
      helpText={<span>Enter three letters [A-Za-z]{3} blabla bla bla</span>}
    />
    <Br />

    <TextField label='Validate Pattern' pattern='[A-Za-z]{3}' />
    <Br />

  </section>
)

export const HtmlInputTypes = () => (
  <section>

    <TextField label='text' type='text' />
    <Br />

    <TextField label='color' type='color' style={{ width: '6rem' }} />
    <Br />

    <TextField label='date' type='date' />
    <Br />

    <TextField label='datetime-local' type='datetime-local' />
    <Br />

    <TextField label='month' type='month' />
    <Br />

    <TextField label='range' type='range' />
    <Br />

    <TextField label='time' type='time' />
    <Br />

    <TextField label='week' type='week' />
    <Br />

  </section>
)
