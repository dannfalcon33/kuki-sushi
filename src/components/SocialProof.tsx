import { motion } from 'framer-motion';
import './SocialProof.css';
import { SOCIAL_CONTENT } from '../constants';

const SocialProof = () => {
  return (
    <section className="social-proof" id="gallery">
      <div className="social-header">
        <h2>{SOCIAL_CONTENT.title} <span>{SOCIAL_CONTENT.handle}</span></h2>
      </div>

      <div className="masonry-grid">
        {SOCIAL_CONTENT.images.map((src, index) => (
          <motion.div 
            className="masonry-item" 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <img src={src} alt={`Social proof ${index}`} />
            <div className="instagram-overlay">
              <span>View on Instagram</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SocialProof;
