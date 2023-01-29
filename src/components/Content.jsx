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
    return <div>Загрузка..</div>;
  }
  return (
    <div className="content">
      {items.map((elem, index) => {
        return <Item key={index} url={elem.avatar} />;
      })}
    </div>
  );
};

export default Content;
