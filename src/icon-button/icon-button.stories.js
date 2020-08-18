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
  <section className='icon-button-stories mdc-typography'>
    <ul>
      <li>
        <IconButton
          icon='star'
          label='Rate this!'
          foundationRef={console.log}
          onClick={action('no-toggle')}
        />
      </li>
      <li>
        <IconButton
          checked
          icon='star'
          label='Rate this!'
          onClick={action('checked')}
        />
        {' '}checked
      </li>
      <li>
        <IconButton
          icon='star'
          onIcon='star_border'
          label='Rate this!'
          onClick={action('toggle')}
        />
        {' '}onIcon
      </li>
      <li>
        <IconButton
          checked
          icon='star'
          onIcon='star_border'
          label='Rate this!'
          onClick={action('checked')}
        />
        {' '}onIcon checked
      </li>
      <li>
        <IconButton
          disabled
          icon='star'
          label='Rate this!'
          onClick={action('disabled')}
        />
        {' '}disabled
      </li>
      <li>
        <IconButton
          icon='star'
          label='Rate this!'
          style={{ color: 'red' }}
          onClick={action('disabled')}
        />
        {' style={{ color: \'red\' }}'}
      </li>
    </ul>
  </section>
)

export const sizes = () => (
  <section className='icon-button-stories mdc-typography'>
    <ul>
      <li>
        <IconButton
          checked
          icon='favorite'
          label='Like this!'
          size='xsmall'
        />
        {" size='xsmall'"}
      </li>
      <li>
        <IconButton
          checked
          icon='favorite'
          label='Like this!'
          size='small'
        />
        {" size='small'"}
      </li>
      <li>
        <IconButton
          checked
          icon='favorite'
          label='Like this!'
          size='medium'
        />
        {" size='medium'"}
      </li>
      <li>
        <IconButton
          checked
          icon='favorite'
          label='Like this!'
        />
      </li>
      <li>
        <IconButton
          checked
          icon='favorite'
          label='Like this!'
          size='large'
        />
        {" size='large'"}
      </li>
      <li>
        <IconButton
          checked
          icon='favorite'
          label='Like this!'
          size='xlarge'
        />
        {" size='xlarge'"}
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

export const custom = () => (
  <section className='icon-button-stories mdc-typography'>
    <ul>
      <li>
        <IconButton
          size='xsmall'
          onClick={action('camera')}
        >
          <IconFa
            icon='camera'
            label='camera'
          />
        </IconButton>
        {" Fontawesome: size='xsmall'"}
      </li>
      <li>
        <IconButton onClick={action('icecream')}>
          <IconFa
            icon='ice-cream'
            label='icecream'
          />
        </IconButton>
        {' Fontawesome'}
      </li>
      <li>
        <IconButton onClick={action('url')} size='xlarge'>
          https://duckduckgo.com/assets/logo_header.v108.svg
        </IconButton>
        {" url: size='xlarge'"}
      </li>
      <li>
        <IconButton onClick={action('svg')} size='xsmall' style={{ color: 'dodgerblue' }}>
          <svg viewBox='0 0 24 24'>
            <path d='M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z' />
          </svg>
        </IconButton>
        {" svg: size='xsmall' style={{color: 'dodgerblue'}}"}
      </li>
      <li>
        <IconButton onClick={action('img')} size='large'>
          <img style={{ borderRadius: '50%' }} alt='Natalia Alianovna Romanova' src='images/avatars/blackwidow.png' />
        </IconButton>
        {" img: size='large'"}
      </li>
    </ul>
  </section>
)
