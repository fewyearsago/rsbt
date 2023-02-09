import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Menu from '../components/Menu';

const FullItem = () => {
  const [item, setItem] = React.useState();
  const { id } = useParams();
  React.useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await axios.get(
          'https://63d67fe7e60d57436979ced9.mockapi.io/items/' + id,
        );
        setItem(data);
      } catch (error) {
        alert('Произошла ошибка');
      }
    }
    fetchItem();
  }, []);
  if (!item) {
    return 'Загрузка...';
  }
  return (
    <div>
      <Menu />
      <img src={item.imageUrl} alt="" />
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default FullItem;
