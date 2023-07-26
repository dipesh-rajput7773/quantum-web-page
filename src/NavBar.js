import React, { useContext, useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





function NavBar() {

  const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY > 100) setSticky(true);
            else setSticky(false);
        };
    }, []);
  return (
    <>
      <Navbar  expand="lg" bg="light" data-bs-theme="" >
        <Container>
          <Navbar.Brand href="#home"><img src='./logo.png'></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Project">Project</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar  expand="lg" bg="light" data-bs-theme=""  className={sticky ? "visible sticky" : "sticky"}>
        <Container>
          <Navbar.Brand href="#home"><img src='./logo.png'></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Project">Project</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

    </>
  )
}

export default NavBar