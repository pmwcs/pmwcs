/**
 * @jest-environment node
 */

import { h } from 'preact'
import mount from 'preact-render-to-string'
import { PMWCSProvider } from './'

describe('Provider SSR', () => {
  it('renders', () => {
    const el = mount(
      <PMWCSProvider>
        <div />
      </PMWCSProvider>
    )
    expect(el).toEqual('<div></div>')
  })
})
