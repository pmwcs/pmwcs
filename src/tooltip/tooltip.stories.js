/** @jsx h */

import { h } from 'preact'

import './styles.js'

import { Tooltip } from './index.js'
import { Button } from '@pmwcs/button'
import { IconButton } from '@pmwcs/icon-button'
import { Avatar } from '@pmwcs/avatar'

export default {
  title: 'Tooltip',
  component: Tooltip
}

export const basic = () => (
  <section>
    <Tooltip content='Cookies'>
      <IconButton icon='star_border' />
    </Tooltip>

    <Tooltip content='Pizza'>
      <IconButton icon='favorite_border' />
    </Tooltip>

    <Tooltip content='Icecream'>
      <IconButton icon='mood' />
    </Tooltip>
  </section>
)

/*
export const variants = () => {
  function AlignmentExample () {
    return [
      'left',
      'right',
      'top',
      'bottom',
      'topLeft',
      'topRight',
      'bottomLeft',
      'bottomRight'
    ].map(align => (
      <Tooltip key={align} content={`Align: ${align}`} align={align}>
        <IconButton icon='trip_origin' />
      </Tooltip>
    ))
  }

  return (
    <section>
      <Tooltip content='Cake' showArrow>
        <IconButton icon='cake' />
      </Tooltip>

      <Tooltip content='Hello' align='right' open>
        <IconButton icon='mood' />
      </Tooltip>
      <Tooltip
        content={
          <div style={{ display: 'flex' }}>
            <Avatar
              src='images/avatars/captainamerica.png'
              size='large'
              name='Steve Rogers'
            />
            <div style={{ marginLeft: '0.5rem' }}>
              <b>Captain America</b>
              <div>Steve Rogers</div>
            </div>
          </div>
        }
      >
        <span role='button'>S. Rogers</span>
      </Tooltip>

      <Tooltip
      /** You make something like a popover window by just styling your inner content. * /
        content={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'white',
              width: '20rem',
              height: '8rem',
              color: 'black',
              borderRadius: '3px',
              margin: '0 -3px'
            }}
          >
            Hello World!
          </div>
        }
      >
        <span role='button'>Popover Window</span>
      </Tooltip>

      <Tooltip content='Cookies' enterDelay={1000}>
        <Button label='Enter Delay' />
      </Tooltip>

      <Tooltip content='Pizza' leaveDelay={1000}>
        <Button label='Leave Delay' />
      </Tooltip>

      <Tooltip content='Icecream' enterDelay={1000} leaveDelay={1000}>
        <Button label='Both' />
      </Tooltip>

      <AlignmentExample />
    </section>
  )
}
*/
