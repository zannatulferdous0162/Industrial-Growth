import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
  return (
    <div className=''>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='h-[600px]' src='https://www.bfranklincrafts.com/wp-content/uploads/2022/05/Jute-Beehive-1200-2-1024x536.jpg' alt="" style={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[600px]' src='https://m.media-amazon.com/images/S/aplus-media-library-service-media/20903ad5-5f87-419e-ba2a-6fe85a05c6d4.__CR0,0,970,600_PT0_SX970_V1___.jpg' alt="" style={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[600px]' src='https://i.pinimg.com/736x/7f/09/2f/7f092f123ddfe679fdfaa0027e02329d.jpg'alt="" style={{ width: '100%'}} />
        </SwiperSlide>
     
      </Swiper>
    </div>
  );
};

export default Banner;