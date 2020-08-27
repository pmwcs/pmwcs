import { h, Component, cloneElement } from 'preact'

import { classNames, Tag, randomId } from '@pmwcs/base'

const possiblyFocusElement = (el) => {
  if (!el) return false

  const tabIndex = el.getAttribute('tabindex')
  if (tabIndex && Number(tabIndex) >= 0) {
    el.focus()
    return true
  }
  return false
}

const getNextSibling = (
  el,
  isBack
) => {
  if (!el) return null

  const next = isBack ? el.previousElementSibling : el.nextElementSibling

  if (next === null) {
    return getNextSibling(el.parentElement, isBack)
  }

  return next
}

/** A collapsible list component. */
export class CollapsibleList extends Component {
  static displayName = 'CollapsibleList';

  static getDerivedStateFromProps (
    props,
    state
  ) {
    if (props.open !== undefined && props.open !== state.open) {
      return {
        ...state,
        open: props.open
      }
    }

    return state
  }

  constructor (props) {
    super(props)
    this.childContainer = null
    this.root = null
    this.rafId = null
    this.timerId = null

    this.state = {
      open: !!this.props.defaultOpen || !!this.props.open,
      childrenStyle: {}
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleKeydown = this.handleKeydown.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
    this.ariaId = randomId('accordeon')
    this.ariaControlId = randomId('control')
  }

  componentDidMount () {
    this.syncOpenState()
  }

  componentDidUpdate (
    prevProps,
    prevState
  ) {
    if (prevState.open !== this.state.open) {
      this.syncOpenState()
    }
  }

  componentWillUnmount () {
    this.rafId && window.cancelAnimationFrame(this.rafId)
    this.timerId && window.clearTimeout(this.timerId)
  }

  syncOpenState () {
    const { onOpen, onClose } = this.props
    const childrenStyle = {
      maxHeight: this.childContainer
        ? `${this.childContainer.offsetHeight}px`
        : '0px'
    }

    this.setState({ childrenStyle }, () => {
      if (this.state.open) {
        onOpen && onOpen()
        this.timerId = window.setTimeout(() => {
          if (this.state.open) {
            this.setState({
              childrenStyle: {
                maxHeight: 'none'
              }
            })
          }
        }, 300)
      } else {
        onClose && onClose()
        this.rafId = window.requestAnimationFrame(() => {
          this.setState({
            childrenStyle: {}
          })
        })
      }
    })
  }

  correctFocus (back) {
    this.rafId = window.requestAnimationFrame(() => {
      if (
        !this.state.open &&
        this.root &&
        this.root.contains(document.activeElement)
      ) {
        const sibling = getNextSibling(this.root, back)

        if (possiblyFocusElement(sibling)) {
          return
        }
        if (sibling) {
          const els = sibling.querySelectorAll('[tabindex]')
          for (let i = 0; i < els.length; i++) {
            if (possiblyFocusElement(els[i])) {
              break
            }
          }
        }
      }
    })
  }

  toggleOpen (isOpen) {
    this.setState({ open: isOpen })
  }

  handleClick (evt) {
    // call events that might have been on the handle
    const { handle } = this.props
    handle.props.onClick && handle.props.onClick(evt)

    this.toggleOpen(!this.state.open)
  }

  handleKeydown (evt) {
    // call events that might have been on the handle
    const { handle } = this.props
    handle.props.onKeyDown && handle.props.onKeyDown(evt)

    switch (evt.which) {
      case 13:
        this.toggleOpen(!this.state.open)
        break
      case 39:
        this.toggleOpen(true)
        break
      case 38:
      case 40:
      case 9: {
        const isBack = evt.shiftKey || evt.which === 38
        this.correctFocus(isBack)
        break
      }
      case 37:
        this.toggleOpen(false)
        break
      default:
        break
    }
  }

  handleFocus (evt) {
    if (
      !this.state.open &&
      this.root &&
      this.childContainer &&
      this.childContainer.contains(document.activeElement)
    ) {
      const el = this.root.querySelector(
        '.pmwc-collapsible-list__handle .mdc-list-item'
      )
      el && el.focus()
    }
  }

  render () {
    const {
      children,
      handle,
      onOpen,
      onClose,
      open: openProp,
      defaultOpen,
      className,
      ...rest
    } = this.props
    const { open, childrenStyle } = this.state

    return (
      <Tag
        {...rest}
        onFocus={this.handleFocus}
        ref={(el) => (this.root = el)}
        className={classNames('pmwc-collapsible-list', className, {
          'pmwc-collapsible-list--open': open
        })}
      >
        <div className='pmwc-collapsible-list__handle'>
          {cloneElement(handle, {
            tabindex: 0,
            id: this.ariaId,
            role: 'button',
            'aria-expanded': open,
            'aria-disabled': defaultOpen === true || undefined,
            'aria-controls': this.ariaControlId,
            ...handle.props,
            onClick: this.handleClick,
            onKeyDown: this.handleKeydown
          })}
        </div>
        <div className='pmwc-collapsible-list__children' style={childrenStyle}>
          <div
            className='pmwc-collapsible-list__children-inner'
            id={this.ariaControlId}
            role='region'
            aria-labelledby={this.ariaId}
            ref={(el) => (this.childContainer = el)}
          >
            {children}
          </div>
        </div>
      </Tag>
    )
  }
}
