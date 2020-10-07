import { h } from 'preact'
import { mount } from 'enzyme'
import { Ellipsis } from './'

describe('Ellipsis', () => {
  it('renders equal', () => {
    const ellipsis = mount(<Ellipsis>This is an text with ellipsis!</Ellipsis>)
    expect(ellipsis.html()).toEqual('<div class="pmwc-ellipsis">This is an text with ellipsis!</div>')
  })
})
