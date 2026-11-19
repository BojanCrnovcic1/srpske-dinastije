import { Link, Navigate, useParams } from "react-router-dom";

import type {
  Achievement,
  AchievementCategory,
  EventCategory,
  HistoricalDate,
  Ruler,
  RulerTitle,
} from "../types";

import { rulers } from "../data/rulers";
import { dynasties } from "../data/dynasties";
import { achievements } from "../data/achievements";
import { events } from "../data/events";

/* =========================================
   CONSTANTS
========================================= */

const rulerTitles: Record<RulerTitle, string> = {
  "veliki-zupan": "Veliki župan",
  kralj: "Kralj",
  car: "Car",
  knez: "Knez",
  despot: "Despot",
  princ: "Princ",
  regent: "Regent",
  ban: "Ban",
  vladika: "Vladika",
};

const achievementCategories: Record<AchievementCategory, string> = {
  military: "Vojno dostignuće",
  political: "Političko dostignuće",
  cultural: "Kulturno dostignuće",
  religious: "Vjersko dostignuće",
  legal: "Pravno dostignuće",
  territorial: "Teritorijalno proširenje",
  architectural: "Zadužbinarstvo i arhitektura",
  other: "Ostalo",
};

const eventCategories: Record<EventCategory, string> = {
  battle: "Bitka",
  coronation: "Krunisanje",
  treaty: "Sporazum",
  uprising: "Ustanak",
  political: "Politički događaj",
  religious: "Vjerski događaj",
  legislation: "Zakonodavstvo",
  other: "Istorijski događaj",
};

/* =========================================
   HELPERS
========================================= */

const formatHistoricalDate = (date: HistoricalDate): string => {
  if (date.label) {
    return date.label;
  }

  switch (date.precision) {
    case "approximate":
      return `oko ${date.year}.`;

    case "century":
      return `${Math.ceil(date.year / 100)}. vijek`;

    case "exact":
    case "year":
    default:
      return `${date.year}.`;
  }
};

const formatPeriod = (
  start: HistoricalDate,
  end?: HistoricalDate | null,
): string => {
  if (!end) {
    return `${formatHistoricalDate(start)} – `;
  }

  return `${formatHistoricalDate(start)} – ${formatHistoricalDate(end)}`;
};

const getRulerPeriod = (ruler: Ruler): string => {
  if (!ruler.reigns.length) {
    return "Period vladavine nije poznat";
  }

  const firstReign = ruler.reigns[0];
  const lastReign = ruler.reigns[ruler.reigns.length - 1];

  return formatPeriod(firstReign.start, lastReign.end);
};

const getReignDuration = (ruler: Ruler): string => {
  if (!ruler.reigns.length) {
    return "Nepoznato";
  }

  const startYear = Math.min(...ruler.reigns.map((reign) => reign.start.year));

  const endYears = ruler.reigns
    .map((reign) => reign.end?.year)
    .filter((year): year is number => year !== undefined);

  if (!endYears.length) {
    return "Nepoznato";
  }

  const endYear = Math.max(...endYears);
  const duration = endYear - startYear;

  return `${duration} ${duration === 1 ? "godina" : "godina"}`;
};

const getRulerAchievements = (ruler: Ruler): Achievement[] => {
  return ruler.achievementsIds
    .map((achievementId) =>
      achievements.find(
        (achievement) =>
          achievement.id === achievementId && achievement.rulerId === ruler.id,
      ),
    )
    .filter(
      (achievement): achievement is Achievement => achievement !== undefined,
    )
    .sort((a, b) => a.order - b.order);
};

const getRulerEvents = (ruler: Ruler) => {
  return ruler.eventIds
    .map((eventId) =>
      events.find(
        (event) => event.id === eventId && event.rulerIds.includes(ruler.id),
      ),
    )
    .filter((event) => event !== undefined)
    .sort((a, b) => a.order - b.order);
};

/* =========================================
   COMPONENT
========================================= */

const RulerPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const ruler = rulers.find((item) => item.slug === slug);

  if (!ruler) {
    return <Navigate to="/dinastije" replace />;
  }

  const dynasty = dynasties.find((item) => item.id === ruler.dynastyId);

  if (!dynasty) {
    return <Navigate to="/dinastije" replace />;
  }

  const rulerAchievements = getRulerAchievements(ruler);
  const rulerEvents = getRulerEvents(ruler);

  const predecessor = ruler.predecessorId
    ? rulers.find((item) => item.id === ruler.predecessorId)
    : undefined;

  const successor = ruler.successorId
    ? rulers.find((item) => item.id === ruler.successorId)
    : undefined;

  return (
    <main className="ruler-page">
      {/* =====================================
          HERO
      ===================================== */}

      <section className="ruler-hero">
        <div className="ruler-hero__background">
          <img
            src={ruler.portrait}
            alt={ruler.name}
            className="ruler-hero__image"
          />
        </div>

        <div className="ruler-hero__overlay" />

        <div className="ruler-hero__content">
          <Link to={`/dinastije/${dynasty.slug}`} className="ruler-hero__back">
            <span aria-hidden="true">←</span>
            <span>{dynasty.name}</span>
          </Link>

          <span className="ruler-hero__eyebrow">
            {rulerTitles[ruler.title]}
          </span>

          <h1 className="ruler-hero__title">{ruler.name}</h1>

          <p className="ruler-hero__period">{getRulerPeriod(ruler)}</p>

          <p className="ruler-hero__description">{ruler.description}</p>
        </div>

        <div className="ruler-hero__bottom">
          <span>{dynasty.name}</span>
          <span className="ruler-hero__separator" />
          <span>{getRulerPeriod(ruler)}</span>
        </div>
      </section>

      {/* =====================================
          BIOGRAPHY
      ===================================== */}

      <section className="ruler-biography section">
        <div className="ruler-biography__container container">
          <div className="ruler-biography__content">
            <span className="section-eyebrow">Život i vladavina</span>

            <h2 className="section-title">Vladar i njegovo nasljeđe</h2>

            <div className="ruler-biography__text">
              {ruler.biography ? (
                <p>{ruler.biography}</p>
              ) : (
                <p>{ruler.description}</p>
              )}
            </div>

            <Link
              to={`/dinastije/${dynasty.slug}`}
              className="ruler-biography__dynasty"
            >
              <span>Dinastija</span>
              <strong>{dynasty.name}</strong>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="ruler-biography__portrait">
            <img src={ruler.portrait} alt={ruler.name} />
          </div>
        </div>

        <div className="ruler-stats container">
          <div className="ruler-stats__item">
            <span className="ruler-stats__number">
              {rulerAchievements.length}
            </span>
            <span className="ruler-stats__label">Zabilježenih dostignuća</span>
          </div>

          <div className="ruler-stats__item">
            <span className="ruler-stats__number">{rulerEvents.length}</span>
            <span className="ruler-stats__label">Istorijskih događaja</span>
          </div>

          <div className="ruler-stats__item">
            <span className="ruler-stats__number">
              {getReignDuration(ruler)}
            </span>
            <span className="ruler-stats__label">Period vladavine</span>
          </div>
        </div>
      </section>

      {/* =====================================
          REIGN HISTORY
      ===================================== */}

      {ruler.reigns.length > 0 && (
        <section className="ruler-reigns section">
          <div className="container">
            <div className="section-heading">
              <span className="section-eyebrow">Hronologija</span>

              <h2 className="section-title">Periodi vladavine</h2>

              <p className="section-description">
                Hronološki pregled perioda tokom kojih je {ruler.name} upravljao
                državom.
              </p>
            </div>

            <div className="ruler-reigns__timeline">
              {ruler.reigns.map((reign, index) => (
                <article
                  className="ruler-reign"
                  key={`${reign.start.year}-${index}`}
                >
                  <div className="ruler-reign__marker">
                    <span />
                  </div>

                  <div className="ruler-reign__content">
                    <span className="ruler-reign__period">
                      {formatPeriod(reign.start, reign.end)}
                    </span>

                    <h3 className="ruler-reign__title">
                      {rulerTitles[reign.title]}
                    </h3>

                    {reign.note && (
                      <p className="ruler-reign__note">{reign.note}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================
          TITLE HISTORY
      ===================================== */}

      {ruler.titleHistory.length > 0 && (
        <section className="ruler-titles section">
          <div className="container">
            <div className="section-heading">
              <span className="section-eyebrow">Vladarske titule</span>

              <h2 className="section-title">Titule kroz istoriju</h2>
            </div>

            <div className="ruler-titles__list">
              {ruler.titleHistory.map((item, index) => (
                <article
                  className="ruler-title-item"
                  key={`${item.start.year}-${index}`}
                >
                  <span className="ruler-title-item__date">
                    {formatPeriod(item.start, item.end)}
                  </span>

                  <h3 className="ruler-title-item__title">
                    {rulerTitles[item.title]}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================
          ACHIEVEMENTS
      ===================================== */}

      {rulerAchievements.length > 0 && (
        <section className="ruler-achievements section">
          <div className="container">
            <div className="section-heading">
              <span className="section-eyebrow">Istorijsko nasljeđe</span>

              <h2 className="section-title">Dostignuća i nasljeđe</h2>

              <p className="section-description">
                Najznačajnija politička, vojna, kulturna i graditeljska
                ostvarenja iz perioda vladavine.
              </p>
            </div>

            <div className="ruler-achievements__grid">
              {rulerAchievements.map((achievement) => (
                <article className="ruler-achievement" key={achievement.id}>
                  {achievement.image && (
                    <div className="ruler-achievement__image">
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="ruler-achievement__content">
                    <div className="ruler-achievement__meta">
                      <span className="ruler-achievement__category">
                        {achievementCategories[achievement.category]}
                      </span>

                      {achievement.date && (
                        <span className="ruler-achievement__date">
                          {formatHistoricalDate(achievement.date)}
                        </span>
                      )}
                    </div>

                    <h3 className="ruler-achievement__title">
                      {achievement.title}
                    </h3>

                    <p className="ruler-achievement__description">
                      {achievement.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================
          HISTORICAL EVENTS
      ===================================== */}

      {rulerEvents.length > 0 && (
        <section className="ruler-events section">
          <div className="container">
            <div className="section-heading">
              <span className="section-eyebrow">Istorijska hronologija</span>

              <h2 className="section-title">Ključni istorijski događaji</h2>

              <p className="section-description">
                Događaji koji su obilježili vladavinu i istorijski period{" "}
                {ruler.name}.
              </p>
            </div>

            <div className="ruler-events__list">
              {rulerEvents.map((event) => (
                <article className="ruler-event" key={event.id}>
                  {event.image && (
                    <div className="ruler-event__image">
                      <img src={event.image} alt={event.title} loading="lazy" />
                    </div>
                  )}

                  <div className="ruler-event__content">
                    <div className="ruler-event__meta">
                      <span className="ruler-event__category">
                        {eventCategories[event.category]}
                      </span>

                      <span className="ruler-event__date">
                        {formatHistoricalDate(event.date)}
                      </span>
                    </div>

                    <h3 className="ruler-event__title">{event.title}</h3>

                    <p className="ruler-event__description">
                      {event.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================
          SUCCESSION
      ===================================== */}

      {(predecessor || successor) && (
        <section className="ruler-succession section">
          <div className="container">
            <div className="section-heading">
              <span className="section-eyebrow">Vladarska loza</span>

              <h2 className="section-title">Nasljeđivanje prijestola</h2>
            </div>

            <div className="ruler-succession__grid">
              {predecessor ? (
                <Link
                  to={`/vladari/${predecessor.slug}`}
                  className="ruler-succession-card"
                >
                  <span className="ruler-succession-card__label">
                    Prethodnik
                  </span>

                  <div className="ruler-succession-card__content">
                    <img
                      src={predecessor.portrait}
                      alt={predecessor.name}
                      loading="lazy"
                    />

                    <div>
                      <h3>{predecessor.name}</h3>
                      <span>{rulerTitles[predecessor.title]}</span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="ruler-succession-card ruler-succession-card--empty">
                  <span className="ruler-succession-card__label">
                    Prethodnik
                  </span>
                  <p>Nije zabilježen u dostupnim podacima.</p>
                </div>
              )}

              {successor ? (
                <Link
                  to={`/vladari/${successor.slug}`}
                  className="ruler-succession-card"
                >
                  <span className="ruler-succession-card__label">
                    Nasljednik
                  </span>

                  <div className="ruler-succession-card__content">
                    <img
                      src={successor.portrait}
                      alt={successor.name}
                      loading="lazy"
                    />

                    <div>
                      <h3>{successor.name}</h3>
                      <span>{rulerTitles[successor.title]}</span>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="ruler-succession-card ruler-succession-card--empty">
                  <span className="ruler-succession-card__label">
                    Nasljednik
                  </span>
                  <p>Nije zabilježen u dostupnim podacima.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* =====================================
          FOOTER NAVIGATION
      ===================================== */}

      <section className="ruler-footer">
        <div className="container ruler-footer__content">
          <span className="section-eyebrow">Nastavi istraživanje</span>

          <h2>
            Upoznaj istoriju dinastije
            <span>{dynasty.name}</span>
          </h2>

          <Link
            to={`/dinastije/${dynasty.slug}`}
            className="ruler-footer__link"
          >
            <span>Vrati se na dinastiju</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default RulerPage;
