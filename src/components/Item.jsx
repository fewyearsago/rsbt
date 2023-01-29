import React from 'react';

const Item = ({ url }) => {
  return (
    <div className="content-item">
      <img className="content-item-img" src={url} alt="" />
    </div>
  );
};

export default Item;
