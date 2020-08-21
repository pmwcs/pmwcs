import { h } from 'preact'
import { mount } from 'enzyme'
import { Pagination } from '.'

describe('Pagination', () => {
  it('should render', () => {
    const el = mount(<Pagination count={2} />)
    const html = el.html()
    expect(html.includes('<nav aria-label="pagination navigation">')).toEqual(true)
    expect(html.includes('<ul class="pmwc-pagination">')).toEqual(true)
    expect(el.find('button').length).toEqual(4)
  })

  it('moves aria-current to the specified page', () => {
    const el = mount(<Pagination count={3} page={1} />)
    expect(el.find('button').map((e) => e.props()['aria-label'])).toEqual([
      'Go to previous page',
      'page 1',
      'Go to page 2',
      'Go to page 3',
      'Go to next page'
    ])
    expect(el.find('button').at(1).props()['aria-current']).toEqual('true')
    expect(el.find('button').at(2).props()['aria-current']).toEqual(undefined)
  })

  it('fires onChange when a different page is clicked', () => {
    let page
    const handleChange = (_, page_) => { page = page_ }
    const el = mount(<Pagination count={3} onChange={handleChange} page={1} />)
    el.find('button').at(2).simulate('click')
    expect(page).toEqual(2)
  })
})
