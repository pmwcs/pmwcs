/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
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

export const controlled = () => {
  function Controlled () {
    const [page, setPage] = useState(2)
    const rowsPerPageOptions = [
      10, 25, { value: -1, label: 'Todas' }
    ]
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0])

    return (
      <DataTablePagination
        count={55}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
        onChangePage={(_, page) => setPage(page)}
        onChangeRowsPerPage={(_, rowsPerPage) => setRowsPerPage(rowsPerPage)}
        labelRowsPerPage='Filas por página'
        labelDisplayedRows={({ from, to, count }) => `del ${from} a ${to} ${count === -1 ? '' : `de ${count}`}`}
      />
    )
  }

  return (
    <section className='mdc-typography'>
      <Controlled />
    </section>
  )
}
