import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./AchievementsSlider.css";

export default function AchievementsSlider({ data }) {
  return (
    <section className="champions">

      <div className="champions-header">

        <span>
          NUESTROS LOGROS
        </span>

        <h2>
          {data.title}
        </h2>

        <p>
          Algunos de los campeonatos y reconocimientos que hemos conseguido
          como equipo.
        </p>

      </div>

      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
        ]}
        spaceBetween={30}
        slidesPerView={3}
        loop
        grabCursor
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >

        {data.categories.map((item) => (

          <SwiperSlide key={item.id}>

            <div className="champion-card">

              <img
                src={item.image}
                alt={item.campeonato}
              />

              <div className="champion-content">

                <span className="champion-year">
                  {item.año}
                </span>

                <h3>
                  {item.campeonato}
                </h3>

                <p className="champion-description">
                  {item.descripcion}
                </p>

                <div className="champion-trophy">
                  🏆
                  <span>
                    {item.logro}
                  </span>
                </div>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}