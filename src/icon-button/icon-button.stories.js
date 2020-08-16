import { h } from 'preact'
import { action } from '@storybook/addon-actions'
import 'preact/debug'

import './stories.css'
import './styles.js'

import { IconButton } from './index.js'
import { Icon } from '@pmwc/icon'

export default {
  title: 'IconButton',
  component: IconButton
}

export const basic = () => (
  <section className='mdc-typography'>
    <ul>
      <li>No Toggle:{' '}
        <IconButton
          icon='star'
          label='Rate this!'
          foundationRef={console.log}
          onClick={action('no-toggle')}
        />
      </li>
      <li>Toggle:{' '}
        <IconButton
          icon='star'
          onIcon='star_border'
          label='Rate this!'
          foundationRef={console.log}
          onClick={action('toggle')}
        />
      </li>
    </ul>
  </section>
)

function IconFa (props) {
  return (
    <Icon
      className='icon-button--fa'
      basename='fas'
      prefix='fa-'
      {...props}
    />
  )
}

export const fontAwesome = () => (
  <section className='mdc-typography'>
    <ul>
      <li>Font Awesome:{' '}
        <IconButton onClick={action('icecream')}>
          <IconFa
            icon='ice-cream'
            label='icecream'
          />
        </IconButton>
        <IconButton onClick={action('camera')}>
          <IconFa
            icon='camera'
            label='camera'
          />
        </IconButton>
      </li>
    </ul>
  </section>
)
