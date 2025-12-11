import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import './Hero.css';
import { HERO_CONTENT, HERO_BG } from '../constants';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg-container">
        <motion.img 
          src={HERO_BG} 
          alt="Chef Cutting Sushi" 
          className="hero-bg"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {HERO_CONTENT.title} <br/> <span className="text-gold">{HERO_CONTENT.highlight}</span>
        </motion.h1>
        
        <motion.p 
          className="subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {HERO_CONTENT.subtitle.split('\n').map((line, i) => (
             <span key={i}>{line}<br/></span>
          ))}
        </motion.p>
        
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <button className="btn-primary">{HERO_CONTENT.ctaPrimary}</button>
          <button className="btn-secondary">
            {HERO_CONTENT.ctaSecondary} <FaPlay className="play-icon" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
