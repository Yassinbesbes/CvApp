// src/components/topbar/Topbar.jsx
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { Logo } from "../../images/images.js";

import { StyledContainer, LeftButtons, Button } from "./style.ts";
import { Link as ScrollLink } from "react-scroll";

const Topbar = () => {
  return (
    <StyledContainer>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <ScrollLink to="home" smooth={true} duration={500}>
              <Image
                src={Logo}
                width="40"
                height="50"
                className="d-inline-block align-top"
                alt="Logo_YB"
              />
            </ScrollLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={ScrollLink} to="about" smooth={true} duration={500}>
                About
              </Nav.Link>
              <Nav.Link as={ScrollLink} to="myskills" smooth={true} duration={500}>
                My Skills
              </Nav.Link>
              <Nav.Link as={ScrollLink} to="work" smooth={true} duration={500}>
                Work
              </Nav.Link>
              <Nav.Link as={ScrollLink} to="contact" smooth={true} duration={500}>
                Contact
              </Nav.Link>
            </Nav>
            <LeftButtons>
              <Button>My Upwork</Button>
            </LeftButtons>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </StyledContainer>
  );
};

export default Topbar;
