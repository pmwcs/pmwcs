import { h } from 'preact'
import mount from 'preact-render-to-string'
import { Fab } from './'

describe('Fab SSR', () => {
  it('renders', () => {
    mount(<Fab icon='favorite' />)
  })
})
