import styles from "./styles/index.module.css";
import { useNavigate } from "react-router-dom";

interface ICountryButtonProps {
  country: string;
}

export const CountryButton: React.FC<ICountryButtonProps> = ({ country }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/country/${country}`);
  };

  return (
    <button className={`${styles["button"]}`} onClick={() => handleClick()}>
      {country}
    </button>
  );
};
