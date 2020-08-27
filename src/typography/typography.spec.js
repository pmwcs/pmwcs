import { h } from 'preact'
import { mount } from 'enzyme'
import { Typography } from './'
import { PMWCSProvider } from '../provider'

describe('Typography', () => {
  it('renders', () => {
    mount(<Typography use='body1' />)
  })

  it('can have custom classnames', () => {
    const el = mount(
      <Typography use='body1' className='my-custom-classname' />
    )
    expect(!!~el.html().search('my-custom-classname')).toEqual(true)
  })

  it('supports refs', () => {
    let myRef = null
    mount(
      <Typography
        use='body1'
        ref={(el) => {
          myRef = el
        }}
      >
        Hello
      </Typography>
    )

    expect(myRef).toBeTruthy()
  })

  it('works with PMWCSProvider', () => {
    mount(
      <PMWCSProvider
        typography={{
          /** Make all Typography components default to <div>  */
          defaultTag: 'div',
          /** Make headline5 <h5>  */
          headline5: 'h5',
          /** Make body2 <p>  */
          body2: 'p',
          /** Use your own component  */
          body1: ({ children, ...rest }) => (
            <span>
              <b>{children}!!!</b>
            </span>
          )
        }}
      >
        <Typography use='headline6'>Rendered default `div`</Typography>
        <Typography use='headline5'>Rendered with `h5`</Typography>
        <Typography use='body2'>Rendered with `p`</Typography>
        <Typography use='body1'>Custom rendering</Typography>
      </PMWCSProvider>
    )

    mount(
      <PMWCSProvider typography={undefined}>
        <Typography use='headline6'>Rendered default `div`</Typography>
      </PMWCSProvider>
    )
  })
})
