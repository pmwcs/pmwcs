import { useState, useEffect } from 'preact/hooks'
import { fetchTimeout, setDefaultHeaders } from './fetchTimeout.js'

/**
 * @type {object} useFetchReturn
 * @props {any} data - returned data from fetch
 * @props {Error} error - fetch error
 * @props {boolean} isLoading - isLoading indicator
 * @props {function} setUrl - change fetch url
 * @props {function} setOptions - change fetch options
 */

/**
 * useFetch Hook
 * @param {string} initialUrl
 * @param {options} initialOptions - see https://developer.mozilla.org/en-US/docs/Web/API/Request#properties
 * @param {function} [reducer] - optional reducer function
 * @return {useFetchReturn}
 */
export function useFetch (initialUrl, initialOptions, reducer) {
  const [url, setUrl] = useState(initialUrl)
  const [options, setOptions] = useState(setDefaultHeaders(initialOptions))
  const [data, setData] = useState()
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    let isEffectRunning = true

    setLoading(true)
    setError(null)

    async function fetchData () {
      try {
        const res = await fetchTimeout(url, options)
        if (!isEffectRunning) { return }
        if (res.status < 300) {
          const body = await res.json()
          setData(reducer ? reducer(body) : body)
        } else {
          const err = new Error(res.statusText)
          err.status = res.status
          err.url = res.url
          try {
            err.body = await res.json()
          } catch (e) {}
          setError(err)
        }
      } catch (e) {
        setError(e)
      }
      setLoading(false)
    }
    fetchData()

    return () => {
      isEffectRunning = false
    }
  }, [url, options])

  return { data, error, isLoading, setUrl, setOptions }
}
