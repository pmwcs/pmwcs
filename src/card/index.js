import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { withRipple } from '@rmwc/ripple';
import { Button } from '@rmwc/button';
import { IconButton } from '@rmwc/icon-button';
import { useClassNames, Tag, createComponent } from '@rmwc/base';
/** A Card Component */
export var Card = createComponent(function Card(props, ref) {
    var outlined = props.outlined, rest = __rest(props, ["outlined"]);
    var className = useClassNames(props, [
        'mdc-card',
        {
            'mdc-card--outlined': outlined
        }
    ]);
    return React.createElement(Tag, __assign({}, rest, { ref: ref, className: className }));
});
/** Media area that displays a custom background-image with background-size: cover */
export var CardMedia = createComponent(function CardMedia(props, ref) {
    var square = props.square, sixteenByNine = props.sixteenByNine, rest = __rest(props, ["square", "sixteenByNine"]);
    var className = useClassNames(props, [
        'mdc-card__media',
        {
            'mdc-card__media--square': square,
            'mdc-card__media--16-9': sixteenByNine
        }
    ]);
    return React.createElement(Tag, __assign({ tag: "section" }, rest, { ref: ref, className: className }));
});
/** An absolutely-positioned box the same size as the media area, for displaying a title or icon on top of the background-image */
export var CardMediaContent = createComponent(function CardMediaContent(props, ref) {
    var className = useClassNames(props, ['mdc-card__media-content']);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
/** The main clickable area for the primary content of the card */
export var CardPrimaryAction = withRipple({
    surface: false
})(createComponent(function CardPrimaryAction(props, ref) {
    var className = useClassNames(props, ['mdc-card__primary-action']);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
}));
/** Row containing action buttons and/or icons */
export var CardActions = createComponent(function CardActions(props, ref) {
    var fullBleed = props.fullBleed, rest = __rest(props, ["fullBleed"]);
    var className = useClassNames(props, [
        'mdc-card__actions',
        { 'mdc-card__actions--full-bleed': fullBleed }
    ]);
    return React.createElement(Tag, __assign({ tag: "section" }, rest, { ref: ref, className: className }));
});
/** A group of action buttons, displayed on the left side of the card (in LTR), adjacent to CardActionIcons */
export var CardActionButtons = createComponent(function CardActionButtons(props, ref) {
    var className = useClassNames(props, ['mdc-card__action-buttons']);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
/** A group of supplemental action icons, displayed on the right side of the card (in LTR), adjacent to CardActionButtons */
export var CardActionIcons = createComponent(function CardActionIcons(props, ref) {
    var className = useClassNames(props, ['mdc-card__action-icons']);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
/** A card action Icon */
export var CardActionIcon = createComponent(function CardActionIcon(props, ref) {
    var className = useClassNames(props, [
        'mdc-card__action',
        'mdc-card__action--icon'
    ]);
    return React.createElement(IconButton, __assign({}, props, { ref: ref, className: className }));
});
/** A card action Button */
export var CardActionButton = createComponent(function CardActionIcon(props, ref) {
    var className = useClassNames(props, [
        'mdc-card__action',
        'mdc-card__action--button'
    ]);
    return React.createElement(Button, __assign({}, props, { ref: ref, className: className }));
});
