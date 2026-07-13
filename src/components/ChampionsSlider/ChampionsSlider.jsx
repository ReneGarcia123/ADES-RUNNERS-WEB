import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./ChampionsSlider.css";

export default function ChampionsSlider({
  data,
}) {

  return (

    <section className="champions">

      <div className="champions-header">

        <span>
          CONOCE A NUESTROS
        </span>

        <h2>
          {data.title}
        </h2>

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

          <SwiperSlide
            key={item.id}
          >

            <div className="champion-card">

              <img
                src={item.image}
                alt={item.categoria}
              />

              <div className="champion-content">

                <h3>
                  {item.categoria}
                </h3>

                <div className="winner gold">

                  <span>
                    🥇 Primer Puesto
                  </span>

                  <strong>
                    {item.winners[0]}
                  </strong>

                </div>

                <div className="winner silver">

                  <span>
                    🥈 Segundo Puesto
                  </span>

                  <strong>
                    {item.winners[1]}
                  </strong>

                </div>

                <div className="winner bronze">

                  <span>
                    🥉 Tercer Puesto
                  </span>

                  <strong>
                    {item.winners[2]}
                  </strong>

                </div>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>

  );

}