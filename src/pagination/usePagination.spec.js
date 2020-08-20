import { renderHook } from '../test-utils'
import { usePagination } from '.'

describe('usePagination', () => {
  it('has one page by default', () => {
    const { items } = renderHook(() => usePagination()).result.current
    expect(items).toHaveLength(3)
    expect(items[1]).toHaveProperty('page', 1)
  })

  it('has disabled previous & next buttons by default', () => {
    const { items } = renderHook(() => usePagination()).result.current
    expect(items[0]).toHaveProperty('type', 'previous')
    expect(items[0]).toHaveProperty('disabled', true)
    expect(items[2]).toHaveProperty('type', 'next')
    expect(items[2]).toHaveProperty('disabled', true)
  })
  it('has a disabled previous button & an enabled next button when count > 1', () => {
    const { items } = renderHook(() => usePagination({ count: 2 })).result.current
    expect(items[0]).toHaveProperty('type', 'previous')
    expect(items[0]).toHaveProperty('disabled', true)
    expect(items[3]).toHaveProperty('type', 'next')
    expect(items[3]).toHaveProperty('disabled', false)
    expect(items[3]).toHaveProperty('page', 2)
  })
  it('has an enabled previous button & disabled next button when page === count', () => {
    const { items } = renderHook(() => usePagination({ count: 2, page: 2 })).result.current
    expect(items[0]).toHaveProperty('type', 'previous')
    expect(items[0]).toHaveProperty('disabled', false)
    expect(items[0]).toHaveProperty('page', 1)
    expect(items[3]).toHaveProperty('type', 'next')
    expect(items[3]).toHaveProperty('disabled', true)
  })
  it('has a disabled first button when showFirstButton === true', () => {
    const { items } = renderHook(() => usePagination({ showFirstButton: true })).result.current
    expect(items[0]).toHaveProperty('type', 'first')
    expect(items[0]).toHaveProperty('disabled', true)
    expect(items[0]).toHaveProperty('page', 1)
  })
  it('has a disabled last button when showLastButton === true', () => {
    const { items } = renderHook(() => usePagination({ showLastButton: true })).result.current
    expect(items[3]).toHaveProperty('type', 'last')
    expect(items[3]).toHaveProperty('disabled', true)
    expect(items[3]).toHaveProperty('page', 1)
  })
  it('has an enabled first button when showFirstButton === true && page > 1', () => {
    const { items } = renderHook(() =>
      usePagination({ showFirstButton: true, count: 2, page: 2 })
    ).result.current
    expect(items[0]).toHaveProperty('type', 'first')
    expect(items[0]).toHaveProperty('disabled', false)
    expect(items[0]).toHaveProperty('page', 1)
  })
  it('has an enabled last button when showLastButton === true && page < count', () => {
    const { items } = renderHook(() =>
      usePagination({ showLastButton: true, count: 2 })
    ).result.current
    expect(items[4]).toHaveProperty('type', 'last')
    expect(items[4]).toHaveProperty('disabled', false)
    expect(items[4]).toHaveProperty('page', 2)
  })
  it('has no ellipses when count <= 7', () => {
    const { items } = renderHook(() => usePagination({ count: 7 })).result.current
    expect(items[1]).toHaveProperty('page', 1)
    expect(items[2]).toHaveProperty('page', 2)
    expect(items[3]).toHaveProperty('page', 3)
    expect(items[4]).toHaveProperty('page', 4)
    expect(items[5]).toHaveProperty('page', 5)
    expect(items[6]).toHaveProperty('page', 6)
    expect(items[7]).toHaveProperty('page', 7)
  })
  it('has an end ellipsis by default when count >= 8', () => {
    const { items } = renderHook(() => usePagination({ count: 8 })).result.current
    expect(items).toHaveLength(9)
    expect(items[2]).toHaveProperty('page', 2)
    expect(items[6]).toHaveProperty('type', 'end-ellipsis')
    expect(items[6]).toHaveProperty('page', null)
  })
  it('has a start ellipsis when page >= 5', () => {
    const { items } = renderHook(() => usePagination({ count: 8, page: 5 })).result.current
    expect(items[2]).toHaveProperty('type', 'start-ellipsis')
    expect(items[2]).toHaveProperty('page', null)
    expect(items[6]).toHaveProperty('page', 7)
  })
  it('has start & end ellipsis when count >= 9', () => {
    const { items } = renderHook(() => usePagination({ count: 9, page: 5 })).result.current
    expect(items).toHaveLength(9)
    expect(items[2]).toHaveProperty('type', 'start-ellipsis')
    expect(items[2]).toHaveProperty('page', null)
    expect(items[6]).toHaveProperty('type', 'end-ellipsis')
    expect(items[6]).toHaveProperty('page', null)
  })
  it('can have a reduced siblingCount', () => {
    const { items } = renderHook(() =>
      usePagination({ count: 7, page: 4, siblingCount: 0 })
    ).result.current
    expect(items).toHaveLength(7)
    expect(items[2]).toHaveProperty('type', 'start-ellipsis')
    expect(items[3]).toHaveProperty('page', 4)
    expect(items[4]).toHaveProperty('type', 'end-ellipsis')
  })
  it('can have an increased siblingCount', () => {
    const { items } = renderHook(() =>
      usePagination({ count: 11, page: 6, siblingCount: 2 })
    ).result.current
    expect(items).toHaveLength(11)
    expect(items[2]).toHaveProperty('type', 'start-ellipsis')
    expect(items[3]).toHaveProperty('page', 4)
    expect(items[4]).toHaveProperty('page', 5)
    expect(items[5]).toHaveProperty('page', 6)
    expect(items[6]).toHaveProperty('page', 7)
    expect(items[7]).toHaveProperty('page', 8)
    expect(items[8]).toHaveProperty('type', 'end-ellipsis')
  })
  it('can have an increased boundaryCount', () => {
    const { items } = renderHook(() =>
      usePagination({ count: 11, page: 6, boundaryCount: 2 })
    ).result.current
    expect(items).toHaveLength(11)
    expect(items[1]).toHaveProperty('page', 1)
    expect(items[2]).toHaveProperty('page', 2)
    expect(items[3]).toHaveProperty('type', 'start-ellipsis')
    expect(items[7]).toHaveProperty('type', 'end-ellipsis')
    expect(items[8]).toHaveProperty('page', 10)
    expect(items[9]).toHaveProperty('page', 11)
  })
})
