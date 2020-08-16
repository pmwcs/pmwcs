/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { Tooltip } from './'

describe.skip('Tooltip SSR', () => {
  it('renders', () => {
    mount(
      <Tooltip content='tooltip'>
        <span>test</span>
      </Tooltip>
    )
  })
})
