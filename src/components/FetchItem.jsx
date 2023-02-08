import React from 'react';

const FetchItem = ({ url, title, price }) => {
  return (
    <>
      <div className="catalog__content-item">
        <img className="catalog__content-item-img" src={url} alt="" />
        <div className="catalog__content-item-text">
          <h1 className="catalog__content-item-title">{title}</h1>
          <span className="catalog__content-item-price">{price} ₽</span>
        </div>
      </div>
    </>
  );
};

export default FetchItem;
