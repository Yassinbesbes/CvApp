import React, { useState, useRef } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { Logo } from "../../images/images.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  StyledContainer,
  LeftButtons,
  Button,
  StyledScrollLink,
  ThemeButton,
  MobileThemeButton,
} from "./style.ts";

const Topbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const hasShownToast = useRef(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    if (!hasShownToast.current) {
      toast.info("I'm still working on this feature", {
        position: "top-right",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: darkMode ? "dark" : "light",
      });
      hasShownToast.current = true;
    }
  };

  return (
    <StyledContainer>
      <ToastContainer />
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <StyledScrollLink to="home" smooth={true} duration={500}>
              <Image
                src={Logo}
                width="40"
                height="50"
                className="d-inline-block align-top"
                alt="Logo_YB"
              />
            </StyledScrollLink>
          </Navbar.Brand>

          <MobileThemeButton onClick={toggleTheme}>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
          </MobileThemeButton>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={StyledScrollLink}
                to="about"
                smooth={true}
                duration={500}
              >
                About
              </Nav.Link>
              <Nav.Link
                as={StyledScrollLink}
                to="myskills"
                smooth={true}
                duration={500}
              >
                My Skills
              </Nav.Link>
              <Nav.Link
                as={StyledScrollLink}
                to="work"
                smooth={true}
                duration={500}
              >
                Work
              </Nav.Link>
              <Nav.Link
                as={StyledScrollLink}
                to="footer"
                smooth={true}
                duration={500}
              >
                Contact
              </Nav.Link>
            </Nav>
            <LeftButtons>
              <ThemeButton onClick={toggleTheme}>
                <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
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
