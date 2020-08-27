/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import './styles.js'

import {
  DataTable,
  DataTableContent,
  DataTableHead,
  DataTableRow,
  DataTableHeadCell,
  DataTableBody,
  DataTableCell,
  SimpleDataTable
} from './index.js'

import { Checkbox } from '@pmwcs/checkbox'
import { Switch } from '@pmwcs/switch'
import { Select } from '@pmwcs/select'

export default {
  title: 'DataTable',
  component: DataTable
}

export const standardTable = () => {
  function Example () {
    const [sortDir, setSortDir] = useState(null)
    return (
      <DataTable>
        <DataTableContent>
          <DataTableHead>
            <DataTableRow>
              <DataTableHeadCell>Item</DataTableHeadCell>
              <DataTableHeadCell
                alignEnd
                sort={sortDir}
                onSortChange={sortDir => {
                  setSortDir(sortDir)
                  console.log(sortDir)
                }}
              >
                Quantity (Click Me)
              </DataTableHeadCell>
              <DataTableHeadCell alignEnd>Unit price</DataTableHeadCell>
            </DataTableRow>
          </DataTableHead>
          <DataTableBody>
            <DataTableRow>
              <DataTableCell>Cookies</DataTableCell>
              <DataTableCell alignEnd>25</DataTableCell>
              <DataTableCell alignEnd>$2.90</DataTableCell>
            </DataTableRow>
            <DataTableRow selected>
              <DataTableCell>Pizza</DataTableCell>
              <DataTableCell alignEnd>50</DataTableCell>
              <DataTableCell alignEnd>$1.25</DataTableCell>
            </DataTableRow>
            <DataTableRow>
              <DataTableCell>Icecream</DataTableCell>
              <DataTableCell alignEnd>10</DataTableCell>
              <DataTableCell alignEnd>$2.35</DataTableCell>
            </DataTableRow>
          </DataTableBody>
        </DataTableContent>
      </DataTable>
    )
  }
  return <Example />
}

export const scrollableTable = () => {
  function Example () {
    const [rows, setRows] = useState(0)
    const [cols, setCols] = useState(0)
    const sampleColumns = Array(7).fill(undefined)
    const sampleRows = Array(50).fill(undefined)

    return (
      <section>
        <DataTable
          style={{ height: '300px', width: '375px', overflow: 'scroll' }}
          stickyRows={rows}
          stickyColumns={cols}
        >
          <DataTableContent>
            <DataTableHead>
              <DataTableRow>
                <DataTableHeadCell>Label</DataTableHeadCell>
                {sampleColumns.map((v, i) => (
                  <DataTableHeadCell key={i}>Header</DataTableHeadCell>
                ))}
              </DataTableRow>
            </DataTableHead>
            <DataTableBody>
              {sampleRows.map((v, i) => (
                <DataTableRow key={i}>
                  <DataTableCell>Label</DataTableCell>
                  <DataTableCell>R{i} C1</DataTableCell>
                  <DataTableCell>R{i} C2</DataTableCell>
                  <DataTableCell>R{i} C3</DataTableCell>
                  <DataTableCell>R{i} C4</DataTableCell>
                  <DataTableCell>R{i} C5</DataTableCell>
                  <DataTableCell>R{i} C6</DataTableCell>
                  <DataTableCell>R{i} C7</DataTableCell>
                </DataTableRow>
              ))}
            </DataTableBody>
          </DataTableContent>
        </DataTable>

        <div className='doc-controls'>
          <Select
            label='Sticky Rows'
            options={['0', '1']}
            value={String(rows)}
            onChange={evt => setRows(Number(evt.currentTarget.value))}
          />
          <Select
            label='Sticky Cols'
            options={['0', '1']}
            value={String(cols)}
            onChange={evt => setCols(Number(evt.currentTarget.value))}
          />
        </div>
      </section>
    )
  }
  return <Example />
}

export const formControl = () => {
  function Example () {
    const [checked, setChecked] = useState({})
    const sampleRows = new Array(5).fill(undefined)

    return (
      <DataTable>
        <DataTableContent>
          <DataTableHead>
            <DataTableRow>
              <DataTableHeadCell hasFormControl>
                <Checkbox />
              </DataTableHeadCell>
              <DataTableHeadCell>Label</DataTableHeadCell>
              <DataTableHeadCell>Header</DataTableHeadCell>
              <DataTableHeadCell>Header</DataTableHeadCell>
              <DataTableHeadCell>Toggle</DataTableHeadCell>
            </DataTableRow>
          </DataTableHead>
          <DataTableBody>
            {sampleRows.map((v, i) => (
              <DataTableRow key={i} selected={checked[i]}>
                <DataTableCell hasFormControl>
                  <Checkbox
                    checked={checked[i]}
                    onChange={evt => {
                      checked[i] = evt.currentTarget.checked
                      setChecked({ ...checked })
                    }}
                  />
                </DataTableCell>
                <DataTableCell>Label</DataTableCell>
                <DataTableCell>
                  <Select
                    placeholder='--Select--'
                    options={['Cookies', 'Pizza', 'Icecream']}
                  />
                </DataTableCell>
                <DataTableCell>R{i} C3</DataTableCell>
                <DataTableCell>
                  <Switch />
                </DataTableCell>
              </DataTableRow>
            ))}
          </DataTableBody>
        </DataTableContent>
      </DataTable>
    )
  }
  return <Example />
}

export const simplified = () => (
  <SimpleDataTable
    getRowProps={row => {
      return row[1] > 100 ? { activated: true } : {}
    }}
    getCellProps={(cell, index, isHead) => {
      const props = { isNumeric: index > 0, style: undefined }

      return !isHead && index === 2 && !cell.includes('$')
        ? { ...props, style: { color: 'red' } }
        : props
    }}
    headers={[['Item', 'Quantity', 'Value']]}
    data={[
      ['Cookies', 25, '$12.40'],
      ['Pizza', 11, '$10.43'],
      ['Icecream', 3, '1.43'],
      ['Candy', 72, '$22.45'],
      ['Cakes', 101, '$215.05'],
      ['Muffins', 3, '$5.97']
    ]}
  />
)
