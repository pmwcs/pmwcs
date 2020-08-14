/**
 * @jest-environment node
 */

import { h } from 'preact'
import mount from 'preact-render-to-string'
import { Chip, ChipSet } from './'

describe('Chip', () => {
  it('renders', () => {
    mount(
      <ChipSet>
        <Chip icon='favorite' label='One' />
      </ChipSet>
    )
  })
})
