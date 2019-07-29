
import React from 'react';

const ImageItem = ({ image, name, onHandleSuffle, id }) => {
  return (
    <div>
      <img src={image} alt={name} onClick={() => onHandleSuffle(id)} />
    </div>
  );
};

export default ImageItem;