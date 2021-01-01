/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import './styles.js'

import {
  Portal,
  PortalChild
} from './index.js'

export default {
  title: 'Portal',
  component: Portal
}

export const basic = () => {
  function Example () {
    const [doRender, setRender] = useState(true)

    return (
      <section className='mdc-typography'>
        <div style={{ border: '1px solid magenta', color: 'magenta' }}>
          <Portal />
        </div>

        <PortalChild renderTo={doRender}>
          <p>Render in Portal</p>
        </PortalChild>

        <button onClick={() => setRender(!doRender)}>
          {doRender ? 'disable' : 'enable '}
        </button>
      </section>
    )
  }

  return (<Example />)
}

export const renderWithId = () => {
  return (
    <section className='mdc-typography'>
      <div style={{ border: '1px solid magenta', color: 'magenta' }}>
        <Portal id='one' />
      </div>

      <div style={{ border: '1px solid cyan', color: 'cyan' }}>
        <Portal id='two' />
      </div>

      <PortalChild renderTo='#one'>
        <p>One</p>
      </PortalChild>

      <PortalChild renderTo='#two'>
        Two
      </PortalChild>
    </section>
  )
}
