/* istanbul ignore file */
import { useState } from 'preact'
import * as knobTypes from '@storybook/addon-knobs'

import { manager } from '@storybook/addon-knobs/dist/registerKnobs'

export const useKnob = (
  knobType,
  name,
  defaultValue
) => {
  const knobFunc = knobTypes[knobType]
  const [stateValue, _stateSetter] = useState(defaultValue)
  const knobValue = knobFunc(name, stateValue)

  const stateSetter = (value) => {
    _stateSetter(value)
    manager.knob(name, stateValue)
  }

  if (knobValue !== stateValue) {
    stateSetter(knobValue)
  }
  return [stateValue, stateSetter]
}
