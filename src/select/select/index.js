import { h, Fragment } from 'preact'
import { memo, isValidElement } from 'preact/compat';

import { useClassNames, useId, Tag, createComponent } from '@pmwc/base';
import { FloatingLabel } from '@pmwc/floating-label';
import { LineRipple } from '@pmwc/line-ripple';

import { NotchedOutline } from '@pmwc/notched-outline';
import {
  Menu,
  MenuItem,
  MenuItems
} from '@pmwc/menu';
import { ListGroup, ListGroupSubheader, ListDivider } from '@pmwc/list';
import { withRipple } from '@pmwc/ripple';

import { useSelectFoundation } from './foundation';
import { SelectIcon } from '../select-icon';

/**
 * Takes multiple structures for options and returns [{label: 'label', value: 'value', ...rest}]
 */
const createSelectOptions = (options) => {
  // preformatted array
  if (Array.isArray(options) && options[0] && typeof options[0] === 'object') {
    return options.map((opt) => {
      if (typeof opt !== 'object') {
        throw new Error(`Encountered non object for Select ${opt}`);
      }
      return { ...opt, options: createSelectOptions(opt.options) };
    });
  }

  // simple array
  if (Array.isArray(options)) {
    return options.map((value) => ({ value, label: value }));
  }

  // value => label objects
  if (typeof options === 'object') {
    return Object.keys(options).map((value) => ({
      value,
      label: options[value]
    }));
  }

  // default, just return
  return options;
};

const SelectDropdownArrow = memo(function SelectDropdownArrow() {
  return <i className="mdc-select__dropdown-icon" />;
});

function NativeMenu(props) {
  const {
    selectOptions,
    placeholder = '',
    children,
    elementRef,
    ...rest
  } = props;

  const renderOption = ({
    label,
    option,
    index
  }) => {
    return (
      <option key={index} {...option} value={option.value}>
        {label}
      </option>
    );
  };

  const isEmptyValue = !props.value && !props.defaultValue;

  return (
    <select
      tabIndex={0}
      {...rest}
      ref={elementRef}
      className={`pmwc-select__native-control ${rest.className || ''}`}
    >
      {(props.placeholder !== undefined || isEmptyValue) && (
        <option value="" disabled={isEmptyValue}>
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
              );
            }

            return renderOption({
              label,
              option,
              index
            });
          }
        )}
      {children}
    </select>
  );
}

const SelectedTextEl = withRipple({ surface: false })(function (props) {
  return <Tag {...props} />;
});

function EnhancedMenu(props) {
  const {
    selectOptions,
    menuApiRef,
    value,
    placeholder,
    children,
    selectedIndex,
    ...rest
  } = props;

  let currentIndex = 0;

  const renderOption = ({
    label,
    option
  }) => {
    currentIndex += 1;

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
      >
        {label}
      </MenuItem>
    );
  };

  return (
    <Menu
      {...rest}
      apiRef={menuApiRef}
      className="mdc-select__menu"
      focusOnOpen
    >
      {!!props.placeholder && (
        <MenuItem
          selected={currentIndex - 1 === selectedIndex}
          data-value=""
          theme="textDisabledOnBackground"
        >
          {placeholder}
        </MenuItem>
      )}

      {selectOptions.map(
        ({ label, options, ...option }, i) => {
          if (options) {
            return (
              <ListGroup key={i}>
                {label && (
                  <ListGroupSubheader theme="textDisabledOnBackground">
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
            );
          }

          return renderOption({ label, option });
        }
      )}
      {children}
    </Menu>
  );
}

export const Select = createComponent(function Select(props, ref) {
  const {
    placeholder,
    children,
    value,
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
    ...rest
  } = props;

  const selectOptions = createSelectOptions(options);
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
  } = useSelectFoundation(props);

  const id = useId('select', props);

  const className = useClassNames(props, [
    'mdc-select',
    {
      'mdc-select--outlined': !!outlined,
      'mdc-select--required': !!props.required,
      'mdc-select--invalid': !!invalid,
      'mdc-select--with-leading-icon': !!icon,
      'mdc-select--no-label': !label
    }
  ]);

  const enhancedMenuProps = typeof enhanced === 'object' ? enhanced : {};

  const defaultValue =
    value !== undefined ? undefined : props.defaultValue || '';

  const renderedLabel = (
    <FloatingLabel float={floatLabel} apiRef={setFloatingLabel} htmlFor={id}>
      {label}
    </FloatingLabel>
  );

  const renderHelpText = () => {
    const shouldRender = !!helpText;

    if (!shouldRender) {
      return null;
    }

    const shouldSpread =
      typeof helpText === 'object' && !isValidElement(helpText);

    return helpText && shouldSpread ? (
      <SelectHelperText {...helpText} />
    ) : (
      <SelectHelperText>{helpText}</SelectHelperText>
    );
  };

  return (
    <Fragment>
      <Tag
        role="listbox"
        {...rootProps}
        element={rootEl}
        ref={ref}
        className={className}
      >
        <div className="mdc-select__anchor">
          {!!icon && <SelectIcon apiRef={setLeadingIcon} icon={icon} />}
          <SelectDropdownArrow />
          <SelectedTextEl
            className="mdc-select__selected-text"
            role="button"
            aria-haspopup="listbox"
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
          {outlined ? (
            <NotchedOutline notch={notchWidth}>{renderedLabel}</NotchedOutline>
          ) : (
            <Fragment>
              {renderedLabel}
              <LineRipple active={lineRippleActive} center={lineRippleCenter} />
            </Fragment>
          )}
          {!enhanced && (
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
              onChange={(evt) =>
                handleMenuSelected(evt.currentTarget.selectedIndex)
              }
            />
          )}
        </div>

        {enhanced && (
          <EnhancedMenu
            {...rest}
            {...enhancedMenuProps}
            anchorCorner="bottomStart"
            defaultValue={defaultValue}
            placeholder={placeholder}
            open={menuOpen}
            onClose={handleMenuClosed}
            onOpen={handleMenuOpened}
            onSelect={(evt) => {
              handleMenuSelected(evt.detail.index);
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
  );
});

/** A help text component */
export const SelectHelperText = createComponent(function SelectHelperText(
  props,
  ref
) {
  const { persistent, validationMsg, ...rest } = props;
  const className = useClassNames(props, [
    'mdc-select-helper-text',
    {
      'mdc-select-helper-text--persistent': persistent,
      'mdc-select-helper-text--validation-msg': validationMsg
    }
  ]);

  return <Tag tag="p" {...rest} className={className} ref={ref} />;
});
