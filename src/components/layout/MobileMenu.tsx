import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { navigationLinks } from "../../data/navigation";
import DecorativeDivider from "../common/DecorativeDivider";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <div
      id="mobile-menu"
      className={clsx("mobile-menu", isOpen && "mobile-menu--open")}
      aria-hidden={!isOpen}
    >
      <div className="mobile-menu__backdrop" onClick={onClose} />

      <nav className="mobile-menu__nav" aria-label="Мобилна навигација">
        <div className="mobile-menu__links">
          {navigationLinks.map((link, index) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === "/"}
              tabIndex={isOpen ? 0 : -1}
              className={({ isActive }) =>
                clsx(
                  "mobile-menu__link",
                  isActive && "mobile-menu__link--active",
                )
              }
              style={{
                transitionDelay: isOpen ? `${index * 80 + 180}ms` : "0ms",
              }}
              onClick={onClose}
            >
              <span className="mobile-menu__link-label">{link.label}</span>
              <span className="mobile-menu__link-arrow" aria-hidden="true">
                ↗
              </span>
            </NavLink>
          ))}
        </div>

        <DecorativeDivider
          size="compact"
          className="mobile-menu__divider mobile-menu__divider--bottom"
        />
      </nav>

      <div className="mobile-menu__footer">
        <span className="mobile-menu__footer-text">
          Векови славе, вере и државности
        </span>
      </div>
    </div>
  );
};

export default MobileMenu;
