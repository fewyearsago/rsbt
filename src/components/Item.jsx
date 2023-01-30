import React from 'react';

const Item = ({ url }) => {
  return (
    <>
      <div className="content-wrapper-item">
        <img className="content-wrapper-item-img" src={url} alt="" />
      </div>
    </>
  );
};

export default Item;
