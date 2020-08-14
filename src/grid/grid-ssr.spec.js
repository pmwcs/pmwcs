/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { Grid, GridCell } from './'

describe('Grid SSR', () => {
  it('renders', () => {
    mount(
      <Grid>
        <GridCell>One</GridCell>
        <GridCell>Two</GridCell>
      </Grid>
    )
  })
})
