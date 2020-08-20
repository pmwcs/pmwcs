import { h } from 'preact'
import { mount } from 'enzyme'
import { act } from 'preact/test-utils'

function TestHook ({ callback, children, hookProps }) {
  children(callback(hookProps))
  return null
}

function resultContainer () {
  let value = null
  let error = null

  const result = {
    get current () {
      if (error) {
        throw error
      }
      return value
    },
    get error () {
      return error
    }
  }

  const updateResult = (val, err) => {
    value = val
    error = err
  }

  return {
    result,
    setValue: (val) => updateResult(val),
    setError: (err) => updateResult(undefined, err)
  }
}

export function renderHook (callback) {
  const hookProps = { current: {} }
  const { result, setValue } = resultContainer()

  const render = () => mount(
    <TestHook callback={callback} hookProps={hookProps}>
      {setValue}
    </TestHook>
  )
  let testrenderer

  act(() => {
    testrenderer = render()
  })
  testrenderer.update()

  return { result }
}
