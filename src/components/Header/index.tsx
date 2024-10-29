import styles from "./styles/index.module.css";
import { IconButton } from "../IconButton";
import { useThemeStore } from "../../store";

export const Header = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const changeTheme = (theme: string) => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const style =
    theme === "light"
      ? {
          header: "page-header-light",
          icon: "fa-regular fa-moon",
          description: "Dark Mode",
        }
      : {
          header: "page-header-dark",
          icon: "fa-regular fa-sun",
          description: "Light Mode",
        };

  return (
    <header className={styles[style.header]}>
      <p>Where in the world?</p>
      <IconButton
        description={style.description}
        icon={style.icon}
        handleClick={() => {
          changeTheme(theme);
        }}
      />
    </header>
  );
};
