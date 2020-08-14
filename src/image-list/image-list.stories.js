/** @jsx h */
import { h } from 'preact'

import './styles.js'

import {
  ImageList,
  ImageListItem,
  ImageListImageAspectContainer,
  ImageListImage,
  ImageListSupporting,
  ImageListLabel
} from './index.js'

export default {
  title: 'ImageList',
  component: ImageList
}

export const standardLayout = () => (
  <section>
    <ImageList>
      {[
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
      ].map(src => (
        <ImageListItem
          key={src}
          style={{ margin: '2px', width: 'calc(100% / 5 - 4.2px)' }}
        >
          <ImageListImageAspectContainer
            style={{ paddingBottom: 'calc(100% / 1.5)' }}
          >
            <ImageListImage src={src} />
          </ImageListImageAspectContainer>
          <ImageListSupporting>
            <ImageListLabel>Text label</ImageListLabel>
          </ImageListSupporting>
        </ImageListItem>
      ))}
    </ImageList>
  </section>
)

export const masonaryLayout = () => (
  <ImageList
    masonry
    withTextProtection
    style={{
      columnCount: 5,
      columnGap: '16px',
      maxWidth: '1000px'
    }}
  >
    {[
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
    ].map(src => (
      <ImageListItem key={src} style={{ marginBottom: '16px' }}>
        <ImageListImage src={src} />
        <ImageListSupporting>
          <ImageListLabel>Text label</ImageListLabel>
        </ImageListSupporting>
      </ImageListItem>
    ))}
  </ImageList>
)
