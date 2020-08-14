import { h } from 'preact'
import { useState } from 'preact/hooks'

import './styles.js'

import {
  Tab,
  TabBar
} from './index.js'

export default {
  title: 'Tab',
  component: Tab
}

export const basic = () => {
  function Example () {
    const [activeTab, setActiveTab] = useState(0)

    return (
      <TabBar
        activeTabIndex={activeTab}
        onActivate={evt => setActiveTab(evt.detail.index)}
      >
        <Tab>Cookies</Tab>
        <Tab>Pizza</Tab>
        <Tab>Icecream</Tab>
      </TabBar>
    )
  }
  return (
    <section>
      <TabBar>
        <Tab>Cookies</Tab>
        <Tab>Pizza</Tab>
        <Tab>Icecream</Tab>
      </TabBar>

      <Example />
    </section>
  )
}

export const variants = () => (
  <section>
    <TabBar>
      <Tab icon='star_border' label='Cookies' />
      <Tab icon='favorite_border' label='Pizza' />
      <Tab icon='mood' label='Icecream' />
    </TabBar>

    <p />
    <TabBar>
      <Tab icon='star_border' />
      <Tab icon='favorite_border' />
      <Tab icon='mood' />
    </TabBar>

    <p />
    <TabBar>
      <Tab stacked icon='star_border' label='Cookies' />
      <Tab stacked icon='favorite_border' label='Pizza' />
      <Tab stacked icon='mood' label='Icecream' />
    </TabBar>

    <p />
    <TabBar>
      <Tab stacked restrictIndicator icon='star_border' label='Cookies' />
      <Tab stacked restrictIndicator icon='favorite_border' label='Pizza' />
      <Tab stacked restrictIndicator icon='mood' label='Icecream' />
    </TabBar>
  </section>
)

export const autoscroll = () => (
  <TabBar>
    {/* Tabs automatically scroll with lots of content. */}
    <Tab>Cookies</Tab>
    <Tab>Pizza</Tab>
    <Tab>Icecream</Tab>
    <Tab>Chocolate</Tab>
    <Tab>Fishsticks</Tab>
    <Tab>Ratatouille</Tab>
    <Tab>Bread</Tab>
    <Tab>Rolls</Tab>
    <Tab>Sushi</Tab>
    <Tab>Cupcake</Tab>
    <Tab>Cheesecake</Tab>
  </TabBar>
)

export const iconsAsIndicators = () => {
  function IconIndicatorExample () {
    const style = {
      transformOrigin: 'center center',
      transform: 'translateY(1rem) scale(0.45)'
    }

    return (
      <TabBar>
        <Tab
          label='Cookies'
          iconIndicator={{
            icon: 'star',
            style: style
          }}
        />
        <Tab
          label='Pizza'
          iconIndicator={{
            icon: 'favorite',
            style: style
          }}
        />
        <Tab
          label='Icecream'
          iconIndicator={{
            icon: 'mood',
            style: style
          }}
        />
      </TabBar>
    )
  }
  return (
    <section>
      <TabBar>
        <Tab iconIndicator='star'>Cookies</Tab>
        <Tab iconIndicator='favorite'>Pizza</Tab>
        <Tab iconIndicator='mood'>Icecream</Tab>
      </TabBar>

      <p />

      <IconIndicatorExample />
    </section>
  )
}
