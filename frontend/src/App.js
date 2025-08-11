// AppWrapper.js
import React from "react";
import './i18n';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import HomePage from "./scenes/home-page.jsx";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { useMode, ColorModeContext } from "./theme/index.js";
import { CssBaseline } from "@mui/material";
import { useTranslation } from 'react-i18next';

function AppWrapper() {
  const [theme, colorMode] = useMode();
  
  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          <CssBaseline />
          <HomePage />
        </StyledThemeProvider>
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default AppWrapper;