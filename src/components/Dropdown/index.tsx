const continents = ["Africa", "America", "Europe", "Asia", "Oceania"];
export const Dropdown = () => {
  return <select aria-placeholder="Select a continent...">
    {continents.map((continent)=> {return <option value={continent}>{continent} </option>})}
  </select>;
};
