import { h, Fragment, isValidElement } from 'preact'
import { memo } from 'preact/compat'

import { useClassNames, useId, Tag, createComponent } from '@pmwc/base'
import { FloatingLabel } from '@pmwc/floating-label'
import { LineRipple } from '@pmwc/line-ripple'

import { NotchedOutline } from '@pmwc/notched-outline'
import {
  Menu,
  MenuItem,
  MenuItems
} from '@pmwc/menu'
import { ListGroup, ListGroupSubheader, ListDivider } from '@pmwc/list'
import { withRipple } from '@pmwc/ripple'

import { useSelectFoundation } from './foundation'
import { SelectIcon } from '../select-icon'

/**
 * Takes multiple structures for options and returns [{label: 'label', value: 'value', ...rest}]
 */
const createSelectOptions = (options) => {
  // preformatted array
  if (Array.isArray(options) && options[0] && typeof options[0] === 'object') {
    return options.map((opt) => {
      if (typeof opt !== 'object') {
        throw new Error(`Encountered non object for Select ${opt}`)
      }
      return { ...opt, options: createSelectOptions(opt.options) }
    })
  }

  // simple array
  if (Array.isArray(options)) {
    return options.map((value) => ({ value, label: value }))
  }

  // value => label objects
  if (typeof options === 'object') {
    return Object.keys(options).map((value) => ({
      value,
      label: options[value]
    }))
  }

  // default, just return
  return options
}

const SelectDropdownArrow = memo(function SelectDropdownArrow () {
  return (
    <span class='mdc-select__dropdown-icon'>
      <svg
        class='mdc-select__dropdown-icon-graphic'
        viewBox='7 10 10 5'
      >
        <polygon
          class='mdc-select__dropdown-icon-inactive'
          stroke='none'
          fill-rule='evenodd'
          points='7 10 12 15 17 10'
        />
        <polygon
          class='mdc-select__dropdown-icon-active'
          stroke='none'
          fill-rule='evenodd'
          points='7 15 12 10 17 15'
        />
      </svg>
    </span>
  )
})

const isEmptyValue = props => props.placeholder !== undefined ||
  (props.value === undefined && !props.defaultValue)

function NativeMenu (props) {
  const {
    selectOptions,
    placeholder = '',
    children,
    elementRef,
    ...rest
  } = props

  const renderOption = ({
    label,
    option,
    index
  }) => {
    return (
      <option key={index} {...option} value={option.value}>
        {label}
      </option>
    )
  }

  return (
    <select
      tabIndex={0}
      {...rest}
      ref={elementRef}
      className={`pmwc-select__native-control ${rest.className || ''}`}
    >
      {isEmptyValue(props) && (
        <option value=''>
          {placeholder}
        </option>
      )}
      {!!selectOptions &&
        selectOptions.map(
          ({ label, options, ...option }, index) => {
            if (options) {
              return (
                <optgroup label={label} key={index}>
                  {options.map(({ label, ...option }, index) =>
                    renderOption({
                      label,
                      option,
                      index
                    })
                  )}
                </optgroup>
              )
            }

            return renderOption({
              label,
              option,
              index
            })
          }
        )}
      {children}
    </select>
  )
}

const SelectedTextEl = withRipple({ surface: false })(function (props) {
  return <Tag {...props} />
})

function EnhancedMenu (props) {
  const {
    selectOptions,
    menuApiRef,
    value,
    placeholder,
    children,
    selectedIndex,
    ...rest
  } = props

  let currentIndex = 0

  const renderEmpty = () => {
    if (isEmptyValue(props)) {
      currentIndex += 1
      return (
        <MenuItem
          role='option'
          selected={currentIndex - 1 === selectedIndex}
          data-value=''
          theme='textDisabledOnBackground'
        >
          {placeholder}&nbsp;
        </MenuItem>
      )
    }
  }

  const renderOption = ({
    label,
    option
  }) => {
    currentIndex += 1

    return (
      <MenuItem
        key={`${label}-${option.value}`}
        activated={
          value !== undefined
            ? option.value === value
            : currentIndex - 1 === selectedIndex
        }
        {...option}
        data-value={option.value}
        role='option'
      >
        {label}
      </MenuItem>
    )
  }

  return (
    <Menu
      {...rest}
      role='listbox'
      apiRef={menuApiRef}
      className='mdc-select__menu'
      focusOnOpen
    >
      {renderEmpty()}
      {selectOptions.map(
        ({ label, options, ...option }, i) => {
          if (options) {
            return (
              <ListGroup key={i}>
                {label && (
                  <ListGroupSubheader theme='textDisabledOnBackground'>
                    {label}
                  </ListGroupSubheader>
                )}
                <MenuItems>
                  {options.map(({ label, ...option }) =>
                    renderOption({ label, option })
                  )}
                </MenuItems>
                {i < selectOptions.length - 1 && <ListDivider />}
              </ListGroup>
            )
          }

          return renderOption({ label, option })
        }
      )}
      {children}
    </Menu>
  )
}

export const Select = createComponent(function Select (props, ref) {
  const {
    placeholder,
    children,
    value: value_,
    outlined,
    label = '',
    options = [],
    rootProps = {},
    enhanced,
    icon,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    invalid,
    inputRef,
    helpText,
    foundationRef,
    fullwidth,
    style,
    ...rest
  } = props

  // convert value to string as otherwise initial value for controlled component
  // while using numbers not working
  const value = props.value = value_ !== undefined
    ? String(value_)
    : value_

  const selectOptions = createSelectOptions(options)
  const {
    rootEl,
    selectedTextEl,
    notchWidth,
    menuOpen,
    selectedTextContent,
    lineRippleActive,
    lineRippleCenter,
    floatLabel,
    setFloatingLabel,
    setNativeControl,
    setLeadingIcon,
    selectedIndex,
    setMenu,
    handleFocus,
    handleBlur,
    handleClick,
    handleKeydown,
    handleMenuClosed,
    handleMenuOpened,
    handleMenuSelected
  } = useSelectFoundation(props)

  const id = useId('select', props)
  const className = useClassNames(props, [
    'mdc-select',
    {
      'mdc-select--fullwidth': !!fullwidth,
      'mdc-select--outlined': !!outlined,
      'mdc-select--required': !!props.required,
      'mdc-select--invalid': !!invalid,
      'mdc-select--with-leading-icon': !!icon,
      'mdc-select--no-label': !label
    }
  ])

  const enhancedMenuProps = typeof enhanced === 'object'
    ? enhanced
    : { fullwidth: true }

  const enhancedListeners = enhanced
    ? {
      onFocus: handleFocus,
      onBlur: handleBlur,
      onClick: handleClick,
      onKeyDown: handleKeydown,
      tabIndex: 0
    }
    : {}

  const defaultValue =
    value !== undefined ? undefined : props.defaultValue || ''

  const renderedLabel = (
    <FloatingLabel float={floatLabel} apiRef={setFloatingLabel} htmlFor={id}>
      {label}
    </FloatingLabel>
  )

  const renderHelpText = () => {
    const shouldRender = !!helpText

    if (!shouldRender) {
      return null
    }

    const shouldSpread =
      typeof helpText === 'object' && !isValidElement(helpText)

    return helpText && shouldSpread ? (
      <SelectHelperText {...helpText} />
    ) : (
      <SelectHelperText>{helpText}</SelectHelperText>
    )
  }

  return (
    <Fragment>
      <Tag
        {...rootProps}
        {...enhancedListeners}
        element={rootEl}
        ref={ref}
        className={className}
        style={style}
      >
        <div
          className='mdc-select__anchor'
          role='button'
          aria-haspopup='listbox'
          aria-labelledby={id}
        >
          {!!icon && <SelectIcon apiRef={setLeadingIcon} icon={icon} />}
          <SelectedTextEl
            className='mdc-select__selected-text'
            role='button'
            aria-haspopup='listbox'
            element={selectedTextEl}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={handleClick}
            onKeyDown={handleKeydown}
            /** In the case of native selects, we don't want this to be be focusable */
            tabIndex={enhanced ? undefined : -1}
          >
            {selectedTextContent || <Fragment>&nbsp;</Fragment>}
          </SelectedTextEl>
          <SelectDropdownArrow />
          {outlined
            ? (
              <NotchedOutline notch={notchWidth}>{renderedLabel}</NotchedOutline>
            )
            : (
              <Fragment>
                {renderedLabel}
                <LineRipple active={lineRippleActive} center={lineRippleCenter} />
              </Fragment>
            )}
        </div>
        {!enhanced
          ? (
            <NativeMenu
              {...rest}
              value={value}
              children={children}
              defaultValue={defaultValue}
              placeholder={placeholder}
              selectOptions={selectOptions}
              elementRef={setNativeControl}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={(evt) => handleMenuSelected(evt.currentTarget.selectedIndex)}
            />
          )
          : (
            <EnhancedMenu
              {...rest}
              {...enhancedMenuProps}
              anchorCorner='bottomStart'
              defaultValue={defaultValue}
              placeholder={placeholder}
              open={menuOpen}
              onClose={handleMenuClosed}
              onOpen={handleMenuOpened}
              onSelect={(evt) => {
                handleMenuSelected(evt.detail.index)
              }}
              selectOptions={selectOptions}
              value={value}
              selectedIndex={selectedIndex}
              menuApiRef={setMenu}
              children={children}
            />
          )}
      </Tag>

      {renderHelpText()}
    </Fragment>
  )
})

/** A help text component */
export const SelectHelperText = createComponent(function SelectHelperText (
  props,
  ref
) {
  const { persistent, validationMsg, ...rest } = props
  const className = useClassNames(props, [
    'mdc-select-helper-text',
    {
      'mdc-select-helper-text--persistent': persistent,
      'mdc-select-helper-text--validation-msg': validationMsg
    }
  ])

  return <Tag tag='p' {...rest} className={className} ref={ref} />
})
