interface IconButtonProps {
  description: string;
  icon: string;
  handleClick: any;
}

import styles from "./styles/index.module.css";

export const IconButton: React.FC<IconButtonProps> = ({
  description,
  icon,
  handleClick,
}) => {
  return (
    <div className={styles["theme-container"]} onClick={handleClick}>
      <i className={icon}></i>
      <p>{description}</p>
    </div>
  );
};
