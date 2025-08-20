import React, { useContext, useState, useRef, useEffect } from "react";
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
  LanguageDropdown,
  LanguageButton,
  FlagImage,
  DropdownMenu,
  DropdownItem,
  RTLTextWrapper,
  MobileLanguageDropdown,
  MobileLanguageButton,
} from "./style.ts";
import { useTranslation } from "react-i18next";

// Framer Motion for animation
import { motion, AnimatePresence } from "framer-motion";

// Flag images
import FR from "../../images/flag/FR.svg";
import TN from "../../images/flag/TN.svg";
import UK from "../../images/flag/UK.svg";

const Topbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { t, i18n } = useTranslation();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  const languages = [
    { code: "en", label: "En", flag: UK },
    { code: "fr", label: "Fr", flag: FR },
    { code: "ar", label: "Ar", flag: TN },
  ];

  const toggleTheme = () => colorMode.toggleColorMode();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    setDropdownOpen(false);
    setMobileDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target)
      ) {
        setMobileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLanguage =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const sections = [
    { to: "about", key: "about" },
    { to: "myskills", key: "skills" },
    { to: "work", key: "work" },
    { to: "footer", key: "contact" },
  ];

  return (
    <StyledContainer theme={theme}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        rtl={i18n.language === "ar"}
        theme={theme.palette.mode}
      />
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <StyledScrollLink to="home" smooth duration={500}>
              <Image src={Logo} width="40" height="50" alt="Logo_YB" />
            </StyledScrollLink>
          </Navbar.Brand>

          {/* Mobile Theme Toggle */}
          <MobileThemeButton onClick={toggleTheme} theme={theme}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme.palette.mode}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <FontAwesomeIcon
                  icon={theme.palette.mode === "dark" ? faSun : faMoon}
                  size="lg"
                />
              </motion.div>
            </AnimatePresence>
          </MobileThemeButton>

          {/* Mobile Language Selector */}
          <MobileLanguageDropdown ref={mobileDropdownRef}>
            <MobileLanguageButton
              theme={theme}
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            >
              <FlagImage src={currentLanguage.flag} alt="flag" />
            </MobileLanguageButton>
            <DropdownMenu theme={theme} open={mobileDropdownOpen}>
              {languages.map((lang) => (
                <DropdownItem
                  key={lang.code}
                  theme={theme}
                  onClick={() => handleLanguageChange(lang.code)}
                  $selected={currentLanguage.code === lang.code}
                >
                  <FlagImage src={lang.flag} alt="flag" />
                  {lang.label}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </MobileLanguageDropdown>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {sections.map((section) => (
                <Nav.Link
                  key={section.to}
                  as={StyledScrollLink}
                  to={section.to}
                  smooth
                  duration={500}
                  theme={theme}
                >
                  <RTLTextWrapper $isRTL={i18n.language === "ar"}>
                    {t(section.key)}
                  </RTLTextWrapper>
                </Nav.Link>
              ))}
            </Nav>

            <LeftButtons>
              {/* Desktop Theme Toggle */}
              <ThemeButton onClick={toggleTheme} theme={theme}>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme.palette.mode}
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{ fontSize: "22px" }}
                  >
                    {theme.palette.mode === "dark" ? "🌙" : " ☀️"}
                  </motion.div>
                </AnimatePresence>
              </ThemeButton>

              {/* Desktop Language Selector */}
              <LanguageDropdown ref={dropdownRef}>
                <LanguageButton
                  theme={theme}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <FlagImage src={currentLanguage.flag} alt="flag" />
                  {currentLanguage.label}
                </LanguageButton>
                <DropdownMenu theme={theme} open={dropdownOpen}>
                  {languages.map((lang) => (
                    <DropdownItem
                      key={lang.code}
                      theme={theme}
                      onClick={() => handleLanguageChange(lang.code)}
                      $selected={currentLanguage.code === lang.code}
                    >
                      <FlagImage src={lang.flag} alt="flag" />
                      {lang.label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </LanguageDropdown>

              <Button
                as="a"
                href="https://www.upwork.com/freelancers/~011b93e92e07313cf4?viewMode=1"
                target="_blank"
                rel="noopener noreferrer"
                theme={theme}
              >
                <RTLTextWrapper $isRTL={i18n.language === "ar"}>
                  {t("upwork")}
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
