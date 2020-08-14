/** @jsx h */
import { h } from 'preact'
import './styles.js'

import {
  FormField
} from './index.js'

export default {
  title: 'FormField',
  component: FormField
}

export const basic = () => (
  <FormField>
    <input type='checkbox' id='input' />
    <label htmlFor='input'>Input Label</label>
  </FormField>
)
