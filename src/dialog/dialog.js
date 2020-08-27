import { h } from 'preact'
import { memo } from 'preact/compat'

import { Button } from '@pmwcs/button'
import { MDCDialogFoundation } from '@material/dialog'

import {
  useClassNames,
  Tag,
  createComponent,
  PortalChild
} from '@pmwcs/base'
import { useDialogFoundation } from './foundation'

/*********************************************************************
 * Dialogs
 *********************************************************************/

/** A Dialog component. */
export const Dialog = createComponent(function Dialog (props, ref) {
  const { rootEl } = useDialogFoundation(props)

  const className = useClassNames(props, ['mdc-dialog'])

  const {
    children,
    open,
    onOpen,
    onOpened,
    onClose,
    onClosed,
    preventOutsideDismiss,
    foundationRef,
    renderToPortal,
    'aria-labelledby': ariaLabelledby,
    'aria-describedby': ariaDescribedBy,
    ...rest
  } = props

  return (
    <PortalChild renderTo={renderToPortal}>
      <Tag {...rest} element={rootEl} className={className} ref={ref}>
        <div className='mdc-dialog__container'>
          <div
            className='mdc-dialog__surface'
            role='alertdialog'
            aria-modal
            aria-labelledby={ariaLabelledby}
            aria-describedby={ariaDescribedBy}
          >
            {children}
          </div>
        </div>
        <DialogScrim disableInteraction={preventOutsideDismiss} />
      </Tag>
    </PortalChild>
  )
})

/** A SimpleDialog component for ease of use. */
export const SimpleDialog = createComponent(
  function SimpleDialog (
    {
      title,
      header,
      body,
      footer,
      acceptLabel = 'Accept',
      cancelLabel = 'Cancel',
      children,
      open,
      ...rest
    },
    ref
  ) {
    return (
      <Dialog open={open} {...rest} ref={ref}>
        {(!!title || !!header) && (
          <DialogTitle>
            {!!title && title}
            {!!header && header}
          </DialogTitle>
        )}
        {(!!body || children) && (
          <DialogContent>
            {body}
            {children}
          </DialogContent>
        )}

        {(!!cancelLabel || !!acceptLabel || !!footer) && (
          <DialogActions>
            {!!footer && footer}
            {!!cancelLabel && (
              <DialogButton action='close'>{cancelLabel}</DialogButton>
            )}
            {!!acceptLabel && (
              <DialogButton action='accept' isDefaultAction>
                {acceptLabel}
              </DialogButton>
            )}
          </DialogActions>
        )}
      </Dialog>
    )
  }
)

/*********************************************************************
 * Bits
 *********************************************************************/

const DialogScrim = memo(function DialogScrim ({
  disableInteraction
}) {
  const style = disableInteraction
    ? { pointerEvents: 'none' }
    : {}
  return <div className='mdc-dialog__scrim' style={style} />
})

/** The Dialog title. */
export const DialogTitle = createComponent(
  function DialogTitle (props, ref) {
    const className = useClassNames(props, ['mdc-dialog__title'])
    return <Tag tag='h2' {...props} ref={ref} className={className} />
  }
)

/** The Dialog content. */
export const DialogContent = createComponent(
  function DialogContent (props, ref) {
    const className = useClassNames(props, ['mdc-dialog__content'])
    return <Tag {...props} ref={ref} className={className} />
  }
)

/** Actions container for the Dialog. */
export const DialogActions = createComponent(
  function DialogActions (props, ref) {
    const className = useClassNames(props, ['mdc-dialog__actions'])
    return <Tag {...props} ref={ref} className={className} />
  }
)

/** Action buttons for the Dialog. */
export const DialogButton = createComponent(
  function DialogButton (props, ref) {
    const className = useClassNames(props, ['mdc-dialog__button'])
    const { action = '', isDefaultAction, ...rest } = props
    const defaultProp = isDefaultAction
      ? { [MDCDialogFoundation.strings.BUTTON_DEFAULT_ATTRIBUTE]: true }
      : {}

    return (
      <Button
        {...rest}
        {...defaultProp}
        ref={ref}
        className={className}
        data-mdc-dialog-action={action}
      />
    )
  }
)
