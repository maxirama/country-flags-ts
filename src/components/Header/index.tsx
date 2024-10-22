import styles from "./styles/index.module.css";

export const Header = () => {
  return (
    <header className={styles["page-header"]}>
      {" "}
      <p>Where in the world?</p>
      <div className={styles["theme-container"]}>
        <i className="fa-regular fa-moon"></i>
        <p>Dark mode</p>
      </div>
    </header>
  );
};
