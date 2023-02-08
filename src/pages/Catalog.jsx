import axios from 'axios';
import React from 'react';
import FetchItem from '../components/FetchItem';
import Menu from '../components/Menu';

const Catalog = () => {
  const [items, setItems] = React.useState();
  React.useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get(
        'https://63d67fe7e60d57436979ced9.mockapi.io/items',
      );
      setItems(data);
    };
    fetchItems();
  }, []);
  if (!items) {
    return (
      <div>
        <Menu />
        <>Загрузка товаров..</>
      </div>
    );
  }
  return (
    <div className="catalog">
      <div className="container">
        <Menu />
        <div className="catalog__content">
          <h1 className="catalog__content-title">Каталог:</h1>
          <div className="catalog__content-main">
            {items.map((e) => (
              <FetchItem url={e.imageUrl} price={e.price} title={e.title} />
            ))}
            <div className="catalog__content-large">
              <p>123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
