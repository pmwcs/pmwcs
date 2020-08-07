import { h } from 'preact';
import { Docs, DocsExample, DocProps, DocsP, DocsSubtitle } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';
import { ImageList, ImageListItem, ImageListImageAspectContainer, ImageListImage, ImageListSupporting, ImageListLabel } from '.';
export default function () {
    return (React.createElement(Docs, { title: "Image Lists", lead: "MDC Image List provides a RTL-aware Material Design image list component, representing an evolution of the Material Design Grid List spec. An Image List consists of several items, each containing an image and optionally supporting content (i.e. a text label).", module: "@pmwc/image-list", styles: ['@material/image-list/dist/mdc.image-list.css'], docsLink: "https://material.io/develop/web/components/image-lists/", examples: examples },
        React.createElement(DocsSubtitle, null, "Standard Layout"),
        React.createElement(DocsP, null, "Image Lists will give you basic layout, but you will have to use inline styling or CSS to achieve things like spacing, aspect ratio, and column count. Check out the inline styles below as examples."),
        React.createElement(DocsExample, { label: "Default" },
            React.createElement(ImageList, null, [
                'images/photos/3x2-1.jpg',
                'images/photos/2x3-1.jpg',
                'images/photos/3x2-4.jpg',
                'images/photos/3x2-5.jpg',
                'images/photos/3x2-6.jpg',
                'images/photos/2x3-2.jpg',
                'images/photos/3x2-8.jpg',
                'images/photos/3x2-11.jpg',
                'images/photos/2x3-5.jpg',
                'images/photos/3x2-13.jpg',
                'images/photos/3x2-14.jpg',
                'images/photos/2x3-6.jpg',
                'images/photos/3x2-15.jpg',
                'images/photos/3x2-16.jpg',
                'images/photos/2x3-7.jpg'
            ].map(function (src) { return (React.createElement(ImageListItem, { key: src, style: { margin: '2px', width: 'calc(100% / 5 - 4.2px)' } },
                React.createElement(ImageListImageAspectContainer, { style: { paddingBottom: 'calc(100% / 1.5)' } },
                    React.createElement(ImageListImage, { src: src })),
                React.createElement(ImageListSupporting, null,
                    React.createElement(ImageListLabel, null, "Text label")))); }))),
        React.createElement(DocsSubtitle, null, "Masonry Layout"),
        React.createElement(DocsExample, null,
            React.createElement(ImageList, { masonry: true, withTextProtection: true, style: {
                    columnCount: 5,
                    columnGap: '16px',
                    maxWidth: '1000px'
                } }, [
                'images/photos/3x2-1.jpg',
                'images/photos/2x3-1.jpg',
                'images/photos/3x2-4.jpg',
                'images/photos/3x2-5.jpg',
                'images/photos/2x3-5.jpg',
                'images/photos/3x2-6.jpg',
                'images/photos/2x3-2.jpg',
                'images/photos/3x2-8.jpg',
                'images/photos/3x2-11.jpg',
                'images/photos/3x2-13.jpg',
                'images/photos/3x2-14.jpg',
                'images/photos/2x3-6.jpg',
                'images/photos/3x2-15.jpg',
                'images/photos/2x3-7.jpg',
                'images/photos/3x2-16.jpg'
            ].map(function (src) { return (React.createElement(ImageListItem, { key: src, style: { marginBottom: '16px' } },
                React.createElement(ImageListImage, { src: src }),
                React.createElement(ImageListSupporting, null,
                    React.createElement(ImageListLabel, null, "Text label")))); }))),
        React.createElement(DocProps, { src: propsSrc, components: [
                { displayName: 'ImageList', component: ImageList },
                { displayName: 'ImageListItem', component: ImageListItem },
                {
                    displayName: 'ImageListImageAspectContainer',
                    component: ImageListImageAspectContainer
                },
                { displayName: 'ImageListImage', component: ImageListImage },
                {
                    displayName: 'ImageListSupporting',
                    component: ImageListSupporting
                },
                { displayName: 'ImageListLabel', component: ImageListLabel }
            ] })));
}
export var galleryExample = (React.createElement(ImageList, { masonry: true, withTextProtection: true, style: {
        transform: 'scale(0.5)',
        columnCount: 3,
        columnGap: '16px',
        maxWidth: '1000px'
    } }, [
    'images/photos/3x2-1.jpg',
    'images/photos/2x3-1.jpg',
    'images/photos/3x2-4.jpg',
    'images/photos/3x2-5.jpg',
    'images/photos/2x3-5.jpg',
    'images/photos/3x2-6.jpg',
    'images/photos/2x3-2.jpg',
    'images/photos/3x2-8.jpg',
    'images/photos/3x2-11.jpg',
    'images/photos/3x2-13.jpg',
    'images/photos/3x2-14.jpg'
].map(function (src) { return (React.createElement(ImageListItem, { key: src, style: { marginBottom: '16px' } },
    React.createElement(ImageListImage, { src: src }))); })));
