import { h } from 'preact'
import { mount } from 'enzyme'
import { PMWCSProvider } from './'
import { Button } from '../button'
import { Icon } from '../icon'

describe('Provider', () => {
  it('renders', () => {
    const el = mount(
      <PMWCSProvider>
        <div />
      </PMWCSProvider>
    )

    el.setProps({ ripple: false })
  })

  it('can set default ripple', () => {
    const dom = mount(
      <PMWCSProvider ripple={false}>
        <Button />
      </PMWCSProvider>
    )
    expect(!!~dom.html().search('mdc-ripple-surface')).toEqual(false)
  })

  it('can set icon options', () => {
    const el = mount(
      <PMWCSProvider icon={{ basename: 'my-icon-lib-test' }}>
        <Icon icon='foo' />
      </PMWCSProvider>
    )
    expect(!!~el.html().search('my-icon-lib-test')).toEqual(true)
  })
})
