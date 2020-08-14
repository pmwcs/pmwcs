/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { TabBar, Tab } from './'

describe('TabBar SSR', () => {
  it('TabBar renders', () => {
    mount(
      <TabBar activeTabIndex={0} onChange={(evt) => {}}>
        <Tab>Test</Tab>
      </TabBar>
    )
  })
})
