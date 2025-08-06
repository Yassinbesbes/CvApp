import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HomePage from "./scenes/home-page.jsx";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useMode, ColorModeContext } from "./theme/index.js";
import { CssBaseline } from "@mui/material";

function AppWrapper() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}> {/* ✅ important pour styled-components */}
          <CssBaseline />
          <HomePage />
        </StyledThemeProvider>
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AppWrapper;
