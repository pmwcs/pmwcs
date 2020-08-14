import { h } from 'preact'
import mount from 'preact-render-to-string'
import { FloatingLabel } from './'

describe('FloatingLabel SSR', () => {
  it('renders', () => {
    mount(<FloatingLabel />)
  })
})
