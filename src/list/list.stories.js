/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import './styles.js'

import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryText,
  ListItemGraphic,
  ListItemPrimaryText,
  ListItemMeta,
  SimpleListItem,
  CollapsibleList
} from './index.js'

import { Checkbox } from '@pmwc/checkbox'
import { Switch } from '@pmwc/switch'
import { Radio } from '@pmwc/radio'

export default {
  title: 'List',
  component: List
}

export const basic = () => (
  <List>
    <ListItem>Cookies</ListItem>
    <ListItem>Pizza</ListItem>
    <ListItem>Icecream</ListItem>
  </List>
)

export const list = () => (
  <List twoLine foundationRef={console.log}>
    <ListItem>
      <ListItemGraphic icon='star_border' />
      <ListItemText>
        <ListItemPrimaryText>Cookies</ListItemPrimaryText>
        <ListItemSecondaryText>$4.99 a dozen</ListItemSecondaryText>
      </ListItemText>
      <ListItemMeta icon='info' />
    </ListItem>
    <ListItem>
      <ListItemGraphic icon='local_pizza' />
      <ListItemText>
        <ListItemPrimaryText>Pizza</ListItemPrimaryText>
        <ListItemSecondaryText>$1.99 a slice</ListItemSecondaryText>
      </ListItemText>
      <ListItemMeta icon='info' />
    </ListItem>
    <ListItem activated>
      <ListItemGraphic icon='mood' />
      <ListItemText>
        <ListItemPrimaryText>Icecream</ListItemPrimaryText>
        <ListItemSecondaryText>$0.99 a scoop</ListItemSecondaryText>
      </ListItemText>
      <ListItemMeta>Winner!</ListItemMeta>
    </ListItem>
  </List>
)

export const simpleList = () => (
  <List twoLine>
    <SimpleListItem
      graphic='star_border'
      text='Cookies'
      secondaryText='Chocolate chip'
      metaIcon='info'
    />
    <SimpleListItem
      graphic='local_pizza'
      text='Pizza'
      secondaryText='Pepperoni'
      metaIcon='info'
    />
    <SimpleListItem
      activated
      graphic='mood'
      text='Icecream'
      secondaryText='Chocolate cookie dough'
      meta='Winner!'
    />
  </List>
)

export const selectable = () => {
  function Example () {
    const [checked, setChecked] = useState({
      Cookies: false,
      Pizza: false,
      Icecream: false
    })

    return (
      <List>
        {['Cookies', 'Pizza', 'Icecream'].map(key => (
          <ListItem
            key={key}
            onClick={() =>
              setChecked({ ...checked, [key]: !checked[key] })}
          >
            {key}
            <ListItemMeta>
              <Checkbox checked={checked[key]} readOnly />
            </ListItemMeta>
          </ListItem>
        ))}
      </List>
    )
  }
  return <Example />
}

export const checkboxList = () => {
  function Example () {
    const [checked, setChecked] = useState({
      Cookies: false,
      Pizza: false,
      Icecream: false
    })

    return (
      <List>
        {['Cookies', 'Pizza', 'Icecream'].map(key => (
          <ListItem
            key={key}
            onClick={() =>
              setChecked({ ...checked, [key]: !checked[key] })}
          >
            {key}
            <ListItemMeta>
              <Switch checked={checked[key]} readOnly />
            </ListItemMeta>
          </ListItem>
        ))}
      </List>
    )
  }
  return <Example />
}

export const radioList = () => {
  function Example () {
    const [checked, setChecked] = useState('Cookies')

    return (
      <List>
        {['Cookies', 'Pizza', 'Icecream'].map(key => (
          <ListItem key={key} onClick={() => setChecked(key)}>
            {key}
            <ListItemMeta>
              <Radio checked={checked === key} readOnly />
            </ListItemMeta>
          </ListItem>
        ))}
      </List>
    )
  }
  return <Example />
}

export const collapsibleList = () => (
  <List>
    <CollapsibleList
      handle={
        <SimpleListItem
          text='Cookies'
          graphic='favorite'
          metaIcon='chevron_right'
        />
      }
      onOpen={() => console.log('open')}
      onClose={() => console.log('close')}
    >
      <SimpleListItem text='Chocolate Chip' />
      <SimpleListItem text='Ginger Snap' />
      <SimpleListItem text='Peanut Butter' />
    </CollapsibleList>

    <CollapsibleList
      handle={
        <SimpleListItem
          text='Pizza'
          graphic='local_pizza'
          metaIcon='chevron_right'
        />
      }
    >
      <SimpleListItem text='Cheese' />
      <SimpleListItem text='Pepperoni' />
      <SimpleListItem text='Supreme' />
    </CollapsibleList>

    <CollapsibleList
      handle={
        <SimpleListItem
          text='Icecream'
          graphic='star'
          metaIcon='chevron_right'
        />
      }
    >
      <SimpleListItem text='Vanilla' />
      <SimpleListItem text='Chocolate' />
      <CollapsibleList
        handle={
          <SimpleListItem
            text='Nested Collapsible'
            graphic='touch_app'
            metaIcon='chevron_right'
          />
        }
      >
        <SimpleListItem text='Orange' />
        <SimpleListItem text='Strawberry' />
        <SimpleListItem text='Blueberry' />
      </CollapsibleList>
    </CollapsibleList>

    <CollapsibleList
      open
      handle={
        <SimpleListItem
          text='Custom Content, forced open'
          graphic='help'
          metaIcon='chevron_right'
        />
      }
    >
      <div
        style={{
          padding: '4rem',
          background: 'green',
          color: 'white'
        }}
      >
        Collapsibles can contain any content
      </div>
    </CollapsibleList>
  </List>
)
