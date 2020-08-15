import { h } from 'preact'
import { mount } from 'enzyme'
import { act } from 'preact/test-utils'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton,
  SimpleDialog,
  createDialogQueue,
  DialogQueue
} from './'
import { wait } from '@pmwc/base/utils/test-utils'
// import { act } from 'preact/test-utils'

describe('Dialog', () => {
  it('simple Dialog renders', () => {
    mount(
      <SimpleDialog
        title='This is a simple dialog'
        header='Foo'
        body='You can pass the body prop, or anything you want as children.'
        open
        onClose={(evt) => {}}
      />
    )
  })

  it('simple Dialog renders with no children', () => {
    mount(
      <SimpleDialog
        title='This is a simple dialog'
        open
        onClose={(evt) => {}}
      />
    )
  })

  it('simple Dialog renders with children', () => {
    mount(
      <SimpleDialog title='This is a simple dialog' open onClose={(evt) => {}}>
        Hello
      </SimpleDialog>
    )
  })

  // FIXME: event bubbling does not work
  it.skip('Dialog lifecycle', async (done) => {
    let open = 0
    let opened = 0
    let close = 0
    let closed = 0

    const el = mount(
      <Dialog
        onOpen={() => open++}
        onOpened={() => opened++}
        onClose={() => {
          close++
          el.setProps({ open: false })
        }}
        onClosed={() => closed++}
        onClick={evt => console.log('bubble', evt)}
      >
        <DialogTitle>Dialog Title</DialogTitle>

        <DialogContent>This is a custom dialog.</DialogContent>
        <DialogActions>
          <DialogButton action='close'>Cancel</DialogButton>
          <DialogButton action='accept'>Sweet!</DialogButton>
        </DialogActions>
      </Dialog>
    )

    el.setProps({ open: true })
    await wait(250)

    const acceptButton = el.find('button.mdc-dialog__button').last()
    console.log(el.debug())
    acceptButton.simulate('click')
    el.find('div.mdc-dialog').first().simulate('click')
    await wait(250)

    el.setProps({ open: true })
    await wait(250)
    const cancelButton = el.find('button.mdc-dialog__button').first()
    cancelButton.simulate('click')
    await wait(250)

    console.log({ open, opened, close, closed })

    expect(open).toBe(2)
    expect(opened).toBe(2)
    expect(close).toBe(2)
    expect(closed).toBe(2)
    done()
  })

  it('standard Dialog renders', () => {
    const el = mount(
      <Dialog open onClose={(evt) => {}}>
        <DialogTitle>Dialog Title</DialogTitle>

        <DialogContent>This is a custom dialog.</DialogContent>
        <DialogActions>
          <DialogButton action='close'>Cancel</DialogButton>
          <DialogButton action='accept'>Sweet!</DialogButton>
        </DialogActions>
      </Dialog>
    )

    el.unmount()
  })
})

describe('DialogQueue', () => {
  it('renders', () => {
    const queue = createDialogQueue()
    const el = mount(<DialogQueue dialogs={queue.dialogs} />)
    el.unmount()
  })

  // FIXME: event bubbling does not work
  it.skip('alerts and accepts', async (done) => {
    const queue = createDialogQueue()
    const el = mount(<DialogQueue ripple={false} dialogs={queue.dialogs} />)

    queue.alert({ title: 'myAlert' }).then(async (resp) => {
      expect(resp).toBe('accept')

      // wait for cleanup
      await wait(200)
      done()
    })

    await wait()
    el.update()

    expect(el.html().includes('myAlert')).toBe(true)
    await wait(100)

    el.find('button.mdc-dialog__button').first().simulate('click')
  })

  // FIXME: event bubbling does not work
  it.skip('alerts and closes', async (done) => {
    const queue = createDialogQueue()
    const el = mount(<DialogQueue dialogs={queue.dialogs} />)
    queue.alert({ title: 'myAlert' }).then((resp) => {
      expect(resp).toBe('close')
      done()
    })

    await wait()
    el.update()

    el.find('div.mdc-dialog__scrim').first().simulate('click')
  })

  // FIXME: event bubbling does not work
  it.skip('confirms and returns true', async (done) => {
    const queue = createDialogQueue()
    const el = mount(<DialogQueue dialogs={queue.dialogs} />)
    queue.confirm({ title: 'myConfirm' }).then((resp) => {
      expect(resp).toBe(true)
      done()
    })

    await wait()
    el.update()
    expect(el.html().includes('myConfirm')).toBe(true)

    el.find('[action="accept"]').first().simulate('click')
  })

  // FIXME: event bubbling does not work
  it.skip('confirms and returns false', async (done) => {
    const queue = createDialogQueue()
    const el = mount(<DialogQueue dialogs={queue.dialogs} />)
    queue.confirm({ title: 'myConfirm' }).then((resp) => {
      expect(resp).toBe(false)
      done()
    })

    await wait()
    el.update()

    el.find('[action="close"]').first().simulate('click')
  })

  // FIXME: event bubbling does not work
  it.skip('prompts and returns value', async (done) => {
    const queue = createDialogQueue()
    const el = mount(<DialogQueue dialogs={queue.dialogs} />)

    queue.prompt({ title: 'myPrompt' }).then((resp) => {
      expect(resp).toBe('WORKING')
      done()
    })

    el.update()
    expect(el.html().includes('myPrompt')).toBe(true);

    (el.find('input').prop('onChange'))({
      currentTarget: { value: 'WORKING' }
    })

    el.update()
    await wait()

    el.find('[action="accept"]').first().simulate('click')
  })

  // FIXME: event bubbling does not work
  it.skip('prompts and returns null', (done) => {
    const queue = createDialogQueue()
    const el = mount(<DialogQueue dialogs={queue.dialogs} />)
    queue.prompt({ title: 'myPrompt', body: 'CUSTOM BODY' }).then((resp) => {
      expect(resp).toBe(null)
      done()
    })

    el.update()

    expect(el.html().includes('CUSTOM BODY')).toBe(true)

    el.find('[action="close"]').first().simulate('click')
  })

  // FIXME: event bubbling does not work
  it.skip('supports onClose', (done) => {
    const queue = createDialogQueue()
    const el = mount(<DialogQueue dialogs={queue.dialogs} />)
    const onClose = jest.fn()
    queue.alert({ onClose })

    el.update()

    setTimeout(() => {
      el.find('.mdc-dialog__button').first().simulate('click')

      expect(onClose).toHaveBeenCalled()
      done()
    })
  })
})
