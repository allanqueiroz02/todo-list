import { Fragment } from "react";

import "./global.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Home from "./Pages/Home";

function App() {
  return (
    <Fragment>
      <AppBar position="relative">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h3">Cool To do LIST</Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <DarkModeIcon />
          </IconButton>
        </Box>  
      </AppBar>
      <Home />
    </Fragment>
  );
}

export default App;
