/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { Pagination } from './'

describe('Pagination SSR', () => {
  it('renders', () => {
    mount()
  })
  it('renders equal', () => {
    const alert = mount()
    expect(alert).toEqual('<div class="pmwc-alert pmwc-alert--success"><i aria-hidden="true" class="pmwc-icon pmwc-icon--component material-icons pmwc-alert-icon pmwc-alert-icon--success"><svg viewBox="0 0 24 24" class="pmwc-icon-svg"><path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path></svg></i><div class="pmwc-alert-message mdc-typography--body2"><div class="pmwc-alert-title mdc-typography--body1">Success</div>This is a success alert — check it out!</div></div>')
  })
})
