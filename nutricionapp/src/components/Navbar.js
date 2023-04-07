import React from "react";
//React-Bootstrap-components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

//Icons
import LockPersonIcon from '@mui/icons-material/LockPerson';
import HowToRegIcon from '@mui/icons-material/HowToReg';

//Images 
import logo from "../assets/logo.png";


const NavbarAll = () => {
    return (<>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <div className="d-flex">
            <img
              alt=""
              src={logo}
              width="50"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            <h3 style={{color:"#198754",alignItems:"center"}}>NutricionApp</h3>
          </div>  
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/AboutUs">Nosotros</Nav.Link>
          </Nav>
        <Button className="mx-2" variant="success"><LockPersonIcon/>Iniciar sesión</Button>
        <Button variant="outline-success"><HowToRegIcon/>Registrarse</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>);
}
 
export default NavbarAll;