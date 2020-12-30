import { h, cloneElement, isValidElement } from 'preact'

import { classNames, useClassNames, Tag, createComponent } from '@pmwcs/base'
import { withRipple } from '@pmwcs/ripple'
import { Icon } from '@pmwcs/icon'

/** A ListItem component. */
export const ListItem = withRipple({ surface: false })(
  createComponent(function ListItem (props, ref) {
    const { selected, activated, disabled, children, secondary, ...rest } = props

    if (secondary) {
      props.theme = 'secondary'
    }

    const className = useClassNames(props, [
      'mdc-list-item',
      {
        'mdc-list-item--selected': props.selected,
        'mdc-list-item--activated': props.activated,
        'mdc-list-item--disabled': props.disabled
      }
    ])
    return (
      <Tag tag='li' {...rest} className={className} ref={ref}>
        <span className='mdc-list-item__ripple' />
        {children}
      </Tag>
    )
  })
)

/** Text Wrapper for the ListItem */
export const ListItemText = createComponent(
  function ListItemText (props, ref) {
    const className = useClassNames(props, ['mdc-list-item__text'])
    return <Tag tag='span' {...props} ref={ref} className={className} />
  }
)

/** Primary Text for the ListItem */
export const ListItemPrimaryText = createComponent(
  function ListItemPrimaryText (props, ref) {
    const className = useClassNames(props, ['mdc-list-item__primary-text'])
    return <Tag tag='span' {...props} ref={ref} className={className} />
  }
)

/** Secondary text for the ListItem */
export const ListItemSecondaryText = createComponent(function ListItemSecondaryText (props, ref) {
  const className = useClassNames(props, ['mdc-list-item__secondary-text'])
  return <Tag tag='span' {...props} ref={ref} className={className} />
})

/** A graphic / icon for the ListItem */
export const ListItemGraphic = createComponent(
  function ListItemGraphic (props, ref) {
    if (props.secondary) {
      props.theme = 'secondary'
    }

    const className = useClassNames(props, ['mdc-list-item__graphic'])
    return (
      <Icon {...props} aria-hidden='true' ref={ref} className={className} />
    )
  }
)

/** Meta content for the ListItem. This can either by an icon by setting the `icon` prop, or any other kind of content. */
export const ListItemMeta = createComponent(
  function ListItemMeta (props, ref) {
    const className = useClassNames(props, ['mdc-list-item__meta'])

    if (props.icon) {
      return (
        <Icon {...props} aria-hidden='true' ref={ref} className={className} />
      )
    }

    if (isValidElement(props.children)) {
      const { children, ...rest } = props
      return cloneElement(props.children, {
        ...rest,
        ...props.children.props,
        className: classNames(className, props.children.props.className)
      })
    }

    return <Tag {...props} ref={ref} className={className} />
  }
)

/** A container to group ListItems */
export const ListGroup = createComponent(function ListGroup (
  props,
  ref
) {
  const className = useClassNames(props, ['mdc-list-group'])
  return <Tag {...props} ref={ref} className={className} />
})

/** A subheader for the ListGroup */
export const ListGroupSubheader = createComponent(
  function ListGroupSubheader (props, ref) {
    const className = useClassNames(props, ['mdc-list-group__subheader'])
    return <Tag {...props} ref={ref} className={className} />
  }
)

/** A divider for the List */
export const ListDivider = createComponent(
  function ListDivider (props, ref) {
    const className = useClassNames(props, ['mdc-list-divider'])
    return (
      <Tag
        tag='li'
        role='separator'
        {...props}
        ref={ref}
        className={className}
      />
    )
  }
)

/** A simple list item template. */
export const SimpleListItem = createComponent(
  (
    { text, secondaryText, graphic, metaIcon, meta, children, secondary, ...rest },
    ref
  ) => {
    const primaryTextToRender = text && secondaryText !== undefined
      ? <ListItemPrimaryText>{text}</ListItemPrimaryText>
      : text

    const secondaryTextToRender = secondaryText !== undefined
      ? <ListItemSecondaryText>{secondaryText}</ListItemSecondaryText>
      : null

    return (
      <ListItem {...rest} ref={ref} secondary={secondary}>
        {graphic !== undefined && <ListItemGraphic icon={graphic} secondary={secondary} />}
        {secondaryTextToRender !== null
          ? (
            <ListItemText>
              {primaryTextToRender}
              {secondaryTextToRender}
            </ListItemText>
            )
          : (
              primaryTextToRender
            )}
        {(!!meta || !!metaIcon) && (
          <ListItemMeta icon={metaIcon}>{meta}</ListItemMeta>
        )}

        {children}
      </ListItem>
    )
  }
)
