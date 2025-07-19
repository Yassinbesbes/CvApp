import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import {Logo} from "../../images/images.js"

import {
  StyledContainer,
  LeftButtons,
  Button,
} from "./style.ts";

const Topbar = ({ logo }) => {
  return (
    <StyledContainer>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              src={Logo}
              width="40"
              height="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#myskills">My Skills</Nav.Link>
              <Nav.Link href="#work">Work</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
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
