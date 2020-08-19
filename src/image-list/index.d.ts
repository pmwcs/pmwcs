import { AnyComponent } from 'preact'

/** The root of the Image List. */
export interface ImageListProps {
  /** Indicates that this Image List should use the Masonry variant. */
  masonry?: boolean;
  /** Indicates that supporting content should be positioned in a scrim overlaying each image (instead of positioned separately under each image). */
  withTextProtection?: boolean;
}

/** The root of the Image List. */
export const ImageList : AnyComponent<ImageListProps>

/** Indicates each item in an Image List. */
export interface ImageListItemProps {}

/** Indicates each item in an Image List. */
export const ImageListItem : AnyComponent<ImageListItemProps>

/** Optional. Parent of each item’s image element, responsible for constraining aspect ratio. This element may be omitted entirely if images are already sized to the correct aspect ratio. */
export interface ImageListImageAspectContainerProps {}

/** Optional. Parent of each item’s image element, responsible for constraining aspect ratio. This element may be omitted entirely if images are already sized to the correct aspect ratio. */
export const ImageListImageAspectContainer : AnyComponent<
  ImageListImageAspectContainerProps
>
/** Indicates the image element in each item. */
export interface ImageListImageProps {}

/** Indicates the image element in each item. */
export const ImageListImage : AnyComponent<ImageListImageProps>

/** Optional. Indicates the area within each item containing the supporting text label, if the Image List contains text labels. */
export interface ImageListSupportingProps {}

/** Optional. Indicates the area within each item containing the supporting text label, if the Image List contains text labels. */
export const ImageListSupporting : AnyComponent<ImageListSupportingProps>

/** Optional. Indicates the text label in each item, if the Image List contains text labels. */
export interface ImageListLabelProps {}

/** Optional. Indicates the text label in each item, if the Image List contains text labels. */
export const ImageListLabel : AnyComponent<ImageListLabelProps>
