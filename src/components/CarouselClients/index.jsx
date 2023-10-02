import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/carousel.css';

import { Autoplay } from "swiper/modules";



const CarouselClients = () => {
  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '99vw',
        justifyContent: 'space-evenly'
      }}>
        <img style={{ width: '190px' }} src="/images/hybritect1.png" alt="" />
        <img style={{ width: '190px' }} src="/images/tronex-11.png" alt="" />
        <img style={{ width: '190px' }} src="/images/onu.png" alt="" />
        <img style={{ width: '128px' }} src="/images/las-america1.png" alt="" />
      </div>
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <img src="/images/ara.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/hybritect1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/tronex-11.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/onu.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/las-america1.png" alt="" />
        </SwiperSlide>
      </Swiper> */}
    </>
  )
}

export { CarouselClients }