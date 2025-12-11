import { FaInstagram, FaFacebookF, FaTiktok, FaArrowRight } from 'react-icons/fa';
import './Footer.css';
import { FOOTER_CONTENT } from '../constants';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col brand-col">
          <h3>{FOOTER_CONTENT.brand.name}</h3>
          <p>{FOOTER_CONTENT.brand.tagline}</p>
        </div>

        <div className="footer-col">
          <h4>{FOOTER_CONTENT.navigation.title}</h4>
          <ul>
            {FOOTER_CONTENT.navigation.links.map((link, i) => (
              <li key={i}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>{FOOTER_CONTENT.contact.title}</h4>
          <p>{FOOTER_CONTENT.contact.address}</p>
          <p>{FOOTER_CONTENT.contact.phone}</p>
          <p>{FOOTER_CONTENT.contact.email}</p>
          <div className="hours">
            <p>{FOOTER_CONTENT.contact.hours}</p>
          </div>
        </div>

        <div className="footer-col newsletter-col">
          <h4>{FOOTER_CONTENT.newsletter.title}</h4>
          <div className="newsletter-input">
            <input type="email" placeholder={FOOTER_CONTENT.newsletter.placeholder} />
            <button><FaArrowRight /></button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{FOOTER_CONTENT.copyright}</p>
        <div className="social-icons">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTiktok /></a>
          <a href="#"><FaFacebookF /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
