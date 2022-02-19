import ImageGalleryItem from 'components/ImageGalleryItem';
import React from 'react';
import s from './ImageGallery.module.css';

const ImageGallery = ({data}) => (
  <ul className={s.gallery}>
    {data.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem key={id} url={webformatURL} lagreUrl={largeImageURL} />
    ))}
  </ul>
);

export default ImageGallery;
