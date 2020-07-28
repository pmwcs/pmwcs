/** @jsx h */
import { h } from 'preact'
import './styles.js'

import {
  Theme,
  ThemeProvider
} from './index.js'

import { Button } from '@pmwc/button'
import { Checkbox } from '@pmwc/checkbox'
import { Radio } from '@pmwc/radio'

export default {
  title: 'Theme',
  component: Theme,
};

export const themeOptions = () => (
  <section>
  <div style={{ backgroundColor: '#ddd' }}>
    {[
      'primary',
      'secondary',
      'error',
      'background',
      'surface',
      'primaryBg',
      'secondaryBg',
      'textPrimaryOnBackground',
      'textSecondaryOnBackground',
      'textHintOnBackground',
      'textDisabledOnBackground',
      'textIconOnBackground',
      'textPrimaryOnLight',
      'textSecondaryOnLight',
      'textHintOnLight',
      'textDisabledOnLight',
      'textIconOnLight'
    ].map((theme, i) => (
      <Theme use={theme} key={i}>
        <p>
          {theme}
        </p>
      </Theme>
    ))}
  </div>
  <div style={{ backgroundColor: '#333' }}>
    {[
      'onPrimary',
      'onSecondary',
      'onError',
      'textPrimaryOnDark',
      'textSecondaryOnDark',
      'textHintOnDark',
      'textDisabledOnDark',
      'textIconOnDark'
    ].map((theme, i) => (
      <Theme use={theme} key={i}>
        <p>
          {theme}
        </p>
      </Theme>
    ))}
  </div>
  </section>
)

export const themeProvider = () => (
<ThemeProvider
  options={{
    primary: 'red',
    secondary: 'blue'
  }}
>
  <Button raised>Cookies</Button>
  <Checkbox label="Pizza" defaultChecked />
  <Radio label="Icecream" defaultChecked />
</ThemeProvider>
)

export const themeProvider2 = () => (
<ThemeProvider
  options={{
    primary: 'lightpink',
    secondary: 'black',
    onPrimary: '#000',
    textPrimaryOnBackground: 'black'
  }}
>
  <Button raised>Cookies</Button>
  <Checkbox label="Pizza" defaultChecked />
  <Radio label="Icecream" defaultChecked />
</ThemeProvider>
)

export const themeProvider3 = () => (
<Theme use={['primaryBg', 'onPrimary']} wrap>
  {/* Add Theme colors to your own components. */}
  <div style={{ width: '4rem', height: '4rem', padding: '1rem' }}>
    Cookies
  </div>
</Theme>
)

export const themeComponent = () => (
<section>
  {/* These two examples are roughly equivalent. */}
  <Theme use={['secondaryBg', 'onSecondary']} wrap>
    <Button>Pizza</Button>
  </Theme>

  <Button theme={['secondaryBg', 'onSecondary']}>Pizza</Button>
</section>
)

export const themeComponent2 = () => (
<section>
  {/* Text is one of the cases where `wrap` is not required. By default `Theme` will insert `span` tags. */}
  <h3>
    I <Theme use="primary">Want</Theme>{' '}
    <Theme use="secondary">Icecream</Theme>
  </h3>
</section>
)
