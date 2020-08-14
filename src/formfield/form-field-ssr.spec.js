/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { FormField } from './'

describe('FormField SSR', () => {
  test('renders', () => {
    mount(
      <FormField>
        <input type='checkbox' id='input' />
        <label htmlFor='input'>Input Label</label>
      </FormField>
    )
  })
})
