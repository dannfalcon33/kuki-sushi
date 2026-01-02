import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import gsap from "gsap";
import "./Hero.css";
import { HERO_CONTENT, HERO_IMAGES } from "../constants";

const Hero = () => {
  const imagesRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const images = imagesRef.current?.children;
    if (!images || images.length === 0) return;

    // Set initial state
    gsap.set(images, { opacity: 0, scale: 1.1 });
    gsap.set(images[0], { opacity: 1, zIndex: 1 });

    const timeline = gsap.timeline({ repeat: -1 });
    const duration = 5; // Duration per image
    const fadeDuration = 1.5;

    Array.from(images).forEach((_, index) => {
      const nextIndex = (index + 1) % images.length;

      // Animate current image
      timeline
        .to(
          images[index],
          {
            scale: 1,
            duration: duration + fadeDuration,
            ease: "power1.out",
          },
          index * duration
        )
        // Fade out current, Fade in next
        .to(
          images[nextIndex],
          {
            opacity: 1,
            scale: 1.1,
            zIndex: 2, // Bring next to front
            duration: fadeDuration,
            ease: "power2.inOut",
          },
          index * duration + (duration - fadeDuration)
        )
        .set(images[index], { opacity: 0, zIndex: 0 }); // Reset current
    });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg-container" ref={imagesRef}>
        {HERO_IMAGES.map((img, index) => (
          <div
            key={index}
            className="hero-bg-slide"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      <div className="hero-overlay" ref={overlayRef}></div>

      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {HERO_CONTENT.title} <br />{" "}
          <span className="text-gold">{HERO_CONTENT.highlight}</span>
        </motion.h1>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {HERO_CONTENT.subtitle.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <button
            className="btn-primary"
            onClick={() => (window.location.href = "#menu")}
          >
            {HERO_CONTENT.ctaPrimary}
          </button>
          <button className="btn-secondary">
            {HERO_CONTENT.ctaSecondary} <FaPlay className="play-icon" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
