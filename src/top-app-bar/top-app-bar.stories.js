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
  component: TopAppBar,
};

export const basic = () => (
  <section>
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
  <section>
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection alignStart>
          <TopAppBarNavigationIcon icon="menu" />
          <TopAppBarTitle>All Features</TopAppBarTitle>
        </TopAppBarSection>
        <TopAppBarSection alignEnd>
          <TopAppBarActionItem icon="favorite" />
          <TopAppBarActionItem icon="star" />
          <TopAppBarActionItem icon="mood" />
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
  <section>
    <SimpleTopAppBar
      title="test"
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
<section>
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
<section>
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
<section>
  {/** Additionally you can specify shortCollapsed to have it always minimized */}
  <TopAppBar short>
    <TopAppBarRow>
      <TopAppBarSection>
        <TopAppBarNavigationIcon icon="menu" />
        <TopAppBarTitle>Short</TopAppBarTitle>
      </TopAppBarSection>
      <TopAppBarSection alignEnd>
        <TopAppBarActionItem icon="favorite" />
      </TopAppBarSection>
    </TopAppBarRow>
  </TopAppBar>
  <TopAppBarFixedAdjust />

  <div style={{ height: '100rem', padding: '1rem' }}>Scroll Me</div>
</section>
)

export const prominent = () => (
<section>
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
