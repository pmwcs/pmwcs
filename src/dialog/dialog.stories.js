/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'
import './styles.js'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton,
  SimpleDialog,
  DialogQueue,
  createDialogQueue
} from './index.js'

import { Button } from '@pmwc/button'

export default {
  title: 'Dialog',
  component: Dialog
}

export const standardUsage = () => {
  function Example () {
    const [open, setOpen] = useState(true)
    return (
      <section>
        <Dialog
          open={open}
          onClose={evt => {
            console.log(evt.detail.action)
            setOpen(false)
          }}
          onClosed={evt => console.log(evt.detail.action)}
        >
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogContent>This is a standard dialog.</DialogContent>
          <DialogActions>
            <DialogButton action='close'>Cancel</DialogButton>
            <DialogButton action='accept' isDefaultAction>
              Sweet!
            </DialogButton>
          </DialogActions>
        </Dialog>

        <Button raised onClick={() => setOpen(true)}>
          Open standard Dialog
        </Button>
      </section>
    )
  }
  return <Example />
}

export const simplifiedUsage = () => {
  function Example () {
    const [open, setOpen] = useState(true)
    return (
      <section>
        <SimpleDialog
          title='This is a simple dialog'
          body='You can pass the body prop or children.'
          open={open}
          onClose={evt => {
            console.log(evt.detail.action)
            setOpen(false)
          }}
        />

        <Button raised onClick={() => setOpen(true)}>
          Open Simple Dialog
        </Button>
      </section>
    )
  }
  return <Example />
}

export const dialogQuene = () => {
  const { dialogs, alert, confirm, prompt } = createDialogQueue()

  function App () {
    const [response, setResponse] = useState('____________')

    const fireAlert = () =>
      alert({
        title: 'Hello!',
        body: 'Whats going on?'
      }).then(res => setResponse(res))

    const fireConfirm = () => confirm({
      title: <b>Are you positive?</b>,
      body: 'You have selected pizza instead of icecream!',
      acceptLabel: 'CONFIRM'
    }).then(res => setResponse(res))

    const firePrompt = () => prompt({
      title: 'Whats your name?',
      body: 'Anything will do',
      acceptLabel: 'Submit',
      cancelLabel: 'Skip',
      // For prompts only, you can pass props to the input
      inputProps: { outlined: true }
    }).then(res => setResponse(res))

    return (
      <div>
        <Button label='Alert' onClick={fireAlert} />
        <Button label='Confirm' onClick={fireConfirm} />
        <Button label='Prompt' onClick={firePrompt} />
        <Button
          label='In Sequence'
          onClick={() => {
            fireAlert()
            fireConfirm()
            firePrompt()
          }}
        />

        <p>
          Response: <b>{String(response)}</b>
        </p>
        <DialogQueue dialogs={dialogs} />
      </div>
    )
  }
  return <App />
}
