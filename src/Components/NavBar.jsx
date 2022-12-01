import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faShop, faUser } from "@fortawesome/free-solid-svg-icons"

import { Link } from 'react-router-dom';
import Cardsaidbar from './Cardsaidbar';
const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Ecommers</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="meauto">

              <Nav.Link as={Link} to="/login">
                <FontAwesomeIcon className='icon' icon={faUser} />
              </Nav.Link>
              <Nav.Link as={Link} to="/Push">
                <FontAwesomeIcon className='icon' icon={faShop} />
              </Nav.Link>

              <Nav.Link onClick={handleShow}>
                <FontAwesomeIcon className='icon' icon={faCartShopping} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Cardsaidbar show={show} handleClose={handleClose} />
    </>
  );
}

export default NavBar;