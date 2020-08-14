/**
 * @jest-environment node
 */

import { h } from 'preact'
import mount from 'preact-render-to-string'
import { Button } from './'

describe('Button SSR', () => {
  it('renders', () => {
    mount(<Button icon='favorite'>Button</Button>)
  })
})
