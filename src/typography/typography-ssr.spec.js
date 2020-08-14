/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { Typography } from './'

describe('Typography SSR', () => {
  it('renders', () => {
    mount(<Typography use='body1' />)
  })
})
