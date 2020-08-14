/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'
import { MenuSurfaceAnchor, Menu, MenuItem, SimpleMenu } from './'

describe('Menu', () => {
  it('renders', () => {
    mount(
      <MenuSurfaceAnchor>
        <button>Test</button>

        <Menu open onClose={() => {}}>
          <MenuItem>Cookies</MenuItem>
          <MenuItem>Pizza</MenuItem>
          <MenuItem>Icecream</MenuItem>
        </Menu>
      </MenuSurfaceAnchor>
    )
  })

  it('SimpleMenu renders', () => {
    mount(
      <SimpleMenu handle={<button>Test</button>}>
        <MenuItem>Cookies</MenuItem>
        <MenuItem>Pizza</MenuItem>
        <MenuItem>Icecream</MenuItem>
      </SimpleMenu>
    )
  })
})
