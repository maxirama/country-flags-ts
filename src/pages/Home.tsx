import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { FiltersContainer } from "../components/FiltersContainer";
import { Dropdown } from "../components/Dropdown";

export const Home = () => {
  return (
    <>
      <Header />
      <FiltersContainer>
        <SearchBar />
        <Dropdown />
      </FiltersContainer>
    </>
  );
};
