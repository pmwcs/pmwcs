import * as RMWC from '@rmwc/types';
import { h } from 'preact';
/** The root of the Image List. */
export interface ImageListProps {
    /** Indicates that this Image List should use the Masonry variant. */
    masonry?: boolean;
    /** Indicates that supporting content should be positioned in a scrim overlaying each image (instead of positioned separately under each image). */
    withTextProtection?: boolean;
}
/** The root of the Image List. */
export declare const ImageList: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ImageListProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** Indicates each item in an Image List. */
export interface ImageListItemProps {
}
/** Indicates each item in an Image List. */
export declare const ImageListItem: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ImageListItemProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** Optional. Parent of each item’s image element, responsible for constraining aspect ratio. This element may be omitted entirely if images are already sized to the correct aspect ratio. */
export interface ImageListImageAspectContainerProps {
}
/** Optional. Parent of each item’s image element, responsible for constraining aspect ratio. This element may be omitted entirely if images are already sized to the correct aspect ratio. */
export declare const ImageListImageAspectContainer: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ImageListImageAspectContainerProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** Indicates the image element in each item. */
export interface ImageListImageProps {
}
/** Indicates the image element in each item. */
export declare const ImageListImage: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ImageListImageProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** Optional. Indicates the area within each item containing the supporting text label, if the Image List contains text labels. */
export interface ImageListSupportingProps {
}
/** Optional. Indicates the area within each item containing the supporting text label, if the Image List contains text labels. */
export declare const ImageListSupporting: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ImageListSupportingProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
/** Optional. Indicates the text label in each item, if the Image List contains text labels. */
export interface ImageListLabelProps {
}
/** Optional. Indicates the text label in each item, if the Image List contains text labels. */
export declare const ImageListLabel: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<ImageListLabelProps, React.HTMLProps<HTMLElement>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
