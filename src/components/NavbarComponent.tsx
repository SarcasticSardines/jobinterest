import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../App.css'

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg">
      <Container>
        <Navbar.Brand href="#home">Job Interest</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/one'>1</Nav.Link>
            <Nav.Link as={Link} to='/two'>2</Nav.Link>
            <Nav.Link as={Link} to='/three'>3</Nav.Link>
            <Nav.Link as={Link} to='/four'>4</Nav.Link>
            <Nav.Link as={Link} to='/five'>5</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;