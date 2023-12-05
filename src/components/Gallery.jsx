import "./Gallery.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

function Reels()  {
  return (
      <div className="container">
        <h1 className="heading">Flower Gallery</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <video src="https://www.instagram.com/reel/CzSQuWatV-z/"></video>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
  );
};


function Gallery() {
  return (
    <div className='gallery_container'>
      <h2 className="gallery_title">De esta forma le generamos una facturación total de más de <span className="text-purple">100.000 USD</span> a nuestros clientes <span className="text-red">en los últimos 90 días</span> mediante nuestra estrategia de contenido.</h2>
      <div>
        {Reels}
      </div>
    </div>
  )
}

export default Gallery