import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { FaFish } from 'react-icons/fa';
import './Navbar.css';
import { NAVBAR_CONTENT } from '../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{ 
        backgroundColor: isScrolled ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0)",
        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="navbar-container">
        <div className="logo">
          <FaFish className="logo-icon" />
          <span className="logo-text">{NAVBAR_CONTENT.brand}</span>
        </div>

        <div className="nav-links">
          {NAVBAR_CONTENT.links.map((link, index) => (
             <a key={index} href={link.href}>{link.label}</a>
          ))}
        </div>

        <button className="btn-reserve">{NAVBAR_CONTENT.cta}</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
