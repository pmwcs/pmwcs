import { h } from 'preact'
import { mount } from 'enzyme'
import {
  List,
  ListItem,
  ListItemPrimaryText,
  ListItemGraphic,
  ListItemMeta,
  SimpleListItem,
  CollapsibleList
} from './'

describe('List', () => {
  it('renders', () => {
    const el = mount(
      <List>
        <ListItem ripple>
          <ListItemGraphic />
          <ListItemPrimaryText>Cookies</ListItemPrimaryText>
          <ListItemMeta />
        </ListItem>
        <ListItem ripple={false}>
          <ListItemGraphic />
          <ListItemPrimaryText>Cookies</ListItemPrimaryText>
          <ListItemMeta />
        </ListItem>
      </List>
    )

    el.unmount()
  })

  // FIXME: click does not bubble into click handler of foundation
  it.skip('handles onAction', async () => {
    let clickedIndex

    const el = mount(
      <List onAction={(evt) => { clickedIndex = evt.detail }}>
        <ListItem>
          <ListItemPrimaryText>Cookies</ListItemPrimaryText>
        </ListItem>
        <ListItem>
          <ListItemPrimaryText>Pizza</ListItemPrimaryText>
        </ListItem>
      </List>
    )

    el.find('li').last().simulate('click')

    expect(clickedIndex).toEqual({ index: 1 })
  })

  it('SimpleListItem renders', () => {
    mount(
      <List>
        <SimpleListItem graphic='star_border' text='Cookies' />
        <SimpleListItem
          graphic='star_border'
          text='Cookies'
          secondaryText='Chocolate chip'
        />
        <SimpleListItem
          graphic='star_border'
          text='Cookies'
          secondaryText='Chocolate chip'
          meta='info'
        />
      </List>
    )
  })

  it('SimpleListItem can have children', () => {
    const el = mount(
      <SimpleListItem
        graphic='star_border'
        text='Cookies'
        secondaryText='Chocolate chip'
        meta='info'
      >
        <aside>Test</aside>
      </SimpleListItem>
    )
    expect(el.find('aside').length).toBe(1)
  })

  it('can have custom classnames', () => {
    [List, ListItem, ListItemPrimaryText].forEach(
      (Component) => {
        const el = mount(<Component className='my-custom-classname' />)
        expect(!!~el.html().search('my-custom-classname')).toEqual(true)
      }
    )
  })

  it('can be activated', () => {
    const el = mount(<ListItem activated />)
    expect(!!~el.html().search('mdc-list-item--activated')).toEqual(true)
  })

  it('can be selected', () => {
    const el = mount(<ListItem selected />)
    expect(!!~el.html().search('mdc-list-item--selected')).toEqual(true)
  })

  it('handles events', () => {
    const el = mount(
      <List>
        <SimpleListItem />
        <SimpleListItem />
      </List>
    )
    // console.log(el.debug())
    const $list = el.find('ul.mdc-list').at(0)
    $list.simulate('focus')
    el.find('li.mdc-list-item').at(0).simulate('keydown')
    $list.simulate('click')
    $list.simulate('blur')
  })
})

describe('Collapsible List', () => {
  it('renders', () => {
    mount(
      <List>
        <ListItem>One</ListItem>
        <CollapsibleList handle={<ListItem>Handle</ListItem>}>
          <ListItem>Two</ListItem>
        </CollapsibleList>
      </List>
    )
  })

  it('handles lifecycle', (done) => {
    const el = mount(
      <List>
        <ListItem>One</ListItem>
        <CollapsibleList
          defaultOpen
          handle={<ListItem className='handle'>Handle</ListItem>}
        >
          <ListItem>Two</ListItem>
        </CollapsibleList>
      </List>
    )

    el.update()
    setTimeout(() => {
      el.setProps({ open: false })
      el.update()
      // console.log(el.debug())
      el.find('li.handle').first().simulate('click')
      done()
    }, 300)
  })

  it('handles events', (done) => {
    const el = mount(
      <List>
        <ListItem>One</ListItem>
        <CollapsibleList
          defaultOpen
          handle={<ListItem className='handle'>Handle</ListItem>}
        >
          <ListItem>Two</ListItem>
        </CollapsibleList>
      </List>
    )

    const root = el.find('div.pmwc-collapsible-list').first()
    root.simulate('focus')

    const handle = el.find('li.handle').first()
    handle.simulate('click')
    handle.simulate('keydown', { which: 13 })
    handle.simulate('keydown', { which: 39 })
    handle.simulate('keydown', { which: 38 })
    handle.simulate('keydown', { which: 40 })
    handle.simulate('keydown', { which: 40, shiftKey: true })
    handle.simulate('keydown', { which: 9 })
    handle.simulate('keydown', { which: 37 })
    handle.simulate('keydown', { which: null })

    setTimeout(() => {
      done()
    }, 500)
  })
})
