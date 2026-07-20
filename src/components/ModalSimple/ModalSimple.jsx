import { useEffect, useState } from "react";
import "./ModalSimple.css";
import emailjs from "@emailjs/browser";

const initialForm = {
  nombres: "",
  apellidos: "",
  dni: "",
  correo: "",
  telefono: "",
  talla: "",
  sugerencia: "",
};

export default function EventRegisterModal({ isOpen, onClose, eventData }) {
  // Inicialización única de EmailJS
  useEffect(() => {
    emailjs.init("LdCqh-AJ8g67kmRHt");
  }, []);

  const [totalInscritos, setTotalInscritos] = useState(0);
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState(initialForm);

  // Obtener el conteo real desde Supabase cuando se abre el modal
  useEffect(() => {
    if (!isOpen) return;

    const obtenerContador = async () => {
      try {
        // Apuntamos directo a tu tabla seleccionando solo la columna 'id' para que sea rápido
        const SUPABASE_URL = "https://sypqitqrmmkcjpwrkrpg.supabase.co/rest/v1/inscritos_aniversario_ades?select=id";
        const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5cHFpdHFybW1rY2pwd3JrcnBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1NjY3NzcsImV4cCI6MjEwMDE0Mjc3N30.GnyPIaOZUFoefVeDqIQBt5VTY9xpbVtL9rM58Oyc49s";

        const response = await fetch(SUPABASE_URL, {
          method: "GET",
          headers: {
            "apikey": SUPABASE_ANON_KEY,
            "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          // data será un array de objetos: [{id: 2}, {id: 3}]. Su longitud es el total de filas.
          setTotalInscritos(data.length || 0);
        }
      } catch (error) {
        console.error("Error al obtener el contador:", error);
      }
    };

    obtenerContador();
  }, [isOpen]);

  if (!isOpen && !loading && !success) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const closeModal = () => {
    setStep(1);
    setFormData(initialForm);
    setLoading(false);
    setSuccess(false);
    onClose();
  };

  const nextStep = () => {
    if (step === 1) {
      const isValid =
        formData.nombres.trim() &&
        formData.apellidos.trim() &&
        formData.dni.trim() &&
        formData.correo.trim();

      if (!isValid) {
        alert("Completa todos los campos.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.correo)) {
        alert("Ingresa un correo válido.");
        return;
      }
    }
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    // Protección extra de backend simulada en el front
    if (totalInscritos >= 100) {
      alert("Lo sentimos, se han agotado los 100 cupos disponibles.");
      return;
    }

    const isValidStep2 = formData.telefono.trim() && formData.talla;
    if (!isValidStep2) {
      alert("Completa todos los campos obligatorios del paso 2.");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        nombres: formData.nombres,
        apellidos: formData.apellidos,
        dni: formData.dni,
        correo: formData.correo,
        telefono: formData.telefono,
        talla: formData.talla,
        sugerencia: formData.sugerencia || null,
        evento: eventData?.title || "Aniversario ADES",
      };

      const SUPABASE_URL = "https://sypqitqrmmkcjpwrkrpg.supabase.co/rest/v1/inscritos_aniversario_ades";
      const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5cHFpdHFybW1rY2pwd3JrcnBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1NjY3NzcsImV4cCI6MjEwMDE0Mjc3N30.GnyPIaOZUFoefVeDqIQBt5VTY9xpbVtL9rM58Oyc49s";

      // 1. Envío a Supabase
      const response = await fetch(SUPABASE_URL, {
        method: "POST",
        headers: {
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Error al insertar los datos en Supabase");
      }

      {/*}
      // 2. Envío de Correo vía EmailJS al correo del usuario
      await emailjs.send(
        "service_6b38k6g",
        "template_jc9vbqm",
        {
          nombres: formData.nombres,
          apellidos: formData.apellidos,
          dni: formData.dni,
          telefono: formData.telefono,
          talla: formData.talla,
          sugerencia: formData.sugerencia || "Ninguna",
          correo: formData.correo, 
          evento: payload.evento,
        },
        "LdCqh-AJ8g67kmRHt"
      );*/}

      setLoading(false);
      setSuccess(true);
    } catch (error) {
      console.error(error);
      alert("Error enviando inscripción.");
      setLoading(false);
    }
  };

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-container">
          <button className="modal-close" onClick={closeModal}>
            X
          </button>

          {/* PROGRESS */}
          <div className="modal-progress">
            <span className={step >= 1 ? "active" : ""}></span>
            <span className={step >= 2 ? "active" : ""}></span>
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="modal-step">
              <h2>Datos Personales</h2>

              {/* Contador de Cupos */}
              <div className="cupos-contador" style={{ marginBottom: "15px", color: "#00ffcc", fontSize: "14px", textAlign: "left" }}>
                {totalInscritos >= 100 ? (
                  <span style={{ color: "#ff4444", fontWeight: "bold" }}>⚠️ Cupos agotados (100/100)</span>
                ) : (
                  <span>Cupos registrados: <strong>{totalInscritos} / 100</strong></span>
                )}
              </div>

              <input
                type="text"
                name="nombres"
                placeholder="Nombres"
                value={formData.nombres}
                onChange={handleChange}
                disabled={totalInscritos >= 100}
              />
              <input
                type="text"
                name="apellidos"
                placeholder="Apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                disabled={totalInscritos >= 100}
              />
              <input
                type="text"
                name="dni"
                placeholder="DNI"
                value={formData.dni}
                onChange={handleChange}
                disabled={totalInscritos >= 100}
              />
              <input
                type="email"
                name="correo"
                placeholder="Correo"
                value={formData.correo}
                onChange={handleChange}
                required
                disabled={totalInscritos >= 100}
              />

              {totalInscritos >= 100 ? (
                <button className="modal-btn" style={{ background: "#333", color: "#666", cursor: "not-allowed" }} disabled>
                  Inscripciones Cerradas
                </button>
              ) : (
                <button className="modal-btn" onClick={nextStep}>
                  Continuar
                </button>
              )}
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="modal-step">
              <h2>Información Adicional</h2>
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
              />
              <select
                name="talla"
                value={formData.talla}
                onChange={handleChange}
              >
                <option value="">Talla de polo</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <textarea
                name="sugerencia"
                placeholder="¿Tienes alguna sugerencia para nuestro aniversario?"
                value={formData.sugerencia}
                onChange={handleChange}
                rows="3"
              />
              <div className="modal-actions">
                <button className="modal-btn-secondary" onClick={prevStep}>
                  Volver
                </button>
                <button className="modal-btn" onClick={handleSubmit}>
                  Finalizar mi Inscripción
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="loading-overlay">
          <div className="loader"></div>
        </div>
      )}

      {/* SUCCESS */}
      {success && (
        <div className="success-overlay">
          <div className="success-modal">
            <div className="success-icon">✓</div>
            <h2>Inscripción enviada</h2>
            <p>
              Tu inscripción fue enviada correctamente. Se envió un correo de
              confirmación al correo que ingresaste.
            </p>
            <button className="modal-btn" onClick={closeModal}>
              Finalizar
            </button>
          </div>
        </div>
      )}
    </>
  );
}