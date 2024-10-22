import styles from "../CountryCard/styles/index.module.css";
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
    <div className={`${styles["country-card-container"]}`}>
      <img src={flagSource} />
      <h4>{country}</h4>
      <span> {`Population: ${population}`}</span>
      <span> Region: {region}</span>
      <span> Capital: {capital} </span>
    </div>
  );
};
