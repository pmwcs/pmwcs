/** @jsx h */
import { h } from 'preact'
import { useState } from 'preact/hooks'

import './styles.js'

import {
  Snackbar,
  SnackbarAction,
  SnackbarQueue,
  createSnackbarQueue
} from './index.js';

import  { Button } from '@pmwc/button'

export default {
  title: 'Snackbar',
  component: Snackbar,
};

export const basic = () => {
  function Example() {
    const [open, setOpen] = useState(false);

    return (
      <section>
        <Snackbar
          open={open}
          onClose={evt => setOpen(false)}
          message="This is a new message"
          dismissesOnAction
          action={
            <SnackbarAction
              label="Dismiss"
              onClick={() => console.log('Click Me')}
            />
          }
        />

        <Button
          raised
          label="Show snackbar"
          onClick={evt => setOpen(!open)}
        />
      </section>
    );
  }

  return (
    <section>
      <Example/>
    </section>
  )
}

export const startAligned = () => {
  function Example() {
    const [open, setOpen] = useState(false);

    return (
      <section>
        <Snackbar
          open={open}
          onClose={evt => setOpen(false)}
          message="Start aligned, open until dismissed"
          stacked
          dismissesOnAction
          action={[
            <SnackbarAction label="Yeah!" />,
            <SnackbarAction label="No..." />
          ]}
          leading
          timeout={-1}
        />

        <Button
          raised
          label="Show start-aligned"
          onClick={evt => setOpen(!open)}
        />
      </section>
    );
  }
  return <Example/>
}

export const snackbarQueue = () => {
  const { messages, notify } = createSnackbarQueue();
  function App() {
   return (
     <div>
       <Button
         label="Notify"
         onClick={() =>
           notify({
             title: <b>Success</b>,
             body: 'You have selected pizza!',
             dismissesOnAction: true,
             icon: 'check',
             actions: [
               {
                 title: 'Dismiss'
               }
             ]
           })
         }
       />
       <SnackbarQueue messages={messages} />
     </div>
   );
  }

  return <App />;
}
