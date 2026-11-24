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
  "велики жупан": "Велики жупан",
  краљ: "Краљ",
  цар: "Цар",
  књаз: "Књаз",
  кнез: "Кнез",
  кнегиња: "Кнегиња",
  деспот: "Деспот",
  севастократор: "Севастократор",
  принц: "Принц",
  регент: "Регент",
  бан: "Бан",
  владика: "Владика",
  херцег: "Херцег",
  војвода: "Војвода",
  господар: "Господар",
  "млади краљ": "Млади краљ",
  "велики војвода": "Велики војвода",
  "господар Зете": "Господар Зете",
};

const achievementCategories: Record<AchievementCategory, string> = {
  military: "Војно достигнуће",
  political: "Политичко достигнуће",
  cultural: "Културно достигнуће",
  religious: "Верско достигнуће",
  legal: "Правно достигнуће",
  territorial: "Територијално проширење",
  architectural: "Архитектура",
  other: "Остало",
};

const eventCategories: Record<EventCategory, string> = {
  battle: "Битка",
  coronation: "Kрунисање",
  treaty: "Споразум",
  uprising: "Устанак",
  political: "Политички догађај",
  religious: "Верски догађај",
  legislation: "Законодавство",
  other: "Историјски догађај",
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
      return `${Math.ceil(date.year / 100)}. век`;

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
    return "Период владавине није познат";
  }

  const firstReign = ruler.reigns[0];
  const lastReign = ruler.reigns[ruler.reigns.length - 1];

  return formatPeriod(firstReign.start, lastReign.end);
};

const getReignDuration = (ruler: Ruler): string => {
  if (!ruler.reigns.length) {
    return "Непознато";
  }

  const startYear = Math.min(...ruler.reigns.map((reign) => reign.start.year));

  const endYears = ruler.reigns
    .map((reign) => reign.end?.year)
    .filter((year): year is number => year !== undefined);

  if (!endYears.length) {
    return "Непознато";
  }

  const endYear = Math.max(...endYears);
  const duration = endYear - startYear;

  return `${duration} ${duration === 1 ? "година" : "година"}`;
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
            <span className="section-eyebrow">Живот и владавина</span>

            <h2 className="section-title">Владар и његово наслеђе</h2>

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
              <span>Династија</span>
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
            <span className="ruler-stats__label">Забележених достигнућа</span>
          </div>

          <div className="ruler-stats__item">
            <span className="ruler-stats__number">{rulerEvents.length}</span>
            <span className="ruler-stats__label">Историјских догађаја</span>
          </div>

          <div className="ruler-stats__item">
            <span className="ruler-stats__number">
              {getReignDuration(ruler)}
            </span>
            <span className="ruler-stats__label">Период владавине</span>
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
              <span className="section-eyebrow">Хронологија</span>

              <h2 className="section-title">Период владавине</h2>

              <p className="section-description">
                Хронолошки преглед периода током којим је {ruler.name} управљао
                државом.
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
              <span className="section-eyebrow">Владарске титуле</span>

              <h2 className="section-title">Титуле кроз историју</h2>
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
              <span className="section-eyebrow">Историјско наслеђе</span>

              <h2 className="section-title">Достигнућа и наслеђе</h2>

              <p className="section-description">
                Најзначајнија политичка, војна, културна и градитељска остварења
                из периода владавине.
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
              <span className="section-eyebrow">Историјска хронологија</span>

              <h2 className="section-title">Кључни историјски догађаји</h2>

              <p className="section-description">
                Догаћаји који су обележили владавину и историјски период{" "}
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
              <span className="section-eyebrow">Владарска лоза</span>

              <h2 className="section-title">Наслеђивање престола</h2>
            </div>

            <div className="ruler-succession__grid">
              {predecessor ? (
                <Link
                  to={`/vladari/${predecessor.slug}`}
                  className="ruler-succession-card"
                >
                  <span className="ruler-succession-card__label">
                    Претходник
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
                    Претходник
                  </span>
                  <p>Није забелезен у постојећим податцима.</p>
                </div>
              )}

              {successor ? (
                <Link
                  to={`/vladari/${successor.slug}`}
                  className="ruler-succession-card"
                >
                  <span className="ruler-succession-card__label">
                    Наследник
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
                    Наследник
                  </span>
                  <p>Није забележен у доступним податцима.</p>
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
          <span className="section-eyebrow">Настави истраживање</span>

          <h2>
            Упознај историју династије
            <span>{dynasty.name}</span>
          </h2>

          <Link
            to={`/dinastije/${dynasty.slug}`}
            className="ruler-footer__link"
          >
            <span>Врати се на династију</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default RulerPage;
