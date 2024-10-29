import { useThemeStore } from "../../store";
import styles from "./styles/index.module.css";
import { useNavigate } from "react-router-dom";

interface ICountryButtonProps {
  country: string;
}

export const CountryButton: React.FC<ICountryButtonProps> = ({ country }) => {
  const theme = useThemeStore((state) => state.theme);
  const navigate = useNavigate();

  const style = theme === "light" ? {
    button: 'button-light'
   } : {
    button: 'button-dark'
   }
  const handleClick = () => {
    navigate(`/country/${country}`);
  };

  return (
    <button className={`${styles[style.button]}`} onClick={() => handleClick()}>
      {country}
    </button>
  );
};
