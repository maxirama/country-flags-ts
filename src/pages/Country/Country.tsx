import { useParams } from "react-router-dom";

export const CountryPage = () => {
  const { country } = useParams();

  return <div>{country}</div>;
};
