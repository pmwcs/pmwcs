# Pagination (PMWCS Addon)

The Pagination component enables the user to select a specific page from a range of pages.

- Module **@pmwcs/pagination**
- Import styles:
  - Using CSS Loader
    - import '@pmwcs/pagination/styles';
  - Or include stylesheets
    - **'@pmwcs/icon-button/styles'**
    - **'@pmwcs/pagination/pagination.css'**

**Uncontrolled**

```html
<Pagination onChange={(evt, page) => {}} />
<Pagination count={3} onChange={(evt, page) => {}} defaultPage={1} />
<Pagination count={5} onChange={(evt, page) => {}} defaultPage={3} showFirstButton showLastButton />
```

**Controlled**

```js
function MyPagination ({ count }) {
  const [page, setPage] = useState(1)

  return (
    <Pagination
      page={page}
      count={count}
      onChange={(evt, page) => setPage(page)}
    />
  )
}
```

**Variants**

```html
<Pagination primary count={10}  />
<Pagination secondary count={10} />
<Pagination disabled count={10} />
<Pagination rounded count={3} />
```

## Pagination
Enables the user to select a specific page from a range of pages.

### Props

| Name | Type | Description |
|------|------|-------------|
| `boundaryCount` | `number` | Number of always visible pages at the beginning and end. Default is `1`. |
| `count` | `number` | The total number of pages. Default is `1`. |
| `defaultPage` | `number` | The page selected by default when the component is uncontrolled. Default is `1`. |
| `page` | `number` | The page selected. (controlled mode) |
| `disabled` | `boolean` | If `true`, the pagination component will be disabled. |
| `hideNextButton` | `boolean` | If `true`, hide the next-page button. |
| `hidePrevButton` | `boolean` | If `true`, hide the previous-page button. |
| `onChange` | `(event: Event, page: number) => void` | Callback fired when the page is changed. event The event source of the callback. page The page selected. |
| `showFirstButton` | `boolean` | If `true`, show the first-page button. |
| `showLastButton` | `boolean` | If `true`, show the last-page button. |
| `siblingCount` | `number` | Number of always visible pages before and after the current page. Default is `1`. |
| `className` | `string` | additional className of ul element |
| `getItemAriaLabel` | `(type, page, selected) => string` | Custom label generator for aria labels. |
| `renderItem` | `(item) => <PaginationItem {...item} />` | Custom render item. Defaults to PaginationItem. |
| `rounded` | `boolean` | The shape of the pagination items, rounded edges instead of circle. |
| `size` | `'small' \| 'medium' \| 'large'` | The size of the pagination component.
| `primary` | `boolean` | Primary theme. |
| `secondary` | `boolean` | Secondary theme. |

## PaginationItem
Pagination element to select a specific page.

| Name | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional className |
| `disabled` | `boolean` | Disabled component if `true`. @default false |
| `page` | `number` | page number on click
| `selected` | `boolean` | item is selected
| `rounded` | `boolean` | item has rounded corners. If `false` then item is displayed with circle.
| size | `'small' \| 'medium' \| 'large'` | different sizes of component. @default 'medium' |
| type | `'page' \| 'start-ellipsis' \| 'end-ellipsis' \| 'previous' \| 'next' \| 'first' \| 'last'` | type of item |
