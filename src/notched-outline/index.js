import { h } from 'preact'
import { memo } from 'preact/compat'
import { useNotchedOutlineFoundation } from './foundation'
import { createComponent, Tag } from '@pmwc/base'

/*********************************************************************
 * Notched Outline
 *********************************************************************/

export const NotchedOutline = createComponent(
  function NotchedOutline (props, ref) {
    const { children, ...rest } = props
    const { rootEl, notchedEl } = useNotchedOutlineFoundation(props)

    return (
      <Tag
        {...rest}
        element={rootEl}
        className='mdc-notched-outline'
        ref={ref}
      >
        <NotchedOutlineLeading />
        <div
          {...notchedEl.props({
            className: 'mdc-notched-outline__notch'
          })}
          ref={notchedEl.setRef}
        >
          {children}
        </div>
        <NotchedOutlineTrailing />
      </Tag>
    )
  }
)

/*********************************************************************
 * Bits
 *********************************************************************/

const NotchedOutlineLeading = memo(function NotchedOutlineLeading () {
  return <div className='mdc-notched-outline__leading' />
})

const NotchedOutlineTrailing = memo(function NotchedOutlineTrailing () {
  return <div className='mdc-notched-outline__trailing' />
})
