/**
 * @credits material-ui
 * @license MIT
 */

import { useRef, useState, useEffect, useCallback } from 'preact/hooks'

export function useControlled ({ controlled, default: defaultProp, name, state = 'value' }) {
  const { current: isControlled } = useRef(controlled !== undefined)
  const [valueState, setValue] = useState(defaultProp)
  const value = isControlled ? controlled : valueState

  if (process.env.NODE_ENV !== 'production') {
    useEffect(() => {
      if (isControlled !== (controlled !== undefined)) {
        console.error(
          [
            `A component is changing the ${
              isControlled ? '' : 'un'
            }controlled ${state} state of ${name} to be ${isControlled ? 'un' : ''}controlled.`,
            'Elements should not switch from uncontrolled to controlled (or vice versa).',
            `Decide between using a controlled or uncontrolled ${name} ` +
              'element for the lifetime of the component.',
            "The nature of the state is determined during the first render, it's considered controlled if the value is not `undefined`.",
            'More info: https://fb.me/react-controlled-components'
          ].join('\n')
        )
      }
    }, [controlled])

    const { current: defaultValue } = useRef(defaultProp)

    useEffect(() => {
      if (!isControlled && defaultValue !== defaultProp) {
        console.error(
          [
            `A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. ` +
              `To suppress this warning opt to use a controlled ${name}.`
          ].join('\n')
        )
      }
    }, [JSON.stringify(defaultProp)])
  }

  const setValueIfUncontrolled = useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue)
    }
  }, [])

  return [value, setValueIfUncontrolled]
}
