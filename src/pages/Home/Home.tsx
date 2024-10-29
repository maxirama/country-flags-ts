import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { FiltersContainer } from "../../components/FiltersContainer";
import { Dropdown } from "../../components/Dropdown";
import { CountryCard } from "../../components/CountryCard";
import data from "../../assets/data.json";
import style from "./styles/index.module.css";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Footer } from "../../components/Footer";
import { NoResults } from "../../components/NoResults";
import { useThemeStore } from "../../store";

export const Home = () => {
  const theme = useThemeStore((state) => state.theme);

  const styles =
    theme === "light"
      ? {
          homeContainer: "home-container-light",
        }
      : { homeContainer: "home-container-dark" };

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
    console.log(theme);
  }, [theme]);

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
    <div className={`${style[styles.homeContainer]}`}>
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
        {visibleCountryData.length === 0 && <NoResults />}
      </div>
      <Footer />
    </div>
  );
};
