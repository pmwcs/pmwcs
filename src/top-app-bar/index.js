import { h } from 'preact'
import { useClassNames, Tag, createComponent } from '@pmwc/base'
import { IconButton } from '@pmwc/icon-button'
import { useTopAppBarFoundation } from './foundation'

/** A TopAppBar component */
export const TopAppBar = createComponent(function TopAppBar (
  props,
  ref
) {
  return (
    <TopAppBarBase
      key={props.short ? 'short' : props.fixed ? 'fixed' : 'top-app-bar'}
      {...props}
      ref={ref}
    />
  )
})

const TopAppBarBase = createComponent(function TopAppBarBase (
  props,
  ref
) {
  const { rootEl } = useTopAppBarFoundation(props)
  const {
    onNav,
    scrollTarget,
    fixed,
    prominent,
    short,
    shortCollapsed,
    dense,
    foundationRef,
    ...rest
  } = props
  const className = useClassNames(props, [
    'mdc-top-app-bar',
    {
      'mdc-top-app-bar--fixed': fixed,
      'mdc-top-app-bar--prominent': prominent,
      'mdc-top-app-bar--short': short || shortCollapsed,
      'mdc-top-app-bar--short-collapsed': shortCollapsed,
      'mdc-top-app-bar--dense': dense
    }
  ])

  return (
    <Tag
      tag='header'
      {...rest}
      element={rootEl}
      className={className}
      ref={ref}
    />
  )
})

/** A simplified syntax for creating an AppBar. */
export const SimpleTopAppBar = createComponent(
  function SimpleTopAppBar (props, ref) {
    const {
      title,
      actionItems,
      navigationIcon,
      startContent,
      endContent,
      ...rest
    } = props
    return (
      <TopAppBar {...rest} ref={ref}>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            {!!navigationIcon && (
              <TopAppBarNavigationIcon
                icon='menu'
                {...(typeof navigationIcon === 'boolean' ? {} : navigationIcon)}
              />
            )}
            {!!title && <TopAppBarTitle>{title}</TopAppBarTitle>}
            {startContent}
          </TopAppBarSection>

          {(!!actionItems || endContent) && (
            <TopAppBarSection alignEnd>
              {endContent}
              {!!actionItems &&
                actionItems.map((actionItemProps, index) => (
                  <TopAppBarActionItem {...actionItemProps} key={index} />
                ))}
            </TopAppBarSection>
          )}
        </TopAppBarRow>
      </TopAppBar>
    )
  }
)

/*********************************************************************
 * Bits
 *********************************************************************/

/** A row for the app bar. */
export const TopAppBarRow = createComponent(
  function TopAppBarRow (props, ref) {
    const className = useClassNames(props, ['mdc-top-app-bar__row'])
    return <Tag {...props} ref={ref} className={className} />
  }
)

/** A section for the app bar. */
export const TopAppBarSection = createComponent(
  function TopAppBarSection (props, ref) {
    const { alignStart, alignEnd, ...rest } = props
    const className = useClassNames(props, [
      'mdc-top-app-bar__section',
      {
        'mdc-top-app-bar__section--align-start': alignStart,
        'mdc-top-app-bar__section--align-end': alignEnd
      }
    ])
    return <Tag tag='section' {...rest} ref={ref} className={className} />
  }
)

/** A navigation icon for the top app bar. This is an instance of the IconButton component. */
export const TopAppBarNavigationIcon = createComponent(function TopAppBarNavigationIcon (props, ref) {
  const className = useClassNames(props, ['mdc-top-app-bar__navigation-icon'])
  return <IconButton {...props} className={className} ref={ref} />
})

/** Action items for the top app bar. This is an instance of the IconButton component. */
export const TopAppBarActionItem = createComponent(
  function TopAppBarActionItem (props, ref) {
    const className = useClassNames(props, ['mdc-top-app-bar__action-item'])
    return <IconButton {...props} className={className} ref={ref} />
  }
)

/** A title for the top app bar. */
export const TopAppBarTitle = createComponent(
  function TopAppBarTitle (props, ref) {
    const className = useClassNames(props, ['mdc-top-app-bar__title'])
    return <Tag {...props} ref={ref} className={className} />
  }
)

/** An optional component to fill the space when the TopAppBar is fixed. Place it directly after the TopAppBar. */
export const TopAppBarFixedAdjust = createComponent(
  function TopAppBarFixedAdjust (props, ref) {
    const { dense, denseProminent, prominent, short, ...rest } = props
    const className = useClassNames(props, [
      {
        'mdc-top-app-bar--fixed-adjust': !props.dense && !props.denseProminent && !props.prominent && !props.short,
        'mdc-top-app-bar--dense-fixed-adjust': props.dense,
        'mdc-top-app-bar--prominent-fixed-adjust': props.prominent,
        'mdc-top-app-bar--dense-prominent-fixed-adjust': props.denseProminent,
        'mdc-top-app-bar--short-fixed-adjust': props.short
      }
    ])
    return <Tag {...rest} ref={ref} className={className} />
  }
)
