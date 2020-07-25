import { h, createElement, createContext } from 'preact';
import { useContext } from 'preact/compat';

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
};

export const ProviderContext = createContext(providerDefaults);
export const useProviderContext = () => useContext(ProviderContext)

/** A provider for setting global options in RMWC. */
export const PMWCProvider = function (props) {
  const { children, ...rest } = props
  return (createElement(
    ProviderContext.Provider,
    { value: { ...providerDefaults, ...rest } },
    children
  ))
}
