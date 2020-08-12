import { h } from 'preact'

import { withRipple } from '@pmwc/ripple';
import { Button } from '@pmwc/button';
import { IconButton } from '@pmwc/icon-button';
import { useClassNames, Tag, createComponent } from '@pmwc/base';

/** A Card Component */
export const Card = createComponent(function Card(props, ref) {
  const { outlined, ...rest } = props;
  const className = useClassNames(props, [
    'mdc-card',
    {
      'mdc-card--outlined': outlined
    }
  ]);
  return <Tag {...rest} ref={ref} className={className} />;
});

/** Media area that displays a custom background-image with background-size: cover */
export const CardMedia = createComponent(function CardMedia(
  props,
  ref
) {
  const { square, sixteenByNine, ...rest } = props;
  const className = useClassNames(props, [
    'mdc-card__media',
    {
      'mdc-card__media--square': square,
      'mdc-card__media--16-9': sixteenByNine
    }
  ]);
  return <Tag tag="section" {...rest} ref={ref} className={className} />;
});

/** An absolutely-positioned box the same size as the media area, for displaying a title or icon on top of the background-image */
export const CardMediaContent = createComponent(
  function CardMediaContent(props, ref) {
    const className = useClassNames(props, ['mdc-card__media-content']);
    return <Tag {...props} ref={ref} className={className} />;
  }
);

/** The main clickable area for the primary content of the card */
export const CardPrimaryAction = withRipple({
  surface: false
})(
  createComponent(function CardPrimaryAction(
    props,
    ref
  ) {
    const className = useClassNames(props, ['mdc-card__primary-action']);
    return <Tag {...props} ref={ref} className={className} />;
  })
);

/** Row containing action buttons and/or icons */
export const CardActions = createComponent(
  function CardActions(props, ref) {
    const { fullBleed, ...rest } = props;
    const className = useClassNames(props, [
      'mdc-card__actions',
      { 'mdc-card__actions--full-bleed': fullBleed }
    ]);
    return <Tag tag="section" {...rest} ref={ref} className={className} />;
  }
);

/** A group of action buttons, displayed on the left side of the card (in LTR), adjacent to CardActionIcons */
export const CardActionButtons = createComponent(
  function CardActionButtons(props, ref) {
    const className = useClassNames(props, ['mdc-card__action-buttons']);
    return <Tag {...props} ref={ref} className={className} />;
  }
);

/** A group of supplemental action icons, displayed on the right side of the card (in LTR), adjacent to CardActionButtons */
export const CardActionIcons = createComponent(
  function CardActionIcons(props, ref) {
    const className = useClassNames(props, ['mdc-card__action-icons']);
    return <Tag {...props} ref={ref} className={className} />;
  }
);

/** A card action Icon */
export const CardActionIcon = createComponent(
  function CardActionIcon(props, ref) {
    const className = useClassNames(props, [
      'mdc-card__action',
      'mdc-card__action--icon'
    ]);
    return <IconButton {...props} ref={ref} className={className} />;
  }
);

/** A card action Button */
export const CardActionButton = createComponent(
  function CardActionIcon(props, ref) {
    const className = useClassNames(props, [
      'mdc-card__action',
      'mdc-card__action--button'
    ]);
    return <Button {...props} ref={ref} className={className} />;
  }
);
