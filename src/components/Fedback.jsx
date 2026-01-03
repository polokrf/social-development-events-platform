import React, { use } from 'react';
import 'swiper/css';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import FedBackCard from './FedBackCard';

const FedBack = ({ fedBack }) => {
  const fedBAckData = use(fedBack);

  return (
    <div>
      <Swiper
        loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 900,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          300: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
          1440: { slidesPerView: 4, spaceBetween: 40 },
        }}
      >
        {fedBAckData.map(rew => (
          <SwiperSlide key={rew.id}>
            <FedBackCard rew={rew}></FedBackCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FedBack;