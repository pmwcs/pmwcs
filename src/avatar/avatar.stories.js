/** @jsx h */

import { h } from 'preact'

import './styles.js'
// import './stories.css'

import avatarBlue from './images/avatar-blue.png'
import avatarGreen from './images/avatar-green.png'
import avatarGrey from './images/avatar-grey.png'
import avatarOrange from './images/avatar-orange.png'
import avatarPink from './images/avatar-pink.png'

import { AvatarGroup, Avatar, AvatarCount } from './index.js'
import { Typography } from '../typography'

export default {
  title: 'Avatar',
  component: Avatar,
};

export const all = () => (
  <section className='mdc-typography'>
    <Typography use='body1'>Avatar</Typography>

    <Avatar
      src={avatarGreen}
      size="xsmall"
      name="Natalia Alianovna Romanova"
    />
    <Avatar
      src={avatarPink}
      size="small"
      name="Bruce Banner"
    />
    <Avatar
      src={avatarBlue}
      size="medium"
      name="Thor Odinson"
    />
    <Avatar
      src={avatarOrange}
      size="large"
      name="Steve Rogers"
    />
    <Avatar
      src={avatarGrey}
      size="xlarge"
      name="Tony Stark"
    />

    <Typography use='body1'>Text Avatar</Typography>

    <Avatar name="Natalia Alianovna Romanova" size="xsmall" />
    <Avatar name="Bruce Banner" size="small" />
    <Avatar name="Thor Odinson" size="medium" />
    <Avatar name="Steve Rogers" size="large" />
    <Avatar name="Tony Stark" size="xlarge" />

    <br/>

    <Avatar
      src={avatarGrey}
      size="large"
      name="Natalia Alianovna Romanova"
      square
    />

    <Avatar
      src={avatarGreen}
      size="large"
      contain
      name="Google"
      square
    />

    <Typography use='body1'>AvatarGroup</Typography>

    <AvatarGroup>
      <Avatar
        src={avatarOrange}
        name="Steve Rogers"
        size="large"
        interactive
      />
      <Avatar
        src={avatarPink}
        name="Tony Stark"
        size="large"
        interactive
      />
      <AvatarCount size="large" value={12} interactive />
    </AvatarGroup>

    <br/>

    <AvatarGroup dense>
      <Avatar
        src={avatarOrange}
        name="Steve Rogers"
        size="large"
        interactive
      />
      <Avatar
        src={avatarPink}
        name="Tony Stark"
        size="large"
        interactive
      />
      <AvatarCount size="large" value={12} interactive />
    </AvatarGroup>

  </section>
)
