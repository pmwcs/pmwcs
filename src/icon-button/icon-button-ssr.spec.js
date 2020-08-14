/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { IconButton } from './'

describe('IconButton SSR', () => {
  it('renders', () => {
    mount(<IconButton onIcon='favorite' icon='favorite_border' />)
  })

  it('renders controlled', () => {
    mount(<IconButton checked onIcon='favorite' icon='favorite_border' />)
  })
})
