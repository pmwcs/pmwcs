/**
 * @jest-environment node
 */

import { h } from 'preact'
import mount from 'preact-render-to-string'
import { ButtonGroup } from './'
import { Button } from '@pmwc/button'

describe('ButtonGroup SSR', () => {
  it('renders', () => {
    mount(
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    )
  })
})
