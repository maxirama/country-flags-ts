import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { FiltersContainer } from "../../components/FiltersContainer";
import { Dropdown } from "../../components/Dropdown";
import { CountryCard } from "../../components/CountryCard";
import data from "../../assets/data.json";
import style from "./styles/index.module.css";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

export const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [countryData, setCountryData] = useState(data);
  const [visibleCountryData, setVisibleCountryData] = useState(data);
  const [selectedContinent, setSelectedContinent] = useState("All Regions");
  const [debouncedValue] = useDebounce(searchValue, 500);

  useEffect(() => {
    let updatedCountryData = countryData.filter((country) => {
      return country.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    setVisibleCountryData(updatedCountryData);
  }, [debouncedValue]);

  useEffect(() => {
    if (selectedContinent === "All Regions") {
      setVisibleCountryData(data);
      setCountryData(data);
      setSearchValue("");
    } else {
      let updatedCountryData = data.filter((country) => {
        return country.region.includes(selectedContinent);
      });
      setCountryData(updatedCountryData);
      setVisibleCountryData(updatedCountryData);
      setSearchValue("");
    }
  }, [selectedContinent]);

  return (
    <div className={`${style["home-container"]}`}>
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
    </div>
  );
};
