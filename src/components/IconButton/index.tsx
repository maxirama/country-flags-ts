interface IconButtonProps {
  description: string;
  icon: string;
  handleClick: any;
  border?: boolean;
}

import { useThemeStore } from "../../store";
import styles from "./styles/index.module.css";

export const IconButton: React.FC<IconButtonProps> = ({
  description,
  icon,
  handleClick,
  border,
}) => {
  const borderProps = border ? "borded-button" : "";

  const theme = useThemeStore((state) => state.theme);

  const style =
    theme === "light"
      ? { buttonTheme: "button-light" }
      : { buttonTheme: "button-dark" };

  return (
    <div
      className={`${styles[style.buttonTheme]} ${styles[borderProps]}`}
      onClick={handleClick}
    >
      <i className={icon}></i>
      <p>{description}</p>
    </div>
  );
};
