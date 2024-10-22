import style from "./styles/index.module.css";
export const NoResults = () => {
  return (
    <div className={style["no-results-container"]}>
      <p> There is no country that matches the search criteria.</p>
      <i
        className={`fa-solid fa-circle-exclamation ${style["error-icon"]}`}
      ></i>
    </div>
  );
};
