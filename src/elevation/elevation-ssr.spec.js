import { h } from 'preact'
import mount from 'preact-render-to-string'
import { Elevation } from './'

describe('Elevation SSR', () => {
  it('renders', () => {
    mount(<Elevation z={0} />)
  })
})
