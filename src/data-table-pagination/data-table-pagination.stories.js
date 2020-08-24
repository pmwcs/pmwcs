/** @jsx h */
import { h } from 'preact'
// import { useState } from 'preact/hooks'
import { action } from '@storybook/addon-actions'
import './styles.js'

import {
  DataTablePagination
} from './index.js'

export default {
  title: 'DataTablePagination',
  component: DataTablePagination
}

export const basic = () => {
  return (
    <section className='mdc-typography'>
      <p />
      <DataTablePagination
        onChangePage={action('page')}
        onChangeRowsPerPage={action('rows')}
      />

      <p>{'count={12}'}</p>
      <DataTablePagination
        count={12}
        onChangePage={action('page')}
        onChangeRowsPerPage={action('rows')}
      />

      <p>{"count={55} rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]}"}</p>
      <DataTablePagination
        count={55}
        rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]}
        onChangePage={action('page')}
        onChangeRowsPerPage={action('rows')}
      />

      <p>{'count={12} enhanced'}</p>
      <DataTablePagination
        enhanced
        count={12}
        onChangePage={action('page')}
        onChangeRowsPerPage={action('rows')}
      />
    </section>
  )
}
