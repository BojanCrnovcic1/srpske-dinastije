import { Link, Navigate, useParams } from "react-router-dom";
import type { Dynasty, HistoricalDate, Ruler, RulerTitle } from "../types";
import { rulers } from "../data/rulers";
import { dynasties } from "../data/dynasties";
import { events } from "../data/events";
import { useEffect } from "react";
import { useAudio } from "../hooks/useAudioPlayer";

const rulerTitles: Record<RulerTitle, string> = {
  "велики жупан": "Велики жупан",
  краљ: "Краљ",
  цар: "Цар",
  кнез: "Kнез",
  деспот: "Деспот",
  севастократор: "Севастократор",
  принц: "Принц",
  регент: "Регент",
  бан: "Бан",
  владика: "Владика",
  херцег: "Херцег",
  војвода: "Војвода",
  господар: "Господар",
  "велики војвода": "Велики војвода",
  "господар Зете": "Господар Зете",
};

const formatHistoricalDate = (date: HistoricalDate): string => {
  const year = date.year;

  switch (date.precision) {
    case "approximate":
      return `oko ${year}.`;

    case "century": {
      const century = Math.ceil(year / 100);
      return `${century}. Век`;
    }

    case "year":
    case "exact":
    default:
      return `${year}.`;
  }
};

const formatPeriod = (
  start: HistoricalDate,
  end?: HistoricalDate | null,
): string => {
  const startYear = formatHistoricalDate(start);

  if (!end) {
    return `${startYear} – данас`;
  }

  return `${startYear} – ${formatHistoricalDate(end)}`;
};

const getRulerPeriod = (ruler: Ruler): string => {
  if (!ruler.reigns.length) {
    return "Период владавине није познат";
  }

  const firstReign = ruler.reigns[0];
  const lastReign = ruler.reigns[ruler.reigns.length - 1];

  const start = formatHistoricalDate(firstReign.start);
  const end = lastReign.end ? formatHistoricalDate(lastReign.end) : "данас";

  return `${start} – ${end}`;
};

interface DynastyRuler extends Ruler {
  timelineIndex: number;
}

const getDynastyRulers = (dynasty: Dynasty): DynastyRuler[] => {
  return dynasty.rulerIds
    .map((rulerId, index) => {
      const ruler = rulers.find((item) => item.id === rulerId);

      if (!ruler || ruler.dynastyId !== dynasty.id) {
        return null;
      }

      return {
        ...ruler,
        timelineIndex: index + 1,
      };
    })
    .filter((ruler): ruler is DynastyRuler => ruler !== null);
};

const DynastyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const dynasty = dynasties.find((item) => item.slug === slug);

  const { setAutomaticPlaylist } = useAudio();

  useEffect(() => {
    if (!dynasty) return;

    setAutomaticPlaylist(dynasty.musicTrackIds ?? []);
  }, [dynasty?.id, setAutomaticPlaylist]);

  if (!dynasty) {
    return <Navigate to="/dinastije" replace />;
  }

  const dynastyRulers = getDynastyRulers(dynasty);

  const dynastyEvents = events
    .filter((event) => dynasty.eventIds.includes(event.id))
    .sort((a, b) => a.order - b.order);

  return (
    <main className="dynasty-page">
      {/* HERO */}

      <section
        className="dynasty-page__hero"
        style={{
          backgroundImage: `linear-gradient(
            180deg,
            rgba(5, 6, 8, 0.3) 0%,
            rgba(5, 6, 8, 0.55) 45%,
            #0b0c0f 100%
          ), url("${dynasty.coverImage}")`,
        }}
      >
        <div className="dynasty-page__hero-content">
          <Link to="/dinastije" className="dynasty-page__back-link">
            <span aria-hidden="true">←</span>
            Све династије
          </Link>

          <span className="dynasty-page__eyebrow">
            Српска историја и владарске поридице
          </span>

          <h1 className="dynasty-page__title">{dynasty.name}</h1>

          <div className="dynasty-page__ornament">
            <span />
            <span className="dynasty-page__ornament-symbol">✦</span>
            <span />
          </div>

          <p className="dynasty-page__period">
            {formatPeriod(dynasty.period.start, dynasty.period.end)}
          </p>

          <p className="dynasty-page__hero-description">
            {dynasty.description}
          </p>

          <a href="#vladari" className="dynasty-page__scroll-link">
            Упознајте владаре
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="dynasty-page__introduction">
        <div className="dynasty-page__container">
          <div className="dynasty-page__section-heading">
            <span className="dynasty-page__eyebrow">Владарско наслеђе</span>

            <h2>
              Траг који је<span> остао у историји</span>
            </h2>
          </div>

          <div className="dynasty-page__introduction-content">
            <div className="dynasty-page__introduction-image">
              <img src={dynasty.image} alt={dynasty.name} />
            </div>

            <div className="dynasty-page__introduction-text">
              <p>{dynasty.description}</p>

              <div className="dynasty-page__stats">
                <div className="dynasty-page__stat">
                  <span className="dynasty-page__stat-value">
                    {dynastyRulers.length}
                  </span>

                  <span className="dynasty-page__stat-label">Владара</span>
                </div>

                <div className="dynasty-page__stat">
                  <span className="dynasty-page__stat-value">
                    {dynastyEvents.length}
                  </span>

                  <span className="dynasty-page__stat-label">
                    Истроијских догађаја
                  </span>
                </div>

                <div className="dynasty-page__stat">
                  <span className="dynasty-page__stat-value">
                    {dynasty.period.end
                      ? dynasty.period.end.year - dynasty.period.start.year
                      : "—"}
                  </span>

                  <span className="dynasty-page__stat-label">
                    Година трајања
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RULER TIMELINE */}

      <section className="dynasty-page__timeline-section" id="vladari">
        <div className="dynasty-page__container">
          <div className="dynasty-page__section-heading">
            <span className="dynasty-page__eyebrow">Наследници престола</span>

            <h2>
              Владари <span>династије</span>
            </h2>

            <p>
              Упознајте владаре који су обележили историју и преносили наслеђе
              ове владарске породице.
            </p>
          </div>

          {dynastyRulers.length > 0 ? (
            <div className="dynasty-timeline">
              <div className="dynasty-timeline__line" aria-hidden="true" />

              {dynastyRulers.map((ruler, index) => {
                const predecessor = rulers.find(
                  (item) => item.id === ruler.predecessorId,
                );

                const successor = rulers.find(
                  (item) => item.id === ruler.successorId,
                );

                return (
                  <article
                    className="dynasty-timeline__item"
                    key={ruler.id}
                    style={
                      {
                        "--timeline-index": index,
                      } as React.CSSProperties
                    }
                  >
                    <div className="dynasty-timeline__marker">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>

                    <div className="dynasty-timeline__card">
                      <Link
                        to={`/vladari/${ruler.slug}`}
                        className="dynasty-timeline__link"
                        aria-label={`Pogledaj biografiju: ${ruler.name}`}
                      >
                        <div className="dynasty-timeline__portrait">
                          <img
                            src={ruler.portrait}
                            alt={ruler.name}
                            loading="lazy"
                          />
                        </div>

                        <div className="dynasty-timeline__content">
                          <span className="dynasty-timeline__title">
                            {rulerTitles[ruler.title]}
                          </span>

                          <h3>{ruler.name}</h3>

                          <span className="dynasty-timeline__period">
                            {getRulerPeriod(ruler)}
                          </span>

                          <p>{ruler.description}</p>

                          <div className="dynasty-timeline__relations">
                            {predecessor && (
                              <span>
                                <span aria-hidden="true">↑</span>
                                Предходник: {predecessor.name}
                              </span>
                            )}

                            {successor && (
                              <span>
                                <span aria-hidden="true">↓</span>
                                Наследник: {successor.name}
                              </span>
                            )}
                          </div>

                          <span className="dynasty-timeline__more">
                            Истражите владара
                            <span aria-hidden="true">↗</span>
                          </span>
                        </div>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <p className="dynasty-page__empty">
              Подаци о владарима ове династије још нису доступни.
            </p>
          )}
        </div>
      </section>

      {/* HISTORICAL EVENTS */}

      {dynastyEvents.length > 0 && (
        <section className="dynasty-page__events">
          <div className="dynasty-page__container">
            <div className="dynasty-page__section-heading">
              <span className="dynasty-page__eyebrow">Кључни тренуци</span>

              <h2>
                Историјски <span>догађаји</span>
              </h2>
            </div>

            <div className="dynasty-page__events-grid">
              {dynastyEvents.map((event) => (
                <article className="dynasty-event" key={event.id}>
                  <span className="dynasty-event__date">
                    {formatHistoricalDate(event.date)}
                  </span>

                  <h3>{event.title}</h3>

                  <p>{event.description}</p>

                  <div className="dynasty-event__footer">
                    <span>{event.category}</span>
                    <span aria-hidden="true">✦</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER NAVIGATION */}

      <section className="dynasty-page__footer">
        <Link to="/dinastije" className="dynasty-page__back-button">
          <span aria-hidden="true">←</span>
          Повратак на све династије
        </Link>
      </section>
    </main>
  );
};

export default DynastyPage;
