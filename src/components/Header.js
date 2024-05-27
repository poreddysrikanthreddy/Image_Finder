import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//  import { Link } from "react-router-dom";

const NavbarPanel = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand to="/">Image Finder</Navbar.Brand>

        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
          <Nav.Link to="/" >Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarPanel;
