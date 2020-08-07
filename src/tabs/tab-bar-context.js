import { h, createContext } from 'preact'

export const TabBarContext = createContext({
  onTabInteraction: (evt) => {},
  registerTab: (tab) => {},
  unregisterTab: (tab) => {},
  indicatorTransition: 'slide'
});
