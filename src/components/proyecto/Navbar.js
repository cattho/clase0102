import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';


// hay que cambiar el nombre del componente cuando uso boostrap, ojo al usar navbar
const Navbarx = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                {/* hacemos que el navbar funcione como un link */}
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/login">Link</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
    );
};

export default Navbarx;
