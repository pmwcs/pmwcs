import 'regenerator-runtime/runtime'
import Adapter from 'enzyme-adapter-preact-pure'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

const consoleError = console.error

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation((...args) => {
    if (
      !(
        typeof args[0] === 'string' &&
        args[0].includes(
          'Warning: An update to %s inside a test was not wrapped in act'
        )
      )
    ) {
      consoleError(...args)
    }
  })
})
