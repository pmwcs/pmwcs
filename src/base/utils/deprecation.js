export const deprecationWarning = function (message) {
  if (process && process.env && process.env.NODE_ENV !== 'production') {
    console.warn('PMWCS Deprecation Warning: ' + message)
  }
}
export const handleDeprecations = function (props_, deprecate, displayName) {
  const props = { ...props_ }
  for (const oldPropName in deprecate) {
    const newProp = deprecate[oldPropName]
    let newPropName
    let transformProp = function (value) { return value }
    if (Array.isArray(newProp)) {
      newPropName = newProp[0]
      transformProp = newProp[1]
    } else {
      newPropName = newProp
    }
    if (props[oldPropName] !== undefined) {
      if (newPropName === '') {
        /* istanbul ignore next */
        deprecationWarning((displayName ||
                    '') + " component prop '" + oldPropName + "' has been removed from and is no longer a valid prop.")
      } else {
        props[newPropName] = transformProp(props[oldPropName])
        let propTransformMessage = ''
        if (props[newPropName] !== props[oldPropName]) {
          propTransformMessage = " The old value has also been converted from '" + props[oldPropName] + "' to '" + props[newPropName] + "'"
        }
        /* istanbul ignore next */
        deprecationWarning((displayName ||
                    '') + " component prop '" + oldPropName + "' has been replaced with '" + newPropName + "'. " + propTransformMessage)
      }
      delete props[oldPropName]
    }
  }
  return props
}
