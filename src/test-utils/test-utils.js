import { h, Fragment } from 'preact'
import { mount } from 'enzyme'
import { act } from 'preact/test-utils'

export const mountHook = (hook) => {
  mount(<HookWrapper hook={hook} />)
}

function HookWrapper ({ hook }) {
  hook()
  return <Fragment />
}

export const wait = (timeout = 0) =>
  new Promise(resolve => {
    setTimeout(resolve, timeout)
  })

export const actWait = async (timeout = 0) => {
  await act(async () => {
    await wait(timeout)
  })
}
