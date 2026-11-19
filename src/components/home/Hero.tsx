import { useState } from "react";
import DecorativeDivider from "../common/DecorativeDivider";

interface Dynasty {
  id: string;
  name: string;
  period: string;
  image: string;
  href: string;
}

const dynasties: Dynasty[] = [
  {
    id: "vojislavljevici",
    name: "Војислављевићи",
    period: "1018 — 1186",
    image: "/assets/images/dynasties/vojislavljevici.webp",
    href: "/dinastije/vojislavljevici",
  },
  {
    id: "nemanjici",
    name: "Немањићи",
    period: "1166 — 1371",
    image: "/assets/images/dynasties/nemanjici.webp",
    href: "/dinastije/nemanjici",
  },
  {
    id: "karadjordjevici",
    name: "Карађорђевићи",
    period: "1804 — данас",
    image: "/assets/images/dynasties/karadjordjevici.webp",
    href: "/dinastije/karadjordjevici",
  },
  {
    id: "obrenovici",
    name: "Обреновићи",
    period: "1815 — 1903",
    image: "/assets/images/dynasties/obrenovici.webp",
    href: "/dinastije/obrenovici",
  },
];

const Hero = () => {
  const [activeDynasty, setActiveDynasty] = useState<string | null>(null);

  return (
    <section className="hero" id="home">
      <div className="hero__background" aria-hidden="true" />

      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <div className="hero__intro">
          <span className="hero__eyebrow">Историја српског народа</span>

          <h1 className="hero__title">
            Српске
            <span>Династије</span>
          </h1>

          <p className="hero__subtitle">Векови славе, вере и државности</p>

          <DecorativeDivider size="default" className="hero__divider" />
        </div>

        <div className="hero__dynasties">
          {dynasties.map((dynasty) => {
            const isActive = activeDynasty === dynasty.id;

            return (
              <a
                key={dynasty.id}
                href={dynasty.href}
                className={`hero__dynasty ${
                  isActive ? "hero__dynasty--active" : ""
                }`}
                onMouseEnter={() => setActiveDynasty(dynasty.id)}
                onMouseLeave={() => setActiveDynasty(null)}
                onFocus={() => setActiveDynasty(dynasty.id)}
                onBlur={() => setActiveDynasty(null)}
              >
                <div className="hero__dynasty-image">
                  <img src={dynasty.image} alt={dynasty.name} loading="lazy" />
                </div>

                <div className="hero__dynasty-overlay" />

                <div className="hero__dynasty-content">
                  <div className="hero__dynasty-info">
                    <h2>{dynasty.name}</h2>

                    <span className="hero__dynasty-period">
                      {dynasty.period}
                    </span>

                    <span className="hero__dynasty-link">
                      <span>Истражи династију</span>

                      <span className="hero__dynasty-arrow" aria-hidden="true">
                        →
                      </span>
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
