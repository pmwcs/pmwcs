/** @jsx h */
import { h } from 'preact'
import './styles.js'

import { Button } from './index.js'
import { Typography } from '../typography'

export default {
  title: 'Button',
  component: Button,
};

const style = `
:root {
  --mdc-theme-error: red;
  --mdc-theme-on-error: white;
}
button { margin: 1em; }
.demo-button-shaped { border-radius: 18px; }
`

export const all = () => (
  <section className='mdc-typography'>
    <style dangerouslySetInnerHTML={{__html:style}}></style>

    <Typography use='body1'>Text Button</Typography>
    <Button>
      Default
    </Button>
    <Button dense>
      Dense
    </Button>

    <Typography use='body1'>Raised Button</Typography>
    <Button raised>
      Default
    </Button>
    <Button raised dense>
      Dense
    </Button>

    <Typography use='body1'>Unelevated Button</Typography>
    <Button unelevated>
      Default
    </Button>
    <Button unelevated dense>
      Dense
    </Button>

    <Typography use='body1'>Outlined Button</Typography>
    <Button outlined>
      Default
    </Button>
    <Button outlined dense>
      Dense
    </Button>

    <Typography use='body1'>Shaped Button</Typography>
    <Button raised className='demo-button-shaped'>
      Default
    </Button>
    <Button raised className='demo-button-shaped' dense>
      Dense
    </Button>

    <Typography use='body1'>Danger Button</Typography>
    <Button raised danger>
      Default
    </Button>
    <Button raised danger dense>
      Dense
    </Button>
  </section>
)
