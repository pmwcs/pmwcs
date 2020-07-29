import {h} from 'preact';
import React from 'preact/compat';

import { useClassNames, Tag, useId, createComponent } from '@rmwc/base';
import { Icon } from '@rmwc/icon';
import { LineRipple } from '@rmwc/line-ripple';
import { FloatingLabel } from '@rmwc/floating-label';
import { NotchedOutline } from '@rmwc/notched-outline';
import { withRipple } from '@rmwc/ripple';

import { useTextFieldIconFoundation } from './textfield-icon-foundation';
import { useTextFieldCharacterCountFoundation } from './textfield-character-count-foundation';
import { useTextFieldFoundation } from './textfield-foundation';

/*********************************************************************
 * TextField
 *********************************************************************/

/** A TextField component for accepting text input from a user. */
export const TextField = createComponent(function TextField(
  props,
  ref
) {
  const {
    label,
    style,
    outlined,
    align,
    fullwidth,
    invalid,
    disabled,
    helpText,
    children,
    textarea,
    inputRef,
    characterCount,
    icon,
    trailingIcon,
    rootProps = {},
    foundationRef,
    ripple,
    floatLabel: userFloatLabel,
    ...rest
  } = props;

  const {
    rootEl,
    inputEl,
    shakeLabel,
    floatLabel,
    notchWidth,
    lineRippleActive,
    lineRippleCenter,
    setLeadingIcon,
    setTrailingIcon,
    setFloatingLabel,
    setCharacterCounter
  } = useTextFieldFoundation(props);

  const id = useId('textfield', props);
  const labelId = id + '-label';

  const className = useClassNames(props, [
    'mdc-text-field',
    'mdc-text-field--upgraded',
    {
      'mdc-text-field--textarea': textarea,
      'mdc-text-field--fullwidth': fullwidth,
      'mdc-text-field--outlined': outlined,
      'mdc-text-field--invalid': invalid,
      'mdc-text-field--disabled': disabled,
      'mdc-text-field--with-leading-icon': !!icon,
      'mdc-text-field--with-trailing-icon': !!trailingIcon,
      'mdc-text-field--no-label': !label,
      'mdc-text-field--end-aligned': align === 'end'
    }
  ]);

  // handle leading and trailing icons
  const renderIcon = (
    icon,
    position // 'leading' | 'trailing'
  ) => {
    return (
      <TextFieldIcon
        apiRef={(api) => {
          position === 'leading' ? setLeadingIcon(api) : setTrailingIcon(api);
        }}
        position={position}
        tabIndex={position === 'trailing' ? 0 : undefined}
        icon={icon}
      />
    );
  };

  const renderHelpText = (renderedCharacterCounter) => {
    const shouldRender = !!helpText || (characterCount && !textarea);

    if (!shouldRender) {
      return null;
    }

    const shouldSpread =
      typeof helpText === 'object' && !React.isValidElement(helpText);

    return (
      <div className="mdc-text-field-helper-line">
        {helpText && shouldSpread ? (
          <TextFieldHelperText {...(helpText)} />
        ) : (
          <TextFieldHelperText>{helpText}</TextFieldHelperText>
        )}
        {!textarea && renderedCharacterCounter}
      </div>
    );
  };

  const renderedLabel = label ? (
    <FloatingLabel
      shake={shakeLabel}
      float={floatLabel}
      apiRef={setFloatingLabel}
      id={labelId}
    >
      {label}
    </FloatingLabel>
  ) : null;

  const renderedCharacterCounter = characterCount ? (
    <TextFieldCharacterCount apiRef={setCharacterCounter} />
  ) : null;

  return (
    <>
      <TextFieldRoot
        {...rootProps}
        element={rootEl}
        style={style}
        className={className}
        ref={ref}
        aria-labelledby={labelId}
      >
        {!!icon && renderIcon(icon, 'leading')}
        {children}
        {/** Render character counter in different place for textarea */}
        {!!textarea && renderedCharacterCounter}
        <TextFieldRipple />
        <Tag
          {...rest}
          element={inputEl}
          className="mdc-text-field__input"
          disabled={disabled}
          tag={textarea ? 'textarea' : 'input'}
          ref={inputRef}
        />

        {!!outlined ? (
          <>
            <NotchedOutline notch={notchWidth}>{renderedLabel}</NotchedOutline>
            {!!trailingIcon && renderIcon(trailingIcon, 'trailing')}
          </>
        ) : (
          <>
            {renderedLabel}
            {!!trailingIcon && renderIcon(trailingIcon, 'trailing')}
            <LineRipple active={lineRippleActive} center={lineRippleCenter} />
          </>
        )}
      </TextFieldRoot>
      {renderHelpText(renderedCharacterCounter)}
    </>
  );
});

const TextFieldRipple = React.memo(function TextFieldRipple() {
  return <span className="mdc-text-field__ripple"></span>;
});

const TextFieldRoot = withRipple({ surface: false })(
  React.forwardRef(function TextFieldRoot(props, ref) {
    return <Tag {...props} tag="label" ref={ref} />;
  })
);

/*********************************************************************
 * Character Count
 *********************************************************************/

const TextFieldCharacterCount = React.memo(function TextFieldCharacterCount(
  props
) {
  const { content } = useTextFieldCharacterCountFoundation(props);
  return <div className="mdc-text-field-character-counter">{content}</div>;
});

/*********************************************************************
 * Helper Text
 *********************************************************************/

/** A help text component */
export const TextFieldHelperText = createComponent(
  function TextFieldHelperText(props, ref) {
    const { persistent, validationMsg, ...rest } = props;
    const className = useClassNames(props, [
      'mdc-text-field-helper-text',
      {
        'mdc-text-field-helper-text--persistent': persistent,
        'mdc-text-field-helper-text--validation-msg': validationMsg
      }
    ]);

    return <Tag tag="p" {...rest} className={className} ref={ref} />;
  }
);

/*********************************************************************
 * Icon
 *********************************************************************/

/** An Icon in a TextField */
const TextFieldIcon = function TextFieldIcon(props) {
  const { apiRef, position, ...rest } = props;
  const { rootEl } = useTextFieldIconFoundation(props);
  const className = useClassNames(props, [
    'mdc-text-field__icon',
    {
      'mdc-text-field__icon--trailing': position === 'trailing',
      'mdc-text-field__icon--leading': position === 'leading'
    }
  ]);

  return (
    <Icon
      {...rootEl.props({
        ...rest,
        className
      })}
    />
  );
};
TextFieldIcon.displayName = 'TextFieldIcon';
