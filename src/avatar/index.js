import { h } from 'preact'
import React from 'preact/compat';

import { Icon } from '@pmwc/icon';
import { withRipple } from '@pmwc/ripple';
import {
  useClassNames,
  Tag,
  createComponent,
  createMemoComponent
} from '@pmwc/base';

const getInitialsForName = (name) => {
  if (name) {
    const parts = name.split(' ');
    /* istanbul ignore next */
    let letters = (parts[0] || '')[0];
    if (parts.length > 1) {
      const part = parts.pop();
      /* istanbul ignore next */
      if (part) {
        letters += part[0];
      }
    }
    return letters;
  }

  return '';
};

const AvatarRoot = withRipple({})(
  createMemoComponent(function AvatarRoot(props, ref) {
    const {
      isCount,
      overflow,
      smallerText,
      square,
      interactive,
      hasImage,
      ...rest
    } = props;

    const className = useClassNames(props, [
      'pmwc-avatar',
      {
        [`pmwc-avatar--${props.size}`]: rest.size,
        'pmwc-avatar--count': isCount,
        'pmwc-avatar--interactive': interactive,
        'pmwc-avatar--count-overflow': overflow,
        'pmwc-avatar--smaller-text': smallerText,
        'pmwc-avatar--square': square,
        'pmwc-avatar--has-image': hasImage
      }
    ]);

    return <Icon {...rest} basename='' className={className} ref={ref} />;
  })
);
AvatarRoot.displayName = 'AvatarRoot';

/** A container for groups of Avatars */
export const AvatarGroup = createComponent(
  function AvatarGroup(props, ref) {
    const { dense, ...rest } = props;

    const className = useClassNames(props, [
      'pmwc-avatar-group',
      {
        'pmwc-avatar-group--dense': dense
      }
    ]);

    return <Tag {...rest} ref={ref} className={className} />;
  }
);

/** An Avatar component for displaying users in a system. */
export const Avatar = createComponent(function Avatar(
  { src, size, name = '', interactive = false, contain = false, ...rest },
  ref
) {
  const initials = getInitialsForName(name);
  const avatarStyle = src
    ? {
        backgroundImage: `url(${src})`,
        backgroundSize: contain ? 'contain' : 'cover'
      }
    : {};

  return (
    <AvatarRoot
      ref={ref}
      ripple={interactive}
      interactive={interactive}
      hasImage={!!src}
      size={size}
      title={name}
      tag={'span'}
      {...rest}
      icon={{
        icon: (
          <>
            <div className="pmwc-avatar__icon" style={avatarStyle} />
            <div className="pmwc-avatar__text">
              <div className="pmwc-avatar__text-inner">{initials}</div>
            </div>
          </>
        )
      }}
    />
  );
});
Avatar.displayName = 'Avatar';

/** An Avatar count for displaying list overflow. */
export const AvatarCount = createMemoComponent(
  function AvatarCount(
    { value, overflow, size, interactive = false, ...rest },
    ref
  ) {
    const smallerText = String(value).length > 2;
    return (
      <AvatarRoot
        ref={ref}
        ripple={interactive}
        interactive={interactive}
        isCount
        size={size}
        overflow={overflow}
        smallerText={smallerText}
        tag={'span'}
        {...rest}
        icon={{
          icon: (
            <div className="pmwc-avatar__text">
              <div className="pmwc-avatar__text-inner">{value}</div>
            </div>
          )
        }}
      />
    );
  }
);
