import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaCalendarAlt,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaClock,
} from "react-icons/fa";
import "./ReservationModal.css";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
}

const ReservationModal = ({
  isOpen,
  onClose,
  onSubmitSuccess,
}: ReservationModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name) newErrors.name = "El nombre es obligatorio.";
    if (!formData.email) newErrors.email = "El correo es obligatorio.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Correo inválido.";
    if (!formData.phone) newErrors.phone = "El teléfono es obligatorio.";
    if (!formData.date) newErrors.date = "Selecciona una fecha.";
    if (!formData.time) newErrors.time = "Selecciona una hora.";
    if (!formData.guests) newErrors.guests = "Indica el número de personas.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Logic for submission (mock)
      onSubmitSuccess();
      onClose();
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay">
          <motion.div
            className="modal-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <button className="modal-close" onClick={onClose}>
              <FaTimes />
            </button>

            <h2>Reserva tu Experiencia</h2>
            <p className="modal-subtitle">
              Únete a nosotros para una velada inolvidable.
            </p>

            <form onSubmit={handleSubmit} className="reservation-form">
              <div className="form-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  placeholder="Nombre Completo"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={errors.name ? "error" : ""}
                />
                {errors.name && (
                  <span className="error-msg">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="error-msg">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <FaPhone className="input-icon" />
                <input
                  type="tel"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className={errors.phone ? "error" : ""}
                />
                {errors.phone && (
                  <span className="error-msg">{errors.phone}</span>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <FaCalendarAlt className="input-icon" />
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className={errors.date ? "error" : ""}
                  />
                  {errors.date && (
                    <span className="error-msg">{errors.date}</span>
                  )}
                </div>

                <div className="form-group">
                  <FaClock className="input-icon" />
                  <select
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    className={errors.time ? "error" : ""}
                  >
                    <option value="">Hora</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="22:00">22:00</option>
                  </select>
                  {errors.time && (
                    <span className="error-msg">{errors.time}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <input
                  type="number"
                  min="1"
                  max="10"
                  placeholder="Número de Personas"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({ ...formData, guests: e.target.value })
                  }
                  className={errors.guests ? "error" : ""}
                />
                {errors.guests && (
                  <span className="error-msg">{errors.guests}</span>
                )}
              </div>

              <button type="submit" className="submit-btn">
                Confirmar Reserva
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ReservationModal;
