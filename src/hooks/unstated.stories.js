/** @jsx h */

import { h } from 'preact'
import { useState } from 'preact/hooks'
// import { action } from '@storybook/addon-actions'

import { createContainer } from './unstated.js'

export default {
  title: 'unstated'
}

export const basic = () => {
  function useCounter (initialState = 0) {
    const [count, setCount] = useState(initialState)
    const decrement = () => setCount(count - 1)
    const increment = () => setCount(count + 1)
    return { count, decrement, increment }
  }

  const Counter = createContainer(useCounter)

  function CounterDisplay () {
    const counter = Counter.useContainer()
    return (
      <div>
        <button onClick={() => { counter.decrement() }}>-</button>
        <span>{counter.count}</span>
        <button onClick={() => { counter.increment() }}>+</button>
      </div>
    )
  }

  return (
    <section className='mdc-typography'>
      <Counter.Provider>
        <CounterDisplay />
        <Counter.Provider initialState={2}>
          <div>
            <div>
              <CounterDisplay />
            </div>
          </div>
        </Counter.Provider>
      </Counter.Provider>
    </section>
  )
}
