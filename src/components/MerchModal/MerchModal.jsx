import { useEffect,useState } from "react";
import "./MerchModal.css";
import emailjs from "@emailjs/browser"

const initialForm = {
  nombres: "",
  apellidos: "",
  dni: "",
  telefono: "",
  correo: "",
  genero: "",

  nacimiento: "",
  distrito: "",
  talla: "",
  nombrePolo: "",

  voucher: null,
  prenda:"",
};

export default function MerchModal({
  isOpen,
  onClose,
  product,
}) {

  const [step, setStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [formData, setFormData] =
    useState(initialForm);
    useEffect(() => {
    if (product) {

        setFormData((prev) => ({
        ...prev,

        prenda: product.title,
        }));
    }

    }, [product]);

  if (!isOpen && !loading && !success) return null;

 const handleChange = (e) => {

    const { name, value, files } = e.target;

    if (files && files[0]) {

        setFormData((prev) => ({
        ...prev,

        [name]: files[0],
        }));

        return;
    }

    setFormData((prev) => ({
        ...prev,

        [name]: value,
    }));
};

  const handleVoucher = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({
        ...prev,

        voucher: file,
    }));
  };



  const closeModal = () => {

    setStep(1);

    setFormData(initialForm);

    setSuccess(false);

    setLoading(false);

    onClose();
  };

  const nextStep = () => {
    console.log(formData)
    if (step === 1) {

        const isStep1Valid =

        formData.nombres &&
        formData.apellidos &&
        formData.dni &&
        formData.telefono &&
        formData.correo &&
        formData.genero;

        if (!isStep1Valid) {

        alert(
            "Completa todos los campos."
        );

        return;
        }

        setStep(2);

        return;
    }

    if (step === 2) {

        const isStep2Valid =

        formData.nacimiento &&
        formData.distrito &&
        formData.talla &&
        formData.nombrePolo;

        if (!isStep2Valid) {

        alert(
            "Completa todos los campos."
        );

        return;
        }

        setStep(3);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    if (!formData.voucher) {

        alert(
          "Debes subir la constancia de pago."
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

        const base64 =
          await fileToBase64(
            formData.voucher
          );

        const payload = {

          ...formData,

          voucher: {
            name: formData.voucher.name,
            type: formData.voucher.type,
            base64: base64.split(",")[1],
          },
        };

        //Enviar datos al Google Sheet
        await fetch(
          "https://script.google.com/macros/s/AKfycbz-K4VO2NwyJeBqWUWHWgck7CkMwhYXJuR6nHPkL-LohOFohqlK3256Scw82BjmTIR8wQ/exec",
          {
            method: "POST",

            body: JSON.stringify(payload),
            mode:"no-cors" //negar al CORS
          }
        );

        //Enviar Correo
        await emailjs.send(

          "service_6b38k6g",
          "template_1zhnqpa",

          {
            nombres: formData.nombres,
            correo: formData.correo,
            prenda: formData.prenda,
            talla: formData.talla,
            nombrePolo: formData.nombrePolo,
          },

          "LdCqh-AJ8g67kmRHt"
        );

        setLoading(false);

        setSuccess(true);

      } catch (error) {

        console.error(error);

        alert(
          "Error enviando solicitud."
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
            ×
          </button>

          {/* STEP INDICATOR */}

          <div className="modal-progress">

            <span
              className={
                step >= 1
                  ? "active"
                  : ""
              }
            ></span>

            <span
              className={
                step >= 2
                  ? "active"
                  : ""
              }
            ></span>

            <span
              className={
                step >= 3
                  ? "active"
                  : ""
              }
            ></span>

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
                required
                value={formData.nombres}
                onChange={handleChange}
              />

              <input
                type="text"
                name="apellidos"
                placeholder="Apellidos"
                required
                value={formData.apellidos}
                onChange={handleChange}
              />

              <input
                type="text"
                name="dni"
                placeholder="DNI"
                required
                value={formData.dni}
                onChange={handleChange}
              />

              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                required
                value={formData.telefono}
                onChange={handleChange}
              />

              <input
                type="email"
                name="correo"
                placeholder="Correo"
                required
                value={formData.correo}
                onChange={handleChange}
              />

              <select
                name="genero"
                value={formData.genero}
                onChange={handleChange}
                required
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

              <button
                type="button"
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
                type="date"
                name="nacimiento"
                required
                value={formData.nacimiento}
                onChange={handleChange}
              />

              <input
                type="text"
                name="distrito"
                placeholder="Distrito de Procedencia"
                required
                value={formData.distrito}
                onChange={handleChange}
              />

              <select
                name="talla"
                required
                value={formData.talla}
                onChange={handleChange}
              >

                <option value="">
                  Talla de Prenda
                </option>
                <option>
                  XS
                </option>

                <option>
                  S
                </option>

                <option>
                  M
                </option>

                <option>
                  L
                </option>

                <option>
                  XL
                </option>

              </select>

              <input
                type="text"
                name="nombrePolo"
                placeholder="Nombre que ira en la prenda"
                required
                value={formData.nombrePolo}
                onChange={handleChange}
              />

              <div className="modal-actions">

                <button
                  type="button"
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
                Pago y Confirmación
              </h2>

              <div className="payment-box">
                <p>
                    Prenda seleccionada:
                    <strong>
                        {" "}
                        {formData.prenda}
                    </strong>
                </p>

                <p>
                  Costo de la prenda:
                  <strong>
                    {" "}
                    {product?.price}
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
                Subir constancia de pago
              </label>

              <input
                type="file"
                name="voucher"
                accept="image/*,.pdf"
                required
                onChange={handleVoucher}
              />
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
                  type="button"
                  className="modal-btn"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  Terminar mi solicitud
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
            Solicitud enviada
          </h2>

          <p>
            Tu solicitud fue registrada correctamente.
            Recibirás un correo de confirmación
            con los detalles del proceso.
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