import axios from 'axios';
import React from 'react';
import Item from './Item';
import Skeleton from './skeleton';

const Content = () => {
  const [items, setItems] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios.get(
        'https://63d67fe7e60d57436979ced9.mockapi.io/items',
      );
      setItems(data);
      setLoading(false);
    };
    fetchItems();
  }, []);

  return (
    <div className="content">
      <h1 className="content-title">our works</h1>
      <div className="content-wrapper">
        {isLoading
          ? [...new Array(3)].map((_, index) => <Skeleton key={index} />)
          : items.map((elem, index) => <Item key={index} url={elem.avatar} />)}
      </div>
    </div>
  );
};

export default Content;
