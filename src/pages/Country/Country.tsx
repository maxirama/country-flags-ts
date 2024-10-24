import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { IconButton } from "../../components/IconButton";
import { CountryButton } from "../../components/CountryButton";
import { useNavigate } from "react-router-dom";
import data from "../../assets/data.json";
import styles from "./styles/index.module.css";
export const CountryPage = () => {
  const { country } = useParams();
  const navigate = useNavigate();
  const countryData = data.find(
    (_country) => _country.name.toLowerCase() === country?.toLowerCase()
  );

  const countryBorders = data.filter((_country) => {
    if (countryData?.borders?.includes(_country.alpha3Code)) {
      return _country.name;
    }
  });

  console.log(countryBorders);

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className={`${styles["country-page-container"]}`}>
      <Header />
      <div className={`${styles["page-header"]}`}>
        <IconButton
          description="Back"
          icon="fa-solid fa-arrow-left"
          handleClick={() => {
            handleRedirect();
          }}
          border={true}
        />
      </div>
      <div className={`${styles["country-info-container"]}`}>
        <div className={`${styles["country-img-container"]}`}>
          <img src={countryData?.flags.png}></img>
        </div>
        <h2>{country}</h2>
        <div className={`${styles["country-description-container"]}`}>
          <div className={`${styles["main-info-container"]}`}>
            <p>
              <b>Native Name:</b> {countryData?.nativeName}
            </p>
            <p>
              <b>Population:</b> {countryData?.population.toLocaleString()}
            </p>
            <p>
              <b>Region:</b> {countryData?.region}
            </p>
            <p>
              <b>Sub Region:</b> {countryData?.subregion}
            </p>
            <p>
              <b>Capital:</b>
              {countryData?.capital}
            </p>
          </div>
          <div className={`${styles["secondary-info-container"]}`}>
            <p>
              <b>Top Level Domain:</b> {countryData?.topLevelDomain}
            </p>
            <p>
              <b>Currencies: </b>{" "}
              {countryData?.currencies?.map((currency) => {
                return currency.name;
              })}
            </p>
            <p>
              <b>Languages:</b>
              {countryData?.languages.map((language) => {
                return language.name;
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
