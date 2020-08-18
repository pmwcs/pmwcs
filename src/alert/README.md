# Apert `PMWC ADDON`

An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.

- Module **@pmwc/alert**
- Import styles:
  - Using CSS Loader
    - import '@pmwc/alert/styles';
  - Or include stylesheets
    - **'@pmwc/alert/alert.css'**

```jsx
<>
  <Avatar
    src="images/avatars/blackwidow.png"
    size="xsmall"
    name="Natalia Alianovna Romanova"
  />
  <Avatar
    src="images/avatars/hulk.png"
    size="small"
    name="Bruce Banner"
  />
  <Avatar
    src="images/avatars/thor.png"
    size="medium"
    name="Thor Odinson"
  />
  <Avatar
    src="images/avatars/captainamerica.png"
    size="large"
    name="Steve Rogers"
  />
  <Avatar
    src="images/avatars/ironman.png"
    size="xlarge"
    name="Tony Stark"
  />
</>
```

## Usage with other components

The avatar component has been designed to work nicely in any of the places you would use an icon.

```jsx
<Button
  label="Enlist now!"
  icon={
    <Avatar
      src="images/avatars/captainamerica.png"
      name="Steve Rogers"
    />
  }
/>
```

```jsx
<Chip
  label="Hulk Smash"
  icon={<Avatar src="images/avatars/hulk.png" name="Bruce Banner" />}
/>
```

```jsx
<TextField
  label="Message Natalia..."
  outlined
  icon={
    <Avatar
      src="images/avatars/blackwidow.png"
      name="Natalia Alianovna Romanova"
      square
    />
  }
/>
```

## Avatar
An Avatar component for displaying users in a system.

### Props

| Name | Type | Description |
|------|------|-------------|
| `contain` | `undefined \| false \| true` | Contain the avatar image instead of covering. |
| `interactive` | `undefined \| false \| true` | Make the avatar interactive. |
| `name` | `undefined \| string` | The name of the user. This will get converted to initials and set the hover title. |
| `ripple` | `RipplePropT` | Adds a ripple effect to the component |
| `size` | `PMWC.IconSizeT` | The size of the avatar |
| `square` | `undefined \| false \| true` | Make the avatar square. |
| `src` | `undefined \| string` | The url for the image. This gets passed to the Icon component. |


## Alert
Displays a short, important message in a way that attracts the user's attention without interrupting the user's task.

### Props

| Name | Type | Description |
|------|------|-------------|
| `dense` | `undefined \| false \| true` | Makes the list dense |
| `interactive` | `undefined \| false \| true` | Make the avatar interactive. |
| `overflow` | `undefined \| false \| true` | Optionally renders a "+" to indicate overlow. |
| `size` | `PMWC.IconSizeT` | The size of the avatar |
| `square` | `undefined \| false \| true` | Make the avatar square. |
| `value` | `number` | The number of users. |
