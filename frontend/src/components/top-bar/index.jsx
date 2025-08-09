import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { Logo } from "../../images/images.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorModeContext } from "../../theme/index.js";
import { useTheme } from "@mui/material/styles";
import {
  StyledContainer,
  LeftButtons,
  Button,
  StyledScrollLink,
  ThemeButton,
  MobileThemeButton,
} from "./style.ts";
import styled from "styled-components";

const LanguageSelect = styled.select`
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: white;
  font-size: 14px;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M0 2l4 4 4-4z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 10px;
  
  @media (max-width: 992px) {
    font-size: 16px;
    padding: 8px 14px;
  }
`;

const Topbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [language, setLanguage] = useState("en");

  const toggleTheme = () => {
    colorMode.toggleColorMode();
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    // Trigger translation update here if using i18n
  };

  return (
    <StyledContainer theme={theme}>
      <ToastContainer />
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <StyledScrollLink to="home" smooth={true} duration={500}>
              <Image src={Logo} width="40" height="50" alt="Logo_YB" />
            </StyledScrollLink>
          </Navbar.Brand>

          <MobileThemeButton onClick={toggleTheme}>
            <FontAwesomeIcon
              icon={theme.palette.mode === "dark" ? faSun : faMoon}
            />
          </MobileThemeButton>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={StyledScrollLink} to="about" smooth duration={500}>
                About
              </Nav.Link>
              <Nav.Link as={StyledScrollLink} to="myskills" smooth duration={500}>
                My Skills
              </Nav.Link>
              <Nav.Link as={StyledScrollLink} to="work" smooth duration={500}>
                Work
              </Nav.Link>
              <Nav.Link as={StyledScrollLink} to="footer" smooth duration={500}>
                Contact
              </Nav.Link>
            </Nav>
            <LeftButtons style={{ alignItems: "center" }}>
              
              {/* Theme Button */}
              <ThemeButton onClick={toggleTheme}>
                <FontAwesomeIcon
                  icon={theme.palette.mode === "dark" ? faSun : faMoon}
                />
              </ThemeButton>

              {/* Language Selector */}
              <LanguageSelect
                value={language}
                onChange={(e) => handleLanguageChange(e.target.value)}
              >
                <option value="en">🇺🇸 English</option>
                <option value="ar">🇸🇦 العربية</option>
              </LanguageSelect>

              {/* Upwork Button */}
              <Button
                as="a"
                href="https://www.upwork.com/freelancers/~011b93e92e07313cf4?viewMode=1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                My Upwork
              </Button>
            </LeftButtons>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledContainer>
  );
};

export default Topbar;
