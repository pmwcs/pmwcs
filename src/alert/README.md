# Alert `PMWC ADDON`

An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.

- Module **@pmwc/alert**
- Import styles:
  - Using CSS Loader
    - import '@pmwc/alert/styles';
  - Or include stylesheets
    - **'@pmwc/alert/alert.css'**

```jsx
<>
  <Alert severity='error'>This is an error alert — check it out!</Alert>
  <Alert severity='warning'>This is a warning alert — check it out!</Alert>
  <Alert severity='info'>This is an info alert — check it out!</Alert>
  <Alert severity='success'>This is a success alert — check it out!</Alert>
</>
```

**defaults to a warning alert**
```jsx
<Alert>This is a warning alert — check it out!</Alert>
```

**use with custom icon**
```jsx
<Alert icon='check' severity='success'>This is a success alert — check it out!</Alert>
```

**don't display an icon**
```jsx
<Alert icon={false} severity='success'>This is a success alert — check it out!</Alert>
```

## Variants

### Outlined

```jsx
<>
  <Alert outlined severity='error'>This is an error alert — check it out!</Alert>
  <Alert outlined severity='warning'>This is a warning alert — check it out!</Alert>
  <Alert outlined severity='info'>This is an info alert — check it out!</Alert>
  <Alert outlined severity='success'>This is a success alert — check it out!</Alert>
</>
```

### Filled

```jsx
<>
  <Alert filled severity='error'>This is an error alert — check it out!</Alert>
  <Alert filled severity='warning'>This is a warning alert — check it out!</Alert>
  <Alert filled severity='info'>This is an info alert — check it out!</Alert>
  <Alert filled severity='success'>This is a success alert — check it out!</Alert>
</>
```

## Actions

```jsx
<>
  <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>

  <Alert
    action={
      <Button>
        UNDO
      </Button>
    }
  >
    This is a success alert — check it out!
  </Alert>
</>
```

## Alert
Displays a short, important message in a way that attracts the user's attention without interrupting the user's task.

### Props

| Name | Type | Description |
|------|------|-------------|
| `outlined` | `undefined \| false \| true` | Makes the alert outlined. |
| `filled` | `undefined \| false \| true` | Makes the alert filled. |
| `action` | `AnyComponent` | The action to display. It renders after the message, at the end of the alert. |
| `severity` | `success \| info \| warning \| error` | The size of the avatar |
| `icon` | `AnyComponent` | Override the icon displayed before the children. |
| `onClose` | `(event: Event) => void` | Callback fired when the component requests to be closed. |
