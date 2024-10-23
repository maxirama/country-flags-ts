import styles from "../CountryCard/styles/index.module.css";
import { Link } from "react-router-dom";

interface ICountryCardProps {
  flagSource: string;
  country: string;
  population: number;
  region: string;
  capital: string;
}

export const CountryCard: React.FC<ICountryCardProps> = ({
  country,
  population,
  region,
  capital,
  flagSource,
}: ICountryCardProps) => {
  return (
    <Link to={`/country/${country}`}>
      <div className={`${styles["country-card-container"]}`}>
        <img src={flagSource} />
        <h4>{country}</h4>
        <span>
          {" "}
          <b>Population:</b> {`${population.toLocaleString()}`}
        </span>
        <span>
          {" "}
          <b>Region:</b> {region}
        </span>
        <span>
          {" "}
          <b>Capital:</b> {capital}{" "}
        </span>
      </div>
    </Link>
  );
};
