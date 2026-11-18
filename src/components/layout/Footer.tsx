import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import DecorativeDivider from "../common/DecorativeDivider";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Main footer content */}
        <div className="footer__main">
          {/* Brand */}
          <Link to="/" className="footer__brand" aria-label="Почетна">
            <Logo />

            <span className="footer__brand-name">
              Српске
              <br />
              Династије
            </span>
          </Link>

          {/* Navigation */}
          <nav className="footer__navigation" aria-label="Footer навигација">
            <Link to="/" className="footer__link">
              Почетна
            </Link>

            <span className="footer__separator" aria-hidden="true" />

            <Link to="/dinastije" className="footer__link">
              Династије
            </Link>

            <span className="footer__separator" aria-hidden="true" />

            <Link to="/about" className="footer__link">
              О нама
            </Link>

            <span className="footer__separator" aria-hidden="true" />

            <a href="/#contact" className="footer__link">
              Контакт
            </a>
          </nav>

          {/* Social media */}
          <div className="footer__socials">
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12a12 12 0 1 0-13.875 11.85v-8.38H7.078V12h3.047V9.356c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.512c-1.49 0-1.957.925-1.957 1.874V12h3.328l-.532 3.47h-2.796v8.38A12 12 0 0 0 24 12Z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Decorative divider */}
        <DecorativeDivider size="default" className="footer__divider" />

        {/* Footer bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Српске Династије. Сва права задржана.
          </p>

          <p className="footer__tagline">Наша историја – наше наслеђе.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
