/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { Select } from './'

describe('Select SSR', () => {
  it('renders', () => {
    mount(
      <Select
        placeholder='Select a food'
        options={{ 1: 'Cookies', 2: 'Pizza', 3: 'Icecream' }}
      />
    )
  })
})
