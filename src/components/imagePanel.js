import React from 'react';
import ImageItem from './Imagetem';

const ImagePanel = ({ images, onHandleSuffle }) => {
  const renderedImages = images.map(image => {
    return (
      <ImageItem
        key={image.id}
        id={image.id}
        name={image.name}
        image={image.image}
        onHandleSuffle={onHandleSuffle}
      />
    );
  });
  return <div>{renderedImages}</div>;
};

export default ImagesPanel;
