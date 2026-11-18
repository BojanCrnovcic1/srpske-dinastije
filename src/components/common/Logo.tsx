import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const logoImg = "/assets/logo.png";

  return (
    <button
      type="button"
      className="logo"
      onClick={() => navigate("/")}
      aria-label="Srpske Dinastije — početna stranica"
    >
      <img src={logoImg} alt="" className="logo__image" />
    </button>
  );
};

export default Logo;
