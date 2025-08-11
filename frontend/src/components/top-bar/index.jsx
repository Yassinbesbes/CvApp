import React, { useContext } from "react";
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
import { useTranslation } from 'react-i18next';

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

const RTLTextWrapper = styled.span`
  direction: ${({ $isRTL }) => ($isRTL ? 'rtl' : 'ltr')};
  display: inline-block;
`;

const Topbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { t, i18n } = useTranslation();

  const toggleTheme = () => {
    colorMode.toggleColorMode();
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    // Remove document direction change to prevent layout flipping
    document.documentElement.lang = lang; // Only set language, not direction
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
                <RTLTextWrapper $isRTL={i18n.language === 'ar'}>
                  {t('about')}
                </RTLTextWrapper>
              </Nav.Link>
              <Nav.Link as={StyledScrollLink} to="myskills" smooth duration={500}>
                <RTLTextWrapper $isRTL={i18n.language === 'ar'}>
                  {t('skills')}
                </RTLTextWrapper>
              </Nav.Link>
              <Nav.Link as={StyledScrollLink} to="work" smooth duration={500}>
                <RTLTextWrapper $isRTL={i18n.language === 'ar'}>
                  {t('work')}
                </RTLTextWrapper>
              </Nav.Link>
              <Nav.Link as={StyledScrollLink} to="footer" smooth duration={500}>
                <RTLTextWrapper $isRTL={i18n.language === 'ar'}>
                  {t('contact')}
                </RTLTextWrapper>
              </Nav.Link>
            </Nav>
            <LeftButtons style={{ alignItems: "center" }}>
              <ThemeButton onClick={toggleTheme}>
                <FontAwesomeIcon
                  icon={theme.palette.mode === "dark" ? faSun : faMoon}
                />
              </ThemeButton>

              <LanguageSelect
                value={i18n.language}
                onChange={(e) => handleLanguageChange(e.target.value)}
              >
                <option value="en">🇺🇸 English</option>
                <option value="ar">🇸🇦 العربية</option>
              </LanguageSelect>

              <Button
                as="a"
                href="https://www.upwork.com/freelancers/~011b93e92e07313cf4?viewMode=1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <RTLTextWrapper $isRTL={i18n.language === 'ar'}>
                  {t('upwork')}
                </RTLTextWrapper>
              </Button>
            </LeftButtons>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledContainer>
  );
};

export default Topbar;