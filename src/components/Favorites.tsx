import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './Favorites.css';
import { FAVORITES_CONTENT } from '../constants';
import type { MenuItem } from '../types';

const Favorites = () => {
  const carouselRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  return (
    <section className="favorites" id="menu">
      <div className="favorites-header">
        <h2>{FAVORITES_CONTENT.title}</h2>
      </div>

      <div className="carousel-container" ref={carouselRef}>
        <motion.div 
          className="carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -400 }} 
          whileTap={{ cursor: "grabbing" }}
        >
          {FAVORITES_CONTENT.items.map((item) => (
            <motion.div 
              key={item.id} 
              className="menu-card"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="card-image">
                <img src={item.image} alt={item.title} />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <div className="card-header">
                  <h3>{item.title}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedItem(null)}>
                <FaTimes />
              </button>
              <div className="modal-image">
                <img src={selectedItem.image} alt={selectedItem.title} />
              </div>
              <div className="modal-details">
                <h3>{selectedItem.title}</h3>
                <span className="modal-price">{selectedItem.price}</span>
                <p>{selectedItem.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Favorites;
