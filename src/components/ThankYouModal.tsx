import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import "./ThankYouModal.css";

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThankYouModal = ({ isOpen, onClose }: ThankYouModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay">
          <motion.div
            className="modal-container thank-you-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <button className="modal-close" onClick={onClose}>
              <FaTimes />
            </button>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                delay: 0.2,
              }}
            >
              <FaCheckCircle className="success-icon" />
            </motion.div>

            <h2>¡Reserva Exitosa!</h2>
            <p className="modal-subtitle">
              Gracias por elegir KŪKI Sushi.
              <br />
              Hemos enviado los detalles a tu correo electrónico.
            </p>

            <button className="submit-btn" onClick={onClose}>
              Volver al Inicio
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ThankYouModal;
