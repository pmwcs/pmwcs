/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { Snackbar } from './snackbar'

describe('Snackbar', () => {
  it('renders', () => {
    mount(
      <Snackbar
        open
        onClose={(evt) => {}}
        message='This is a new message'
        action={<div />}
      />
    )
  })
})
