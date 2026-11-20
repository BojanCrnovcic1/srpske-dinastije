import { Link } from "react-router-dom";
import type { DatePrecision, Dynasty } from "../types";
import { dynasties } from "../data/dynasties";

const formatYear = (year: number, precision: DatePrecision) => {
  return precision === "approximate" ? `око ${year}.` : `${year}.`;
};

const formatPeriod = (dynasty: Dynasty) => {
  const start = dynasty.period.start
    ? formatYear(dynasty.period.start.year, dynasty.period.start.precision)
    : "Непознато";

  const end = dynasty.period.end
    ? formatYear(dynasty.period.end.year, dynasty.period.end.precision)
    : "данас";

  return `${start} — ${end}`;
};

const DynastiesPage = () => {
  const sortedDynasties = [...dynasties].sort((a, b) => a.order - b.order);

  return (
    <main className="dynasties-page">
      <section className="dynasties-page__intro">
        <div className="dynasties-page__intro-background" />

        <div className="dynasties-page__intro-content">
          <span className="dynasties-page__eyebrow">
            Историја српских владарских породица
          </span>

          <h1 className="dynasties-page__title">
            Српске <span>династије</span>
          </h1>

          <div className="dynasties-page__ornament">
            <span />
            <span className="dynasties-page__ornament-symbol">✦</span>
            <span />
          </div>

          <p className="dynasties-page__description">
            Упознајте владарске породице које су обликовале српску историју,
            оставиле неизбрисив траг у култури и државности и кроз вијекове
            преносиле насљеђе са генерације на генерацију.
          </p>

          <div className="dynasties-page__intro-meta">
            <span>{sortedDynasties.length} династија</span>
            <span className="dynasties-page__meta-separator">✦</span>
            <span>Од средњег вијека до модерног доба</span>
          </div>
        </div>
      </section>

      <section className="dynasties-page__collection">
        <div className="dynasties-page__section-heading">
          <div>
            <span className="dynasties-page__eyebrow">Владари и насљеђе</span>

            <h2>Кроз вијекове историје</h2>
          </div>

          <p>
            Свака династија представља једно поглавље историје, обиљежено
            владарима, догађајима и насљеђем које је оставила за собом.
          </p>
        </div>

        <div className="dynasties-page__grid">
          {sortedDynasties.map((dynasty, index) => (
            <article
              className="dynasty-card"
              key={dynasty.id}
              style={{ "--card-index": index } as React.CSSProperties}
            >
              <Link
                to={`/dinastije/${dynasty.slug}`}
                className="dynasty-card__link"
                aria-label={`Погледај више о династији ${dynasty.name}`}
              >
                <div className="dynasty-card__image-wrapper">
                  <img
                    className="dynasty-card__image"
                    src={dynasty.image}
                    alt={dynasty.name}
                    loading={index > 2 ? "lazy" : "eager"}
                  />

                  <div className="dynasty-card__image-overlay" />

                  <span className="dynasty-card__period">
                    {formatPeriod(dynasty)}
                  </span>
                </div>

                <div className="dynasty-card__content">
                  <div className="dynasty-card__heading">
                    <h3>{dynasty.name}</h3>

                    <span className="dynasty-card__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>

                  <p className="dynasty-card__description">
                    {dynasty.description}
                  </p>

                  <div className="dynasty-card__footer">
                    <span>Упознај династију</span>
                    <span className="dynasty-card__footer-line" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default DynastiesPage;
