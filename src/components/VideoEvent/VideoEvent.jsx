import { useState } from "react";

import "./VideoEvent.css";

export default function VideoEvent({ data }) {

  const [play, setPlay] = useState(false);

  const isFacebook =
  data.url.includes("facebook.com");

  const isYoutube =
  data.url.includes("youtube.com") ||
  data.url.includes("youtu.be");

  const getEmbedUrl = (url) => {

    // YOUTUBE

    if (
      url.includes("youtube.com") ||
      url.includes("youtu.be")
    ) {

      let id = "";

      if (url.includes("youtu.be")) {

        id = url.split("/").pop();

      } else {

        id = new URL(url).searchParams.get("v");

      }

      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }

    // FACEBOOK

    if (url.includes("facebook.com")) {

      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
        url
      )}&show_text=false&autoplay=true`;
    }

    return "";
  };

  return (

    <section className="video-event">

      <div className="video-header">

        <span>
          ASÍ SE VIVIÓ
        </span>

        <h2>
          {data.title}
        </h2>

        <p>
          {data.description}
        </p>

      </div>

      <div className={`video-wrapper ${
        isFacebook
          ? "facebook-video"
          : "youtube-video"
        }`}
      >

        {!play ? (

          <div
            className="video-cover"
            onClick={() => setPlay(true)}
          >

            <div className="play-button">

              ▶

            </div>

            <h3>

              Ver resumen del evento

            </h3>

          </div>

        ) : (

          <iframe

            src={getEmbedUrl(data.url)}

            title={data.title}

            allow="autoplay; encrypted-media"

            allowFullScreen

          />

        )}

      </div>

    </section>

  );

}