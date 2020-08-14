/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { Radio } from './'

describe('Radio SSR', () => {
  test('renders', () => {
    mount(<Radio />)
  })
})
