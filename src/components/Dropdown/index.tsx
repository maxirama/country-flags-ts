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

interface IDropdown {
  setSelectedContinent: any;
  selectedContinent: string;
}

export const Dropdown: React.FC<IDropdown> = ({
  setSelectedContinent,
  selectedContinent,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (continent: string) => {
    setSelectedContinent(continent);
    setIsOpen(false);
  };

  return (
    <div
      className={style["dropdown-container"]}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className={style["dropdown-header"]} onClick={toggleDropdown}>
        {selectedContinent}
        <span className={style["dropdown-arrow"]}>
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </div>
      {isOpen && (
        <ul className={style["dropdown-menu"]}>
          {continents.map((continent) => (
            <li
              key={continent}
              className={style["dropdown-item"]}
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
