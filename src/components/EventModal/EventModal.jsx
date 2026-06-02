import { useEffect, useState } from "react";

import "./EventModal.css";

import emailjs from "@emailjs/browser";



const initialForm = {
  nombres: "",
  apellidos: "",
  dni: "",
  correo: "",

  telefono: "",
  genero: "",
  nacimiento: "",
  equipo: "",
  contactoEmergencia: "",
  fotoDni: null,
  fotoBienvenida: null,
  voucher: null,
  inscripcion:"13K CARRERA DEL PADRE",

  aceptaBases: false,
  aceptaDeslinde: false,
  aceptaDatos: false,
};

export default function EventRegisterModal({
  isOpen,
  onClose,
  eventData,
}) {
  useEffect(() => {

    emailjs.init("LdCqh-AJ8g67kmRHt");

  }, []);

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] =
    useState(initialForm);

  if (!isOpen && !loading && !success)
    return null;

  const handleChange = (e) => {

    const {
      name,
      value,
      files,
      type,
      checked,
    } = e.target;

    if (files && files[0]) {

      setFormData((prev) => ({
        ...prev,

        [name]: files[0],
      }));

      return;
    }

    setFormData((prev) => ({
      ...prev,

      [name]:
        type === "checkbox"
          ? checked
          : value,
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

        formData.nombres &&
        formData.apellidos &&
        formData.dni &&
        formData.correo;

    if (!isValid) {

        alert(
        "Completa todos los campos."
        );

        return;
    }

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.correo)) {

        alert(
        "Ingresa un correo válido."
        );

        return;
    }
    }

    if (step === 2) {

        const isValid =

            formData.telefono &&
            formData.genero &&
            formData.nacimiento &&
            formData.contactoEmergencia;

      if (!isValid) {

            alert(
            "Completa todos los campos obligatorios."
            );

            return;
      }
    }

    if (step === 3) {

      if (!formData.voucher) {

        alert(
          "Debes subir el voucher."
        );

        return;
      }

      if (!formData.fotoDni) {

        alert(
          "Debes subir la foto del DNI."
        );

        return;
      }

      
    }

    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {

    const accepted =

      formData.aceptaBases &&
      formData.aceptaDeslinde &&
      formData.aceptaDatos;

    if (!accepted) {

      alert(
        "Debes aceptar todas las condiciones."
      );

      return;
    }

    try {

      setLoading(true);

      const fileToBase64 = (file) =>
        new Promise((resolve, reject) => {

          const reader = new FileReader();

          reader.readAsDataURL(file);

          reader.onload = () =>
            resolve(reader.result);

          reader.onerror = reject;
        });

      /*Convertir foto voucher*/  
      let voucherBase64 = null;
      if (formData.voucher) {
        const base64 =
          await fileToBase64(
            formData.voucher
          );
        voucherBase64 = {
          name: formData.voucher.name,
          type: formData.voucher.type,
          base64: base64.split(",")[1],
        };
      }

      /*Convertir foto bienvenida*/
      let fotoBase64 = null;
      if (formData.fotoBienvenida) {
        const base64 =
          await fileToBase64(
            formData.fotoBienvenida
          );
        fotoBase64 = {
          name:
            formData.fotoBienvenida.name,
          type:
            formData.fotoBienvenida.type,
          base64: base64.split(",")[1],
        };
      }

      /*Convertir foto DNI*/
      let fotoDniBase64 = null;
      if (formData.fotoDni) {
        const base64 =
          await fileToBase64(
            formData.fotoDni
          );
        fotoDniBase64 = {
          name: formData.fotoDni.name,
          type: formData.fotoDni.type,
          base64: base64.split(",")[1],
        };
      }


      const payload = {
        ...formData,
        voucher: voucherBase64,
        fotoBienvenida: fotoBase64,
        fotoDni:fotoDniBase64,
        evento:
          eventData?.title || "",
      };

      // GOOGLE APPS SCRIPT

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby3SuGDWoGollqQFXbwDrnYJ8YdDNPXjIlY3XE9MBIvpCG_rRtfd9XD4mHE0L0_wyjC/exec",
        {
            method: "POST",

            mode: "cors",

            headers: {
            "Content-Type": "text/plain",
            },

            body: JSON.stringify(payload),
        }
      );

      // EMAILJS
    
      await emailjs.send(

        "service_6b38k6g",

        "template_jc9vbqm",

        {
          nombres: formData.nombres,

          apellidos: formData.apellidos,

          dni: formData.dni,

          telefono: formData.telefono,

          contactoEmergencia:
            formData.contactoEmergencia,

          genero: formData.genero,

          nacimiento: formData.nacimiento,

          equipo:
            formData.equipo || "No especificado",

          inscripcion:
            formData.inscripcion,

          correo: formData.correo,
        },

        "LdCqh-AJ8g67kmRHt"
      );
    

      const text = await response.text();

        console.log(text);

        setLoading(false);

        setSuccess(true);

    } catch (error) {

      console.error(error);

      alert(
        "Error enviando inscripción."
      );

      setLoading(false);
    }
  };

  return (

    <>

      <div className="modal-overlay">

        <div className="modal-container">

          <button
            className="modal-close"
            onClick={closeModal}
          >
            X
          </button>

          {/* PROGRESS */}

          <div className="modal-progress">

            <span className={step >= 1 ? "active" : ""}></span>

            <span className={step >= 2 ? "active" : ""}></span>

            <span className={step >= 3 ? "active" : ""}></span>

            <span className={step >= 4 ? "active" : ""}></span>

          </div>

          {/* STEP 1 */}

          {step === 1 && (

            <div className="modal-step">

              <h2>
                Datos Personales
              </h2>

              <input
                type="text"
                name="nombres"
                placeholder="Nombres"
                value={formData.nombres}
                onChange={handleChange}
              />

              <input
                type="text"
                name="apellidos"
                placeholder="Apellidos"
                value={formData.apellidos}
                onChange={handleChange}
              />

              <input
                type="text"
                name="dni"
                placeholder="DNI"
                value={formData.dni}
                onChange={handleChange}
              />

              <input
                type="email"
                name="correo"
                placeholder="Correo"
                value={formData.correo}
                onChange={handleChange}
                required
                />

              <button
                className="modal-btn"
                onClick={nextStep}
              >
                Continuar
              </button>

            </div>

          )}

          {/* STEP 2 */}

          {step === 2 && (

            <div className="modal-step">

              <h2>
                Información Deportiva
              </h2>

              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
              />

              <select
                name="genero"
                value={formData.genero}
                onChange={handleChange}
              >

                <option value="">
                  Género
                </option>

                <option value="Masculino">
                  Masculino
                </option>

                <option value="Femenino">
                  Femenino
                </option>

              </select>

              <input
                type="date"
                name="nacimiento"
                value={formData.nacimiento}
                onChange={handleChange}
              />

              <input
                type="text"
                name="equipo"
                placeholder="Equipo al que pertenece"
                value={formData.equipo}
                onChange={handleChange}
              />
              <input
                type="text"
                name="contactoEmergencia"
                placeholder="Contacto de emergencia"
                value={formData.contactoEmergencia}
                onChange={handleChange}
              />

              <div className="modal-actions">

                <button
                  className="modal-btn-secondary"
                  onClick={prevStep}
                >
                  Volver
                </button>

                <button
                  className="modal-btn"
                  onClick={nextStep}
                >
                  Continuar
                </button>

              </div>

            </div>

          )}

          {/* STEP 3 */}

          {step === 3 && (

            <div className="modal-step">

              <h2>
                Pago y Archivos
              </h2>

              <label className="upload-label">
                Foto para bienvenida
                (OPCIONAL)
              </label>

              <input
                type="file"
                name="fotoBienvenida"
                accept="image/*"
                onChange={handleChange}
              />

              {formData.fotoBienvenida && (

                <p className="file-name">
                  {formData.fotoBienvenida.name}
                </p>

              )}

              <div className="payment-box">
                <p>
                  Costo de inscripción:
                  <strong>
                    {" "}
                    S/.25.00
                  </strong>
                </p>
                <p>
                  Yape al número:
                  <strong>
                    {" "}
                    935279620
                  </strong>
                </p>

                <p>
                  A nombre de:
                  <strong>
                    {" "}
                    Rocio Cuentas
                  </strong>
                </p>

                <p>
                  En la descripción del
                  Yape indicar nombres y
                  apellidos.
                </p>

              </div>

              <label className="upload-label">
                Subir voucher de pago (OBLIGATORIO)
              </label>

              <input
                type="file"
                name="voucher"
                accept="image/*,.pdf"
                onChange={handleChange}
              />

              <label className="upload-label">
                Foto del DNI del inscrito (OBLIGATORIO)
              </label>

              <input
                type="file"
                name="fotoDni"
                accept="image/*,.pdf"
                onChange={handleChange}
              />

              {formData.fotoDni && (

                <p className="file-name">
                  {formData.fotoDni.name}
                </p>

              )}

              {formData.voucher && (

                <p className="file-name">
                  {formData.voucher.name}
                </p>

              )}

              <div className="modal-actions">

                <button
                  className="modal-btn-secondary"
                  onClick={prevStep}
                >
                  Volver
                </button>

                <button
                  className="modal-btn"
                  onClick={nextStep}
                >
                  Continuar
                </button>

              </div>

            </div>

          )}

          {/* STEP 4 */}

          {step === 4 && (

            <div className="modal-step">

              <h2>
                Confirmación Final
              </h2>

              <label className="checkbox-item">

                <input
                  type="checkbox"
                  name="aceptaBases"
                  checked={formData.aceptaBases}
                  onChange={handleChange}
                />

                <span>
                  He leído y acepto las
                  Bases Generales del
                  evento.
                </span>

              </label>

              <label className="checkbox-item">

                <input
                  type="checkbox"
                  name="aceptaDeslinde"
                  checked={formData.aceptaDeslinde}
                  onChange={handleChange}
                />

                <span>
                  He leído y acepto el
                  Deslinde de
                  Responsabilidad.
                </span>

              </label>

              <label className="checkbox-item">

                <input
                  type="checkbox"
                  name="aceptaDatos"
                  checked={formData.aceptaDatos}
                  onChange={handleChange}
                />

                <span>
                  Acepto que los datos
                  proporcionados sean
                  correctos.
                </span>

              </label>

              <div className="modal-actions">

                <button
                  className="modal-btn-secondary"
                  onClick={prevStep}
                >
                  Volver
                </button>

                <button
                  className="modal-btn"
                  onClick={handleSubmit}
                >
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

            <div className="success-icon">
              ✓
            </div>

            <h2>
              Inscripción enviada
            </h2>

            <p>
              Tu inscripción fue enviada
              correctamente. Se envío un correo de confirmación al correo que ingresaste.
            </p>

            <button
              className="modal-btn"
              onClick={closeModal}
            >
              Finalizar
            </button>

          </div>

        </div>

      )}

    </>

  );
}