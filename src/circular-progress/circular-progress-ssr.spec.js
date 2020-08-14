/**
 * @jest-environment node
 */

import { h } from 'preact'
import mount from 'preact-render-to-string'
import { CircularProgress } from './'

describe('Button', () => {
  it('renders', () => {
    mount(<CircularProgress />)
  })
})
