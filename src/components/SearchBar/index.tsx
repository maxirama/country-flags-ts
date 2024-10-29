import styles from "./styles/index.module.css";
import { useThemeStore } from "../../store";

interface ISearchBarProps {
  setSearchValue: any;
  searchValue: string;
}

export const SearchBar: React.FC<ISearchBarProps> = ({
  setSearchValue,
  searchValue,
}) => {
  const theme = useThemeStore((state) => state.theme);

  const style =
    theme === "light"
      ? {
          searchBar: "search-bar-container-light",
          searchInput: "search-input-light",
        }
      : {
          searchBar: "search-bar-container-dark",
          searchInput: "search-input-dark",
        };
  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={`${styles[style.searchBar]}`}>
      <i className={`fa fa-search ${styles["search-icon"]}`} />
      <div>
        <input
          value={searchValue}
          onChange={handleChange}
          className={styles[style.searchInput]}
          placeholder="Search for a country..."
        />
      </div>
    </div>
  );
};
