
import React from 'react';
import { Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../Card'
import 'swiper/swiper-bundle.css';


export default function App({data}) {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={7}
        centeredSlides={true}
        spaceBetween={30}
        navigation={true}
      >
        {data.map((e) => (
          <SwiperSlide key={e.id}>
             <Card
              key={e.id}
              imageSrc={e.image}
              followersCount={e.follows}
              label={e.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

