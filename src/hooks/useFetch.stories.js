/** @jsx h */

import { h } from 'preact'
// import { useState } from 'preact/hooks'
// import { action } from '@storybook/addon-actions'

import { useFetch } from './useFetch.js'

export default {
  title: 'useFetch'
}

function Test ({ assert, test }) {
  const ok = assert && test && Object.entries(assert)
    .map(([k, v]) => {
      const ok = test[k] === v
      if (!ok) console.log('assert: test[k] !== v with %j', { k, v, test: test[k] })
      return ok
    })
    .every((v) => v === true)
  return ok
    ? <span style={{ color: 'green', fontWeight: 'bold' }}>✓</span>
    : <span style={{ color: 'red', fontWeight: 'bold' }}>✖</span>
}

export const basic = () => {
  function Fetch ({ url, options, assert, reducer }) {
    const { data, error, isLoading } = useFetch(url, options, reducer)
    const { method = 'GET' } = options || {}

    return isLoading
      ? (
        <section style={{ backgroundColor: 'red' }}>Loading... {url}</section>
        )
      : error
        ? (
          <section>
            <h2><Test assert={assert.error} test={error} /> {error.name} {error.status} {url}</h2>
            <pre>{error.message}</pre>
          </section>
          )
        : (
          <section>
            <h2><Test assert={assert.data} test={data} /> {method} {url}</h2>
            <pre>{JSON.stringify(data)}</pre>
          </section>
          )
  }

  return (
    <section className='mdc-typography'>
      <Fetch
        url='./use-fetch/delayed'
        assert={{ data: { delay: 3000 } }}
      />
      <Fetch
        url='./use-fetch/test'
        assert={{ data: { test: 1 } }}
      />
      <Fetch
        url='./use-fetch/test'
        options={{ method: 'POST', body: { test: 1 } }}
        assert={{ data: { method: 'POST', test: 1 } }}
        reducer={({ body, ...other }) => ({ ...other, ...body })}
      />
      <Fetch
        url='./use-fetch/timeout'
        options={{ timeout: 2000 }}
        assert={{ error: { message: 'Request timed out after 2000ms', name: 'AbortError' } }}
      />
      <Fetch
        url='./use-fetch/not-json'
        assert={{ error: { name: 'SyntaxError' } }}
      />
      <Fetch
        url='./use-fetch/not-found'
        assert={{ error: { message: 'Not Found', status: 404, name: 'Error' } }}
      />
      <Fetch
        url='./use-fetch/error-500'
        assert={{ error: { message: 'Internal Server Error', status: 500, name: 'Error' } }}
      />
    </section>
  )
}
