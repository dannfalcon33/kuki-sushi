import { motion } from "framer-motion";
import { FaFish } from "react-icons/fa";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="loader-logo"
        >
          <FaFish className="loader-icon" />
          <h1 className="loader-brand">KŪKI SUSHI</h1>
        </motion.div>

        <div className="loader-progress-bar">
          <motion.div
            className="loader-progress-fill"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
