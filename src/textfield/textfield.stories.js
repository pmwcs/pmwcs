/** @jsx h */

import { h } from 'preact'

import './styles.js'
// import './stories.css'

import { TextField } from './index.js'

export default {
  title: 'TextField',
  component: TextField,
};

const Block = ({children, ...props}) => (
  <div style={{margin: '1.5em 0.5em'}}>
    {children}
  </div>
)

export const variants = () => (
  <section>
    {/*<Block>
    <label class="mdc-text-field mdc-text-field--filled">
      <span class="mdc-text-field__ripple"></span>
      <input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id"/>
      <span class="mdc-floating-label" id="my-label-id">Hint text</span>
      <span class="mdc-line-ripple"></span>
    </label>
    </Block>*/}

    <Block>
      <TextField type="text" label="standard..." />
    </Block>
    <Block>
      <TextField outlined label="outlined..." />
    </Block>
    <Block>
      <TextField fullwidth placeholder="fullWidth..." />
    </Block>
    <Block>
      <TextField placeholder="No label" />
    </Block>
    <Block>
      {/* Leading and trailing icons can be used.*/}
      <TextField icon="search" trailingIcon="close" label="icon..." />
    </Block>
    <Block>
      {/* If you need full control over the icon, you can pass the icon as options with your own props. Dont forget the TabIndex to make it clickable*/}
      <TextField
        label="trailingIcon..."
        trailingIcon={{
          icon: 'close',
          tabIndex: 0,
          onClick: () => console.log('Clear')
        }}
      />
    </Block>
  </section>
)

export const textarea = () => (
  <Block>
    <TextField
      textarea
      outlined
      fullwidth
      label="textarea..."
      rows={8}
      maxLength={20}
      characterCount
      helpText={{
        persistent: true,
        validationMsg: true,
        children: 'The field is required'
      }}
    />
  </Block>
)

export const validation = () => (
  <section>
    <Block>
      <TextField disabled label="Disabled..." />
    </Block>
    <Block>
      <TextField required label="Required..." value="" />
    </Block>
    <Block>
      <TextField
        invalid
        label="Invalid..."
        value="#@!$"
        onChange={() => {}}
      />
    </Block>
    <Block>
      <TextField
        label="Validate Pattern"
        maxLength={3}
        pattern="[A-Za-z]{3}"
        helpText={<span>Enter three letters [A-Za-z]{3} blabla bla bla</span>}/>
    </Block>
    <Block>
      <TextField label="Validate Pattern" pattern="[A-Za-z]{3}" />
    </Block>
  </section>
)

export const HtmlInputTypes = () => (
  <section>
    <Block>
      <TextField label="text" type="text" />
    </Block>
    <Block>
      <TextField label="color" type="color" style={{ width: '6rem' }} />
    </Block>
    <Block>
      <TextField label="date" type="date" />
    </Block>
    <Block>
      <TextField label="datetime-local" type="datetime-local" />
    </Block>
    <Block>
      <TextField label="month" type="month" />
    </Block>
    <Block>
      <TextField label="range" type="range" />
    </Block>
    <Block>
      <TextField label="time" type="time" />
    </Block>
    <Block>
      <TextField label="week" type="week" />
    </Block>
  </section>
)
