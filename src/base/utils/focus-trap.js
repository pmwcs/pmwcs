// @ts-ignore MDC botched ES5 importing
import * as domUtils from '@material/dom/dist/mdc.dom.js'

const _FocusTrap = domUtils.focusTrap.FocusTrap

export const focusTrapFactory = (el, focusOptions) => new _FocusTrap(el, focusOptions)
