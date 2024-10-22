import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { FiltersContainer } from "../../components/FiltersContainer";
import { Dropdown } from "../../components/Dropdown";
import { CountryCard } from "../../components/CountryCard";
import data from "../../assets/data.json";
import style from "./styles/index.module.css";
import { useEffect, useState } from "react";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [countryData, setCountryData] = useState(data);

  useEffect(() => {
    let updatedCountryData = data.filter((country) => {
      return country.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setCountryData(updatedCountryData);
    if (searchValue === "") {
      setCountryData(data);
    }
  }, [searchValue]);

  return (
    <>
      <Header />
      <FiltersContainer>
        <SearchBar setSearchValue={setSearchValue} />
        <Dropdown />
      </FiltersContainer>
      <div className={`${style["country-card-list"]}`}>
        {countryData.map((country) => {
          return (
            <CountryCard
              country={country.name}
              flagSource={country.flags.png}
              population={country.population}
              capital={country.capital || " - "}
              region={country.region}
            />
          );
        })}
      </div>
    </>
  );
};
