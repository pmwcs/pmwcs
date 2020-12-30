import { h, Fragment } from 'preact'
import { useState, useEffect, useCallback } from 'preact/hooks'

import {
  Snackbar,
  SnackbarAction
} from './snackbar'
import { ArrayEmitter } from '@pmwcs/base'

/** A snackbar queue for rendering messages */
export function SnackbarQueue ({
  messages,
  ...defaultSnackbarProps
}) {
  const currentMessage = messages.array[0]
  const [, setIteration] = useState(0)
  const [message, setMessage] = useState(
    messages.array[0]
  )

  const removeMessage = useCallback(
    (message) => {
      message && messages.remove(message)
    },
    [messages]
  )

  useEffect(() => {
    let timerId
    const doChange = () => {
      if (messages.array[0] !== message) {
        setIteration(val => val + 1)
        timerId = window.setTimeout(() => setMessage(messages.array[0]), 150)
      }
    }
    messages.on('change', doChange)
    return () => {
      timerId && clearTimeout(timerId)
      messages.off('change', doChange)
    }
  }, [messages, message])

  const {
    body = '',
    image,
    title = '',
    onClose,
    actions,
    ...messageSnackbarProps
  } = message || {}

  const actionProp = actions
    ? actions.map(({ title, label, ...rest }, i) => (
      <SnackbarAction {...rest} key={i} label={label || title} />
      ))
    : null

  // We are open if we have a message
  // and the current one is the one in state
  const open = message && message === currentMessage

  return (
    <Snackbar
      {...defaultSnackbarProps}
      {...messageSnackbarProps}
      open={open}
      message={
        <Fragment>
          {title}
          {!!title && !!body && <br />}
          {body}
          {!!image && (
            <div
              className='pmwc-snackbar__image'
              style={{
                margin: '1rem auto',
                textAlign: 'center'
              }}
            >
              <img
                src={image}
                alt={`${image}`}
                style={{ maxWidth: '100%', maxHeight: '18rem' }}
              />
            </div>
          )}
        </Fragment>
      }
      onClose={evt => {
        onClose?.(evt)
        removeMessage(message)
      }}
      action={actionProp}
    />
  )
}

/** Creates a snackbar queue */
export const createSnackbarQueue = () => {
  const messages = new ArrayEmitter()

  return {
    messages,
    clearAll: () => messages.empty(),
    notify: (message) => {
      messages.push(message)
      return {
        close: () => {
          messages.remove(message)
        }
      }
    }
  }
}
