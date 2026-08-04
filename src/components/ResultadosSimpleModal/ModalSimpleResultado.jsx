import { useState } from "react";
import "./ModalSimpleResultado.css";

const SUPABASE_URL =
  "https://sypqitqrmmkcjpwrkrpg.supabase.co/rest/v1/resultados_ades_aniversario_trote";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5cHFpdHFybW1rY2pwd3JrcnBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1NjY3NzcsImV4cCI6MjEwMDE0Mjc3N30.GnyPIaOZUFoefVeDqIQBt5VTY9xpbVtL9rM58Oyc49s";

export default function ResultadoModal({ isOpen, onClose }) {
  const [dni, setDni] = useState("");
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");

  if (!isOpen) return null;

  const buscarResultado = async (dniBuscado) => {
    if (dniBuscado.length !== 8) return;

    try {
      setLoading(true);
      setMensaje("");
      setResultado(null);

      const response = await fetch(
        `${SUPABASE_URL}?dni=eq.${dniBuscado}&select=nombres,apellidos,apellidos,url_diploma,evento`,
        {
          method: "GET",
          headers: {
            apikey: SUPABASE_ANON_KEY,
            Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error al consultar Supabase");
      }

      const data = await response.json();

      if (data.length === 0) {
        setMensaje("No se encontró ningún diploma para ese DOCUMENTO.");
      } else {
        setResultado(data[0]);
      }
    } catch (error) {
      console.error(error);
      setMensaje("Ocurrió un error al consultar los datos.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");

    setDni(value);

    if (value.length === 8) {
      buscarResultado(value);
    } else {
      setResultado(null);
      setMensaje("");
    }
  };

  const cerrar = () => {
    setDni("");
    setResultado(null);
    setMensaje("");
    onClose();
  };

  const obtenerPreview = (url) => {
      if (!url) return "";

      const match = url.match(/\/d\/([^/]+)/);

      if (!match) return "";

      return `https://drive.google.com/file/d/${match[1]}/preview`;
  };

  return (
    <div className="modal-overlay">

      <div className="modal-container resultado-modal">

        <button
          className="modal-close"
          onClick={cerrar}
        >
          ×
        </button>

        <h2>Consultar Diploma</h2>

        <input
          type="text"
          placeholder="Ingrese su DNI"
          value={dni}
          onChange={handleChange}
        />

        {loading && (
          <p className="resultado-loading">
            Buscando información...
          </p>
        )}

        {mensaje && (
          <p className="resultado-error">
            {mensaje}
          </p>
        )}

        {resultado && (
          <div className="resultado-info">

            <div className="resultado-datos">

              <div className="campo">
                <label>Nombres</label>
                <input
                  value={resultado.nombres}
                  readOnly
                />
              </div>

              <div className="campo">
                <label>Apellidos</label>
                <input
                  value={resultado.apellidos}
                  readOnly
                />
              </div>

              <div className="campo">
                <label>Evento</label>
                <input
                  value={resultado.evento}
                  readOnly
                />
              </div>

            </div>

            <iframe
              className="pdf-viewer"
              src={obtenerPreview(resultado.url_diploma)}
              title="Diploma"
            />

            <a
              href={resultado.url_diploma}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-btn"
            >
              Descargar Diploma
            </a>

          </div>
        )}

      </div>

    </div>
  );
}