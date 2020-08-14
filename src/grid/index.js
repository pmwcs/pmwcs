import { h } from 'preact'

import {
  getDisplayName,
  Tag,
  useClassNames,
  createComponent
} from '@pmwc/base'

/** A Grid component */
export const Grid = createComponent(function Grid (props, ref) {
  const { children, fixedColumnWidth, align, ...rest } = props
  const needsInnerGrid = !(getDisplayName(children) === 'GridRow')
  const className = useClassNames(props, [
    'mdc-layout-grid',
    {
      [`mdc-layout-grid--align-${align || ''}`]: props.align !== undefined,
      'mdc-layout-grid--fixed-column-width': fixedColumnWidth
    }
  ])

  return (
    <Tag {...rest} className={className} ref={ref}>
      {needsInnerGrid ? <GridRow>{children}</GridRow> : children}
    </Tag>
  )
})

/** A Grid cell */
export const GridCell = createComponent(function GridCell (
  props,
  ref
) {
  const { span, phone, tablet, desktop, order, align, ...rest } = props
  const className = useClassNames(props, [
    'mdc-layout-grid__cell',
    {
      [`mdc-layout-grid__cell--order-${order || ''}`]: order !== undefined,
      [`mdc-layout-grid__cell--align-${align || ''}`]: align !== undefined,
      [`mdc-layout-grid__cell--span-${span || ''}`]: span !== undefined,
      [`mdc-layout-grid__cell--span-${phone || ''}-phone`]: phone !== undefined,
      [`mdc-layout-grid__cell--span-${tablet || ''}-tablet`]:
        tablet !== undefined,
      [`mdc-layout-grid__cell--span-${desktop || ''}-desktop`]:
        props.desktop !== undefined
    }
  ])
  return <Tag {...rest} ref={ref} className={className} />
})

/** By default, an inner grid component is included inside of <Grid>. Use GridRow when doing nested Grids. */
export const GridRow = createComponent(function GridRow (
  props,
  ref
) {
  const className = useClassNames(props, ['mdc-layout-grid__inner'])
  return <Tag {...props} ref={ref} className={className} />
})
GridRow.displayName = 'GridRow'
