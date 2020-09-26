
export const isBrowserEnv = () =>
  (typeof window !== 'undefined' && window.document)

export const windowVar = isBrowserEnv() ? window : undefined
