/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { Ripple } from './'

describe('Ripple SSR', () => {
  it('renders', () => {
    mount(
      <Ripple>
        <div />
      </Ripple>
    )
  })
})
