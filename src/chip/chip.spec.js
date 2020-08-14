import { h } from 'preact'
import { mount } from 'enzyme'
import { Chip, ChipSet } from './'
import { useChipFoundation } from './foundation'
import { mountHook } from '@pmwc/base/utils/test-utils'
import { MDCChipFoundation } from '@material/chips'

describe('Chip', () => {
  it('renders', () => {
    const el = mount(
      <ChipSet>
        <Chip icon='favorite' trailingIcon='close' label='test-label' />
      </ChipSet>
    )

    expect(el.html().includes('test-label')).toBe(true)
  })

  it('renders with children', () => {
    const el = mount(
      <ChipSet>
        <Chip icon='favorite' trailingIcon='close'>
          test-label
        </Chip>
      </ChipSet>
    )

    expect(el.html().includes('test-label')).toBe(true)
  })

  it('handles selected', () => {
    const el = mount(
      <ChipSet>
        <Chip checkmark selected label='test-label' />
        <Chip checkmark selected icon='favorite' label='test-label' />
      </ChipSet>
    )

    expect(el.html().includes('mdc-chip--selected')).toBe(true)
  })

  it('handles onInteraction', () => {
    let value = 0
    const el = mount(
      <Chip
        ripple={false} onInteraction={() => {
          value++
        }}
      />
    )
    el.find('.mdc-chip').first().props().element._ref.click()

    expect(value).toEqual(1)
  })

  it('handles custom ChipIcon', () => {
    const el = mount(<Chip icon='favorite' />)
    expect(el.html().includes('favorite')).toBe(true)
  })

  it('handles onTrailingIconInteraction, onRemove, and onTransitionEnd', () => {
    let onInteraction = 0
    let onRemove = 0

    const el = mount(
      <Chip
        ripple={false}
        trailingIcon='close'
        onTrailingIconInteraction={() => onInteraction++}
        onRemove={() => onRemove++}
      />
    )

    el.find('.mdc-chip__icon--trailing').first().props().onClick()
    el.update()

    expect(onInteraction).toEqual(1)

    // Having to force a call of this since JSDOM cant
    // replicate MDCs internal animation behavior
    el.props().onRemove()

    expect(onRemove).toEqual(1)
  })
})

describe('Chip: Foundation', () => {
  it('useChipFoundation', () => {
    mountHook(() => {
      const { foundation } = useChipFoundation({})
      expect(foundation instanceof MDCChipFoundation).toBe(true)
    })
  })
})
