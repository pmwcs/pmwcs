
export const isBrowserEnv = () =>
  (typeof window !== 'undefined' && window.navigator)

export const windowVar = isBrowserEnv() ? window : undefined
