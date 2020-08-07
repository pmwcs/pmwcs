import {h} from 'preact';
import React, { useState, useEffect } from 'preact/compat';
import {
  SimpleDialog,
} from './dialog';
import { ArrayEmitter, randomId } from '@pmwc/base';
import { TextField } from '@pmwc/textfield';

/** A snackbar queue for rendering messages */
export function DialogQueue({
  dialogs,
  ...defaultDialogProps
}) {
  const [, setIteration] = useState(0);
  const [closingDialogs, setClosingDialogs] = useState({});

  useEffect(() => {
    const forceUpdate = () => setIteration(val => val + 1);
    dialogs.on('change', forceUpdate);
    return () => {
      dialogs.off('change', forceUpdate);
    };
  }, [dialogs]);

  const removeDialog = (evt, dialog) => {
    setClosingDialogs({
      ...closingDialogs,
      [dialog.id]: true
    });

    dialog.resolve(evt);
    setTimeout(() => {
      // remove the dialog from our array
      const index = dialogs.array.indexOf(dialog);
      !!~index && dialogs.array.splice(index, 1);

      // remove it from the closing state
      const newClosingDialogs = { ...closingDialogs };
      delete newClosingDialogs[dialog.id];
      setClosingDialogs(newClosingDialogs);
    }, 150);
  };

  // A simple way to show only one at a time
  // We loop through until we find a dialog thats not closing
  // When one is closing, we flip this flag and render all of the other ones in a closed state
  // This ensures we get the proper animations for closing dialogs
  let foundOpen = false;

  return (
    <>
      {dialogs.array.map(dialog => {
        const { resolve, reject, id, inputProps, ...rest } = dialog;

        const rendered = (
          <SimpleDialog
            {...defaultDialogProps}
            {...rest}
            key={id}
            open={!closingDialogs[id] && !foundOpen}
            onClose={evt => {
              removeDialog(evt, dialog);
              dialog.onClose && dialog.onClose(evt);
            }}
          />
        );

        if (!closingDialogs[id]) {
          foundOpen = true;
        }

        return rendered;
      })}
    </>
  );
}

/**
 * A base dialog factory that handle setting up the promise
 * With some consistent behavior
 */
const dialogFactory = (factory) => (dialog) => {
  return new Promise((resolve, reject) => {
    const d = factory({ id: randomId(), ...dialog, resolve, reject });
    queue.push(d);
  });
};

/**
 * Handle prompt dialogs
 * We have to jump through a few hoops to get the value back out
 */
function PromptBody({
  body,
  inputProps,
  apiRef
}) {
  const [value, setValue] = useState('');

  useEffect(() => {
    apiRef(() => value);
  }, [apiRef, value]);

  return (
    <div>
      {!!body && <div style={{ marginBottom: '1rem' }}>{body}</div>}
      <TextField
        style={{ width: '100%' }}
        autoFocus
        {...inputProps}
        value={value}
        onChange={evt => {
          setValue(evt.currentTarget.value);
        }}
      />
    </div>
  );
}

const promptFactory = (dialog) => {
  let getValue = () => '';

  const body = (
    <PromptBody
      body={dialog.body}
      inputProps={dialog.inputProps}
      apiRef={_getValue => (getValue = _getValue)}
    />
  );

  return {
    title: 'Prompt',
    ...dialog,
    body,
    resolve: (evt) => {
      dialog.resolve(evt.detail.action === 'accept' ? getValue() : null);
      getValue = undefined;
    }
  };
};

/** Alerts */
const alertFactory = (dialog) => ({
  title: 'Alert',
  body: 'You have been alerted!',
  acceptLabel: 'OK',
  cancelLabel: null,
  ...dialog,
  resolve: (evt) => dialog.resolve(evt.detail.action)
});

/** Confirm */
const confirmFactory = (dialog) => ({
  title: 'Confirm',
  body: 'Are you sure you want do that?',
  acceptLabel: 'OK',
  cancelLabel: 'Cancel',
  ...dialog,
  resolve: (evt) =>
    dialog.resolve(evt.detail.action === 'accept')
});

/** Creates a snackbar queue */
export const createDialogQueue = () => {
  const dialogs = new ArrayEmitter();

  return {
    dialogs,
    alert: dialogFactory(alertFactory, dialogs),
    confirm: dialogFactory(confirmFactory, dialogs),
    prompt: dialogFactory(promptFactory, dialogs)
  };
};
