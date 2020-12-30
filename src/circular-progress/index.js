import { h } from 'preact'
import { useClassNames, Tag, createComponent } from '@pmwcs/base'

const SIZE_MAP = {
  xsmall: 18,
  small: 20,
  medium: 24,
  large: 36,
  xlarge: 48
}

export const CircularProgress = createComponent(
  function CircularProgress (props, ref) {
    const { size = 'medium', max = 1, min = 0, progress, secondary, standard, ...rest } = props

    if (secondary) {
      props.theme = 'secondary'
    } else if (standard) {
      props.theme = 'standard'
    }

    const className = useClassNames(props, [
      'pmwc-circular-progress',
      {
        [`pmwc-circular-progress--size-${props.size}`]:
          typeof props.size === 'string',
        'pmwc-circular-progress--indeterminate': progress === undefined,
        'pmwc-circular-progress--thickerstroke':
          !!props.size && (SIZE_MAP[size] || Number(size)) > 36
      }
    ])

    const style = !SIZE_MAP[size]
      ? { ...rest.style, fontSize: Number(size) }
      : rest.style
    const _size = SIZE_MAP[size] || Number(size)

    const calculateRatio = (value) => {
      if (value < min) return 0
      if (value > max) return 1
      return (value - min) / (max - min)
    }

    const circularStyle = (size) => {
      return progress !== undefined
        ? {
            strokeDasharray: `${
              2 * Math.PI * (size / 2.4) * calculateRatio(progress)
            }, 666.66%`
          }
        : undefined
    }

    return (
      <Tag
        aria-valuenow={progress}
        aria-valuemin={min}
        aria-valuemax={max}
        {...rest}
        style={style}
        className={className}
        ref={ref}
      >
        <svg
          className='pmwc-circular-progress__circle'
          viewBox={`0 0 ${_size} ${_size}`}
        >
          <circle
            className='pmwc-circular-progress__path'
            style={circularStyle(_size)}
            cx={_size / 2}
            cy={_size / 2}
            r={_size / 2.4}
          />
        </svg>
      </Tag>
    )
  }
)
