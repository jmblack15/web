'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from 'swiper/modules';

const CarouselClients = () => {

  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      slidesPerGroup={1}
      loop={true}
      navigation={false}
      modules={[Autoplay]}
      className="mySwiper"
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 4,
          spaceBetween: 50,
        },

      }}
    >
      <SwiperSlide>
        <Image src='/imgClients/las-america1.png' alt="client" width={190} height={50} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/imgClients/hybritect1.png' alt="client" width={190} height={50} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/imgClients/logo-celsia.jpg' alt="client" width={190} height={50} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/imgClients/onu.png' alt="client" width={190} height={50} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/imgClients/tronex-11.png' alt="client" width={190} height={50} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/imgClients/ara1.png' alt="client" width={190} height={50} />
      </SwiperSlide>
    </Swiper>
  )
}

export { CarouselClients }