import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    
      <header className="navbar">

        <div className="navbar-container">

          <Link to="/" className="logo">
            <img 
                src={"https://res.cloudinary.com/ddt2qucrw/image/upload/ades_png_logo_n55fbf.png"}
                 alt="ADES Logo" />
            <span>
                ADES RUNNERS DEL SUR
            </span>
          </Link>
          
          {/* DESKTOP LINKS */}

          <nav className="nav-links">
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/eventos">Eventos</Link>
            <Link to="/indumentaria"
                  className="highlight-link">{/*RESALTAR CUANDO SEA NECESARIO*/}
              Indumentaria ADES
            </Link>

          </nav>

          {/* MOBILE BUTTON */}

          <button
            className="menu-btn"
            onClick={() => setMenuOpen(true)}
          >

            <span></span>
            <span></span>
            <span></span>

          </button>

        </div>

      </header>

      {/* MOBILE OVERLAY */}

      <div className={`mobile-overlay ${menuOpen ? "active" : ""}`}>

        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <nav className="mobile-links">

          <Link to="/nosotros"
              onClick={() => setMenuOpen(false)}>
            Nosotros
          </Link>

          <Link to="/eventos"
              onClick={() => setMenuOpen(false)}>
            Eventos
          </Link>

          <Link to="/indumentaria"
              className="highlight-link" 
              onClick={() => setMenuOpen(false)}
          >
            Indumentaria ADES
          </Link>

        </nav>

      </div>

    </>
  );
}

export default Navbar;