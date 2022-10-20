import { useState } from "react";

import "./home.css";

import Button from "@mui/material/Button";
import CustomHeader from "../../Components/CustomHeader/CustomHeader";
import CustomButton from "../../Components/CustomButton/CustomButton";

const Home = () => {
  const [currentVariant, setCurrentVariant] = useState("contained");

  return (
    <div className="container">
      <CustomHeader tipoHeader="h1" texto="To Do List" />
      <Button
        variant={currentVariant}
        onClick={() =>
          setCurrentVariant((oldV) =>
            oldV === "contained" ? "outlined" : "contained"
          )
        }
      >
        MUI Button: Set Outlined
      </Button>
      <CustomButton name="BestDayEver" />
    </div>
  );
};

export default Home;
