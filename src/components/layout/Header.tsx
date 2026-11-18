import { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { FaVolumeUp } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import Logo from "../common/Logo";
import { navigationLinks } from "../../data/navigation";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header__container">
          {/* Brand */}
          <div className="header__brand">
            <Logo />

            <NavLink to="/" className="header__brand-title">
              <span>Српске</span>
              <span>Династије</span>
            </NavLink>
          </div>

          {/* Desktop navigation */}
          <nav className="header__navigation" aria-label="Главна навигација">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  clsx(
                    "header__nav-link",
                    isActive && "header__nav-link--active",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="header__actions">
            <button
              type="button"
              className="header__audio-button"
              aria-label="Аудио плејер"
              title="Аудио плејер — ускоро"
              disabled
            >
              <FaVolumeUp aria-hidden="true" />
            </button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className={clsx(
                "header__menu-button",
                mobileOpen && "header__menu-button--active",
              )}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Затвори мени" : "Отвори мени"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};

export default Header;
