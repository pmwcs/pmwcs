/** @jsx h */
import { h } from 'preact'
import { PMWCProvider } from '@pmwc/provider'

import './stories.css'

import './styles.js'

import { Icon } from './index.js'
import { Typography } from '@pmwc/typography'

export default {
  title: 'Icon',
  component: Icon
}

export const basic = () => (
  <section className='mdc-typography'>
    <Typography use='body1'>
      <a href='https://material.io/resources/icons/?style=baseline'>Material Icons</a>
    </Typography>

    <ul>
      <li>
        Ligature child: <Icon>favorite</Icon>
      </li>
      <li>
        Ligature use: <Icon icon='favorite' />
      </li>
      <li>Sizes:{' '}
        <Icon size='xsmall' icon='favorite' />
        <Icon size='small' icon='favorite' />
        <Icon size='medium' icon='favorite' />
        <Icon size='large' icon='favorite' />
        <Icon size='xlarge' icon='favorite' />
      </li>

      <li>
        filled (default): <Icon icon='grade' />
      </li>
      <li>
        outlined: <Icon outlined icon='grade' />
      </li>
      <li>
        rounded: <Icon rounded icon='grade' />
      </li>
      <li>
        twoTone: <Icon twoTone icon='grade' />
      </li>
      <li>
        sharp: <Icon sharp icon='grade' />
      </li>
    </ul>

    <Typography use='body1'>
      Custom Icons
    </Typography>

    <ul>
      <li>
        Component child:{' '}
        <Icon>
          <div style={{ background: 'purple', width: '24px', height: '24px' }} />
        </Icon>
      </li>
      <li>
        Component Use:{' '}
        <Icon
          icon={
            <div style={{ background: 'purple', width: '24px', height: '24px', borderRadius: '24px' }} />
          }
        />
      </li>
      <li>
        Url child:{' '}
        <Icon>
          https://duckduckgo.com/assets/logo_header.v108.svg
        </Icon>
      </li>
      <li>
        Fontawesome:{' '}
        <Icon basename='fas' prefix='fa-'>camera</Icon>
        <Icon basename='fas' prefix='fa-' icon='ice-cream' />
      </li>
      <li>
        SVG:{' '}
        <Icon style={{ width: '2em', height: '2em' }}>
          <svg viewBox='0 0 24 24'><g><path d='M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z' /></g>
          </svg>
        </Icon>
      </li>
      <li>
        Nested Icon Child:{' '}
        <Icon>
          <Icon
            icon={
              <div
                style={{ background: 'blue', width: '24px', height: '24px' }}
              />
            }
          />
        </Icon>
      </li>
      <li>
        Nested Icon Use:{' '}
        <Icon
          icon={
            <Icon
              icon={
                <div
                  style={{ background: 'blue', width: '24px', height: '24px', borderRadius: '24px' }}
                />
              }
            />
          }
        />
      </li>
      <li>
        className use:{' '}
        <Icon
          icon={{
            prefix: 'ion-',
            icon: 'ionic',
            strategy: 'className',
            basename: 'icon'
          }}
        />
      </li>
      <li>
        custom use:{' '}
        <Icon
          icon={{
            strategy: 'custom',
            render: (props) => <span style={{ background: 'pink' }}>Customized-{props.content}</span>,
            content: 'CUSTOM'
          }}
        />
      </li>
      <li>
        custom with Provider:{' '}
        <PMWCProvider
          icon={{
            strategy: 'custom',
            render: (props) => <span style={{ background: 'pink' }}>Custom + {props.content}</span>
          }}
        >
          <Icon icon='test' />
        </PMWCProvider>
      </li>
    </ul>
  </section>
)
