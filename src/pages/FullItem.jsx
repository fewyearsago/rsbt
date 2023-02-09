import axios from 'axios';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Menu from '../components/Menu';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

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
    <>
      <Menu />
      <div className="fullItem">
        <div className="fullItem__list">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            navigation={true}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>
              <img className="fullItem__img" src={item.imageUrl} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="fullItem__img" src={item.imageUrl} alt="" />
            </SwiperSlide>
            ...
          </Swiper>
          <div className="fullItem__box">
            <div className="fullItem__info">
              <h1 className="fullItem__info-title">{item.title}</h1>
              <p className="fullItem__info-price">{item.price}₽</p>
              <p className="fullItem__info-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
                neque debitis molestiae corrupti corporis accusantium cumque
                facere sit asperiores quam est libero necessitatibus nemo rem
                dolores hic consequatur, sapiente voluptas!
              </p>
              <Link to={'/catalog'}>
                <button className="fullItem__btn">Вернуться назад</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullItem;
