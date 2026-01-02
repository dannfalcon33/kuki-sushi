import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { FaFish, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { NAVBAR_CONTENT } from "../constants";

interface NavbarProps {
  onReserveClick: () => void;
}

const Navbar = ({ onReserveClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleReserve = () => {
    setIsMobileMenuOpen(false);
    onReserveClick();
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? "scrolled" : ""}`}
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{
        backgroundColor: isScrolled ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0)",
        backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="navbar-container">
        <div className="logo">
          <FaFish className="logo-icon" />
          <span className="logo-text">{NAVBAR_CONTENT.brand}</span>
        </div>

        {/* Desktop Links */}
        <div className="nav-links desktop-only">
          {NAVBAR_CONTENT.links.map((link, index) => (
            <a key={index} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <button className="btn-reserve desktop-only" onClick={onReserveClick}>
          {NAVBAR_CONTENT.cta}
        </button>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="mobile-menu-header">
              <button className="close-btn" onClick={toggleMobileMenu}>
                <FaTimes />
              </button>
            </div>
            <div className="mobile-links">
              {NAVBAR_CONTENT.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button
                className="btn-reserve mobile-btn"
                onClick={handleReserve}
              >
                {NAVBAR_CONTENT.cta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
