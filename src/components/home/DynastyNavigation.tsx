import type { Dynasty } from "../../types/dynasty";

interface DynastyNavigationProps {
  dynasties: Dynasty[];
  activeSlug?: string;
}

const DynastyNavigation = ({
  dynasties,
  activeSlug,
}: DynastyNavigationProps) => {
  // Ako je korisnik već na stranici jedne dinastije,
  // ne prikazujemo je ponovo u navigaciji.
  const visibleDynasties = dynasties.filter(
    (dynasty) => dynasty.slug !== activeSlug,
  );

  if (visibleDynasties.length === 0) return null;

  return (
    <nav className="dynasty-navigation" aria-label="Ostale srpske dinastije">
      <div className="dynasty-navigation__header">
        <span className="dynasty-navigation__eyebrow">
          Историја српских владарских породица
        </span>

        <h2 className="dynasty-navigation__title">
          Истражите и остале династије
        </h2>
      </div>

      <div className="dynasty-navigation__marquee">
        <div className="dynasty-navigation__track">
          {[0, 1].map((group) => (
            <div
              className="dynasty-navigation__group"
              key={group}
              aria-hidden={group === 1}
            >
              {visibleDynasties.map((dynasty) => (
                <a
                  key={`${group}-${dynasty.id}`}
                  href={`/dinastije/${dynasty.slug}`}
                  className="dynasty-navigation__item"
                  tabIndex={group === 1 ? -1 : undefined}
                >
                  <div className="dynasty-navigation__image">
                    <img
                      src={dynasty.coverImage || dynasty.image}
                      alt=""
                      loading="lazy"
                    />

                    <span className="dynasty-navigation__image-overlay" />
                  </div>

                  <div className="dynasty-navigation__content">
                    <h3>{dynasty.name}</h3>

                    <span className="dynasty-navigation__link">
                      Истражи
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default DynastyNavigation;
