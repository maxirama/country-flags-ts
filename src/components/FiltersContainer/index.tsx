import style from "./styles/index.module.css";

export const FiltersContainer = ({ children }: any) => {
  return <div className={style["filters-container"]}>{children}</div>;
};
