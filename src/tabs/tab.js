import { h } from 'preact'
import { useContext } from 'preact/hooks'
import { memo } from 'preact/compat'

import {
  useClassNames,
  Tag,
  createComponent
} from '@pmwc/base'
import { Icon } from '@pmwc/icon'
import { withRipple, RippleSurface } from '@pmwc/ripple'

import { TabBarContext } from './tab-bar-context'
import { TabIndicator } from './tab-indicator'
import { useTabFoundation } from './tab-foundation'

const TabRoot = withRipple({ surface: false })(
  createComponent(function TabRoot (props, ref) {
    const { stacked, minWidth, ...rest } = props
    const className = useClassNames(props, [
      'mdc-tab',
      {
        'mdc-tab--stacked': stacked,
        'mdc-tab--min-width': minWidth
      }
    ])
    return <Tag tag='button' {...rest} className={className} ref={ref} />
  })
)

/** A Tab icon. This is an instance of the Icon component. */
const TabIcon = memo(function TabIcon (props) {
  return <Icon {...props} className='mdc-tab__icon' />
})

/** A Tab component */
export const Tab = createComponent(function Tab (props, ref) {
  const {
    children,
    label,
    icon,
    stacked,
    restrictIndicator,
    onInteraction,
    iconIndicator,
    foundationRef,
    ...rest
  } = props

  const { rootEl, contentEl, setTabIndicatorApi } = useTabFoundation(props)

  const contextApi = useContext(TabBarContext)

  const tabIndicator = (
    <TabIndicator
      apiRef={setTabIndicatorApi}
      transition={contextApi.indicatorTransition}
      icon={iconIndicator}
    />
  )

  return (
    <TabRoot element={rootEl} stacked={stacked} {...rest} ref={ref}>
      <div className='mdc-tab__content' ref={contentEl.setRef}>
        {!!icon && <TabIcon icon={icon} />}
        {(children !== undefined || label !== undefined) && (
          <span className='mdc-tab__text-label'>
            {label}
            {children}
          </span>
        )}
        {!!restrictIndicator && tabIndicator}
      </div>
      {!restrictIndicator && tabIndicator}
      <RippleSurface className='mdc-tab__ripple' />
    </TabRoot>
  )
})
