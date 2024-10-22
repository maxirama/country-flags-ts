import styles from "./styles/index.module.css";

export const SearchBar = () => {
  return (
    <div className={`${styles["search-bar-container"]}`}>
      <i className={`fa fa-search ${styles["search-icon"]}`} />
      <div>
        <input
          className={styles["search-input"]}
          placeholder="Search for a country..."
        />
      </div>
    </div>
  );
};
