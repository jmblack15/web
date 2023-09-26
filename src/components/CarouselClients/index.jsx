import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '../../styles/carousel.css';


import { Pagination } from 'swiper/modules';


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
        <img style={{width: '190px'}} src="/images/tronex.png" alt="" />
        <img style={{width: '190px'}} src="/images/ONU_–_Hábitat_Por_Un_Mejor_Futuro_Urbano.png" alt="" />
        <img style={{width: '190px'}} src="/images/hybritect.png" alt="" />
        <img style={{width: '190px'}} src="/images/sportilla.png" alt="" />
        <img style={{width: '190px'}} src="/images/mundial-de-granos.png" alt="" />
      </div>
      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/tronex.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/tronex.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/tronex.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/tronex.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/tronex.png" alt="" />
        </SwiperSlide>
      </Swiper> */}
    </>
  )
}

export { CarouselClients }