import { h } from 'preact'
import { useRef } from 'preact/hooks'

import { Tag, useClassNames, createComponent } from '@pmwcs/base'

import { TabScroller } from './tab-scroller'
import { TabBarContext } from './tab-bar-context'
import { useTabBarFoundation } from './tab-bar-foundation'

/************************************************************
 * TabBar
 ************************************************************/

export const TabBar = createComponent(function TabBar (props, ref) {
  const {
    children,
    activeTabIndex,
    onActivate,
    foundationRef,
    ...rest
  } = props

  const {
    rootEl,
    handleTabInteraction,
    setTabScrollerApi,
    registerTab,
    unregisterTab
  } = useTabBarFoundation(props)

  const contextApi = useRef({
    onTabInteraction: (evt) =>
      handleTabInteraction(evt),
    registerTab,
    unregisterTab,
    indicatorTransition: props.indicatorTransition || 'slide'
  })

  const className = useClassNames(props, ['mdc-tab-bar'])

  return (
    <TabBarContext.Provider value={contextApi.current}>
      <Tag tag='nav' element={rootEl} {...rest} className={className} ref={ref}>
        <TabScroller apiRef={setTabScrollerApi}>{children}</TabScroller>
      </Tag>
    </TabBarContext.Provider>
  )
})
