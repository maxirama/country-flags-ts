import styles from "./styles/index.module.css";

interface ISearchBarProps {
  setSearchValue: any;
}

export const SearchBar: React.FC<ISearchBarProps> = ({
  setSearchValue,
}) => {
  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className={`${styles["search-bar-container"]}`}>
      <i className={`fa fa-search ${styles["search-icon"]}`} />
      <div>
        <input
          onChange={handleChange}
          className={styles["search-input"]}
          placeholder="Search for a country..."
        />
      </div>
    </div>
  );
};
