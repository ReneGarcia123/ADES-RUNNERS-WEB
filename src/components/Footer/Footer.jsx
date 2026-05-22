import "./Footer.css";

function Footer() {
return (

    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-brand">

          <div className="footer-logo">

            <span className="footer-small-text">
              Somos... ADES
            </span>

            <span className="footer-main-text">
              MÁS KILÓMETROS, MÁS FELICIDAD!
            </span>

          </div>

          <p>
            Comunidad deportiva enfocada en running,
            eventos y crecimiento deportivo.
          </p>

        </div>

        {/* RIGHT */}

        <div className="footer-links">

          <div className="footer-column">

            <h4>Navegación</h4>

            <a href="/">Nosotros</a>
            <a href="/">Eventos</a>
            <a href="/">Indumentaria ADES</a>

          </div>

          <div className="footer-column">

            <h4>Redes</h4>

            <a href="https://www.instagram.com/ades.runners/" target="_blank" className="social-link">

              <img
                src="https://res.cloudinary.com/ddt2qucrw/image/upload/v1779489665/INSTAGRAM_xwix6x.png"
                alt="Instagram"
              />

              Instagram

            </a>

            <a href="https://www.facebook.com/profile.php?id=61583643876011" target="_blank" className="social-link">

              <img
                src="https://res.cloudinary.com/ddt2qucrw/image/upload/v1779489670/facebook_fscs9m.png"
                alt="Facebook"
              />

              Facebook

            </a>

            <a href="https://www.tiktok.com/@ades.runners" target="_blank" className="social-link">

              <img
                src="https://res.cloudinary.com/ddt2qucrw/image/upload/v1779489668/TIK_TOK_whcxaf.png"
                alt="TikTok"
              />

              TikTok

            </a>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 ADES RUNNERS DEL SUR.
          Todos los derechos reservados.
        </p>

      </div>

    </footer>

  );
}

export default Footer;