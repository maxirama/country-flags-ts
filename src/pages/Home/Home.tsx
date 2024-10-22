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
  const [visibleCountryData, setVisibleCountryData] = useState(data);
  const [selectedContinent, setSelectedContinent] = useState("All Regions");

  useEffect(() => {
    let updatedCountryData = visibleCountryData.filter((country) => {
      return country.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setVisibleCountryData(updatedCountryData);
  }, [searchValue]);

  useEffect(() => {
    if (selectedContinent === "All Regions") {
      setVisibleCountryData(data);
      setCountryData(data);
      setSearchValue("");
    } else {
      let updatedCountryData = countryData.filter((country) => {
        return country.region.includes(selectedContinent);
      });
      setCountryData(data)
      setVisibleCountryData(updatedCountryData);
      setSearchValue("");
    }
  }, [selectedContinent]);

  return (
    <>
      <Header />
      <FiltersContainer>
        <SearchBar setSearchValue={setSearchValue} searchValue={searchValue} />
        <Dropdown
          setSelectedContinent={setSelectedContinent}
          selectedContinent={selectedContinent}
        />
      </FiltersContainer>
      <div className={`${style["country-card-list"]}`}>
        {visibleCountryData.map((country) => {
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
