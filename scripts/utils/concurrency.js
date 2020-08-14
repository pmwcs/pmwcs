const concurrency = async (limit, fns) =>
  new Promise((resolve) => {
    const result = new Array(fns.length).fill(undefined)
    let i = 0
    let ended = 0

    function runner () {
      const p = i
      const fn = fns[i]
      const promise = (typeof fn === 'function')
        ? fn()
        : (p < fns.length) && Promise.reject(new TypeError('no function'))
      i += 1

      if (ended >= fns.length) {
        resolve(result)
      } else if (promise) {
        promise
          .then(value => { result[p] = { status: 'fulfilled', value } })
          .catch(err => { result[p] = { status: 'rejected', reason: err } })
          .finally(() => { ended += 1; runner() })
      }
    }

    const l = Math.min(limit, fns.length)
    for (let j = 0; j < l; j++) {
      runner()
    }
  })

module.exports = {
  concurrency
}
