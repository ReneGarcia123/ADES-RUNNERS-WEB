import { Swiper, SwiperSlide } from "swiper/react";

import {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./FadeSlider.css";

export default function FadeSlider({
  slides = [],
}) {

  return (

    <Swiper
      spaceBetween={30}

      effect={"fade"}

      navigation={true}

      pagination={{
        clickable: true,
      }}

      autoplay={{
        delay: 10000,
        disableOnInteraction: false,
      }}

      loop={true}

      modules={[
        EffectFade,
        Navigation,
        Pagination,
        Autoplay,
      ]}

      className="fade-slider"
    >

      {slides.map((slide, index) => (

        <SwiperSlide key={index}>

          <img
            src={slide.image}
            alt={slide.title || `slide-${index}`}
          />

        </SwiperSlide>

      ))}

    </Swiper>
  );
}