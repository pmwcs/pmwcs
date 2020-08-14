/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { Theme, ThemeProvider } from './'
import { themeOptions } from './theme-options'

describe('Theme SSR', () => {
  test('renders', () => {
    themeOptions.map((theme, i) =>
      mount(
        <Theme key={i} use={theme}>
          {theme}
        </Theme>
      )
    )
  })

  test('ThemeProvider renders', () => {
    mount(
      <ThemeProvider options={{ primary: 'red' }}>
        <div />
      </ThemeProvider>
    )
  })
})
