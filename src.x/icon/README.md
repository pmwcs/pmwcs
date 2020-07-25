# Icon

Material icons use geometric shapes to visually represent core ideas, capabilities, or topics.

- Module: **@pmwc/icon**
- Import styles:
  - Using CSS Loader
    - `import '@rmwc/icon/styles.js';`
  - Or include stylesheets
    - **'@pmwc/icon/icon.css'**
- MDC Docs: [https://material.io/icons](https://material.io/icons)

## Setup

Icons are not part of the official material-components-web spec, but they are referenced many times in the documentation.

## Basic Usage

```html
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
</head>
```

```css
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
```

```jsx
<Icon icon="favorite" />
```

```jsx
<Icon
  icon={
    <div
      style={{
        background: 'green',
        width: '24px',
        height: '24px',
        borderRadius: '100px'
      }}
    />
  }
/>
```

```jsx
<Icon>
  <svg><path></path></svg>
</Icon>
```
