/** @jsx h */

import { h } from 'preact'

import './styles.js'
// import './stories.css'

import { AvatarGroup, Avatar, AvatarCount } from './index.js'
import { Typography } from '@pmwcs/typography'
import { Button } from '@pmwcs/button'
import { Chip } from '@pmwcs/chip'
import { TextField } from '@pmwcs/textfield'

export default {
  title: 'Avatar',
  component: Avatar
}

export const all = () => (
  <section className='mdc-typography'>
    <Typography use='body1'>Avatar</Typography>

    <Avatar
      src='images/avatars/blackwidow.png'
      size='xsmall'
      name='Natalia Alianovna Romanova'
    />
    <Avatar
      src='images/avatars/hulk.png'
      size='small'
      name='Bruce Banner'
    />
    <Avatar
      src='images/avatars/thor.png'
      size='medium'
      name='Thor Odinson'
    />
    <Avatar
      src='images/avatars/captainamerica.png'
      size='large'
      name='Steve Rogers'
    />
    <Avatar
      src='images/avatars/ironman.png'
      size='xlarge'
      name='Tony Stark'
    />

    <Typography use='body1'>Text Avatar</Typography>

    <Avatar name='Natalia Alianovna Romanova' size='xsmall' />
    <Avatar name='Bruce Banner' size='small' />
    <Avatar name='Thor Odinson' size='medium' />
    <Avatar name='Steve Rogers' size='large' />
    <Avatar name='Tony Stark' size='xlarge' />

    <br />

    <Avatar
      src='images/avatars/blackwidow.png'
      size='large'
      name='Natalia Alianovna Romanova'
      square
    />

    <Avatar
      src='images/avatars/google.svg'
      size='large'
      contain
      name='Google'
      square
    />

    <Typography use='body1'>AvatarGroup</Typography>

    <AvatarGroup>
      <Avatar
        src='images/avatars/captainamerica.png'
        name='Steve Rogers'
        size='large'
        interactive
      />
      <Avatar
        src='images/avatars/ironman.png'
        name='Tony Stark'
        size='large'
        interactive
      />
      <AvatarCount size='large' value={12} interactive />
    </AvatarGroup>

    <br />

    <AvatarGroup dense>
      <Avatar
        src='images/avatars/captainamerica.png'
        name='Steve Rogers'
        size='large'
        interactive
      />
      <Avatar
        src='images/avatars/ironman.png'
        name='Tony Stark'
        size='large'
        interactive
      />
      <AvatarCount size='large' overflow value={4} interactive />
    </AvatarGroup>

  </section>
)

export const withOtherComponents = () => (
  <section>
    <Button
      label='Enlist now!'
      icon={
        <Avatar
          src='images/avatars/captainamerica.png'
          name='Steve Rogers'
        />
      }
    />

    <Chip
      label='Hulk Smash'
      icon={<Avatar src='images/avatars/hulk.png' name='Bruce Banner' />}
    />

    <TextField
      label='Message Natalia...'
      outlined
      icon={
        <Avatar
          src='images/avatars/blackwidow.png'
          name='Natalia Alianovna Romanova'
          square
        />
      }
    />
  </section>
)
