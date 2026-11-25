import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__background" />

        <div className="contact-hero__overlay" />

        <div className="contact-hero__content">
          <span className="contact-eyebrow">Контакт</span>

          <h1>
            Свака прича
            <br />
            почиње <span>разговором.</span>
          </h1>

          <p>
            Историја се чува заједничким трудом. Ако имате питање, историјски
            извор, приједлог или желите да допринесете очувању српске културне
            баштине, овај простор је намијењен управо томе.
          </p>

          <div className="contact-hero__divider">
            <span />
            <span className="contact-hero__ornament">✦</span>
            <span />
          </div>
        </div>

        <div className="contact-hero__bottom">
          <span>ИСТОРИЈА • КУЛТУРА • НАСЉЕЂЕ</span>
          <span>01 — КОНТАКТ</span>
        </div>
      </section>

      <section className="contact-intro">
        <div className="contact-intro__content">
          <span className="contact-eyebrow">Отворени за сарадњу</span>

          <h2>
            Знање вриједи више
            <br />
            када се <span>дијели.</span>
          </h2>

          <p>
            Пројекат Српске династије настао је из жеље да се историја српског
            народа представи на једном мјесту, кроз пажљиво обрађене податке,
            историјске личности, династије и догађаје.
          </p>

          <p>
            Свака сугестија, допуна или поуздан историјски извор може помоћи да
            овај дигитални простор постане квалитетнији и потпунији.
          </p>
        </div>

        <div className="contact-intro__decoration">
          <div className="contact-intro__decoration-frame">
            <div className="contact-intro__decoration-image" />
            <span className="contact-intro__decoration-caption">
              Verba volant, scripta manent.
            </span>
          </div>
        </div>
      </section>

      <section className="contact-topics">
        <div className="contact-topics__heading">
          <span className="contact-eyebrow">Могућности сарадње</span>

          <h2>
            О чему можемо
            <br />
            <span>разговарати?</span>
          </h2>
        </div>

        <div className="contact-topics__grid">
          <article className="contact-topic">
            <span className="contact-topic__number">01</span>
            <div>
              <h3>Историјски извори</h3>
              <p>
                Документи, књиге, архивска грађа и други релевантни извори који
                могу допринијети тачности историјских садржаја.
              </p>
            </div>
          </article>

          <article className="contact-topic">
            <span className="contact-topic__number">02</span>
            <div>
              <h3>Приједлози и допуне</h3>
              <p>
                Сугестије за нове теме, династије, владаре, историјске догађаје
                или унапређење постојећих садржаја.
              </p>
            </div>
          </article>

          <article className="contact-topic">
            <span className="contact-topic__number">03</span>
            <div>
              <h3>Сарадња</h3>
              <p>
                Идеје и иницијативе за заједничке пројекте усмјерене ка
                истраживању и очувању историјског насљеђа.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="contact-notice">
        <div className="contact-notice__ornament">✦</div>

        <span className="contact-eyebrow">Контакт канали</span>

        <h2>
          Ускоро ћемо бити
          <br />
          <span>доступни и за вас.</span>
        </h2>

        <p>
          Тренутно припремамо званичне канале за комуникацију. Чим буду
          доступни, овдје ћете моћи да нас контактирате директно и једноставно.
        </p>

        <div className="contact-notice__status">
          <span className="contact-notice__status-dot" />
          <span>Контакт информације су у припреми</span>
        </div>
      </section>

      <section className="contact-footer">
        <span className="contact-eyebrow">Српске династије</span>

        <h2>
          Чувајмо оно што
          <br />
          нас <span>повезује.</span>
        </h2>

        <Link to="/" className="contact-footer__link">
          <span>Истражи историју</span>
          <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
};

export default ContactPage;
