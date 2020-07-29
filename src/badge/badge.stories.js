/** @jsx h */

import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

import './styles.js'

import {
  Badge,
  BadgeAnchor
} from './index.js'

import {Button} from '@pmwc/button'
import {IconButton} from '@pmwc/icon-button'
import {Avatar} from '@pmwc/avatar'
import avatarBlue from '@pmwc/avatar/images/avatar-blue.png'
import avatarGrey from '@pmwc/avatar/images/avatar-grey.png'

export default {
  title: 'Badge',
  component: Badge,
};

export const inline = () => (
  <section className='mdc-typography'>
    <Badge align="inline" />
    <Badge align="inline" label={20} />
    <Badge align="inline" label="99+" />
    <Badge align="inline" label="New" />
  </section>
)

export const styled = () => (
  <section>
    <Badge theme={['primaryBg', 'onPrimary']} align="inline" />
    <Badge style={{ background: 'hotpink' }} align="inline" />
    <Badge
      theme={['secondaryBg', 'onSecondary']}
      align="inline"
      label="Theme"
    />
  </section>
)

export const withOtherComponents = () => (
  <section>
    <p>Raised</p>
    <BadgeAnchor>
      <Button raised label="Button" />
      <Badge />
    </BadgeAnchor>

    <p>Raised themed</p>
    <BadgeAnchor>
      <Button
        raised
        label="Button"
        theme={['secondaryBg', 'onSecondary']}
      />
      <Badge style={{ background: 'hotpink' }} label="Hello" />
    </BadgeAnchor>

    <p>On IconButton</p>
    <BadgeAnchor>
      <IconButton icon="notifications" />
      <Badge inset="0.75rem" />
    </BadgeAnchor>

    <p>On Avatar</p>
    <BadgeAnchor>
      <Avatar
        src={avatarBlue}
        size="large"
        name="Tony Stark"
      />
      <Badge inset="5px" />
    </BadgeAnchor>

    <BadgeAnchor>
      <Avatar
        src={avatarGrey}
        size="large"
        name="Natalia Alianovna Romanova"
        square
      />
      <Badge />
    </BadgeAnchor>
  </section>
)

export const alignment = () => (
  <section>
    <BadgeAnchor>
      <Button raised label="Align Start" />
      <Badge align="start" />
    </BadgeAnchor>

    <BadgeAnchor>
      <Button raised label="Align End" />
      <Badge align="end" />
    </BadgeAnchor>
  </section>
)

export const transitions = () => {
  function Example() {
    const [label, setLabel] = useState(undefined);

    useEffect(() => {
      const timeout = setTimeout(() => {
        switch (label) {
          case '99+':
            setLabel(undefined);
            break;
          case '':
            setLabel('99+');
            break;
          case undefined:
            setLabel('');
            break;
        }
      }, 1800);

      return () => clearTimeout(timeout);
    }, [label]);

    return (
      <BadgeAnchor>
        <Button raised label="Button" />
        <Badge label={label} exited={label === undefined} />
      </BadgeAnchor>
    );
  }

  return <Example />
}
