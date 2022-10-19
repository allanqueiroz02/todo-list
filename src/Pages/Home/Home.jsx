import { useState } from "react";

import Button from "@mui/material/Button";
import CustomHeader from "../../Components/CustomHeader/CustomHeader";
import CustomButton from "../../Components/CustomButton/CustomButton";

const Home = () => {
  const [currentVariant, setCurrentVariant] = useState("contained");

  return (
    <div>
      <CustomHeader />
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
      <CustomButton name="BestDayEver"/>
    </div>
  );
};

export default Home;
