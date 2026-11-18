import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const HeritageSection = () => {
  const navigate = useNavigate();

  return (
    <section className="heritage-section" id="heritage">
      <div className="heritage-section__background" aria-hidden="true" />

      <div className="heritage-section__overlay" aria-hidden="true" />

      <div className="heritage-section__container">
        <div className="heritage-section__content">
          <span className="heritage-section__eyebrow">Наше насљеђе</span>

          <h2 className="heritage-section__title">
            Историја српског народа
            <br />
            исписана је крвљу,
            <br />
            вером и великим подвизима.
          </h2>

          <p className="heritage-section__description">
            Српске династије представљају темељ наше историје, државности и
            културног насљеђа кроз векове.
          </p>

          <Button
            variant="secondary"
            className="heritage-section__button"
            onClick={() => navigate("/about")}
          >
            <span>Откриј нашу историју</span>
            <span className="heritage-section__button-arrow" aria-hidden="true">
              →
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
