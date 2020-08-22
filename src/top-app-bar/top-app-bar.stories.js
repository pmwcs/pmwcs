/** @jsx h */
import { h } from 'preact'
import './styles.js'

import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust,
  TopAppBarNavigationIcon,
  TopAppBarActionItem,
  SimpleTopAppBar
} from './index.js'

export default {
  title: 'TopAppBar',
  component: TopAppBar
}

export const basic = () => (
  <section className='mdc-typography'>
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection>
          <TopAppBarTitle>Default</TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
    <TopAppBarFixedAdjust />

    <div style={{ height: '100rem', padding: '1rem' }}>Scroll Me</div>
  </section>
)

export const allFeatures = () => (
  <section className='mdc-typography'>
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection alignStart>
          <TopAppBarNavigationIcon icon='menu' />
          <TopAppBarTitle>All Features</TopAppBarTitle>
        </TopAppBarSection>
        <TopAppBarSection alignEnd>
          <TopAppBarActionItem icon='favorite' />
          <TopAppBarActionItem icon='star' />
          <TopAppBarActionItem icon='mood' />
        </TopAppBarSection>
      </TopAppBarRow>
      <TopAppBarRow>
        <TopAppBarSection alignStart>
          <TopAppBarTitle>Another Row</TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
    <TopAppBarFixedAdjust />

    <div style={{ height: '100rem', padding: '1rem' }}>Scroll Me</div>
  </section>
)

export const simple = () => (
  <section className='mdc-typography'>
    <SimpleTopAppBar
      title='test'
      navigationIcon
      onNav={() => console.log('Navigate')}
      actionItems={[
        {
          icon: 'file_download',
          onClick: () => console.log('Do Something')
        },
        { icon: 'print', onClick: () => console.log('Do Something') },
        { icon: 'bookmark', onClick: () => console.log('Do Something') }
      ]}
    />
    <TopAppBarFixedAdjust />

    <div style={{ height: '100rem', padding: '1rem' }}>Scroll Me</div>
  </section>
)

export const fixed = () => (
  <section className='mdc-typography'>
    <TopAppBar fixed>
      <TopAppBarRow>
        <TopAppBarSection>
          <TopAppBarTitle>Fixed</TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
    <TopAppBarFixedAdjust />

    <div style={{ height: '100rem', padding: '1rem' }}>Scroll Me</div>
  </section>
)

export const dense = () => (
  <section className='mdc-typography'>
    <TopAppBar dense>
      <TopAppBarRow>
        <TopAppBarSection>
          <TopAppBarTitle>Dense</TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
    <TopAppBarFixedAdjust />

    <div style={{ height: '100rem', padding: '1rem' }}>Scroll Me</div>
  </section>
)

export const short = () => (
  <section className='mdc-typography'>
    {/** Additionally you can specify shortCollapsed to have it always minimized */}
    <TopAppBar short>
      <TopAppBarRow>
        <TopAppBarSection>
          <TopAppBarNavigationIcon icon='menu' />
          <TopAppBarTitle>Short</TopAppBarTitle>
        </TopAppBarSection>
        <TopAppBarSection alignEnd>
          <TopAppBarActionItem icon='favorite' />
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
    <TopAppBarFixedAdjust />

    <div style={{ height: '100rem', padding: '1rem' }}>Scroll Me</div>
  </section>
)

export const prominent = () => (
  <section className='mdc-typography'>
    <TopAppBar prominent>
      <TopAppBarRow>
        <TopAppBarSection>
          <TopAppBarTitle>Prominent</TopAppBarTitle>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
    <TopAppBarFixedAdjust />

    <div style={{ height: '100rem', padding: '1rem' }}>Scroll Me</div>
  </section>
)
