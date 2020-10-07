import { isBrowserEnv } from './isBrowserEnv'

/**
 * wrapper around history functions to create custom event
 * 'locationchange'
 */
export function onLocationChange () {
  if (onLocationChange.wrapped || !isBrowserEnv()) return

  onLocationChange.wrapped = true

  history.pushState = (f => function pushState (...args) {
    const ret = f.apply(this, args)
    window.dispatchEvent(new Event('pushstate'))
    window.dispatchEvent(new Event('locationchange'))
    return ret
  })(history.pushState)

  history.replaceState = (f => function replaceState (...args) {
    const ret = f.apply(this, args)
    window.dispatchEvent(new Event('replacestate'))
    window.dispatchEvent(new Event('locationchange'))
    return ret
  })(history.replaceState)

  window.addEventListener('popstate', () => {
    window.dispatchEvent(new Event('locationchange'))
  })
}
