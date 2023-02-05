import axios from 'axios';
import React from 'react';
import Item from './Item';
import Skeleton from './skeleton';
import Json from '../data.json';

const Content = () => {
  const [items, setItems] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchItems = () => {
      setLoading(false);
      setItems(Json.map((e) => e));
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
