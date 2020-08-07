import { __assign, __rest } from "tslib";
import { h } from 'preact';
import { Tag, useClassNames, createComponent } from '@pmwc/base';
/** The root of the Image List. */
export var ImageList = createComponent(function ImageList(props, ref) {
    var masonry = props.masonry, withTextProtection = props.withTextProtection, rest = __rest(props, ["masonry", "withTextProtection"]);
    var className = useClassNames(props, [
        'mdc-image-list',
        {
            'mdc-image-list--masonry': masonry,
            'mdc-image-list--with-text-protection': withTextProtection
        }
    ]);
    return React.createElement(Tag, __assign({ tag: "ul" }, rest, { ref: ref, className: className }));
});
/** Indicates each item in an Image List. */
export var ImageListItem = createComponent(function ImageListItem(props, ref) {
    var className = useClassNames(props, ['mdc-image-list__item']);
    return React.createElement(Tag, __assign({ tag: "li" }, props, { ref: ref, className: className }));
});
/** Optional. Parent of each item’s image element, responsible for constraining aspect ratio. This element may be omitted entirely if images are already sized to the correct aspect ratio. */
export var ImageListImageAspectContainer = createComponent(function ImageListImageAspectContainer(props, ref) {
    var className = useClassNames(props, [
        'mdc-image-list__image-aspect-container'
    ]);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
/** Indicates the image element in each item. */
export var ImageListImage = createComponent(function ImageListImage(props, ref) {
    var className = useClassNames(props, ['mdc-image-list__image']);
    return React.createElement(Tag, __assign({ tag: "img" }, props, { ref: ref, className: className }));
});
/** Optional. Indicates the area within each item containing the supporting text label, if the Image List contains text labels. */
export var ImageListSupporting = createComponent(function ImageListSupporting(props, ref) {
    var className = useClassNames(props, ['mdc-image-list__supporting']);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
/** Optional. Indicates the text label in each item, if the Image List contains text labels. */
export var ImageListLabel = createComponent(function ImageListLabel(props, ref) {
    var className = useClassNames(props, ['mdc-image-list__label']);
    return React.createElement(Tag, __assign({}, props, { ref: ref, className: className }));
});
