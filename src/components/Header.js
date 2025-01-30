import React from 'react';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" variant="light" className="mb-4">
      <Container>
        <Link to="/" className="navbar-brand fw-bold text-dark">
          Genetics Quiz
        </Link>
        <ThemeToggle />
      </Container>
    </Navbar>
  );
};

export default Header;