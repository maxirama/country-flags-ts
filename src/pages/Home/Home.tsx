import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { FiltersContainer } from "../../components/FiltersContainer";
import { Dropdown } from "../../components/Dropdown";
import data from "../../assets/data.json";
import { CountryCard } from "../../components/CountryCard";
import style from "./styles/index.module.css";

export const Home = () => {
  return (
    <>
      <Header />
      <FiltersContainer>
        <SearchBar />
        <Dropdown />
      </FiltersContainer>
      <div className={`${style["country-card-list"]}`}>
        {data.map((country) => {
          return (
            <CountryCard
              country={country.name}
              flagSource={country.flags.png}
              population={country.population}
              capital={country.capital || "no tiene"}
              region={country.region}
            />
          );
        })}
      </div>
    </>
  );
};