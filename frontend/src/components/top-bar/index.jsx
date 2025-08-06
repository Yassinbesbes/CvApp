import React, {useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { Logo } from "../../images/images.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer} from "react-toastify";
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

const Topbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  const toggleTheme = () => {
    colorMode.toggleColorMode();

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
            <FontAwesomeIcon icon={theme.palette.mode === "dark" ? faSun : faMoon} />
          </MobileThemeButton>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link theme={theme} as={StyledScrollLink} to="about" smooth={true} duration={500}>
                About
              </Nav.Link>
              <Nav.Link theme={theme} as={StyledScrollLink} to="myskills" smooth={true} duration={500}>
                My Skills
              </Nav.Link>
              <Nav.Link theme={theme} as={StyledScrollLink} to="work" smooth={true} duration={500}>
                Work
              </Nav.Link>
              <Nav.Link theme={theme} as={StyledScrollLink} to="footer" smooth={true} duration={500}>
                Contact
              </Nav.Link>
            </Nav>
            <LeftButtons>
              <ThemeButton onClick={toggleTheme}>
                <FontAwesomeIcon icon={theme.palette.mode === "dark" ? faSun : faMoon} />
              </ThemeButton>
              <Button>My Upwork</Button>
            </LeftButtons>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledContainer>
  );
};

export default Topbar;
