import { h } from 'preact';

import { classNames } from '@pmwc/base';
import ReactTooltip from 'rc-tooltip';
import { useProviderContext } from '@pmwc/provider';

/** A Tooltip component for displaying informative popover information. */
export const Tooltip = function Tooltip({
  children,
  content,
  className,
  open,
  ...rest
}) {
  const providerContext = useProviderContext();

  // merge together provider options
  const {
    showArrow = false,
    enterDelay = 0,
    leaveDelay = 0,
    align = 'top',
    activateOn = ['hover', 'focus']
  } = {
    ...providerContext.tooltip,
    ...rest
  };

  return (
    <ReactTooltip
      {...(open !== undefined ? { visible: open } : {})}
      trigger={Array.isArray(activateOn) ? activateOn : [activateOn]}
      prefixCls="pmwc-tooltip"
      placement={align}
      transitionName="pmwc-tooltip-zoom"
      mouseEnterDelay={enterDelay / 1000}
      mouseLeaveDelay={leaveDelay / 1000}
      overlay={content}
      overlayClassName={classNames(className, {
        'pmwc-tooltip--show-arrow': showArrow
      })}
      destroyTooltipOnHide
    >
      {children}
    </ReactTooltip>
  );
};
