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
  SimpleDialog
} from './index.js'

import { Button } from '@pmwc/button'

export default {
  title: 'Dialog',
  component: Dialog,
};

export const standardUsage = () => {
  function Example() {
    const [open, setOpen] = useState(true);
    return (
      <section>
        <Dialog
          open={open}
          onClose={evt => {
            console.log(evt.detail.action);
            setOpen(false);
          }}
          onClosed={evt => console.log(evt.detail.action)}
        >
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogContent>This is a standard dialog.</DialogContent>
          <DialogActions>
            <DialogButton action="close">Cancel</DialogButton>
            <DialogButton action="accept" isDefaultAction>
              Sweet!
            </DialogButton>
          </DialogActions>
        </Dialog>

        <Button raised onClick={() => setOpen(true)}>
          Open standard Dialog
        </Button>
      </section>
    );
  }
  return <Example />
}

export const simplifiedUsage = () => {
  function Example() {
    const [open, setOpen] = useState(true);
    return (
      <section>
        <SimpleDialog
          title="This is a simple dialog"
          body="You can pass the body prop or children."
          open={open}
          onClose={evt => {
            console.log(evt.detail.action);
            setOpen(false);
          }}
        />

        <Button raised onClick={() => setOpen(true)}>
          Open Simple Dialog
        </Button>
      </section>
    );
  }
  return <Example/>
}
