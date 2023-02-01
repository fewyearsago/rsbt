import axios from 'axios';
import React from 'react';
import Item from './Item';
import Skeleton from './skeleton';

const Content = () => {
  const [items, setItems] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get('https://63d67fe7e60d57436979ced9.mockapi.io/items');
        setItems(data);
        setLoading(false);
      } catch {
        alert('Произошла ошибка, попробуйте поз');
      }
    };
    fetchItems();
  }, []);

  return (
    <div className="content">
      <div className="content-wrapper">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((elem, index) => <Item key={index} url={elem.avatar} />)}
      </div>
    </div>
  );
};

export default Content;
