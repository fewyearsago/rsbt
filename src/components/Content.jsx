import axios from 'axios';
import React from 'react';
import Item from './Item';

const Content = () => {
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
    return <div className="loading">Загрузка..</div>;
  }
  return (
    <div className="content">
      <h1 className="content-title">our works</h1>
      <div className="content-wrapper">
        {items.map((elem, index) => {
          return <Item key={index} url={elem.avatar} />;
        })}
      </div>
    </div>
  );
};

export default Content;
