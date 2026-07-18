import "./IncludesSlider.css";

import { Swiper, SwiperSlide }
from "swiper/react";

import {
  EffectCoverflow,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function IncludesSlider({
  data,
}) {

  return (

    <section className="includes-slider">

      <div className="includes-header">

        <span>
          {data.pretitle}
        </span>

        <h2>
          {data.title}
        </h2>

      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}

        loop={true}

        speed={900}

        autoplay={{
        delay: 2200,
        disableOnInteraction: false,
        }}

        coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 2,
            scale: 0.9,
            slideShadows: false,
        }}

        pagination={{
          clickable: true,
        }}

        modules={[
          EffectCoverflow,
          Pagination,
          Autoplay,
        ]}

        className="includes-swiper"
      >

        {data.images.map(
          (image, index) => (

            <SwiperSlide
              key={index}
            >

              <div className="includes-slide">

                <img
                  src={image}
                  alt={`slide-${index}`}
                />

              </div>

            </SwiperSlide>

          )
        )}

      </Swiper>

    </section>

  );
}