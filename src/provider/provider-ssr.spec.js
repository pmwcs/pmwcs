/**
 * @jest-environment node
 */

import { h } from 'preact'
import mount from 'preact-render-to-string'
import { PMWCProvider } from './'

describe('Provider SSR', () => {
  it('renders', () => {
    const el = mount(
      <PMWCProvider>
        <div />
      </PMWCProvider>
    )
    expect(el).toEqual('<div></div>')
  })
})
