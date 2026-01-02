import { motion } from "framer-motion";
import "./Omakase.css";
import { OMAKASE_CONTENT, OMAKASE_BG } from "../constants";

interface OmakaseProps {
  onReserveClick: () => void;
}

const Omakase = ({ onReserveClick }: OmakaseProps) => {
  return (
    <section className="omakase" id="omakase">
      <div className="omakase-bg-container">
        <img src={OMAKASE_BG} alt="Omakase Bar" />
        <div className="omakase-overlay"></div>
      </div>

      <motion.div
        className="omakase-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>{OMAKASE_CONTENT.title}</h2>
        <p>{OMAKASE_CONTENT.description}</p>
        <button className="btn-omakase" onClick={onReserveClick}>
          {OMAKASE_CONTENT.cta}
        </button>
      </motion.div>
    </section>
  );
};

export default Omakase;
