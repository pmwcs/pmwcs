/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { Ellipsis } from './'

describe('Ellipsis SSR', () => {
  it('renders equal', () => {
    const ellipsis = mount(<Ellipsis>This is an text with ellipsis!</Ellipsis>)
    expect(ellipsis).toEqual('<div class="pmwc-ellipsis">This is an text with ellipsis!</div>')
  })
})
