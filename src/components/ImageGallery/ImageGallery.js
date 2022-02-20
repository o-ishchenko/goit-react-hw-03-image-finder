import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import React from 'react';
import s from './ImageGallery.module.css';

const ImageGallery = ({ data, onClick }) => (
  <ul className={s.gallery}>
    {data.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        alt={tags}
        onClick={onClick}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ),
};

export default ImageGallery;
