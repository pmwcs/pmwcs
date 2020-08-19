import { useState } from 'preact/hooks'
import { randomId } from './random-id'

export const useId = function (prefix, props) {
  const idToUse = props.id
    ? props.id
    : randomId(prefix)
  const [id] = useState(idToUse)
  return id
}
