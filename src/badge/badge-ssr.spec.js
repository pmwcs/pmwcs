/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { Badge, BadgeAnchor } from '.'

describe('Badge SSR', () => {
  it('renders', () => {
    mount(
      <BadgeAnchor>
        <Badge />
      </BadgeAnchor>
    )
  })
})
