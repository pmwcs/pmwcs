/** @jsx h */
import { h } from 'preact'
import { useState, useRef, useEffect } from 'preact/hooks'
import { action } from '@storybook/addon-actions'
import './styles.js'

import { MDCList } from '@material/list'
import { MDCRipple } from '@material/ripple'

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

// eslint-disable-next-line no-unused-vars
const plainHtml = () => {
  function Plain () {
    const listRef = useRef(null)
    useEffect(() => {
      const list = new MDCList(listRef.current)
      list.listElements.map((listItemEl) => new MDCRipple(listItemEl))
    }, [listRef])

    return (
      <ul ref={listRef} class='mdc-list'>
        <li class='mdc-list-item'>
          <span class='mdc-list-item__ripple' />
          <span class='mdc-list-item__text'>Single-line item</span>
        </li>
        <li class='mdc-list-item'>
          <span class='mdc-list-item__ripple' />
          <span class='mdc-list-item__text'>Single-line item</span>
        </li>
        <li class='mdc-list-item'>
          <span class='mdc-list-item__ripple' />
          <span class='mdc-list-item__text'>Single-line item</span>
        </li>
      </ul>
    )
  }

  return <Plain />
}

export const basic = () => (
  <List onAction={(evt) => action('onAction')(evt.detail.index)}>
    <ListItem>Cookies</ListItem>
    <ListItem>Pizza</ListItem>
    <ListItem>Icecream</ListItem>
  </List>
)

export const list = () => (
  <List twoLine foundationRef={console.log}>
    <ListItem>
      <ListItemGraphic icon='🍪' />
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
      <ListItemGraphic icon='🍦' />
      <ListItemText>
        <ListItemPrimaryText>Icecream</ListItemPrimaryText>
        <ListItemSecondaryText>$0.99 a scoop</ListItemSecondaryText>
      </ListItemText>
      <ListItemMeta>Winner!</ListItemMeta>
    </ListItem>
    <ListItem secondary>
      <ListItemGraphic secondary icon='local_cafe' />
      <ListItemText>
        <ListItemPrimaryText>Coffee</ListItemPrimaryText>
        <ListItemSecondaryText>$1.99 a cup</ListItemSecondaryText>
      </ListItemText>
      <ListItemMeta icon='info' />
    </ListItem>
    <ListItem activated secondary>
      <ListItemGraphic secondary icon='local_cafe' />
      <ListItemText>
        <ListItemPrimaryText>Coffee</ListItemPrimaryText>
        <ListItemSecondaryText>$1.99 a cup</ListItemSecondaryText>
      </ListItemText>
      <ListItemMeta>Take it!</ListItemMeta>
    </ListItem>
  </List>
)

export const simpleList = () => (
  <List twoLine>
    <SimpleListItem
      graphic='🍪'
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
      graphic='🍨'
      text='Icecream'
      secondaryText='Chocolate cookie dough'
      meta='Winner!'
    />
    <SimpleListItem
      secondary
      graphic='local_cafe'
      text='Cafe'
      secondaryText='Cappuccino'
      metaIcon='info'
    />
    <SimpleListItem
      activated
      secondary
      graphic='local_cafe'
      text='Cafe'
      secondaryText='Cappuccino'
      metaIcon='info'
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
