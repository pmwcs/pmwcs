/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { NotchedOutline } from './'

describe('NotchedOutline SSR', () => {
  it('renders', () => {
    mount(<NotchedOutline />)
  })
})
