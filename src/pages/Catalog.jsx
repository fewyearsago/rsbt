import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
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
        <>Загрузка товаров..</>
      </div>
    );
  }
  return (
    <AnimatedPage>
      <div className="catalog">
        <div className="container">
          <Menu />
          <div className="catalog__content">
            <h1 className="catalog__content-title">Каталог</h1>
            <div className="catalog__content-main">
              {items.map((e) => (
                <Link to={`/item/${e.id}`}>
                  <FetchItem url={e.imageUrl} price={e.price} title={e.title} />
                </Link>
              ))}
              {/* <div className="catalog__content-large">
                <h1></h1>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Catalog;
