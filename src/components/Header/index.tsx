import styles from "./styles/index.module.css";
import { IconButton } from "../IconButton";

export const Header = () => {
  return (
    <header className={styles["page-header"]}>
      {" "}
      <p>Where in the world?</p>
      <IconButton
        description={"Dark Mode"}
        icon={"fa-regular fa-moon"}
        handleClick={() => {
          console.log("prueba");
        }}
      />
    </header>
  );
};
