import { h } from 'preact'
import { mount } from 'enzyme'
import sinon from 'sinon'

import {
  DataTablePagination
} from './'

const BUTTONS = 'button.mdc-icon-button'
const OPTIONS = 'option'
const SELECT = 'select'

describe('DataTablePagination', () => {
  it('renders', () => {
    const el = mount(<DataTablePagination />)
    expect(el.html().includes('Rows per page:')).toEqual(true)
  })

  it('renders controlled mode page=2 count=12', () => {
    const el = mount(<DataTablePagination page={2} count={12} />)
    expect(el.html().includes('11-12 of 12')).toEqual(true)
  })

  it('renders uncontrolled mode defaultPage=2 count=12', () => {
    const el = mount(<DataTablePagination defaultPage={2} count={12} />)
    expect(el.html().includes('11-12 of 12')).toEqual(true)
  })

  it('renders default rows of page options', () => {
    const spy = sinon.spy()
    const el = mount(<DataTablePagination count={22} onChangePage={spy} />)

    expect(el.find(OPTIONS).map(i => i.text()))
      .toEqual(['10', '25', '50', '100'])
    expect(el.find(OPTIONS).map(i => i.props().value))
      .toEqual([10, 25, 50, 100])

    const isOnPage1 = () => expect(el.html().includes('1-10 of 22')).toEqual(true)
    const isOnPage2 = () => expect(el.html().includes('11-20 of 22')).toEqual(true)
    const isOnPage3 = () => expect(el.html().includes('21-22 of 22')).toEqual(true)
    const buttons = el.find(BUTTONS)

    isOnPage1()
    buttons.at(2).simulate('click') // next
    isOnPage2()
    buttons.at(2).simulate('click') // next
    isOnPage3()
    buttons.at(0).simulate('click') // first
    isOnPage1()
    buttons.at(3).simulate('click') // last
    isOnPage3()
    buttons.at(1).simulate('click') // prev
    isOnPage2()
    buttons.at(1).simulate('click') // prev
    isOnPage1()

    // received pages via onChangePage
    expect(spy.args.map(a => a[1])).toEqual([2, 3, 1, 3, 2, 1])
  })

  it('renders custom rows of page options', () => {
    const el = mount(
      <DataTablePagination
        count={22}
        rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]}
      />
    )

    expect(el.find(OPTIONS).map(el => el.text()))
      .toEqual(['10', '50', 'All'])
    expect(el.find(OPTIONS).map(el => el.props().value))
      .toEqual([10, 50, -1])
  })

  it('renders all rows', () => {
    const el = mount(
      <DataTablePagination
        count={22}
        rowsPerPage={-1}
        rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]}
      />
    )

    expect(el.find(SELECT).first().props().value).toEqual('-1')
    expect(el.html().includes('1-22 of 22')).toEqual(true)

    // all buttons are disabled
    expect(el.find(BUTTONS).map(el => el.props().disabled)).toEqual([true, true, true, true])
  })
})
