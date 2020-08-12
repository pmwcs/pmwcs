import { h } from 'preact'
import { memo, forwardRef } from 'preact/compat'

import { withRipple } from '@pmwc/ripple';
import { Icon } from '@pmwc/icon';
import { useChipFoundation } from './foundation';
import { Tag, useClassNames, createComponent } from '@pmwc/base';

/** A Chip component. */
export const Chip = withRipple({})(
  createComponent(function Chip(props, ref) {
    const {
      onInteraction,
      onTrailingIconInteraction,
      onRemove,
      onSelect,
      icon,
      trailingIcon,
      trailingIconRemovesChip,
      checkmark,
      label,
      children,
      selected,
      outlined,
      foundationRef,
      ...rest
    } = props;

    const { rootEl, checkmarkEl, trailingIconEl } = useChipFoundation(props);

    const className = useClassNames(props, [
      'mdc-chip',
      {
        'mdc-chip--selected': selected,
        'pmwc-chip--outlined': outlined
      }
    ]);

    return (
      <Tag
        role="row"
        {...rest}
        element={rootEl}
        className={className}
        ref={ref}
      >
        <ChipRipple />
        {!!icon && (
          <ChipIcon icon={icon} leading hidden={selected && checkmark} />
        )}
        {!!checkmark && <ChipCheckmark ref={checkmarkEl.setRef} />}
        <span role="gridcell">
          <span
            role="button"
            className="mdc-chip__text__primary-action"
            tabIndex={0}
          >
            <span className="mdc-chip__text">
              {label}
              {children}
            </span>
          </span>
        </span>
        {!!trailingIcon && (
          <ChipIcon
            icon={trailingIcon}
            trailing
            {...trailingIconEl.props({})}
          />
        )}
      </Tag>
    );
  })
);

/*********************************************************************
 * Bits
 *********************************************************************/

const ChipRipple = memo(function ChipRipple() {
  return <div className="mdc-chip__ripple"></div>;
});

/** A checkmark for chip selection and filtering. */
const ChipCheckmark = memo(
  forwardRef(function ChipCheckmark(props, ref) {
    return (
      <div ref={ref} className="mdc-chip__checkmark">
        <svg className="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
          <path
            className="mdc-chip__checkmark-path"
            fill="none"
            stroke="black"
            d="M1.73,12.91 8.1,19.28 22.79,4.59"
          />
        </svg>
      </div>
    );
  })
);

/** Icons inside of a chip. This is an instance of the Icon component. To make the icons interactive, add props tabIndex="0" and role="button". */
const ChipIcon = memo(function ChipIcon(props) {
  const { leading, trailing, hidden, ...rest } = props;
  const className = useClassNames(props, [
    'mdc-chip__icon',
    {
      'mdc-chip__icon--leading': leading,
      'mdc-chip__icon--leading-hidden': hidden,
      'mdc-chip__icon--trailing': trailing
    }
  ]);
  const hasInteractionHandler = Object.keys(props).some((p) =>
    p.startsWith('on')
  );
  const trailingProps =
    props.trailing || hasInteractionHandler
      ? { role: 'button', tabIndex: 0 }
      : {};

  return <Icon {...trailingProps} {...rest} className={className} />;
});

/*********************************************************************
 * Chip Set
 *********************************************************************/

/** A container for multiple chips. */
export const ChipSet = createComponent(function ChipSet(
  props,
  ref
) {
  const { choice, filter, ...rest } = props;

  const className = useClassNames(props, [
    'mdc-chip-set',
    {
      'mdc-chip-set--choice': choice,
      'mdc-chip-set--filter': filter
    }
  ]);

  return <Tag {...rest} ref={ref} className={className} />;
});
