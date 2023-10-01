import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import './carouselProjects.css';


export const CarouselProjects = () => {
  return (
    <>
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
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1500: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <div className="card">
            <img src="./images/project.png" alt="" />
            <h2>Proyecto 01</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="./images/project.png" alt="" />
            <h2>Proyecto 01</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="./images/project.png" alt="" />
            <h2>Proyecto 01</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
} 