import { h } from 'preact'
import { mount } from 'enzyme'
import { Tooltip } from './'
import { PMWCSProvider } from '../provider'

describe.skip('Tooltip', () => {
  it('renders', () => {
    mount(
      <Tooltip content='tooltip'>
        <span>test</span>
      </Tooltip>
    )
  })

  it.skip('activateOn', () => {
    mount(
      <Tooltip content='tooltip' activateOn='click'>
        <span>test</span>
      </Tooltip>
    )
  })

  it.skip('showArrow', () => {
    mount(
      <Tooltip content='tooltip' showArrow>
        <span>test</span>
      </Tooltip>
    )
  })

  it.skip('className', () => {
    mount(
      <Tooltip content='tooltip' className='foo'>
        <span>test</span>
      </Tooltip>
    )
  })

  it('enterDelay', () => {
    mount(
      <Tooltip content='tooltip' enterDelay={1000}>
        <span>test</span>
      </Tooltip>
    )
  })

  it.skip('leaveDelay', () => {
    mount(
      <Tooltip content='tooltip' leaveDelay={1000}>
        <span>test</span>
      </Tooltip>
    )
  })

  it('align', () => {
    mount(
      <Tooltip content='tooltip' align='bottom'>
        <span>test</span>
      </Tooltip>
    )
  })

  it.skip('works with provider', () => {
    mount(
      <PMWCSProvider tooltip={{}}>
        <Tooltip content='tooltip'>
          <span>test</span>
        </Tooltip>
      </PMWCSProvider>
    )
  })
})
