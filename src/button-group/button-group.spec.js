import { h } from 'preact'
import { mount } from 'enzyme'
import { ButtonGroup } from './'
import { Button } from '@pmwc/button'

describe('Button', () => {
  it('renders', () => {
    const btngroup = mount(
      <ButtonGroup>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    )
    expect(!!~btngroup.html().search('pmwc-button-group')).toEqual(true)
  })

  it('can be raised', () => {
    const btngroup = mount(
      <ButtonGroup raised>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    )
    expect(!!~btngroup.html().search('class="pmwc-button-group pmwc-button-group--raised"')).toEqual(true)
  })

  it('can be unelevated', () => {
    const btngroup = mount(
      <ButtonGroup unelevated>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    )
    expect(!!~btngroup.html().search('class="pmwc-button-group"')).toEqual(true)
    btngroup.find('button').forEach(item => expect(item.hasClass('mdc-button--unelevated')).toEqual(true))
  })

  it('can be outlined', () => {
    const btngroup = mount(
      <ButtonGroup outlined>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    )
    // console.log(btngroup.html())
    expect(!!~btngroup.html().search('class="pmwc-button-group"')).toEqual(true)
    btngroup.find('button').forEach(item => expect(item.hasClass('mdc-button--outlined')).toEqual(true))
  })

  it('can be dense', () => {
    const btngroup = mount(
      <ButtonGroup dense>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    )
    // console.log(btngroup.html())
    expect(!!~btngroup.html().search('class="pmwc-button-group pmwc-button-group--dense"')).toEqual(true)
  })

  it('can have custom classnames', () => {
    const btngroup = mount(
      <ButtonGroup className='my-custom-class'>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    )
    expect(!!~btngroup.html().search('class="my-custom-class pmwc-button-group"')).toEqual(true)
  })
})
