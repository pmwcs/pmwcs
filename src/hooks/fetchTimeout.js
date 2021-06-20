
const hasAbortController = typeof AbortController !== 'undefined'

async function sleep (delay) {
  return new Promise(resolve => {
    if (!delay || delay <= 0) resolve()
    setTimeout(() => { resolve() }, delay)
  })
}

export async function fetchRetry (url, options) {
  const { retry = 2, retryDelay = 1000, ..._options } = options
  const res = await fetch(url, _options)
  _options.retry = retry - 1
  return (res.status < 500 || retry <= 0)
    ? res
    : sleep(retryDelay).then(() => fetchRetry(url, _options))
}

export async function fetchTimeout (url, options) {
  const { timeout, ..._options } = options
  if (timeout && !options.signal && hasAbortController) {
    const controller = new AbortController()
    _options.signal = controller.signal
    setTimeout(() => controller.abort(), timeout)
  }
  return fetchRetry(url, _options).catch(err => {
    if (err.name === 'AbortError') {
      err = new Error(`Request timed out after ${timeout}ms`)
      err.name = 'AbortError'
    }
    return Promise.reject(err)
  })
}

export function setDefaultHeaders (options) {
  const _options = { ...options }
  // set Content-Type for methods POST, PUT, PATCH
  if (_options.method && _options.method[0] === 'P') {
    _options.headers = {
      'Content-Type': 'application/json; charset=utf-8',
      ..._options.headers
    }
    if (typeof _options.body === 'object') {
      _options.body = JSON.stringify(_options.body)
    }
  }
  return _options
}
