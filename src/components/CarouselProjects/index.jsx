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
          <div className="card">
            <img src="/images/tiendasAra.png" alt="proyecto" />
            <h2>Tiendas ARA</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="/images/yokoMotor.png" alt="proyecto" />
            <h2>Yokomotor</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="/images/tronexVitelsa.png" alt="proyecto" />
            <h2>Tronex Vitelsa</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="/images/veTower.png" alt="proyecto" />
            <h2>Ve Tower</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
} 