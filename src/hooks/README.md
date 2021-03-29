# Hooks

Hooks for pmwcs.

- Module **@pmwcs/hooks**

The module contains hooks for

- `unstated` for context provider components (credits to [unstated-next](https://github.com/jamiebuilds/unstated-next))
- `useFetch` data fetching hook
- `fetchRetry`, `fetchTimeout` fetch helpers for retry and timeout

## unstated

State management

```jsx
import { createContainer } from '@pmwcs/hooks'

function useCounter (initialState = 0) {
  const [count, setCount] = useState(initialState)
  const increment = () => setCount(count + 1)
  return { count, increment }
}
// create Counter Container
const Counter = createContainer(useCounter)

function CounterDisplay () {
  // attach to context
  const counter = Counter.useContainer()
  return (
    <div>
      <span>{counter.count}</span>
      <button onClick={() => { counter.increment() }}>+</button>
    </div>
  )
}

function App () {
  return (
    <Counter.Provider initialState={2}>
      <CounterDisplay />
    </Counter.Provider>
  )
}
```

## useFetch

Hook to fetch remote data.

```jsx
import { useFetch } from '@pmwcs/hooks'

function Fetch ({ url, options, reducer }) {
  const { data, error, isLoading } = useFetch(url, options, reducer)

  return isLoading
    ? (<div>Loading ...</div>)
    : error
      ? (<div>{err.message}</div>)
      : (<div>{JSON.stringify(data)}</div>)
}

const reducer = ({body}) => body

function App () {
  return (
    <Fetch
      url='https://jsonplaceholder.typicode.com/posts/1'
      reducer={reducer}
    />
  )
}
```
