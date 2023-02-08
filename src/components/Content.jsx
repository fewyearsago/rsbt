import React from 'react';
import Item from './Item';
import Skeleton from './skeleton';
import Json from '../data.json';

const Content = () => {
  const [items, setItems] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const getItems = () => {
      setItems(Json.map((e) => e));
      setLoading(false);
    };
    getItems();
  }, []);

  return (
    <div className="content">
      <div className="content-wrapper">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((elem, index) => (
              <Item key={index} url={elem.imageUrl} />
            ))}
      </div>
    </div>
  );
};

export default Content;
