/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import './styles.js'

import {
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerSubtitle,
  DrawerContent,
  DrawerAppContent
} from './index.js'

import { List, ListItem } from '@pmwc/list'
import { Button } from '@pmwc/button'

export default {
  title: 'Drawer',
  component: Drawer
}

export const permanent = () => (
  <Drawer>
    <DrawerHeader>
      <DrawerTitle>DrawerHeader</DrawerTitle>
      <DrawerSubtitle>Subtitle</DrawerSubtitle>
    </DrawerHeader>
    <DrawerContent>
      <List>
        <ListItem>Cookies</ListItem>
        <ListItem>Pizza</ListItem>
        <ListItem>Icecream</ListItem>
      </List>
    </DrawerContent>
  </Drawer>
)

export const dismissible = () => {
  function Example () {
    const [open, setOpen] = useState(true)

    return (
      <section>
        <div style={{ overflow: 'hidden', position: 'relative' }}>
          <Drawer dismissible open={open}>
            <DrawerHeader>
              <DrawerTitle>DrawerHeader</DrawerTitle>
              <DrawerSubtitle>Subtitle</DrawerSubtitle>
            </DrawerHeader>
            <DrawerContent>
              <List>
                <ListItem>Cookies</ListItem>
                <ListItem>Pizza</ListItem>
                <ListItem>Icecream</ListItem>
              </List>
            </DrawerContent>
          </Drawer>

          {/* Optional DrawerAppContent */}
          <DrawerAppContent
            style={{ minHeight: '15rem', padding: '1rem' }}
          >
            DrawerAppContent is an optional component that will resize
            content when the dismissible drawer is open and closed. It
            must be placed directly after the Drawer component.
          </DrawerAppContent>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button onClick={() => setOpen(!open)} raised>
            Toggle Dismissible
          </Button>
        </div>
      </section>
    )
  }
  return <Example />
}

export const modal = () => {
  function Example () {
    const [open, setOpen] = useState(true)

    return (
      <section>
        <Drawer modal open={open} onClose={() => setOpen(false)}>
          <DrawerHeader>
            <DrawerTitle>DrawerHeader</DrawerTitle>
            <DrawerSubtitle>Subtitle</DrawerSubtitle>
          </DrawerHeader>
          <DrawerContent>
            <List>
              <ListItem>Cookies</ListItem>
              <ListItem>Pizza</ListItem>
              <ListItem>Icecream</ListItem>
            </List>
          </DrawerContent>
        </Drawer>

        <Button onClick={() => setOpen(!open)} raised>
          Toggle Modal
        </Button>
      </section>
    )
  }
  return <Example />
}

export const rightSideDrawers = () => {
  function Example () {
    const [open, setOpen] = useState(true)

    return (
      <section>
        {/** Make the drawer appear right-to-left */}
        <Drawer
          dir='rtl'
          modal
          open={open}
          onClose={() => setOpen(false)}
        >
          {/** Set the content back to left-to-right */}
          <DrawerHeader dir='ltr'>
            <DrawerTitle>Right Drawer</DrawerTitle>
            <DrawerSubtitle>Subtitle</DrawerSubtitle>
          </DrawerHeader>

          <DrawerContent dir='ltr'>
            <List>
              <ListItem>Cookies</ListItem>
              <ListItem>Pizza</ListItem>
              <ListItem>Icecream</ListItem>
            </List>
          </DrawerContent>
        </Drawer>

        <Button onClick={() => setOpen(!open)} raised>
          Toggle Right Drawer
        </Button>
      </section>
    )
  }
  return <Example />
}
