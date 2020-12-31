import React from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';

import { Navbar, Nav } from 'react-bootstrap';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div style={{ top: '0', zIndex: '1000', backgroundColor: 'rgb(42, 44, 59)' }}>
    <Navbar
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      bg="light"
      expand="lg"
      varriant="dark"
      style={{ top: '0', zIndex: '1000', position: 'fixed', width: '100%' }}>
      <LinkContainer to="/">
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link href="#home">Home</Nav.Link>
          </LinkContainer>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {children}
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
