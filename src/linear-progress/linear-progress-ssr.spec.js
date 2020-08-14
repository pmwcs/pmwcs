/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { LinearProgress } from './'

describe('LinearProgress SSR', () => {
  it('renders', () => {
    mount(<LinearProgress progress={0.5} />)
  })
})
