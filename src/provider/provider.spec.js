import { h } from 'preact'
import { mount } from 'enzyme'
import { PMWCProvider } from './'
import { Button } from '../button'
import { Icon } from '../icon'

describe('Provider', () => {
  it('renders', () => {
    const el = mount(
      <PMWCProvider>
        <div />
      </PMWCProvider>
    )

    el.setProps({ ripple: false })
  })

  it('can set default ripple', () => {
    const dom = mount(
      <PMWCProvider ripple={false}>
        <Button />
      </PMWCProvider>
    )
    expect(!!~dom.html().search('mdc-ripple-surface')).toEqual(false)
  })

  it('can set icon options', () => {
    const el = mount(
      <PMWCProvider icon={{ basename: 'my-icon-lib-test' }}>
        <Icon icon='foo' />
      </PMWCProvider>
    )
    expect(!!~el.html().search('my-icon-lib-test')).toEqual(true)
  })
})
