/** @jsx h */
import { h } from 'preact'
import './styles.js'

import { IconButton } from './index.js'
import { Typography } from '../typography'

export default {
  title: 'IconButton',
  component: IconButton,
};

const style = `
`

export const all = () => (
  <section className='mdc-typography'>
    <style dangerouslySetInnerHTML={{__html:style}}></style>

  </section>
)
