import { motion } from 'framer-motion';
import './Philosophy.css';
import { PHILOSOPHY_CONTENT, PHILOSOPHY_BG } from '../constants';

const Philosophy = () => {
  return (
    <section className="philosophy" id="about">
      <div className="philosophy-content">
        <motion.span 
          className="pre-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {PHILOSOPHY_CONTENT.preTitle}
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {PHILOSOPHY_CONTENT.title}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {PHILOSOPHY_CONTENT.description}
        </motion.p>
        
        <motion.div 
          className="signature"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="sign-text">{PHILOSOPHY_CONTENT.signature}</span>
          <span className="role">{PHILOSOPHY_CONTENT.baker}</span>
        </motion.div>
      </div>

      <div className="philosophy-image">
        <img src={PHILOSOPHY_BG} alt="Fresh Ingredients" />
      </div>
    </section>
  );
};

export default Philosophy;
