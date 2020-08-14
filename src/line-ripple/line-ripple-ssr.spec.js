/**
 * @jest-environment node
 */

import { h } from 'preact'
import mount from 'preact-render-to-string'
import { LineRipple } from './'

describe('LineRipple SSR', () => {
  it('renders', () => {
    mount(<LineRipple />)
  })
})
