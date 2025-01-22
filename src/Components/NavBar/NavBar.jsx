import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './NavBar.css';  // Importing CSS file

function NavBar() {
  return (
    <>
      <Navbar expand="lg" variant="light" className="navbar-light ">
        <Container>
          {/* Use absolute path from public */}
          <Navbar.Brand as={Link} to="#home">
            <img src="/assets/img.png" alt="Logo" className="navbar-logo" />
          </Navbar.Brand>

          {/* Navbar Toggler for mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="#pages">Pages</Nav.Link>
              <Nav.Link as={Link} to="#services">Services</Nav.Link>
              <Nav.Link as={Link} to="#contactus">Contact Us</Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
