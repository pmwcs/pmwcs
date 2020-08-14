/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { Avatar, AvatarCount, AvatarGroup } from './'

describe('Avatar SSR', () => {
  it('renders', () => {
    mount(<Avatar src='test' />)
    mount(<AvatarGroup />)

    const av = mount(<AvatarCount value={4} />)
    expect(av).toBe('<i tag="span" class="pmwc-icon pmwc-icon--component pmwc-avatar pmwc-avatar--count"><div class="pmwc-avatar__text"><div class="pmwc-avatar__text-inner">4</div></div></i>')
  })
})
