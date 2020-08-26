/**
 * @jest-environment node
 */

import { h } from 'preact'
import mount from 'preact-render-to-string'

import {
  DataTablePagination
} from './'

describe('DataTablePagination', () => {
  it('renders', () => {
    const str = mount(<DataTablePagination />)
    expect(str.includes('Rows per page:')).toEqual(true)
  })
})
