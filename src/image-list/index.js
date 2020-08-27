import { h } from 'preact'

import { Tag, useClassNames, createComponent } from '@pmwcs/base'

/** The root of the Image List. */
export const ImageList = createComponent(function ImageList (
  props,
  ref
) {
  const { masonry, withTextProtection, ...rest } = props
  const className = useClassNames(props, [
    'mdc-image-list',
    {
      'mdc-image-list--masonry': masonry,
      'mdc-image-list--with-text-protection': withTextProtection
    }
  ])
  return <Tag tag='ul' {...rest} ref={ref} className={className} />
})

/** Indicates each item in an Image List. */
export const ImageListItem = createComponent(
  function ImageListItem (props, ref) {
    const className = useClassNames(props, ['mdc-image-list__item'])
    return <Tag tag='li' {...props} ref={ref} className={className} />
  }
)

/** Optional. Parent of each item’s image element, responsible for constraining aspect ratio. This element may be omitted entirely if images are already sized to the correct aspect ratio. */
export const ImageListImageAspectContainer = createComponent(
  function ImageListImageAspectContainer (props, ref) {
    const className = useClassNames(props, [
      'mdc-image-list__image-aspect-container'
    ])
    return <Tag {...props} ref={ref} className={className} />
  })

/** Indicates the image element in each item. */
export const ImageListImage = createComponent(
  function ImageListImage (props, ref) {
    const className = useClassNames(props, ['mdc-image-list__image'])
    return <Tag tag='img' {...props} ref={ref} className={className} />
  }
)

/** Optional. Indicates the area within each item containing the supporting text label, if the Image List contains text labels. */
export const ImageListSupporting = createComponent(
  function ImageListSupporting (props, ref) {
    const className = useClassNames(props, ['mdc-image-list__supporting'])
    return <Tag {...props} ref={ref} className={className} />
  }
)

/** Optional. Indicates the text label in each item, if the Image List contains text labels. */
export const ImageListLabel = createComponent(
  function ImageListLabel (props, ref) {
    const className = useClassNames(props, ['mdc-image-list__label'])
    return <Tag {...props} ref={ref} className={className} />
  }
)
