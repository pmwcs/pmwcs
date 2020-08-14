/**
 * @jest-environment node
 */
import { h } from 'preact'
import mount from 'preact-render-to-string'

import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarActionItem,
  TopAppBarTitle
} from './'

describe('TopAppBar SSR', () => {
  test('renders', () => {
    mount(
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <TopAppBarNavigationIcon icon='menu' />
            <TopAppBarTitle>Title</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <TopAppBarActionItem
              aria-label='Download'
              alt='Download'
              icon='file_download'
            />
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
    )
  })
})
