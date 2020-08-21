/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { Pagination } from './'

describe('Pagination SSR', () => {
  it('renders', () => {
    mount(<Pagination count={2} />)
  })
  it('renders equal', () => {
    const alert = mount(<Pagination count={2} defaultPage={2} />)
    expect(alert).toEqual(
      '<nav aria-label="pagination navigation">' +
      '<ul class="pmwc-pagination">' +
      '<li>' +
      '<button tabindex="0" aria-label="Go to previous page" class="pmwc-icon pmwc-icon--ligature material-icons pmwc-pagination-item mdc-icon-button mdc-icon-button pmwc-icon-button--size-medium pmwc-icon--size-medium" data-mdc-ripple-is-unbounded>navigate_before</button>' +
      '</li>' +
      '<li>' +
      '<button tabindex="0" aria-label="Go to page 1" class="pmwc-icon pmwc-icon--ligature material-icons pmwc-pagination-item mdc-icon-button pmwc-pagination-item--text mdc-icon-button pmwc-icon-button--size-medium pmwc-icon--size-medium" data-mdc-ripple-is-unbounded>1</button>' +
      '</li>' +
      '<li>' +
      '<button tabindex="0" aria-label="page 2" aria-current="true" class="pmwc-icon pmwc-icon--ligature material-icons pmwc-pagination-item mdc-icon-button pmwc-pagination-item--selected pmwc-pagination-item--text mdc-icon-button pmwc-icon-button--size-medium pmwc-icon--size-medium" data-mdc-ripple-is-unbounded>2</button>' +
      '</li>' +
      '<li>' +
      '<button tabindex="0" aria-label="Go to next page" disabled class="pmwc-icon pmwc-icon--ligature material-icons pmwc-pagination-item mdc-icon-button pmwc-pagination-item--disabled mdc-icon-button pmwc-icon-button--size-medium pmwc-icon--size-medium" data-mdc-ripple-is-unbounded>navigate_next</button>' +
      '</li>' +
      '</ul>' +
      '</nav>'
    )
  })
})
