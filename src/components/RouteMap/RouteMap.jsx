import "./RouteMap.css";

export default function RouteMap({
  data,
}) {

  return (

    <section className="route-map">

      <div className="route-map-header">

        <span>
          MAPA DEL EVENTO
        </span>

        <h2>
          {data.title}
        </h2>

      </div>

      <div
        className={`route-map-container ${
          !data.available
            ? "disabled"
            : ""
        }`}
      >

        {data.available ? (

          <iframe
            src={data.link}
            title={data.title}
            loading="lazy"
            allowFullScreen
          />

        ) : (

          <>

            <img
              src={data.previewImage}
              alt={data.title}
            />

            <div className="route-map-overlay">

              <div className="route-map-badge">
                Próximamente
              </div>

              <p>
                El recorrido oficial
                estará disponible muy pronto.
              </p>

            </div>

          </>

        )}

      </div>

    </section>

  );
}