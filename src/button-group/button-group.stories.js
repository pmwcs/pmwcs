/** @jsx h */

import { h } from 'preact'
import { useState } from 'preact/hooks'

import './styles.js'
import '@pmwc/button/button.css'
import './stories.css'

import { ButtonGroup } from './index.js'
import { Button } from '@pmwc/button'
import { Icon } from '@pmwc/icon'

export default {
  title: 'ButtonGroup',
  component: ButtonGroup
}

function Br () {
  return (<p />)
}

export const basic = () => (
  <section className='mdc-typography button-group-stories'>
    <ButtonGroup>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <Br />

    <ButtonGroup secondary>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <Br />

    <ButtonGroup neutral>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <Br />

    <ButtonGroup>
      <Button icon='favorite' />
      <Button icon='local_pizza' />
      <Button icon='mood' />
    </ButtonGroup>
    <Br />
  </section>
)

export const raised = () => (
  <section className='mdc-typography button-group-stories'>
    <ButtonGroup raised>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <Br />

    <ButtonGroup raised secondary>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <Br />

    <ButtonGroup raised neutral>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <Br />

    <ButtonGroup raised>
      <Button disabled>One</Button>
      <Button>Two</Button>
      <Button disabled>Three</Button>
    </ButtonGroup>
    <Br />

    <ButtonGroup dense raised>
      <Button><Icon icon='favorite' /></Button>
      <Button><Icon icon='local_pizza' /></Button>
      <Button><Icon icon='mood' /></Button>
    </ButtonGroup>
  </section>
)

export const unelevated = () => (
  <section className='mdc-typography button-group-stories'>
    <ButtonGroup unelevated>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <Br />

    <ButtonGroup unelevated secondary>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <Br />

    <ButtonGroup unelevated neutral>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <Br />
  </section>
)

export const outlined = () => (
  <section className='mdc-typography button-group-stories'>
    <ButtonGroup outlined>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <Br />

    <ButtonGroup outlined secondary>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <Br />

    <ButtonGroup outlined neutral>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <Br />

    <ButtonGroup outlined neutral>
      <Button><Icon icon='favorite' /></Button>
      <Button><Icon icon='local_pizza' /></Button>
      <Button><Icon icon='mood' /></Button>
    </ButtonGroup>
    <Br />
  </section>
)

export const dense = () => (
  <section className='mdc-typography button-group-stories'>
    <ButtonGroup dense>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <Br />

    <ButtonGroup dense secondary>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <Br />

    <ButtonGroup dense neutral>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <Br />

    <ButtonGroup dense neutral>
      <Button><Icon icon='favorite' /></Button>
      <Button><Icon icon='local_pizza' /></Button>
      <Button><Icon icon='mood' /></Button>
    </ButtonGroup>
    <Br />
  </section>
)

export const variants = () => (
  <section className='mdc-typography button-group-stories'>
    <p>ripple=false</p>
    <ButtonGroup ripple={false}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>

    <p>ripple=true</p>
    <ButtonGroup ripple>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>

    <p>with disabled</p>
    <ButtonGroup>
      <Button>One</Button>
      <Button disabled>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </section>
)

export const toggle = () => {
  function ButtonGroupToggle () {
    const icons = ['favorite', 'local_pizza', 'mood']
    const [selected, setSelected] = useState(icons[2])

    const onClick = pos => () => {
      setSelected(pos)
    }

    function ButtonToggle ({ icon, ...rest }) {
      return (
        <Button {...rest} activated={selected === icon} onClick={onClick(icon)}>
          <Icon size='xsmall' icon={icon} />
        </Button>
      )
    }

    return (
      <ButtonGroup dense outlined>
        {icons.map((icon, i) => <ButtonToggle key={i} icon={icon} />)}
      </ButtonGroup>
    )
  }

  return <ButtonGroupToggle />
}
