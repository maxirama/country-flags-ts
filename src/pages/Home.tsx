import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { FiltersContainer } from "../components/FiltersContainer";

export const Home = () => {
  return (
    <>
      <Header />
      <FiltersContainer>
        <SearchBar />
      </FiltersContainer>
    </>
  );
};
