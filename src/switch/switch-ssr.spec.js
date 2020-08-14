/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { Switch } from './'

describe('Switch SSR', () => {
  test('renders', () => {
    mount(<Switch />)
  })
})
