/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { Checkbox } from './'

describe('Checkbox SSR', () => {
  test('renders', () => {
    mount(<Checkbox />)
  })
})
