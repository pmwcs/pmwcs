import { createElement, createContext } from 'preact'
import { useContext } from 'preact/hooks'

// Default provider options
const providerDefaults = {
  ripple: true,
  tooltip: {
    align: 'top',
    showArrow: false,
    activateOn: ['hover', 'focus'],
    enterDelay: 0,
    leaveDelay: 0
  },
  typography: null,
  icon: {
    icon: '',
    basename: 'material-icons',
    prefix: '',
    strategy: 'auto',
    render: undefined
  }
}

export const ProviderContext = createContext(providerDefaults)
export const useProviderContext = () => useContext(ProviderContext)

/** A provider for setting global options in PMWCS. */
export const PMWCSProvider = function (props) {
  const { children, ...rest } = props
  return (createElement(
    ProviderContext.Provider,
    { value: { ...providerDefaults, ...rest } },
    children
  ))
}
