import { h, Fragment } from 'preact'
import { memo } from 'preact/compat'

import { useLinearProgressFoundation } from './foundation'
import { Tag, useClassNames, createComponent } from '@pmwcs/base'

/** A component to display linear progress. */
export const LinearProgress = createComponent(
  function LinearProgress (props, ref) {
    const {
      reversed,
      closed,
      progress,
      buffer,
      secondary,
      foundationRef,
      ...rest
    } = props
    const className = useClassNames(props, [
      'mdc-linear-progress',
      {
        'mdc-linear-progress--reversed': reversed,
        'mdc-linear-progress--closed': closed,
        'mdc-linear-progress--secondary': secondary
      }
    ])
    const { rootEl } = useLinearProgressFoundation(props)

    return (
      <Tag
        aria-label='Progress Bar'
        {...rest}
        aria-valuemin={0}
        aria-valuemax={1}
        aria-valuenow={progress}
        tag='nav'
        role='progressbar'
        element={rootEl}
        className={className}
        ref={ref}
      >
        <LinearProgressBody />
      </Tag>
    )
  }
)

const LinearProgressBody = memo(function LinearProgressBody () {
  return (
    <Fragment>
      <div className='mdc-linear-progress__buffer'>
        <div className='mdc-linear-progress__buffer-bar' />
        <div className='mdc-linear-progress__buffer-dots' />
      </div>
      <div className='mdc-linear-progress__bar mdc-linear-progress__primary-bar'>
        <span className='mdc-linear-progress__bar-inner' />
      </div>
      <div className='mdc-linear-progress__bar mdc-linear-progress__secondary-bar'>
        <span className='mdc-linear-progress__bar-inner' />
      </div>
    </Fragment>
  )
})
