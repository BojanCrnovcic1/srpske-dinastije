import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

const AboutPage = () => {
  const navigate = useNavigate();

  const projectValues = [
    {
      number: "01",
      title: "Историјска вјеродостојност",
      description:
        "Свака прича заслужује да буде представљена одговорно, уз поштовање историјских чињеница, извора и времена у којем су догађаји настали.",
    },
    {
      number: "02",
      title: "Очување насљеђа",
      description:
        "Династије, владари, грбови и симболи представљају неодвојив дио нашег културног и историјског идентитета који треба сачувати.",
    },
    {
      number: "03",
      title: "Знање доступно свима",
      description:
        "Савремена технологија пружа могућност да историју приближимо свима, без обзира на узраст, мјесто или претходно знање.",
    },
  ];

  return (
    <main className="about-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="about-hero">
        <div className="about-hero__background" aria-hidden="true" />
        <div className="about-hero__overlay" aria-hidden="true" />

        <div className="container about-hero__container">
          <div className="about-hero__content">
            <span className="about-hero__eyebrow">О пројекту</span>

            <h1 className="about-hero__title">
              Између кода
              <br />
              <span>и историје.</span>
            </h1>

            <p className="about-hero__description">
              Једна идеја настала из љубави према програмирању и дубоког
              поштовања према историји српског народа. Пројекат посвећен ономе
              што не смијемо заборавити.
            </p>

            <div className="about-hero__signature">
              <span className="about-hero__signature-line" />
              <span>Српске династије</span>
            </div>
          </div>

          <div className="about-hero__scroll" aria-hidden="true">
            <span className="about-hero__scroll-line" />
            <span>Упознај пројекат</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="about-intro section">
        <div className="container">
          <div className="about-intro__grid">
            <div className="about-intro__heading">
              <span className="about-eyebrow">Како је све почело</span>

              <h2 className="about-heading">
                Више од пројекта.
                <br />
                <span>Разлог да се памти.</span>
              </h2>
            </div>

            <div className="about-intro__text">
              <p className="about-intro__lead">
                Постоје ствари које стварамо из љубави, а постоје и оне које
                стварамо из осјећаја одговорности. Овај пројекат настао је на
                њиховом споју.
              </p>

              <p>
                Љубав према програмирању пружила ми је могућност да стварам,
                обликујем и повезујем идеје. Љубав према историји дала ми је
                разлог да једну од њих претворим у нешто више од обичног
                дигиталног пројекта.
              </p>

              <p>
                Тако су настале Српске династије – дигитални простор посвећен
                владарским породицама, њиховим коријенима, успонима, борбама и
                насљеђу које су оставиле иза себе.
              </p>

              <p>
                Идеја је једноставна: искористити могућности савремене
                технологије како бисмо прошлост учинили доступнијом генерацијама
                које долазе.
              </p>
            </div>
          </div>

          <div className="about-intro__quote">
            <span className="about-intro__quote-mark">“</span>
            <p>
              Програмирање ми је омогућило да изградим овај простор. Историја ми
              је дала његов смисао.
            </p>
            <span className="about-intro__quote-line" />
          </div>
        </div>
      </section>

      {/* =====================================================
          HERITAGE
      ===================================================== */}

      <section className="about-heritage">
        <div className="about-heritage__image" aria-hidden="true" />
        <div className="about-heritage__overlay" aria-hidden="true" />

        <div className="container about-heritage__container">
          <div className="about-heritage__content">
            <span className="about-eyebrow">Наше насљеђе</span>

            <h2 className="about-heading">
              Историја није само
              <br />
              оно што је било.
              <br />
              <span>Она је дио онога што јесмо.</span>
            </h2>

            <p>
              Историја једног народа представља много више од низа датума, имена
              и историјских догађаја. Она чува сјећање на људе који су стварали
              државе, бранили слободу, подизали задужбине и обликовали културни
              идентитет генерација.
            </p>

            <p>
              Српске династије оставиле су неизбрисив траг у историји нашег
              народа. Њихове приче свједоче о успонима и падовима, великим
              одлукама, подвизима, али и изазовима једног времена.
            </p>

            <p>
              Зато вјерујем да је важно да те приче не препустимо забораву,
              поједностављивању или погрешном тумачењу. Оне заслужују да буду
              истражене, документоване и представљене у свом историјском
              контексту.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          PURPOSE
      ===================================================== */}

      <section className="about-purpose section">
        <div className="container">
          <div className="about-purpose__header">
            <span className="about-eyebrow">Наша идеја и вриједности</span>

            <h2 className="about-heading">
              Зашто овај пројекат
              <br />
              <span>постоји?</span>
            </h2>

            <p>
              Не да бисмо мијењали прошлост, већ да бисмо је боље разумјели. Не
              да бисмо стварали митове, већ да бисмо сачували чињенице.
            </p>
          </div>

          <div className="about-values">
            {projectValues.map((value) => (
              <article className="about-value" key={value.number}>
                <span className="about-value__number">{value.number}</span>

                <span className="about-value__divider" />

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DIGITAL ARCHIVE
      ===================================================== */}

      <section className="about-archive">
        <div className="container about-archive__container">
          <div className="about-archive__content">
            <span className="about-eyebrow">Прошлост у савременом руху</span>

            <h2 className="about-heading">
              Више од дигиталне
              <br />
              <span>архиве.</span>
            </h2>

            <p>
              Циљ није само набројати династије и њихове владаре. Жеља је
              створити мјесто на којем ће сваки посјетилац моћи да истражује
              историју кроз приче, историјске личности, грбове, симболе,
              фотографије и друге садржаје.
            </p>

            <p>
              Од средњовјековних владарских породица, преко обнове српске
              државности, па све до новије историје – сваки период представља
              посебно поглавље једне велике приче.
            </p>

            <p>
              Јер историја постаје разумљивија када иза имена препознамо
              човјека, иза датума догађај, а иза симбола причу.
            </p>

            <Button
              variant="secondary"
              className="about-archive__button"
              onClick={() => navigate("/dinastije")}
            >
              <span>Истражи династије</span>
              <span aria-hidden="true">→</span>
            </Button>
          </div>

          <div className="about-archive__visual">
            <div className="about-archive__image" />
            <div className="about-archive__image-caption">
              <span>Историјско насљеђе</span>
              <span>Сачувано за будућност</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL MESSAGE
      ===================================================== */}

      <section className="about-final">
        <div className="about-final__background" aria-hidden="true" />
        <div className="about-final__overlay" aria-hidden="true" />

        <div className="container about-final__container">
          <span className="about-eyebrow">Насљеђе за будућност</span>

          <h2>
            Оно што не забиљежимо,
            <br />
            лако заборавимо.
          </h2>

          <p>
            А оно што заборавимо, тешко можемо пренијети генерацијама које
            долазе.
          </p>

          <span className="about-final__divider" />

          <span className="about-final__signature">Српске династије</span>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
