import React, { use } from 'react';
import FeatureCard from './FeatureCard';
import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';



const Feature = ({ feature }) => {
  const featureData = use(feature);
  return (
    <div className=' h-full'>
      <Swiper
        loop={true}
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 900,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {featureData.map(card => (
          <SwiperSlide key={card.id} className=" h-full flex justify-center">
            <FeatureCard card={card}></FeatureCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feature;