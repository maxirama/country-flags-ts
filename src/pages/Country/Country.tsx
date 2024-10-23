import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { IconButton } from "../../components/IconButton";
import { CountryButton } from "../../components/CountryButton";
import { useNavigate } from "react-router-dom";
export const CountryPage = () => {
  const { country } = useParams();
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div>
      <Header />
      <IconButton
        description="Back"
        icon="fa-solid fa-arrow-left"
        handleClick={() => {
          handleRedirect();
        }}
      />
      {country}
    </div>
  );
};
