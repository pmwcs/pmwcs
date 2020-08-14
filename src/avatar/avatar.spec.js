import { h } from 'preact'
import { mount } from 'enzyme'
import { Avatar, AvatarCount, AvatarGroup } from './'

describe('Avatar', () => {
  it('renders', () => {
    mount(<Avatar src='test' />)
    mount(<Avatar src='test' contain />)
    mount(<AvatarGroup />)
    mount(<AvatarCount value={4} />)
  })

  it('handles names', () => {
    mount(<Avatar name='James Friedman' />)

    const av = mount(<Avatar name='James' />)
    expect(av.html()).toBe('<i title="James" tag="span" class="pmwc-icon pmwc-icon--component pmwc-avatar"><div class="pmwc-avatar__icon"></div><div class="pmwc-avatar__text"><div class="pmwc-avatar__text-inner">J</div></div></i>')
  })
})
