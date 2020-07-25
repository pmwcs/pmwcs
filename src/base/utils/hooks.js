import { useState } from 'preact/compat';
import { randomId } from './random-id';

export const useId = function (prefix, props) {
  const idToUse = props.id
    ? props.id
    : props.label
    ? `${prefix}-${props.label}`
    : randomId(prefix);
  const [id] = useState(idToUse);
  return id;
};
