/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { TextField } from './'

describe('TextField SSR', () => {
  it('renders', () => {
    mount(<TextField />)
  })
})
