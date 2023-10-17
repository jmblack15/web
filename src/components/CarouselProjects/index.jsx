'use client'
import { CardProjects } from "../CardProjects"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from 'swiper/modules';

const CarouselProjects = () => {

  const projects = [
    { img: '/imgProjects/tiendasAra.png', name: 'Tiendas ARA' },
    { img: '/imgProjects/yokoMotor.png', name: 'Yokomotor' },
    { img: '/imgProjects/tronexVitelsa.png', name: 'Tronex Vitelsa' },
    { img: '/imgProjects/eya.png', name: 'EyA CDA Autofull' },
    { img: '/imgProjects/mundoGYP.png', name: 'Mundial GyP' },
  ]

  return (
    <Swiper
      slidesPerView={1}
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
          slidesPerView: 3,
          spaceBetween: 30,
        },

      }}
    >
      {projects.map(project => (
        <SwiperSlide key={project.name}>
          <CardProjects
            key={project.name}
            img={project.img}
            name={project.name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export { CarouselProjects }