interface IconButtonProps {
  description: string;
  icon: string;
  handleClick: any;
  border?: boolean;
}

import styles from "./styles/index.module.css";

export const IconButton: React.FC<IconButtonProps> = ({
  description,
  icon,
  handleClick,
  border,
}) => {
  const borderProps = border ? "borded-button" : "";

  return (
    <div
      className={`${styles["theme-container"]} ${styles[borderProps]}`}
      onClick={handleClick}
    >
      <i className={icon}></i>
      <p>{description}</p>
    </div>
  );
};
