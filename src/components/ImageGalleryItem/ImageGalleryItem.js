import React from 'react';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ url, lagreUrl }) => (
  <li className={s.item}>
    <img className={s.image} src={url} alt="" />
  </li>
);

export default ImageGalleryItem;
