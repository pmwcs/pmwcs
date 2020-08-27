# ButtonGroup (PMWCS Addon)

The ButtonGroup component can be used to group related buttons.

- Module **@pmwcs/button-group**
- Import styles:
  - Using CSS Loader
    - import '@pmwcs/button-group/styles';
  - Or include stylesheets
    - **'@pmwcs/button-group/button-group.css'**
- MDC Docs: [https://material.io/develop/web/components/buttons/](https://material.io/develop/web/components/buttons/)

```jsx
<ButtonGroup>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
```

```jsx
<ButtonGroup raised dense>
  <Button><Icon icon='favorite' /></Button>
  <Button><Icon icon='local_pizza' /></Button>
  <Button><Icon icon='mood' /></Button>
</ButtonGroup>
```

## ButtonGroup
The Button component.

### Props

| Name | Type | Description |
|------|------|-------------|
| `children` | `AnyComponent` | Content specified as children. |
| `dense` | `undefined \| false \| true` | Make the Button dense. |
| `disabled` | `undefined \| false \| true` | Make the button disabled |
| `outlined` | `undefined \| false \| true` | Make the button outlined. |
| `raised` | `undefined \| false \| true` | Make the Button raised. |
| `ripple` | `RipplePropT` | Adds a ripple effect to the component |
| `unelevated` | `undefined \| false \| true` | Make the button unelevated. |

## References

- https://material-components.github.io/material-components-web-catalog/#/component/button
