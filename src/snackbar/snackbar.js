import { h, Fragment } from 'preact'

import { MDCSnackbarFoundation } from '@material/snackbar'
import { Button } from '@pmwcs/button'
import { useClassNames, Tag, createComponent } from '@pmwcs/base'
import { useSnackbarFoundation } from './foundation'
import { IconButton } from '@pmwcs/icon-button'
import { Icon } from '@pmwcs/icon'

/*********************************************************************
 * Snackbar
 *********************************************************************/

/** A Snackbar component for notifications. */
export const Snackbar = createComponent(function Snackbar (
  props,
  ref
) {
  const { rootEl, surfaceEl, labelEl } = useSnackbarFoundation(props)

  const {
    open,
    message,
    timeout,
    dismissIcon,
    onOpen,
    onClose,
    children,
    action,
    icon,
    leading,
    stacked,
    dismissesOnAction,
    foundationRef,
    ...rest
  } = props

  const className = useClassNames(props, [
    'mdc-snackbar',
    {
      'mdc-snackbar--leading': leading,
      'mdc-snackbar--stacked': stacked
    }
  ])

  const actions = Array.isArray(action)
    ? action
    : action
      ? [action]
      : []

  return (
    <Tag
      {...rest}
      ref={ref}
      element={rootEl}
      aria-live='assertive'
      aria-atomic
      aria-hidden
      className={className}
    >
      <div {...surfaceEl.props({})} className='mdc-snackbar__surface'>
        {!!icon && (
          <Icon
            style={{
              color: 'rgba(255, 255, 255, 0.87)',
              fill: 'currentColor',
              marginLeft: '1rem'
            }}
            icon={icon}
          />
        )}
        <SnackbarLabel>
          {message}
          {/**
           * Fixes bug https://github.com/jamesmfriedman/pmwc/issues/418
           * Wrapping the content for accessibility so it can be announced for screen readers
           */}
          <div style={{ display: 'none' }} ref={labelEl.setRef} />
        </SnackbarLabel>

        <SnackbarActions>
          {actions.map((a, i) => (
            <Fragment key={i}>{a}</Fragment>
          ))}
          {dismissIcon && (
            <SnackbarDismiss
              icon={dismissIcon === true ? 'close' : dismissIcon}
            />
          )}
        </SnackbarActions>
        {children}
      </div>
    </Tag>
  )
})

/*********************************************************************
 * Bits
 *********************************************************************/

function SnackbarLabel (props) {
  return (
    <div
      role='status'
      aria-live='polite'
      className='mdc-snackbar__label'
      {...props}
    />
  )
}

function SnackbarActions (props) {
  return <div className='mdc-snackbar__actions' {...props} />
}

/** A button for a snackbar action. */
export const SnackbarAction = createComponent(
  function SnackbarAction (props, ref) {
    const className = useClassNames(props, ['mdc-snackbar__action'])
    const {
      action = MDCSnackbarFoundation.strings.REASON_ACTION,
      ...rest
    } = props
    return (
      <Button
        {...rest}
        className={className}
        ref={ref}
        data-mdc-snackbar-action={action}
      />
    )
  }
)

function SnackbarDismiss (props) {
  return <IconButton {...props} className='mdc-snackbar__dismiss' />
}
