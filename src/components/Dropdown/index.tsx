const continents = [
  "All Regions",
  "Africa",
  "America",
  "Europe",
  "Asia",
  "Oceania",
];
import { useState } from "react";
import style from "./styles/index.module.css";
import { useThemeStore } from "../../store";

interface IDropdown {
  setSelectedContinent: any;
  selectedContinent: string;
}

export const Dropdown: React.FC<IDropdown> = ({
  setSelectedContinent,
  selectedContinent,
}) => {
  const theme = useThemeStore((state) => state.theme);

  const styles =
    theme === "light"
      ? {
          dropdownContainer: "dropdown-container-light",
          dropdownHeader: "dropdown-header-light",
          dropdownItem: "dropdown-item-light",
          dropdownMenu: "dropdown-menu-light",
        }
      : {
          dropdownContainer: "dropdown-container-dark",
          dropdownHeader: "dropdown-header-dark",
          dropdownItem: "dropdown-item-dark",
          dropdownMenu: "dropdown-menu-dark",
        };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (continent: string) => {
    setSelectedContinent(continent);
    setIsOpen(false);
  };

  return (
    <div
      className={style[styles.dropdownContainer]}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={style[styles.dropdownHeader]} onClick={toggleDropdown}>
        {selectedContinent}
        <span className={style["dropdown-arrow"]}>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </div>
      {isOpen && (
        <ul className={style[styles.dropdownMenu]}>
          {continents.map((continent) => (
            <li
              key={continent}
              className={style[styles.dropdownItem]}
              onClick={() => handleOptionClick(continent)}
            >
              {continent}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
