import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Card from '../Card';
import './Carousel.css'
const Carousel = ({ data, type }) => {
  // Check if data is undefined
  if (!data || data.length === 0) {
    return <p>No data available</p>; // You can customize this message
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={7}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      { type ==='songs' ? data.map((item) => (
        <SwiperSlide key={item.id}>
          <Card
            key={item.id}
            imageSrc={item.image}
            likes={item.likes} 
            label={item.title}
          />
        </SwiperSlide>)):
        data.map((item) => (
         <SwiperSlide key={item.id}>
         <Card
           key={item.id}
           imageSrc={item.image}
           followersCount={item.follows}
           label={item.title}
         />
       </SwiperSlide>

      ))}
    </Swiper>
  );
};

export default Carousel;



